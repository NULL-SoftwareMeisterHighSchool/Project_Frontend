import styled from "styled-components";

export const BackGround = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.24);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`
export const Container = styled.div`
    background-color: white;
    width: 42%;
    min-width: 450px;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    gap: 24px;
    flex-direction: column;
`