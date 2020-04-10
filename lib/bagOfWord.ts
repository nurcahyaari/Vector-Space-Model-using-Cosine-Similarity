/**
 *  this project is using for getting the bag of word
 *  created by : Nurcahya Ari
 *  License : MIT 
 */

"use strict";
import Stemming from './Stemming';
import Stopword from './Stopword';
import Token from './Tokenize';

export default function bagOfWord(text: string[], query: string):{bofQuery:number[], bofDocuments: number[][]}{
    let queryText:string[] = []; // for tokenizing text by indexes
    let tokenText:string[][] = [];
    // tokening query text to array of string
    let queryToken:string[] = Token(query); // query text was tokenizing

    // tokening text array to array of string
    for(let i in text){
        queryText.push(text[i])
    }
    // tokenizing the text document
    let tmpqueryText:string;
    for(let i in queryText){
        tmpqueryText = queryText[i];
        tokenText.push(Token(tmpqueryText));
    }

    // stop word
    let stopwordDocuments:string[][] = [];
    let stopwordQuery:string[] = [];
    
    // stopword removal for query document
    stopwordQuery = Stopword(queryToken);

    // stopword removal for text documents
    for(let i in tokenText){
        stopwordDocuments.push(Stopword(tokenText[i]));
    }
    
    // Stemming word
    let stemmingDocuments:string[][] = [];
    let stemmingQuery:string[] = [];

    for(let i in stopwordQuery){
        stemmingQuery.push(Stemming(stopwordQuery[i]));
    }

    for(let i in stopwordDocuments){
        let documentStemming:string[] = [];
        for(let j in stopwordDocuments[i]){
            documentStemming.push(Stemming(stopwordDocuments[i][j]));
        }
        stemmingDocuments.push(documentStemming);
    }

    // make array of text as bag of word
    let documents:string[] = [];
    for(let i in stemmingDocuments){
        for(let j in stemmingDocuments[i]){
            if(documents.length == 0){
                documents.push(stemmingDocuments[i][j]);
            } else {
                let isFoundinDocuments:boolean = false;
                for(let docloop in documents){
                    if(stemmingDocuments[i][j] == documents[docloop]){
                        isFoundinDocuments = true;
                    }
                }   
                if(!isFoundinDocuments){
                    documents.push(stemmingDocuments[i][j]);
                }
            }
        }
    }

    // get bag of word value from documents and query 
    let bofDocuments:number[][] = [];
    let bofQuery:number[] = [];

    // bof of documents
    for(let i in stemmingDocuments){
        let tmpBagofwordDocument:number[] = [];
        for(let docloop in documents){
            let foundData:number = 0;
            for(let j in stemmingDocuments[i]){
                if(stemmingDocuments[i][j] == documents[docloop]){
                    foundData += 1;
                }
            }    
            tmpBagofwordDocument.push(foundData);     
        }
        bofDocuments.push(tmpBagofwordDocument);
    }    
    
    for(let docloop in documents){
        let foundData:number = 0;
        for(let i in stemmingQuery){
            if(documents[docloop] == stemmingQuery[i]){
                foundData += 1;
            }
        }
        bofQuery.push(foundData);
    }
    
    return {
        bofQuery : bofQuery,
        bofDocuments: bofDocuments
    }
}