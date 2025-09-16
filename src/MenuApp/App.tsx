import {Grid, Typography} from "@mui/material";
import {useState} from "react";
import AreaButtonPair from "./components/AreaButtonPair";

export default function App() {
    const [isLeftHidden, setLeftHidden] = useState(false);
    const [isRightHidden, setRightHidden] = useState(false);

    return <Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant={"h3"} align={"center"}>
                Tot-comparator
            </Typography>
        </Grid>
        <Grid size={12}>
            <Typography variant={"h6"} align={"center"}>
                Input valid Tot strings in both fields.
            </Typography>
        </Grid>
        <Grid size={6}>
            <AreaButtonPair isHidden={isLeftHidden} setHidden={setLeftHidden}/>
        </Grid>
        <Grid size={6}>
            <AreaButtonPair isHidden={isRightHidden} setHidden={setRightHidden}/>
        </Grid>
    </Grid>
}