import React, {FormEvent, useState} from "react";
import {Button, Stack, TextareaAutosize, Typography} from "@mui/material";
import {BODY_FIELDS_LENGTH, bodyFields} from "./constants";

export default function AreaButtonPair({
                                           isHidden,
                                           setHidden,
                                           oppositeBodyFields,
                                           setOwnBodyFields
                                       }: AreaButtonPairProps) {
    const [currentBodyFields, setCurrentBodyFields] = useState([]);

    return <Stack spacing={2} direction={"column"}>
        {isHidden && <Button
            hidden={isHidden}
            onClick={() => setHidden(!isHidden)}
            variant={"outlined"}
        >RESTORE FIELD</Button>}
        {isHidden &&
            currentBodyFields.map((value, index) => {
                const color = (oppositeBodyFields[index] === value || oppositeBodyFields.length === 0) ?
                    null : "error";
                return <Typography
                    color={color}>
                    {bodyFields[index]}: {value}
                </Typography>
            })
        }
        {!isHidden && <TextareaAutosize
            onInput={(event: FormEvent<HTMLTextAreaElement>) => {
                const currentFields = event.currentTarget.value.split("|");

                if (currentFields.length === BODY_FIELDS_LENGTH) {
                    setHidden(!isHidden);
                    setCurrentBodyFields(currentFields);
                    setOwnBodyFields(currentFields);
                }
            }}
            minRows={3}
        ></TextareaAutosize>}
    </Stack>
}

interface AreaButtonPairProps {
    isHidden: boolean,
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
    oppositeBodyFields: string[],
    setOwnBodyFields: React.Dispatch<React.SetStateAction<string[]>>,
}