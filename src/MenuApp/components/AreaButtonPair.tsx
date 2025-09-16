import React, {FormEvent, useState} from "react";
import {Button, Stack, TextareaAutosize} from "@mui/material";
import {BODY_FIELDS_LENGTH, bodyFields} from "./constants";

export default function AreaButtonPair({isHidden, setHidden}: AreaButtonPairProps) {
    const [currentBodyFields, setCurrentBodyFields] = useState([]);

    return <Stack spacing={2} direction={"column"}>
        {isHidden && <Button
            hidden={isHidden}
            onClick={() => setHidden(!isHidden)}
            variant={"outlined"}
        >RESTORE FIELD</Button>}
        {isHidden &&
            currentBodyFields.map((field, index) => {
                return <span>{bodyFields[index]}: {field}</span>
            })
        }
        {!isHidden && <TextareaAutosize
            onInput={(event: FormEvent<HTMLTextAreaElement>) => {
                const currentFields = event.currentTarget.value.split("|");

                if (currentFields.length === BODY_FIELDS_LENGTH) {
                    setHidden(!isHidden);
                    setCurrentBodyFields(currentFields);
                }
            }}
            minRows={3}
        ></TextareaAutosize>}
    </Stack>
}

interface AreaButtonPairProps {
    isHidden: boolean,
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
}