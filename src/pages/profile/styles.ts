import { Box, styled, Typography } from "@mui/material";

const CardListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
}));

const StyledWrapper = styled(Box)(({ theme }) => ({
  flex: 5,
  background: "#1E1E1E",
  border: "2px solid #000000",
  boxShadow: "2px 2px 0px 0px #000000",
  padding: "16px",
  marginBottom: 18,
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: "#ffff",
  fontSize: 32,
  fontFamily: "Bungee, sans-serif",
  marginBottom: 12,
  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 3px 3px 1px #000",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: "#ffff",
  fontSize: 16,
  fontFamily: "Bungee, sans-serif",
  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 3px 3px 1px #000",
  marginBlock: 12,
}));

const StyledParagraph = styled(Typography)(({ theme }) => ({
  color: "#939393",
  fontSize: 14,
  marginBottom: 24,
}));

export { CardListContainer, StyledWrapper, StyledHeading, StyledTitle, StyledParagraph };
