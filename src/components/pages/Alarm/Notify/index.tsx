import * as S from './style';
import UserIcon from '@components/common/UserIcon';

export interface NotifyPropTypes {
    id : number;
    to : string;
    title : string;
    date : string;
    time : string;
}

const Notify = ({ id, to, title, date, time }: NotifyPropTypes) => {
 return(
    <S.Notify key={id} to={to} >
        <UserIcon backWidth='40px' iconWidth={28}/>
        <S.NotifyInfo>
            <S.Title>{title}</S.Title>
            <S.TimeInfo>
                {date}
                {' | '}
                {time}
            </S.TimeInfo>
        </S.NotifyInfo>
    </S.Notify>
 );
}

export default Notify; 