'use strict';

/**
 * TF IDF class for calculating term weightning, using log2
 * make by nurcahyaari
 */

// data is term value that was fillter to be an bag of word
// data[0] data index zero is an query
export class Tfidf {
  private data: any[][];
  private idfVector: any[];
  private weightVectorized: any[][];

  constructor(val: any[][], idfVector: any[] = []) {
    this.data = val;
    this.idfVector = idfVector;
    this.weightVectorized = [];
    this.weight();
  }

  // getData(): any[][] {
  //   return this.data;
  // }

  private weight() {
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

    // get IDF (Inverse Document Frequency)
    if(this.idfVector.length === 0) {
      this.idfVector = DocumentsFrequency.map(value => {
        return {
          [Object.keys(value)[0]] : (Math.log2(this.data.length / value[Object.keys(value)[0]]) + 1)
        }
      });
    }
    
    // get document weight 
    for (const dataX of this.data) {
      const tmpWeightVector: any[] = [];
      let tmpIdf: number = 0;
      for (const [indexY, dataY] of dataX.entries()) {
        // get IDF per word token
        tmpIdf = 0;
        tmpWeightVector.push({
          [Object.keys(dataY)[0]] : dataY[Object.keys(dataY)[0]] * this.idfVector[indexY][Object.keys(this.idfVector[indexY])[0]]
        });
        
      }
      this.weightVectorized.push(tmpWeightVector);
    }
  }
  
  getIdfVectorized(): any[][] {
    return this.idfVector;
  }

  getWeightVectorized(): any[][] {
    return this.weightVectorized;
  }
  sum(): number[] {
    const TotalTFIDF: number[] = [];
    for (const idfX of this.weightVectorized) {
      let sum = 0;
      for (const idfY of idfX) {
        sum += idfY[Object.keys(idfY)[0]];
      }
      TotalTFIDF.push(sum);
    }
    return TotalTFIDF;
  }
}
