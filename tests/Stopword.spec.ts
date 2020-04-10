import {expect} from 'chai';
import 'mocha'

import Stopword from '../lib/Stopword';

describe("Stopword removal", function(){ 
    it("Should remove stopword or slankword", function() { 
        expect(Stopword(["cyng", "negara"])).to.have.members(["negara"]);
    });
})