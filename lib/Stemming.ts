'use strict';

// tslint:disable-next-line:no-var-requires
const Natural = require('natural');

export function Stemming(text: string): string {
  // let word = Natural.PorterStemmer.stem(text);
  const word = Natural.StemmerId.stem(text);
  if (word === text) {
    return Natural.LancasterStemmer.stem(text);
  }
  return word;
}
