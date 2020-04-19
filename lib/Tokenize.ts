'use strict';

import { WordTokenizer } from 'natural';

function urlRemoval(text: string) : string {
  const pattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g;

  return text.replace(pattern, "");
}

function characterRemoval(text: string) : string {
  const pattern = /[^a-zA-Z0-9 ]/g;

  return text.replace(pattern, "");  
}

export function Tokenize(text: string): string[] {
  const tokenizer = new WordTokenizer();
  const textToLower = text.toLowerCase();
  return tokenizer.tokenize(characterRemoval(urlRemoval(textToLower)));
};