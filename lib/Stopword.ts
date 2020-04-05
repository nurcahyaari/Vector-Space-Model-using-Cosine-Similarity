"use strict"

import {Stopword} from '../build/Release/addon';
import {readFileSync} from 'fs';
import * as path from 'path';
function stopword(text:string[]):string[]{
    let stopwordList = readFileSync(path.join(__dirname, 'db/stopword.txt'), "utf8").split("\n");
    const words = Stopword(text, stopwordList);
    return words;
}

export default stopword;