"use strict";
import {expect} from "chai";
import "mocha";

import VSM from '../lib/VSM';

describe("Vector Space Model using Cosine SImilarity", function(){ 
    it("Should get similarity between documents", function(){ 
        const vsm = new VSM([
            "sistem adalah kumpulan elemen",
            "adalah kumpulan elemen yang saling berinteraksi",
            "Sistem berinteraksi untuk mencapai tujuan"
        ], "Sistem");

        expect(vsm.consine())
            .to.be.an("array")
            .to.have.length(3)
            // .to.have.members([ 
            //     [ 6.310677201813217, 0, 0, 0, 0, 0 ],
            //     [ 0, 0, 0, 0, 0, 0 ],
            //     [ 6.310677201813217, 0, 0, 0, 0, 0 ] 
            // ])
            .to.include.deep.members([[ 6.310677201813217, 0, 0, 0, 0, 0 ]])
    })
});