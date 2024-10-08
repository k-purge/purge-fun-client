import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { createContext, useEffect, useState } from "react";
import { APP_GRID, ROUTES } from "consts";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { GatedPage, DeployerPage, Jetton, ExplorerPage } from "pages";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { FaqPage } from "pages/faq";
import { ProfilePage } from "pages/profile";
import { useJettonLogo } from "hooks/useJettonLogo";
import { useAuthToken } from "hooks/useAuthToken";
import { OnboardingPage } from "pages/onboarding";
import { QuestPage } from "pages/quest";
import useNotification from "hooks/useNotification";
import analytics from "services/analytics";
import axiosService from "services/axios";
import useUserStore from "store/user-store/useUserStore";
// import eruda from "eruda";

// eruda.init();

analytics.init();
const ExclueFooterRoutes = [ROUTES.gated, ROUTES.onboarding];

const AppWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundImage: "url(/bg.jpeg)", // Add this line
  backgroundSize: "cover", // Optional: Adjust how the background image is sized
  backgroundPosition: "center", // Optional: Center the background image
}));

const FooterBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  flex: "0 0 auto",
}));

const ScreensWrapper = styled(Box)({
  flex: "1 1 auto",
  overflowY: "auto",
  overflowX: "hidden",
  width: "100%",
  "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
  "scrollbar-width": "none" /* Firefox */,

  "*::-webkit-scrollbar": {
    display: "none",
  },
  "*::-webkit-scrollbar-track": {
    display: "none",
  },
  "*::-webkit-scrollbar-thumb": {
    display: "none",
  },
});

const FlexibleBox = styled(Box)(({ theme }) => ({
  maxWidth: APP_GRID,
  width: "calc(100% - 50px)",
  marginLeft: "auto",
  marginRight: "auto",

  [theme.breakpoints.down("sm")]: {
    width: "calc(100% - 30px)",
  },
}));

export const EnvContext = createContext({
  isSandbox: false,
  isTestnet: false,
});

const PageNotFound = () => {
  const { showNotification } = useNotification();

  useEffect(() => {
    showNotification("Page not found", "error");
  }, [showNotification]);

  return <Box />;
};

interface ContentWrapperProps {
  children?: any;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <FlexibleBox>
      {children}
      <Outlet />
    </FlexibleBox>
  );
};
const ProtectedRoute = () => {
  const { accessToken, refreshToken, setTokens, isInitialized } = useAuthToken();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  useEffect(() => {
    async function verifyToken() {
      if (isInitialized) {
        if (accessToken && refreshToken) {
          try {
            const { res } = await axiosService.verifyToken(refreshToken);
            setIsAuthenticated(res.status === "success");
          } catch (error) {
            console.error("Error verifying token:", error);
            setIsAuthenticated(false);
            setTokens();
          }
        }
      }
    }
    verifyToken();
  }, [accessToken, refreshToken, isInitialized, setTokens]);

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.gated} />;
};

declare global {
  interface Window {
    Telegram: any;
  }
}

const App = () => {
  const { resetJetton } = useJettonLogo();
  const { getTgUserId } = useUserStore();
  const location = useLocation();

  useEffect(() => {
    resetJetton();
    getTgUserId();
  }, [getTgUserId, location.pathname, resetJetton]);

  return (
    <AppWrapper>
      <EnvContext.Provider
        value={{
          isSandbox: window.location.search.includes("sandbox"),
          isTestnet: window.location.search.includes("testnet"),
        }}>
        <ScreensWrapper>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <Navigate to="/" />
                  <PageNotFound />
                </>
              }
            />
            <Route path={ROUTES.gated} element={<GatedPage />} />
            <Route path="/" element={<Header />}>
              <Route path={"/"} element={<ProtectedRoute />}>
                {/* don't want to apply content wrapper here */}
                <Route path={ROUTES.deployer} element={<DeployerPage />} />
                <Route path="/" element={<ContentWrapper />}>
                  <Route path={ROUTES.explorer} element={<ExplorerPage />} />
                  <Route path={ROUTES.jettonId} element={<Jetton />} />
                  <Route path={ROUTES.profile} element={<ProfilePage />} />
                  <Route path={ROUTES.faq} element={<FaqPage />} />
                  <Route path={ROUTES.onboarding} element={<OnboardingPage />} />
                  <Route path={ROUTES.quest} element={<QuestPage />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </ScreensWrapper>
        {!ExclueFooterRoutes.includes(location.pathname) && (
          <FooterBox>
            <Footer />
          </FooterBox>
        )}
      </EnvContext.Provider>
    </AppWrapper>
  );
};

export default App;
