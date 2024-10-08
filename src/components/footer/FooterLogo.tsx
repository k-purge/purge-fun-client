import { useCallback } from "react";
import { Typography } from "@mui/material";
import { LogoWrapper, ImageWrapper } from "./styled";
import ExplorerIcon from "components/icons/Explorer.icon";
import ProfileIcon from "components/icons/Profile.icon";
import DeployerIcon from "components/icons/Deployer.icon";
import HowItWorksIcon from "components/icons/HowItWorks.icon ";
import QuestIcon from "components/icons/Quest.icon";

export const FooterLogo = ({
  selectedRoute,
  title,
  onClickIcon,
}: {
  selectedRoute: string;
  title: string;
  onClickIcon: any;
}) => {
  // const { network } = useNetwork();

  const renderIcon = useCallback(() => {
    switch (title) {
      case "Explorer":
        return <ExplorerIcon isfocus={Boolean(selectedRoute === title)} />;
      case "Profile":
        return <ProfileIcon isfocus={Boolean(selectedRoute === title)} />;
      case "Create cabal":
        return <DeployerIcon isfocus={Boolean(selectedRoute === title)} />;
      case "Quest":
        return <QuestIcon isfocus={Boolean(selectedRoute === title)} />;
      default:
        return <HowItWorksIcon isfocus={Boolean(selectedRoute === title)} />;
    }
  }, [selectedRoute, title]);

  return (
    <LogoWrapper onClick={onClickIcon}>
      <ImageWrapper>{renderIcon()}</ImageWrapper>
      <Typography variant="h4">{title}</Typography>
    </LogoWrapper>
  );
};
