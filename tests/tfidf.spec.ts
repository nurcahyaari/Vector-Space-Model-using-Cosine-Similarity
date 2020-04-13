"use strict"

import {expect} from "chai";
import 'mocha';

import {Tfidf} from '../lib/tfidf';

describe("TF IDF", () => { 
    it("Should get weightning of indonesian word", () => { 
        const term = new Tfidf([
            [1,0,0,0,0,0,0],
            [1,1,0,0,0,0,1], 
            [1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1]
        ]);
        expect(term.weight().getIdf()).to.be.an("array")
        // .to.have.members([1,584962500721156, 1,584962500721156, 0, 0, 0, 0, 1,584962500721156])
        .to.have.length(4)
        .to.include.deep.members([[1.584962500721156, 1.584962500721156, 0, 0, 0, 0, 1.584962500721156]])
    })

    it("Should get weightning of english word", () => { 
        return true;
    });

    it("Should sum tfidf weight", () => { 
        const term = new Tfidf([
            [1,1,0,0,0,0,1], 
            [1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1]
        ]);
        expect(term.weight().sum()).to.be.an("array")
    })
});