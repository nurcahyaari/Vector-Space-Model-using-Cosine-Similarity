"use strict"
import {expect} from 'chai';
import 'mocha';

import Token from '../lib/Tokenize';

describe('Tokenizers Testing', () => {
    it('Will it tokenize this text', () => {
        expect(Token("Sekarang saya sedang makan siang")).to.deep.equal(["sekarang", "saya", "sedang", "makan", "siang"]);
        expect(Token("Sekarang saya sedang makan siang?")).to.deep.equal(["sekarang", "saya", "sedang", "makan", "siang"]);
        expect(Token("apakah, saya sedang. makan? siang!")).to.deep.equal(["apakah", "saya", "sedang", "makan", "siang"]);
    });
    it('should tokenize strings', function() {
        expect(Token('these are things')).to.deep.equal(['these', 'are', 'things']);
      });
    
      it('should tokenize strings via attached string method', function() {
        expect(Token('these are things')).to.deep.equal(['these', 'are', 'things']);
      });
    
      it('should tokenize strings via attached string method', function() {
        expect(Token('these are things')).to.deep.equal(['these', 'are', 'things']);
      });
    
      it('should swallow punctuation', function() {
        expect(Token('these are things, no')).to.deep.equal(['these', 'are', 'things', 'no']);
      });
    
      it('should swallow final punctuation', function() {
        expect(Token('these are things, no?')).to.deep.equal(['these', 'are', 'things', 'no']);
      });
    
      it('should swallow initial punctuation', function() {
        expect(Token('.these are things, no')).to.deep.equal(['these', 'are', 'things', 'no']);
      });
    
      it('should swallow duplicate punctuation', function() {
        expect(Token('i shal... pause')).to.deep.equal(['i', 'shal', 'pause']);
      });  
    
});
