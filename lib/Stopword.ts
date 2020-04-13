'use strict';

import { Stopword } from '../build/Release/addon';
import { readFileSync } from 'fs';
import * as path from 'path';
export function stopword(text: string[]): string[] {
  const idStopword = readFileSync(path.join(__dirname, 'db/id-stopword.txt'), 'utf8').split('\n');
  const enStopword = readFileSync(path.join(__dirname, 'db/en-stopword.txt'), 'utf8').split('\n');
  const words = Stopword(text, idStopword);
  return words;
}
