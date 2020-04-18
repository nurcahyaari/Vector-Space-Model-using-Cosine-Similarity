
/**
 *  get data from parameter.
 *  parameter rule : 
 * queries : [{sistem : 1,584962501}, {cerdas : 2,584962501}]
 * documents : [[{sistem : 1,584962501}, {cerdas : 2,584962501}], [{sistem : 1,584962501}, {cerdas : 2,584962501}]]
 * query and documents is any of array but its actually an object or key value data
 */
export function Cosine(queries:any[], documents:any[][]): number[] {
    // get sum of documents
    const documentsSum = documents.map((document) => {
        let idx: number = 0;
        for(const word of document){
          // tslint:disable-next-line:no-console
          idx += word[Object.keys(word)[0]];
        }
        return idx;
    });
    
    // get sum of queries
    let queriesSum: number = 0;
    for(const query of queries) {
        queriesSum += query[Object.keys(query)[0]];
    }
    
    // get sqrt of documents
    const documentsSqrt = documentsSum.map(value => {
        return Math.sqrt(value);
    });
    
    // get sqrt of queries
    const queriesSqrt = Math.sqrt(queriesSum);

    
    // // Query * Documents
    const queriesMultiDocuments: any[][] = [];

    for(const document of documents) {
        const queryidf: number[][] = [];
        const tmpWordDocument: any[] = [];
        for(const wordDocument of document) {
            const docidf: number[] = [];
            for(const query of queries) {
                if(Object.keys(wordDocument)[0] === Object.keys(query)[0]) {
                    tmpWordDocument.push({
                        [Object.keys(wordDocument)[0]] : wordDocument[Object.keys(wordDocument)[0]] * query[Object.keys(query)[0]]
                    })
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
        return (value / (queriesSqrt * documentsSqrt[index]));
    });
    
    return queriesMultiDocumentsSqrt;
}