import { AppButton } from "components/appButton";
import { onConnect } from "utils";

function ConnectAction() {
  return <AppButton onClick={onConnect}>Connect</AppButton>;
}

export default ConnectAction;
