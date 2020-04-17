'use strict';

/**
 * TF IDF class for calculating term weightning, using log2
 * make by nurcahyaari
 */

// data is term value that was fillter to be an bag of word
// data[0] data index zero is an query
export class Tfidf {
  private data: any[][];
  private idf: any[][];

  constructor(val: any[][]) {
    this.data = val;
    this.idf = [];
  }

  getData(): any[][] {
    return this.data;
  }

  weight(): Tfidf {
    // get document frequecy (DocumentsFrequency)
    const DocumentsFrequency: any[] = [];
    
    // calculate document frequency
    for (const [indexX, dataX] of this.data.entries()) {
      let indexY = 0;
      for (const dataY of dataX) {
        // if document frequency still null
        if (DocumentsFrequency.length < dataX.length) {
          if (dataY[Object.keys(dataY)[0]] !== 0) {
            DocumentsFrequency.push({
              [Object.keys(dataY)[0]] : 1
            });
          } else {
            DocumentsFrequency.push({
              [Object.keys(dataY)[0]] : 0
            });
          }
        }
        // if document frequency is not null
        else {
          if (dataY[Object.keys(dataY)[0]] !== 0) {
            DocumentsFrequency[indexY][Object.keys(dataY)[0]] += 1;
          }
        }
        indexY += 1;
      }
    }

    // tslint:disable-next-line:no-console
    // console.log("Document Freq : ",DocumentsFrequency, "\n");
    // get idf (Inverse Document Frequency)
    for (const dataX of this.data) {
      const tmpIdf: object[] = [];
      for (const [indexY, dataY] of dataX.entries()) {
        tmpIdf.push({
          [Object.keys(dataY)[0]] : dataY[Object.keys(dataY)[0]] * (Math.log2((this.data.length) / DocumentsFrequency[indexY][Object.keys(DocumentsFrequency[indexY])[0]]) + 1)
        });
        // tslint:disable-next-line:no-console
        // console.log("TMP IDF Freq : ",tmpIdf, "\n");
      }
      this.idf.push(tmpIdf);
    }
    // tslint:disable-next-line:no-console
    // console.log("IDF Freq : ",this.idf, "\n");

    return this;
  }
  getIdf(): any[][] {
    return this.idf;
  }
  sum(): number[] {
    const TotalTFIDF: number[] = [];
    for (const idfX of this.idf) {
      let sum = 0;
      for (const idfY of idfX) {
        sum += idfY[Object.keys(idfY)[0]];
      }
      TotalTFIDF.push(sum);
    }
    return TotalTFIDF;
  }
}
