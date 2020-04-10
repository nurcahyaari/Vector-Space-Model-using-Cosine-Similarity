"use strict"

const Natural = require("natural");

export default (text: string): string => {
    // let word = Natural.PorterStemmer.stem(text);
    const word = Natural.StemmerId.stem(text);
    if(word == text){
        return Natural.LancasterStemmer.stem(text);
    }
    return word;
}