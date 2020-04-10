"use strict"

/**
 * TF IDF class for calculating term weightning, using log2
 * make by nurcahyaari
 */

// data is term value that was fillter to be an bag of word
// data[0] data index zero is an query
class Tfidf {
    private data:number[][];
    private idf:number[][];

    constructor(val: number[][]){
        this.data = val;
        this.idf = [];
    }

    getData():number[][]{
        return this.data;
    }

    weight():Tfidf{
        // get document frequecy (DF)
        let df:number[] = []
        for(let x = 1; x < this.data.length; x++){
            for(let y in this.data[x]){
                // if document frequency still null
                if(df.length < this.data[x].length){
                    if(this.data[x][y] !== 0){
                        df.push(1);
                    } else {
                        df.push(0);
                    }
                }
                // if document frequency is not null 
                else {
                    if(this.data[x][y] !== 0){
                        df[y] += 1;
                    }
                }
            }
        }
        // get idf
        
        for(let x in this.data){
            let tmpIdf:number[] = [];
            for(let y in this.data[x]){
                tmpIdf.push(this.data[x][y] * ((Math.log2((this.data.length - 1)/df[y])) + 1));
            }
            this.idf.push(tmpIdf);
        }
        
        return this;
    }
    getIdf():number[][]{
        return this.idf;
    }
    sum():number[]{
        let totalTfIdf:number[] = [];
        for(let x in this.idf){
            let sum = 0;
            for(let y in this.idf[x]){
                sum += this.idf[x][y];
            }
            totalTfIdf.push(sum);
        }
        return totalTfIdf;
    }
}

export default Tfidf;