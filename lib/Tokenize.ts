"use strict"

import {WordTokenizer} from 'natural';

export default (text: string):string[] => {
    const tokenizer = new WordTokenizer();
    const textToLower = text.toLowerCase();
    return tokenizer.tokenize(textToLower);
}