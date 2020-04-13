'use strict';

/**
 * TF IDF class for calculating term weightning, using log2
 * make by nurcahyaari
 */

// data is term value that was fillter to be an bag of word
// data[0] data index zero is an query
export class Tfidf {
  private data: number[][];
  private idf: number[][];

  constructor(val: number[][]) {
    this.data = val;
    this.idf = [];
  }

  getData(): number[][] {
    return this.data;
  }

  weight(): Tfidf {
    // get document frequecy (DocumentsFrequency)
    const DocumentsFrequency: number[] = [];
    for (const dataX of this.data) {
      let indexY = 0;
      for (const dataY of dataX) {
        // if document frequency still null
        if (DocumentsFrequency.length < dataX.length) {
          if (dataY !== 0) {
            DocumentsFrequency.push(1);
          } else {
            DocumentsFrequency.push(0);
          }
        }
        // if document frequency is not null
        else {
          if (dataY !== 0) {
            DocumentsFrequency[indexY] += 1;
          }
        }
        indexY += 1;
      }
    }
    // get idf

    for (const dataX of this.data) {
      const tmpIdf: number[] = [];
      let indexY = 0;
      for (const dataY of dataX) {
        tmpIdf.push(dataY * (Math.log2((this.data.length - 1) / DocumentsFrequency[indexY]) + 1));
      }
      this.idf.push(tmpIdf);
      indexY += 1;
    }

    return this;
  }
  getIdf(): number[][] {
    return this.idf;
  }
  sum(): number[] {
    const TotalTFIDF: number[] = [];
    for (const idfX of this.idf) {
      let sum = 0;
      for (const idfY of idfX) {
        sum += idfY;
      }
      TotalTFIDF.push(sum);
    }
    return TotalTFIDF;
  }
}
