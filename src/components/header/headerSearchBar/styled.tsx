import { styled, Box } from "@mui/material";

const SearchBarWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  padding: "8px, 16px, 8px, 16px",
  paddingRight: 10,
  width: "100%",
  minHeight: 50,
  height: "100%",
  transition: "0.1s all",
  background: "#F7F9FB",
  border: "2px solid #000000",
  boxShadow: "2px 2px 0px 0px #000000",
  [theme.breakpoints.down("md")]: {
    height: 40,
  },
}));

const SearchBarInput = styled("input")(({ theme }) => ({
  flex: 1,
  marginLeft: 10,
  width: "100%",
  fontSize: 16,
  fontWeight: 500,
  outline: "unset",
  fontFamily: "Cabin Condensed",
  color: "#000",
  border: "none",
  background: "#F7F9FB",
  caretColor: "#728A96",
  letterSpacing: "0.08em",
  "&::placeholder": {
    color: "#728A96",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));

const SearchResultsWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 10px)",
  left: 0,

  padding: `${theme.spacing(1)}, ${theme.spacing(2)}`,
  zIndex: 99,

  background: "rgba(232,233,235)",
  border: "0.5px solid rgba(114, 138, 150, 0.16)",
  borderRadius: 16,
  width: "100%",
  maxHeight: 450,
  overflowY: "unset",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const CenteringWrapper = styled(Box)(() => ({
  alignItems: "center",
}));

const SearchResultsItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  fontSize: 20,
  color: "#000",
  fontWeight: 500,
  height: 30,
  padding: "20px 24px 20px 30px",
  transitionDuration: ".15s",
  "&:hover": {
    cursor: "pointer",
    background: "rgb(225,227,230)",
  },
}));

const IndentlessIcon = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: 14,
  padding: 0,
}));

export {
  SearchBarWrapper,
  SearchBarInput,
  IndentlessIcon,
  SearchResultsWrapper,
  SearchResultsItem,
  CenteringWrapper,
};
