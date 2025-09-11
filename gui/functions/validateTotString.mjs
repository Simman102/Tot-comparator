import {bodyFields} from "../constants/bodyFields.mjs";

export function validateTotString(potentialString) {
    const splitString = potentialString.split("|");

    return splitString.length === bodyFields.length;
}
