"use strict";
import {expect} from "chai";
import "mocha";

import {VSM} from '../lib/VSM';

describe("Vector Space Model using Cosine Similarity", () => { 
    it("Should get vector model 1", () => { 
        const vsm = new VSM([
            "sistem adalah kumpulan elemen",
            "adalah kumpulan elemen yang saling berinteraksi",
            "Sistem berinteraksi untuk mencapai tujuan"
        ]);
        
        expect(vsm.getPowTfidf())
            .to.be.an("array")
            .to.have.length(3)
            .to.deep.equal([ 
                [ 
                    { sistem: 2.5121061286922606 },
                    { kumpul: 2.5121061286922606 },
                    { elemen: 2.5121061286922606 },
                    { interaksi: 0 },
                    { capai: 0 },
                    { tuju: 0 } 
                ],
                [ 
                    { sistem: 0 },
                    { kumpul: 2.5121061286922606 },
                    { elemen: 2.5121061286922606 },
                    { interaksi: 2.5121061286922606 },
                    { capai: 0 },
                    { tuju: 0 } 
                ],
                [ 
                    { sistem: 2.5121061286922606 },
                    { kumpul: 0 },
                    { elemen: 0 },
                    { interaksi: 2.5121061286922606 },
                    { capai: 6.682031130134573 },
                    { tuju: 6.682031130134573 } 
                ] 
            ])
            .to.include.deep.members([[ { sistem: 0 },
                { kumpul: 2.5121061286922606 },
                { elemen: 2.5121061286922606 },
                { interaksi: 2.5121061286922606 },
                { capai: 0 },
                { tuju: 0 } ]
            ])
    })

    it("Should get vector model 2", () => {

        const vsm = new VSM([
            "sistem cerdas adalah kumpulan elemen",
            "adalah kumpulan elemen yang saling berinteraksi",
            "Sistem berinteraksi untuk mencapai tujuan"
        ]);
        // tslint:disable-next-line:no-console
        // console.log(vsm.getPowTfidf());

        expect(vsm.getPowTfidf())
            .to.be.an("array")
            .to.have.length(3)
            .to.deep.equal([ 
                [ 
                    { sistem: 2.5121061286922606 },
                    { cerdas: 6.682031130134573 },
                    { kumpul: 2.5121061286922606 },
                    { elemen: 2.5121061286922606 },
                    { interaksi: 0 },
                    { capai: 0 },
                    { tuju: 0 } 
                ],
                [ 
                    { sistem: 0 },
                    { cerdas: 0 },
                    { kumpul: 2.5121061286922606 },
                    { elemen: 2.5121061286922606 },
                    { interaksi: 2.5121061286922606 },
                    { capai: 0 },
                    { tuju: 0 } 
                ],
                [ 
                    { sistem: 2.5121061286922606 },
                    { cerdas: 0 },
                    { kumpul: 0 },
                    { elemen: 0 },
                    { interaksi: 2.5121061286922606 },
                    { capai: 6.682031130134573 },
                    { tuju: 6.682031130134573 } 
                ]
            ])
            .to.include.deep.members([ [
                { sistem: 2.5121061286922606 },
                { cerdas: 6.682031130134573 },
                { kumpul: 2.5121061286922606 },
                { elemen: 2.5121061286922606 },
                { interaksi: 0 },
                { capai: 0 },
                { tuju: 0 } 
            ] ])
    })
});