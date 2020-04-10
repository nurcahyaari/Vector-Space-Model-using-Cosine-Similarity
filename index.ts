"use strict";
import stemming from './lib/Stemming';
import bagOfWord from './lib/bagOfWord';
import stopword from './lib/Stopword';
import vsm from './lib/VSM';
import tfidf from './lib/tfidf';
import tokenize from './lib/Tokenize'

export default {
    bagOfWord   : bagOfWord,
    stemming    : stemming,
    stopword    : stopword,
    tfidf       : tfidf,
    tokenize    : tokenize,
    vsm         : vsm,
}