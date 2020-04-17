/**
 *  this project is using for getting the bag of word
 *  created by : Nurcahya Ari
 *  License : MIT
 */

'use strict';
import { Stemming } from './Stemming';
import { stopword } from './Stopword';
import { Tokenize } from './Tokenize';

export function CountVectorized(
  text: string[],
): object[][] {
  let TextQuery: string[] = []; // for tokenizing text by indexes
  let TextToken: string[][] = []; // for tokenize by word

  // tokening text array to array of string
  TextQuery = text.map((data) => {
    return data;
  });

  TextToken = TextQuery.map((data) => {
    return Tokenize(data);
  });
  
  // tslint:disable-next-line:no-console
  // console.log(TextToken);
  // stop word
  let StopwordDocuments: string[][] = [];

  // stopword removal for text documents
  StopwordDocuments = TextToken.map((data) => {
    return stopword(data);
  });

  // Stemming word
  let StemmedDocuments: string[][] = [];

  StemmedDocuments = StopwordDocuments.map((stopwordByDocs) => {
    return stopwordByDocs.map((stopwordByWord) => {
      return Stemming(stopwordByWord);
    });
  });

  // make array of text as bag of word
  const documents: string[] = [];

  for (const stemDocsByIndex of StemmedDocuments) {
    for (const stemDocsByWords of stemDocsByIndex) {
      if (documents.length === 0) {
        documents.push(stemDocsByWords);
      } else {
        let isFoundinDocuments: boolean = false;
        for (const docs of documents) {
          if (stemDocsByWords === docs) {
            isFoundinDocuments = true;
          }
        }
        if (!isFoundinDocuments) {
          documents.push(stemDocsByWords);
        }
      }
    }
  }
  // tslint:disable-next-line:no-console
  // console.log("Stemmed" , StemmedDocuments)
  // get bag of word value from documents and query
  const CountVectorizedDocuments: object[][] = [];
  // const CountVectorizedQuery: number[] = [];

  // bof of documents
  for (const stemDocsByIndex of StemmedDocuments) {
    const TemporaryCountVectorizedDocumens: object[] = [];
    for (const docs of documents) {
      const document = {
        [docs] : 0
      };
      // let foundData: number = 0;
      for (const stemDocsByWords of stemDocsByIndex) {
        if (stemDocsByWords === docs) {
          // tslint:disable-next-line:no-unused-expression
          document[Object.keys(document)[0]] += 1;
        }
      }
      TemporaryCountVectorizedDocumens.push(document);
    }
    CountVectorizedDocuments.push(TemporaryCountVectorizedDocumens);
  }
  
  // tslint:disable-next-line:no-console
  // console.log(CountVectorizedDocuments)
  return CountVectorizedDocuments;
}
