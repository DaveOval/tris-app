import { useEffect, useState } from "react";
import moment from 'moment';

/* import { useEffect, useState } from "react"; */
import styled from "styled-components"
import { createClient } from '@supabase/supabase-js';
import { Fab, Tooltip } from "@mui/material";



const supabaseUrl = 'https://socymnmsxufzaxelvogi.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvY3ltbm1zeHVmemF4ZWx2b2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzMjg0NTUsImV4cCI6MjAxOTkwNDQ1NX0.S6d-eoA7c09ZcNzgLFJbgMPplu44fmSp5OmKcBUbPok";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* type StatusItem = {
    created_at: string;
    status: string;
    id: number;
    message: string | null;
    recomendation: string | null;
    last_activity: string | null;
} */

type Colors = {
    [key: string]: string;
}


const images = [
    "./space.webp",
    "./space2.webp",
    "./space3.webp",
    "./space4.webp",
    "./space5.webp",
]

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const StatusContainer = styled.main`
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
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
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    margin-top: 7rem;
    padding-bottom: 2rem;
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
        text-align: center;
        text-wrap: balance;
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
const LastUpdate = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    text-align: right;
    color: #1d1d1f94;
    font-weight: 600;
    font-size: 1.0rem;
    border-bottom: 0.1px solid #1d1d1f52;
    padding-bottom: 0.5rem;
`;

const StatusDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
`;

const StatusTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 800 !important;
    /* color: #DBC3FE !important; */
    color: #080705 !important;
`;
const StatusSubtitle = styled.p`
    font-size: 1.0rem;
    font-weight: 600 !important;
    color: #1d1d1f94 !important;
`;

const StatusBattery = styled.img `
    width: 2rem;
    height: 2rem;
    margin-right: 0.2rem;
`;

const LasActivityImg = styled.div`
    margin-top: 1rem;
    width: 15rem;
    img {
        width: 100%;
        height: 100%;
    }
`;

const CircleStaus = styled.div`
    position: absolute;
    bottom: 20px;
    left: 26px;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #0070e2;
`;
const LastUpdateLetter = styled.p `
    font-size: 1.0rem;
    font-weight: 600;
    color: #1d1d1f94 !important;
`;
const BatteryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0 !important;
    span {
        font-size: 1.0rem;
        font-weight: 600;
        color: #1d1d1f94 !important;
    }
`;

const NasaContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 900px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000d9;
    
`
const NasaTitle = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1rem;
    font-size: 1.0rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;
    color: #ceced993 !important;
    width: 95%;
    text-align: left;
    justify-content: space-between;
    img {
        width: 4rem;
        height: 4rem;
    }
`;

const NasaDescription = styled.p`
    font-size: 1.0rem;
    font-weight: 600;
    color: #c5c5d793 !important;
    width: 95%;
    text-align: justify;
    word-wrap: balance;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    justify-self: flex-end;
    background-color: #000000d9;
    padding: 1rem;
    a {
        font-size: 1.6rem;
        margin-bottom: 1rem;
        font-weight: 600;
        color: #ceced993 !important;
        margin-bottom: 1rem;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
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



const emotionalColors: Colors = {
    happy: "#FFFF00", 
    sad: "#0000FF", 
    angry: "#FFC0CB", 
    disgust: "#008000", 
    surprise: "#FFA500", 
    fear: "#800080",
    normal: "#DBC3FE",
};

const Status = () => {

    /* async function fetChData() {
        let { data: status, error } = await supabase.from('status').select('*')
        console.log(status)
    } */

    
    const [ createdAt, setCreatedAt ] = useState<string>("loaging...");
    const [ lastActivity, setLastActivity ] = useState<string>("loaging...");
    const [ recomendation, setRecomendation ] = useState<string>("loaging...");
    const [ img, setImg ] = useState<string>("normal");
    const [ status, setStatus] = useState<string>("");
    const [ battery, setBattery] = useState<number>(100);
    const [ iteractions, setIteractions ] = useState(false)

    const [ nasaImg, setNasaImg ] = useState<string>("");
    const [ nasaImgTitle, setNasaImgTitle ] = useState<string>("");
    const [ nasaImgExplanation, setNasaImgExplanation ] = useState<string>("");

    async function fetChData() {
        try {
            let { data: status , error } = await supabase
                .from('status')
                .select('*')
                .order("created_at", { ascending: false })
                .limit(1);
            if ( error ) {
                console.error("Error fetching data: ", error )
            } else {
                if (status && status.length > 0) {
                    setCreatedAt(status[0]?.created_at || "loading...");
                    setLastActivity(status[0]?.last_activity || "loading...");
                    setRecomendation(status[0]?.recomendation || "loading...");
                    setImg(status[0]?.status || "normal");
                    setStatus(status[0]?.status || "loading...");
                    setBattery(status[0]?.battery || 100);
                    setIteractions(status[0]?.iteractions || false);
                    /* console.log(status) */
                } else {
                    console.warn("Status array is empty");
                }
            }
        } catch (error) {
            console.error("Error fetching data: ", error );
        }
    }
    const fetchNasaImg = async () => {
        try {
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=GxctSSYywImYmG4CM1qaa9cp9MuyL6rj93yvdSMq`
            );
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setNasaImg(data.url);
            setNasaImgTitle(data.title);
            setNasaImgExplanation(data.explanation);
            console.log(data.url)
        } catch (error) {
            console.error("Error fetching data: ", error );
        }
    }
    useEffect(() => {
        fetChData();
        fetchNasaImg();
    }, []);

    const NavigationToSetStatus = () => {
        window.location.href = "/#/tris-config";
    }

    return (
        <StatusContainer>
            <Header>
                <ImgContainer>
                    <img 
                        style={{backgroundColor: emotionalColors[img]}}
                        src={`./tris_status/${img}.svg`} 
                        alt="normal" 
                    />
                    <CircleStaus style={{ backgroundColor: iteractions ? "green" : "red" }} ></CircleStaus>
                </ImgContainer> 
            </Header>

            <Body>
                <h2>Explore Tris's emotional journey at different moments.</h2>
                <LastUpdate>
                    <LastUpdateLetter>Last updated: { moment(createdAt).startOf("hour").fromNow() } </LastUpdateLetter>

                    <BatteryContainer>
                        <Tooltip title={`Social Battery ${battery}%`}>
                                <StatusBattery src={`./battery/battery-${battery}.svg`} />
                        </Tooltip>
                        <span>{battery}%</span>
                    </BatteryContainer>
                    
                    
                </LastUpdate>
                <StatusDiv >
                    <StatusTitle>How is Tris feeling today?</StatusTitle>
                    <StatusSubtitle>{status}</StatusSubtitle>
                </StatusDiv>

                <StatusDiv >
                    <StatusTitle>Recomendations by Tris</StatusTitle>
                    <StatusSubtitle>{recomendation}</StatusSubtitle>
                </StatusDiv>

                <StatusDiv >
                    <StatusTitle>Last actity</StatusTitle>
                    {
                        lastActivity === "" ? (
                            <img src="./activities/space.gif" />
                        ) : (
                            <>
                                <StatusSubtitle>{lastActivity}</StatusSubtitle>
                                <LasActivityImg>
                                    <img src={`./activities/${lastActivity}.svg`} alt={lastActivity} />
                                </LasActivityImg>
                            </>
                        )
                    }
                    
                </StatusDiv>

            </Body>


            <NasaContainer style={{ backgroundImage: `url(${nasaImg})` }}>
                    <NasaTitle> 
                        <p>Nasa  Astronomy Picture of the Day</p>
                        <img src="./nasa.svg" /> 
                        
                    </NasaTitle>
                    <NasaDescription>
                        <a href={nasaImg} target="blank">{nasaImgTitle}</a>
                        <p>{ nasaImgExplanation }</p>
                    </NasaDescription>
            </NasaContainer>


            <Fab 
                color="primary"
                variant="extended" 
                style={{position: "fixed", top: "1rem", right: "1rem"}} 
                onClick={NavigationToSetStatus}
            >
                Set Status
            </Fab>
                
        </StatusContainer>
    )
}

export default Status;