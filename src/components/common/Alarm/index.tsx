import { AlarmStateType } from "./alarm.type";
import { BodyStrong, BodyLarge } from "@styles/text.style";
import Attention from "@assets/images/Attention.svg";
import Success from "@assets/images/Success.svg";
import Coution from "@assets/images/Coution.svg";
import Critical from "@assets/images/Critical.svg";
import * as S from "./style";

interface AlarmPropTypes {
  state: AlarmStateType;
  bodyText: string;
}

const stateFor = {
  Attention,
  Success,
  Coution,
  Critical,
};

const Alarm = ({ state, bodyText }: AlarmPropTypes) => (
  <S.Alarm state={state}>
    <S.Icon src={stateFor[state]} />
    <BodyStrong>{state}</BodyStrong>
    {bodyText && <BodyLarge>{bodyText}</BodyLarge>}
  </S.Alarm>
);

export default Alarm;
