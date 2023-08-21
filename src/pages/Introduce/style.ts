import styled from "styled-components";
import { color } from "@styles/theme.style";
import { BodyStrong } from "@styles/text.style";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  .pagination li:first-child{
    display: none;
  }
  .pagination li:last-child{
    display: none;
  }

  .pagination{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 100%;
    height: 48px;
  }

  ul.pagination li {
    width: 48px !important;
    height: 48px !important;

    display: flex;
    justify-content: center;
    align-items: center;

    line-height: 20px;
    gap: 10px;
    border-radius: 8px;
  }

  ul.pagination li > a{
    font-family: 'Pretendard';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    text-decoration: none;
    color: ${color.black}
  }

  .active {
    background-color: ${color.primaryBase};
  }

  .active > a{
    color: ${color.white} !important;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  //height: 530px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 100%;
  height: 48px;
`;

export const PaginationInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 48px;
  height: 48px;

  background: white;
`;

export const Number = styled(BodyStrong)`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 20px;
  gap: 10px;
  border-radius: 8px;

  background-color: ${(props) => props.color};
  color: ${(props) => (props.color ? "#FFFFFF" : "#2E3133")};
`;
