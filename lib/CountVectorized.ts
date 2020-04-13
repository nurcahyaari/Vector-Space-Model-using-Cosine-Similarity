/**
 *  this project is using for getting the bag of word
 *  created by : Nurcahya Ari
 *  License : MIT
 */

'use strict';
import { Stemming } from './Stemming';
import { stopword } from './Stopword';
import {Tokenize} from './Tokenize';

export function CountVectorized(
  text: string[],
  query: string,
): { CountVectorizedQuery: number[]; CountVectorizedDocuments: number[][] } {
  let TextQuery: string[] = []; // for tokenizing text by indexes
  let TextToken: string[][] = []; // for tokenize by word

  // tokening query text to array of string
  const TokenizedQuery: string[] = Tokenize(query); // query text was tokenizing

  // tokening text array to array of string
  TextQuery = text.map((data) => {
    return data;
  });

  TextToken = TextQuery.map((data) => {
    return Tokenize(data);
  });

  // stop word
  let StopwordDocuments: string[][] = [];
  let StopwordQuery: string[] = [];

  // stopword removal for query document
  StopwordQuery = stopword(TokenizedQuery);

  // stopword removal for text documents
  StopwordDocuments = TextToken.map((data) => {
    return stopword(data);
  });

  // Stemming word
  let StemmedDocuments: string[][] = [];
  let StemmedQuery: string[] = [];

  StemmedQuery = StopwordQuery.map((data) => {
    return Stemming(data);
  });

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

  // get bag of word value from documents and query
  const CountVectorizedDocuments: number[][] = [];
  const CountVectorizedQuery: number[] = [];

  // bof of documents
  for (const stemDocsByIndex of StemmedDocuments) {
    const TemporaryCountVectorizedDocumens: number[] = [];
    for (const docs of documents) {
      let foundData: number = 0;
      for (const stemDocsByWords of stemDocsByIndex) {
        if (stemDocsByWords === docs) {
          foundData += 1;
        }
      }
      TemporaryCountVectorizedDocumens.push(foundData);
    }
    CountVectorizedDocuments.push(TemporaryCountVectorizedDocumens);
  }

  // bag of word query
  for (const docs of documents) {
    let foundData: number = 0;
    for (const stemQueryByWords of StemmedQuery) {
      if (docs === stemQueryByWords) {
        foundData += 1;
      }
    }
    CountVectorizedQuery.push(foundData);
  }

  return {
    CountVectorizedQuery,
    CountVectorizedDocuments,
  };
}
