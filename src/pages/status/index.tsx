import { useEffect, useState } from "react";
import moment from 'moment';

/* import { useEffect, useState } from "react"; */
import styled from "styled-components"
import { createClient } from '@supabase/supabase-js';



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
const LastUpdate = styled.p`
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
    const [status, setStatus] = useState<string>("loaging...");

    async function fetChData() {
        try {
            let { data: status , error } = await supabase.from('status').select('*')
            if ( error ) {
                console.error("Error fetching data: ", error )
            } else {
                console.log("Fetched data: ", status);
                if (status && status.length > 0) {
                    setCreatedAt(status[0]?.created_at || "loading...");
                    setLastActivity(status[0]?.last_activity || "loading...");
                    setRecomendation(status[0]?.recomendation || "loading...");
                    setImg(status[0]?.status || "normal");
                    setStatus(status[0]?.status || "loading...");
                } else {
                    // Handle the case where status is an empty array
                    console.warn("Status array is empty");
                }
            }
        } catch (error) {
            console.error("Error fetching data: ", error );
        }
    }
    useEffect(() => {
        fetChData();
    }, []);

    return (
        <StatusContainer>
            <Header>
                <ImgContainer>
                    <img 
                        style={{backgroundColor: emotionalColors[img]}}
                        src={`./tris_status/${img}.svg`} 
                        alt="normal" 
                    />
                </ImgContainer> 
            </Header>

            <Body>
                <h2>Explore Tris's emotional journey at different moments.</h2>
                <LastUpdate>last updated: { moment(createdAt).startOf("hour").fromNow() }</LastUpdate>
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
                    <StatusSubtitle>{lastActivity}</StatusSubtitle>
                </StatusDiv>
            </Body>
        </StatusContainer>
    )
}

export default Status;