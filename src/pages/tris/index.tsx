/* import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";

const emotions = [
    "happy",
    "sad",
    "angry",
    "disgust",
    "surprise",
    "fear",
    "normal",
] */


const Tris = () => {

    /* const [value, setValue] = React.useState<string | null>(emotions[0]);
    const [inputValue, setInputValue] = React.useState(''); */

    return (
        <div>
            {/* <h1>Tris Dashboard</h1>
            <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="status_emotion"
                options={emotions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Emotion" />}
            />

            <TextField
                id="outlined-multiline-flexible"
                label="Recommendation for the emotion"
                multiline
                sx={{ width: 300 }}
                maxRows={4}
            />

            <Slider
                aria-label="Social battery"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
            />

            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Social interactions" />
            </FormGroup> */}

        </div>
    )

}

export default Tris;