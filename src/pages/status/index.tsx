import { useState } from "react";
import styled from "styled-components";

const images = [
    "./public/space.webp",
    "./public/space2.webp",
    "./public/space3.webp",
    "./public/space4.webp",
    "./public/space5.webp",
]

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const StatusContainer = styled.main`
    height: 100vh;
    width: 100vw;
`;
const Header = styled.header`
    width: 100%;
    height: 23vh;
    background-image: url("${getRandomImage()}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const ImgContainer = styled.div`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    top: 22vh;
    transform: translateY(-50%);
    background-color: white;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;
const Body = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    margin-top: 7rem;
    padding: 0 1rem;
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        p {
            font-size: 1.2rem;
            font-weight: 600;
            &:first-child {
                color: #0070e2;
            }
        }
    }
`;
// tris status
// angry
// descau
// fear
// happy
// normal
// sad
// surprise

const Status = () => {

    const [status, setStatus] = useState("normal");


    return (
        <StatusContainer>
            <Header>
                <ImgContainer>
                    <img src={`./public/tris_status/${status}.svg`} alt="normal" />
                </ImgContainer> 
            </Header>

            <Body>
                <h2>Descubre cómo se siente Tris en diferentes momentos.</h2>
                <div>
                    <p>¿Como se siente Tris hoy?</p>
                    <p>Enojada</p>
                </div>

                <div>
                    <p>Recomendaciones</p>
                    <p>Darle un abrazo</p>
                </div>

                <div>
                    <p>¿Quieres enviar un mensaje de apoyo a Tris?</p>

                </div>
            </Body>
        </StatusContainer>
    )
}

export default Status;