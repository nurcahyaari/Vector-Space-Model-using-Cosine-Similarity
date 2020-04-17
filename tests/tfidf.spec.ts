"use strict"

import {expect} from "chai";
import 'mocha';

import {Tfidf} from '../lib/tfidf';
import { CountVectorized } from '../lib/CountVectorized';

describe("TF IDF", () => { 
    it("Should get weightning of indonesian word", () => { 
        const vectorized = CountVectorized([
            "sistem adalah kumpulan elemen",
            "adalah kumpulan elemen yang saling berinteraksi",
            "Sistem berinteraksi untuk mencapai tujuan"
        ]);
        const term = new Tfidf(vectorized);
        expect(term.weight().getIdf()).to.be.an("array")
        // .to.have.members([1,584962500721156, 1,584962500721156, 0, 0, 0, 0, 1,584962500721156])
        .to.have.length(3)
        .to.include.deep.members([ [ { sistem: 1.584962500721156 },
            { kumpul: 1.584962500721156 },
            { elemen: 1.584962500721156 },
            { interaksi: 0 },
            { capai: 0 },
            { tuju: 0 } ],
          [ { sistem: 0 },
            { kumpul: 1.584962500721156 },
            { elemen: 1.584962500721156 },
            { interaksi: 1.584962500721156 },
            { capai: 0 },
            { tuju: 0 } ],
          [ { sistem: 1.584962500721156 },
            { kumpul: 0 },
            { elemen: 0 },
            { interaksi: 1.584962500721156 },
            { capai: 2.584962500721156 },
            { tuju: 2.584962500721156 } ] ])
    })

    it("Should get weightning of english word", () => { 
        return true;
    });

    it("Should sum tfidf weight", () => { 
        const vectorized = CountVectorized([
            "sistem cerdas adalah kumpulan elemen",
            "adalah kumpulan elemen yang saling berinteraksi",
            "Sistem berinteraksi untuk mencapai tujuan"
        ]);
        const term = new Tfidf(vectorized);
        expect(term.weight().sum())
        .to.be.an("array")
        .to.include.deep.members([ 7.339850002884624, 4.754887502163468, 8.339850002884624 ])
    })
});