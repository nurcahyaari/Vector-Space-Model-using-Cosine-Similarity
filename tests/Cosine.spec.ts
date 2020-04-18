import {expect} from 'chai';
import 'mocha';

import { VSM } from '../lib/VSM';
import {Cosine} from '../lib/Cosine';
describe('Test Cosine Similarity', (): void => {
    it("Shoult get array", () => {
        const cosine = Cosine(
            [{ sistem: 2.5121061286922606 },{ cerdas: 6.682031130134573 }],
            [ [ 
                { sistem: 2.5121061286922606 },
                { cerdas: 6.682031130134573 },
                { kumpul: 2.5121061286922606 },
                { elemen: 2.5121061286922606 },
                { interaksi: 0 },
                { capai: 0 },
                { tuju: 0 } 
            ],
            [ 
                { sistem: 0 },
                { cerdas: 0 },
                { kumpul: 2.5121061286922606 },
                { elemen: 2.5121061286922606 },
                { interaksi: 2.5121061286922606 },
                { capai: 0 },
                { tuju: 0 } 
            ],
            [ 
                { sistem: 2.5121061286922606 },
                { cerdas: 0 },
                { kumpul: 0 },
                { elemen: 0 },
                { interaksi: 2.5121061286922606 },
                { capai: 6.682031130134573 },
                { tuju: 6.682031130134573 } 
            ] ]
        );
        expect(cosine)
            .to.be.an("array")
            .to.have.length(3)
    })

    it("Should get similarty using documents and document query", () => {
        const document = new VSM([
            "sistem cerdas adalah kumpulan elemen",
            "adalah kumpulan elemen yang saling berinteraksi",
            "Sistem berinteraksi untuk mencapai tujuan"
        ]);

        const idf = document.getIdfVectorized();

        const query = new VSM(["sistem cerdas"], idf);

        const cosine = Cosine(query.getPowWeightVectorized()[0], document.getPowWeightVectorized());

        expect(cosine)
            .to.be.an("array")
            .to.have.length(3)
            .to.have.deep.members([ 4.457087767265072, 0, 0.4853443577859814 ]);
    })
});