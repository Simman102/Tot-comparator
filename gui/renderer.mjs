import {validateTotString} from './functions/validateTotString.mjs';
import {bodyFields} from "./constants/bodyFields.mjs";

const textAreas = document.getElementsByClassName("string-input");
for (let textArea of textAreas) {
    textArea.addEventListener("input", function () {
        const potentialString = textArea.value;

        if (validateTotString(potentialString)) {
            textArea.setAttribute("hidden", "hidden");

            potentialString.split("|").map((value, index) => {
                const valueAndLabel = bodyFields[index] + ": " + (value === "" ? "[empty]" : value);
                const pElement = document.createElement("p");
                pElement.textContent = valueAndLabel;
                textArea.parentNode.appendChild(pElement);
            });

            const eventHidden = new CustomEvent("textarea-hidden", {
                bubbles: true,
                composed: true
            });

            textArea.dispatchEvent(eventHidden);
        }
    })
}

const containerWrapper = document.getElementById("container-wrapper");
containerWrapper.addEventListener("textarea-hidden", function() {
    const [ leftChild, rightChild ] = this.children;
    if(!Array.from(this.getElementsByClassName("string-input")).every((elem) => elem.hidden)){
        return;
    }
    const leftPs = leftChild.getElementsByTagName("p");
    const rightPs = rightChild.getElementsByTagName("p");
    for (let i = 0; i < bodyFields.length; i++) {
        if(leftPs[i].innerText !== rightPs[i].innerText) {
            leftPs[i].style.backgroundColor = "red";
            rightPs[i].style.backgroundColor = "red";
        }
    }
});
