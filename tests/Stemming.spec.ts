"use strict"

import {expect} from "chai";
import 'mocha';

import {Stemming} from '../lib/Stemming';

describe("Languange Stemming", () => {
    it("Should stem indonesian words", () => {
        expect(Stemming("Makanan")).to.equal("makan");
        expect(Stemming("makanan")).to.equal("makan");
        expect(Stemming("minuman")).to.equal("minum");
        expect(Stemming("berbahagialah")).to.equal("bahagia");
        expect(Stemming("berlarilah")).to.equal("lari");
        expect(Stemming("kuburan")).to.equal("kubur");
        expect(Stemming("kurang")).to.equal("kurang");
        expect(Stemming("menyatakan")).to.equal("nyata");
        expect(Stemming("berbicaralah")).to.equal("bicara");
        expect(Stemming("kumpulannya")).to.equal("kumpul");
        expect(Stemming("dikumpulkannya")).to.equal("kumpul");
        expect(Stemming("diperkumpulkannya")).to.equal("kumpul");
    });

    it("Should stem english words", () => {
        expect(Stemming("words")).to.equal("word");
        expect(Stemming("eaten")).to.equal("eat");
        expect(Stemming("ate")).to.equal("eat");
        expect(Stemming("eating")).to.equal("eat");
        expect(Stemming("happiness")).to.equal("happy");
        expect(Stemming("happily")).to.equal("happy");
        expect(Stemming("stemmer")).to.equal("stem");
        expect(Stemming("stemming")).to.equal("stem");
    })
})