'use strict';
import { Tfidf } from './tfidf';
import { CountVectorized } from './CountVectorized';

export class VSM {
  private documents: string[];
  private tfidfWeight: object[][];
  private tfidfPowWeight: object[][];
  
  constructor(documents: string[]) {
    this.documents = documents;
    this.tfidfWeight = [];
    this.tfidfPowWeight = [];
    
    this.dimension();
  }

  getDocuments():string[] {
    return this.documents;
  }

  getWeightTfidf(): object[][] {
    return this.tfidfWeight;
  }

  getPowTfidf() : object[][] {
    return this.tfidfPowWeight;
  }

  dimension() {
    const Vectorized = CountVectorized(this.documents);
    
    const tfidf = new Tfidf(Vectorized).weight().getIdf();
    this.tfidfWeight = tfidf;
    // tslint:disable-next-line:no-console
    // console.log(tfidf);
    
    const powTfidf: any[][] = tfidf.map((x, indexX): any => {
      let idx: object[];
      idx = x.map((y, indexY): object => { 
        return {
          [Object.keys(y)[0]] : y[Object.keys(y)[0]] ** 2
        }
      });
      return idx;
    });
    this.tfidfPowWeight = powTfidf;
    
  }

}

// (() => {
//   const vsm:any = new VSM([
//     "sistem cerdas adalah kumpulan elemen",
//     "adalah kumpulan elemen yang saling berinteraksi",
//     "Sistem berinteraksi untuk mencapai tujuan"
//   ]);
  
//   // tslint:disable-next-line:no-console
//   // console.log(vsm.getDocuments());
//   // tslint:disable-next-line:no-console
//   // console.log(vsm.getWeightTfidf());
//   // tslint:disable-next-line:no-console
//   // console.log(vsm.getSumTfidf());

//   // tslint:disable-next-line:no-console
//   // console.log(vsm.getSqrtTfidf());
// })()
