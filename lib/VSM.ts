"use strict"
import Tfidf from './tfidf';
import bagOfWord from './bagOfWord';

class VSM {
    private documents:string[];
    private query:string;
    constructor(documents:string[], query: string){
        this.documents = documents;
        this.query = query;
    }

    consine():number[][]{
        const bof = bagOfWord(this.documents, this.query);
        
        const bofNumber:number[][] = [bof.bofQuery];
        bof.bofDocuments.map(x => {
            bofNumber.push(x);
        });


        const tfidf = new Tfidf(bofNumber).weight().getIdf();

        let powTfidf:number[][] = tfidf.map(x => {
            let idx: number[];
            idx = x.map(y => y ** 2);
            return idx;
        });

        let similarity:number[][] = [];
        for(let i = 1; i < powTfidf.length; i++){
            similarity.push(
                powTfidf[i].map((data, index) => powTfidf[0][index] * data)
            );
        }
        
        return similarity;
    }
    
}

export default VSM;
