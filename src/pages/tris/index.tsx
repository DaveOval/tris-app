import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, Switch } from "@mui/material";
import styled from "styled-components";
import { createClient } from "@supabase/supabase-js";
import { Toaster, toast } from 'sonner';

const supabaseUrl = 'https://socymnmsxufzaxelvogi.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvY3ltbm1zeHVmemF4ZWx2b2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzMjg0NTUsImV4cCI6MjAxOTkwNDQ1NX0.S6d-eoA7c09ZcNzgLFJbgMPplu44fmSp5OmKcBUbPok";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const FormContainer = styled.main `
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainContainer = styled.div`
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    border-bottom: 0.1px solid #1d1d1f52;
    width: 95%;
    text-align: center;
    margin-bottom: 1.5rem;
    padding-bottom: 0.8rem;
`;
const FormControlStyled = styled(FormControl)`
    width: 95%;
`;

const TexlFieldStyled = styled(TextField)`
    width: 95%;
`;
const SocialBateryContainer = styled.div`
    width: 94%;
`;
const CustomFormGroup = styled(FormGroup)`
    width: 95%;
`;


const Tris = () => {
 
    const [ emotion, setEmotion ] = useState("");
    const [ recomendation, setRecomendation ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ battery, setBattery ] = useState(50);
    const [ activity, setActivity ] = useState("");
    const [ iteractions, setIteractions ] = useState(false);

    const handleEmotion = ( e: SelectChangeEvent ) => {
        setEmotion(e.target.value as string)
    }
    const handleRecomendation = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setRecomendation(e.target.value as string)
    }
    const handleMessage = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setMessage( e.target.value as string )
    }
    const handleBattery = ( e: any ) => {
        setBattery( e.target.value as number )
    }
    const handleActivity = ( e: SelectChangeEvent ) => {
        setActivity( e.target.value as string )
    }
    const handleInteractions = (e: any) => {
        setIteractions( e.target.checked  );
    }

    const sendStatus  = async ()  => {
        console.log("Enviando informacion")
        if ( emotion === "" ) {
            toast.error("Please select an emotion");
            return;
        }
        if ( recomendation === "" ) {
            toast.error("Please add a recomendation");
            return;
        }
        if ( message === "" ) {
            toast.error("Please add a message");
            return;
        }
        if ( activity === "" ) {
            toast.error("Please select an activity");
            return;
        }
        
        try {
            const { data , error } = await supabase 
                .from("status")
                .insert([
                    { status: emotion , message: message , recomendation: recomendation , last_activity: activity, battery: battery, iteractions: iteractions }
                ])
                .select()
            if ( error ) {
                throw new Error(`Error inserting status: ${error.message}`);
            }
            console.log("Status inserted successfully:", data);
            
            toast.success("Status inserted successfully");
        } catch ( error ) {
            console.error("Error ", error)
        }
    }

    return (
        <FormContainer>
            <MainContainer>
                <Title>Tris Dashboard</Title>

                <FormControlStyled>
                    <InputLabel id="emotions-label">Emotion</InputLabel>
                    <Select
                        labelId="emotions-label"
                        id="emotions"
                        value={emotion}
                        label="Emotion"
                        onChange={handleEmotion}
                    >
                        <MenuItem value="happy">Happy</MenuItem>
                        <MenuItem value="sad">Sad</MenuItem>
                        <MenuItem value="angry">Angry</MenuItem>
                        <MenuItem value="disgust">Disgust</MenuItem>
                        <MenuItem value="surprise">Surprise</MenuItem>
                        <MenuItem value="fear">Fear</MenuItem>
                        <MenuItem value="normal">Normal</MenuItem>
                        
                    </Select>
                </FormControlStyled>

                <TexlFieldStyled
                    id="recomendation"
                    label={`Recommendation for emotion: ${emotion}`}
                    multiline
                    maxRows={5}
                    value={recomendation}
                    onChange={handleRecomendation}
                />

                <TexlFieldStyled
                    id="outlined-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={5}
                    value={ message }
                    onChange={handleMessage}
                />
                <SocialBateryContainer>
                    <p>Social Battery</p>
                    <Slider
                        aria-label="Social battery"
                        value={battery}
                        valueLabelDisplay="auto"
                        step={5}
                        marks
                        min={0}
                        max={100}
                        onChange={handleBattery}
                    />
                </SocialBateryContainer>
                <FormControlStyled>
                    <InputLabel id="activity-label">Activity</InputLabel>
                    <Select
                        labelId="activity-label"
                        id="activity"
                        value={activity}
                        label="Activity"
                        onChange={handleActivity}
                    >
                        <MenuItem value="rest">Rest</MenuItem>
                        <MenuItem value="party">Party</MenuItem>
                        <MenuItem value="nothing">Nothing</MenuItem>
                        <MenuItem value="eat">Eat</MenuItem>
                        <MenuItem value="read-a-book">Read a book</MenuItem>
                        <MenuItem value="listening-to-music">Listening to music</MenuItem>
                        <MenuItem value="studying">Studying</MenuItem>
                        <MenuItem value="watch-a-movie">Watch a movie</MenuItem>
                        <MenuItem value="exercise">Excercise</MenuItem>
                        <MenuItem value="meditate">Meditate</MenuItem>
                        <MenuItem value="cook-a-new-recipe">cook-a-new-recipe</MenuItem>
                        <MenuItem value="go-for-a-walk">Go for a walk</MenuItem>
                        <MenuItem value="learn-something-new">Learn something new</MenuItem>
                        <MenuItem value="play-a-game">Play a game</MenuItem>
                        <MenuItem value="attend-an-event">Attend an event</MenuItem>
                        <MenuItem value="volunteer">Volunteer</MenuItem>
                        <MenuItem value="write-in-a-journal">Write in a journal</MenuItem>
                        <MenuItem value="take-photos">Take photos</MenuItem>
                        <MenuItem value="visit-a-museum">Visit a museum</MenuItem>
                        <MenuItem value="meet-friends">Meet friends</MenuItem>
                        <MenuItem value="practice-a-hobby">Practice a hobby</MenuItem>
                        <MenuItem value="plan-a-trip">Plan a trip</MenuItem>
                        <MenuItem value="attend-a-class">Attend a class</MenuItem>
                        <MenuItem value="gardening">Gardening</MenuItem>
                        <MenuItem value="watch-the-sunset">Watch the sunset</MenuItem>
                        <MenuItem value="try-a-new-restaurant">Try a new restaurant</MenuItem>
                        <MenuItem value="have-a-picnic">Have a picnic</MenuItem>

                    </Select>
                </FormControlStyled>

                <CustomFormGroup>
                    <FormControlLabel 
                    control={<Switch 
                                checked={ iteractions } 
                                onChange={handleInteractions}
                                />} 
                    label="Social interactions" />
                </CustomFormGroup>

                <Button 
                    variant="contained"
                    onClick={sendStatus}
                >
                    Send my status
                </Button>
                

            </MainContainer>
            <Toaster />
        </FormContainer>
    )

}

export default Tris;