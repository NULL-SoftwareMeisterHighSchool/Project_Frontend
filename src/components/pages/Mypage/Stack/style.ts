import styled from "styled-components";
import { color } from "@styles/theme.style";
import { BodyLarge2 } from "@styles/text.style";

export const Container = styled.div`
    padding: 2px 16px;
    border-radius: 100px;
    background-color: ${color.grayLight2} ;
` ;

export const StackName = styled(BodyLarge2)`
    color: ${color.grayDark1};
    line-height: 24px;
` ;
