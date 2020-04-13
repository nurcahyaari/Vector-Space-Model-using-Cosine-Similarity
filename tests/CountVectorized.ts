"use strict"

import {expect} from "chai";
import 'mocha';

import {CountVectorized} from '../lib/CountVectorized';

describe("Get bag of word based on query", () => {
    it("shoult return an object", () => { 
        expect(CountVectorized(["saya makan nasi di rumah", "rumah saya penuh makanan"], "mau makan"))
            .to.be.a("object")
    });

    it("should have a property bofDocuments", () => { 
        expect(CountVectorized(["saya makan nasi di rumah", "rumah saya penuh makanan"], "mau makan"))
            .to.have.property("CountVectorizedDocuments")
            .to.be.an("array")
            .to.be.not.empty
            .to.include.deep.members([1,1,1,0])
            .to.have.members([1,1,1,0])
            .to.have.members([1,0,1,1])
            .to.have.members([1,0,0,0])
    });

    it("Should have a property bofQuery", () => { 
        expect(CountVectorized(["saya makan nasi di rumah", "rumah saya penuh makanan"], "mau makan"))
            .to.have.property("CountVectorizedQuery")
            .to.be.not.empty
            .to.be.an("array")
    });
})