"use strict"

/**
 * TF IDF class for calculating term weightning, using log2
 * make by nurcahyaari
 */

class Tfidf {
    private data:number[][];
    private idf:number[][];

    constructor(val: number[][]){
        this.data = val;
        this.idf = [];
    }

    weight():Tfidf{
        // get document frequecy (DF)
        let df:number[] = []
        for(let x in this.data){
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
                tmpIdf.push(this.data[x][y] * ((Math.log2(this.data.length/df[y])) + 1));
            }
            this.idf.push(tmpIdf);
        }
        return this;
    }
    get():number[][]{
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