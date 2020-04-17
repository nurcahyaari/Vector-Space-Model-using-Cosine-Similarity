
export function Cosine(queries:any[][], documents:any[][]): number[] {
    // get sum of documents
    const documentsSum = documents.map((document) => {
        let idx: number = 0;
        for(const word of document){
          // tslint:disable-next-line:no-console
          idx += word[Object.keys(word)[0]];
        }
        return idx;
    });
    // tslint:disable-next-line:no-console
    // console.log(documentsSum);
    // get sum of queries
    const queriesSum = queries.map((query) => {
        let idx: number = 0;
        for(const word of query){
          // tslint:disable-next-line:no-console
          idx += word[Object.keys(word)[0]];
        }
        return idx;
    });
    
    // this.tfidfPowSum = powTfidf.map((x, indexX): any => {
    //     let idx: number = 0;
    //     for(const y of x){
    //       // tslint:disable-next-line:no-console
    //       idx += y[Object.keys(y)[0]];
    //     }
    //     return idx;
    // })
    
    // get sqrt of documents
    const documentsSqrt = documentsSum.map(value => {
        return Math.sqrt(value);
    });
    
    const queriesSqrt = queriesSum.map(value => {
        return Math.sqrt(value);
    })

    
    // Query * Documents
    const queriesMultiDocuments: any[][] = [];

    for(const document of documents) {
        const queryidf: number[][] = [];
        const tmpWordDocument: any[] = [];
        for(const wordDocument of document) {
            const docidf: number[] = [];
            for(const query of queries) {
                for(const wordQuery of query) {
                    if(Object.keys(wordDocument)[0] === Object.keys(wordQuery)[0]) {
                        tmpWordDocument.push({
                            [Object.keys(wordDocument)[0]] : wordDocument[Object.keys(wordDocument)[0]] * wordQuery[Object.keys(wordQuery)[0]]
                        })
                    }
                }
            }
            queryidf.push(docidf);
        }
        
        queriesMultiDocuments.push(tmpWordDocument);
    }

    const queriesMultiDocumentsSum = queriesMultiDocuments.map((document) => {
        let idx: number = 0;
        for(const word of document){
          // tslint:disable-next-line:no-console
          idx += word[Object.keys(word)[0]];
        }
        return idx;
    });

    // get sqrt of documents
    const queriesMultiDocumentsSqrt = queriesMultiDocumentsSum.map((value, index) => {
        return (value / (queriesSqrt[0] * documentsSqrt[index]));
    });
    
    return queriesMultiDocumentsSqrt;
}