import styled from "styled-components"


const HomeContainer = styled.main`
    height: 100vh;
    width: 100vw;
    max-height: 700px;
    max-width: 500px;
    border-radius: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #242323;
    text-align: center;
    font-size: 20px;
    line-height: 1.14;
    font-weight: 600;
    letter-spacing: .007em;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url("../../../public/sunflowers.webp");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(1px);
        z-index: -1;
        border-radius: 80px;
    }
`;

const TrisImg = styled.img`
    height: 12rem;
    background-color: white;
    border-radius: 50%;
`;

const Btn = styled.button`
    font-size: 17px;
    padding: 12px 22px;
    font-weight: 400;
    background-color: #0070e2;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    &:hover {
        background-color: #005bb5;
        transition: all ease-in-out;
    }
`;


export const Home = () => {
    return (
        <HomeContainer>
            <h1>Bienvenido a TrisMood</h1>
            <TrisImg src="../../../src/assets/tris_status/normal.svg" />
            <Btn>Continuar</Btn>
        </HomeContainer>
    )
}