"use strict"

const Natural = require("natural");

export default (text: string): string => {
    return Natural.StemmerId.stem(text);
}