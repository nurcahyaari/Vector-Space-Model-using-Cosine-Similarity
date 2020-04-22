'use strict';
import { Tfidf } from './tfidf';
import { CountVectorized } from './CountVectorized';

export class VSM extends Tfidf {
  // private documents: string[];
  private idfPowWeight: any[][];
  // private idfVectorized : any[];
  
  constructor(documents: string[], idfVector:any[] = []) {
    const Vectorized = CountVectorized(documents);
    super(Vectorized, idfVector);
    this.idfPowWeight = [];
    // this.idfVectorized = [];

    this.dimension();
  }

  // get current documents
  // getDocuments():string[] {
  //   return this.documents;
  // }

  // get IDF from document
  getIdfVectorized(): any[] {
    return super.getIdfVectorized();
  }

  // get weight of documents. IDF * Document Term
  getWeightVectorized(): any[][] {
    return super.getWeightVectorized();
  }

  // get idf was power 
  getPowWeightVectorized() : any[][] {
    return this.idfPowWeight;
  }

  // get vector space
  private dimension() {
    const idfWeight = this.getWeightVectorized();
    
    let powTfidf: any[][] = idfWeight.map((x, indexX): any => {
      let idx: object[];
      idx = x.map((y, indexY): object => { 
        return {
          [Object.keys(y)[0]] : y[Object.keys(y)[0]] ** 2
        }
      });
      return idx;
    });
    this.idfPowWeight = powTfidf;
    powTfidf = [];
  }

}