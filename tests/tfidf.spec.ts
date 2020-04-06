"use strict"

import {expect} from "chai";
import 'mocha';

import Tfidf from '../lib/tfidf';

describe("TF IDF", function(){ 
    it("Should get weightning", function(){ 
        const term = new Tfidf([
            [1,1,0,0,0,0,1], 
            [1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1]
        ]);
        expect(term.weight().get()).to.be.an("array")
        // .to.have.members([1,584962500721156, 1,584962500721156, 0, 0, 0, 0, 1,584962500721156])
        .to.have.length(3)
        .to.include.deep.members([[1.584962500721156, 1.584962500721156, 0, 0, 0, 0, 1.584962500721156]])
    })

    it("Should sum tfidf weight", function(){ 
        const term = new Tfidf([
            [1,1,0,0,0,0,1], 
            [1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1]
        ]);
        expect(term.weight().sum()).to.be.an("array")
    })
});