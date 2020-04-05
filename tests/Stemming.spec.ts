"use strict"

import {expect} from "chai";
import 'mocha';

import Stemming from '../lib/Stemming';

describe("Languange Stemming", () => {
    it("Should stem this text", () => {
        expect(Stemming("Makanan")).to.equal("makan");
        expect(Stemming("makanan")).to.equal("makan");
        expect(Stemming("minuman")).to.equal("minum");
        expect(Stemming("berbahagialah")).to.equal("bahagia");
        expect(Stemming("berlarilah")).to.equal("lari");
        expect(Stemming("kuburan")).to.equal("kubur");
        expect(Stemming("kurang")).to.equal("kurang");
        expect(Stemming("menyatakan")).to.equal("nyata");
        expect(Stemming("berbicaralah")).to.equal("bicara");
    });
})