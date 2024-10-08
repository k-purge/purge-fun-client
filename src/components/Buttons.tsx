import styled from "@emotion/styled";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const primary = "#FFB800";
const BaseButton = styled(LoadingButton)(({ theme }) => ({
  height: "48px",
  minWidth: "auto",
  whiteSpace: "nowrap",
  marginRight: "8px",
  borderRadius: "0px",
  padding: "13px 20px",
  letterSpacing: "0.04em",
  fontFamily: "Bungee, sans-serif",
  boxShadow: "3px 3px 0px  #000000",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "19px",
  border: `2px solid ${primary}`,
  "&:last-child": {
    marginRight: 0,
  },
}));

export const ContainedButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: primary,
  color: "#000",
  "&:hover": {
    backgroundColor: primary,
  },
  ".MuiLoadingButton-loadingIndicator": {
    color: "#000",
  },
}));

export const OutlinedButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: "#000",
  color: primary,
  "&:hover": {
    backgroundColor: "#000",
  },
  ".MuiLoadingButton-loadingIndicator": {
    color: "#FFB800 ",
  },
}));
