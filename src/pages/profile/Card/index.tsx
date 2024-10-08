import { Box } from "@mui/material";
import {
  CardOwnerText,
  CardText,
  CardBody,
  CardHeader,
  CardContentContainer,
  CardContainer,
  CardContent,
  CardImage,
} from "./styles";
import { IJetton } from "store/jetton-list-store/";
import { useMemo } from "react";
import { DECIMAL_SCALER } from "consts";
import UserIcon from "components/icons/User.icon";
import { IJettonProfile } from "store/jetton-store";

export const Card = ({
  item,
  onClickCard,
  isOwner,
}: {
  item: IJettonProfile | undefined;
  onClickCard: (jetton: IJetton | undefined) => void;
  isOwner: Boolean;
}) => {
  const balance = useMemo(() => {
    if (item?.balance) {
      return parseInt(item.balance) / DECIMAL_SCALER;
    }
  }, [item]);

  return (
    <CardContainer onClick={() => onClickCard(item)}>
      <CardContentContainer>
        <CardImage>
          <img src={item?.imageUri} alt="Logo" />
        </CardImage>
        <CardContent>
          <CardHeader>{item?.name}</CardHeader>
          <Box display="flex" flexDirection={"row"} gap={"5px"}>
            <UserIcon color="#767676" />
            <CardBody>{item?.players?.length} Players in game</CardBody>
          </Box>
          {balance ? <CardText>Amount: {balance}</CardText> : null}
        </CardContent>
      </CardContentContainer>
      {isOwner ? <CardOwnerText>Owner</CardOwnerText> : null}
    </CardContainer>
  );
};
