"use strict"

import {expect} from "chai";
import 'mocha';

import {CountVectorized} from '../lib/CountVectorized';

describe("Get bag of word based on query", () => {
    it("shoult return an array", () => { 
        expect(CountVectorized(["saya makan nasi di rumah", "rumah saya penuh makanan"]))
            .to.be.a("array")
    });

    it("should return array data", () => { 
        expect(CountVectorized(["saya makan nasi di rumah", "rumah saya penuh makanan"]))
            .to.be.an("array")
            .to.be.not.empty
            .to.include.deep.members([1,1,1,0])
            .to.have.members([1,1,1,0])
            .to.have.members([1,0,1,1])
            .to.have.members([1,0,0,0])
    });

    // it("Should return Vector of query from documents length", () => {
    //     expect(CountVectorized(['sistem']))
    // })
})