'use strict';

// tslint:disable-next-line:no-var-requires
const Natural = require('natural');
import IndonesiaiBaseword from './db/id_baseword.json';

export function Stemming(text: string): string {
  // let word = Natural.PorterStemmer.stem(text);
  const word = Natural.StemmerId.stem(text);

  if (word === text && !IndonesiaiBaseword.includes(word)) {
    return Natural.PorterStemmer.stem(text)
  } else 
  return word;
}