"use strict"

import {expect} from "chai";
import 'mocha';

import {bagOfWord} from '../lib/bagOfWord';

describe("Get bag of word based on query", function(){
    it("shoult return an object", function(){ 
        expect(bagOfWord(["saya makan nasi di rumah", "rumah saya penuh makanan"], "mau makan"))
            .to.be.a("object")
    });

    it("should have a property bofDocuments", function(){ 
        expect(bagOfWord(["saya makan nasi di rumah", "rumah saya penuh makanan"], "mau makan"))
            .to.have.property("bofDocuments")
            .to.be.an("array")
            .to.be.not.empty
            .to.include.deep.members([1,1,1,0])
            .to.have.members([1,1,1,0])
            .to.have.members([1,0,1,1])
            .to.have.members([1,0,0,0])
    })
    it("Should have a property bofQuery", function(){ 
        expect(bagOfWord(["saya makan nasi di rumah", "rumah saya penuh makanan"], "mau makan"))
            .to.have.property("bofQuery").to.be.an("array").that.is.not.empty
    })
})