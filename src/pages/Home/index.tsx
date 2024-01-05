import { Link } from "react-router-dom";
import styled from "styled-components"


const HomeContainer = styled.main`
    height: 100vh;
    width: 100vw;
    max-height: 700px;
    max-width: 500px;
    border-radius: 60px;
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
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    background-image: url("./sunflowers.webp");
`;

const TrisImg = styled.img`
    height: 13rem;
    background-color: white;
    border-radius: 50%;
`;

const Btn = styled(Link)`
    text-decoration: none;
    font-size: 23px;
    padding: 15px 25px;
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
            <h1>Welcome to TrisMood</h1>
            <TrisImg src="./tris_status/normal.svg" />
            <Btn to="/status" >Continue</Btn>
        </HomeContainer>
    )
}