import * as S from "./style";

interface RecordPropsTypes {
  title: string;
  score: number;
}

const Record = ({ title, score }: RecordPropsTypes) => {
  return (
    <S.Record>
      <S.RecordTitle>{title}</S.RecordTitle>
      <S.RecordScore>{score}</S.RecordScore>
    </S.Record>
  );
};

export default Record;
