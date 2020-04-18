import {expect} from 'chai';
import 'mocha'

import {stopword} from '../lib/Stopword';

describe("Stopword removal", () => { 
    it("Should remove stopword or slankword", () =>  { 
        expect(stopword(["cyng", "negara"])).to.have.members(["negara"]).to.does.not.have.members(["cyng"])
    });
})