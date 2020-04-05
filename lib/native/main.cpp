#include <nan.h>
#include <iostream>
#include <vector>
#include <string>
#include <fstream>
// #include "nazief.hpp"
// #include "stopword.hpp"
using namespace std;

NAN_METHOD(Stopword){
    // if(!info[0])
    if(!info[0]->IsArray() || !info[1]->IsArray()){
        cout << "Argument must be an array" << endl;
        return;
    }
    // get stopword
    v8::Local<v8::Array> stopwordParam = v8::Local<v8::Array>::Cast(info[1]);
    std::vector<string> stopwordList;
    for (uint32_t i = 0; i < stopwordParam->Length(); i++) {
        v8::Local<v8::Value> jsElement = stopwordParam->Get(i);
        stopwordList.push_back(*v8::String::Utf8Value(jsElement->ToString()));
    }

    // get string to filtering with stopword
    v8::Local<v8::Array> jsArr = v8::Local<v8::Array>::Cast(info[0]);
    std::vector<string> textOfArray;
    for (uint32_t i = 0; i < jsArr->Length(); i++) {
        v8::Local<v8::Value> jsElement = jsArr->Get(i);
        textOfArray.push_back(*v8::String::Utf8Value(jsElement->ToString()));
    }

    for(long int si = 0; si < stopwordList.size(); si++){
        for(long int ti = 0; ti < textOfArray.size(); ti++){
            if(stopwordList[si] == textOfArray[ti]){
                textOfArray.erase(textOfArray.begin() + ti);
                ti--;
            }
        }
    }

    // ifstream stopwordFile;
    // string line;
    // stopwordFile.open("stopword.txt");
    // if (stopwordFile.is_open()){
    //     while ( getline (stopwordFile,line) ){
    //         for(int i = 0; i < textOfArray.size(); i++){
    //             if(textOfArray[i] == line){
    //                 textOfArray.erase(textOfArray.begin() + i);
    //                 i--;
    //             }
    //         }
    //     }
    //     stopwordFile.close();
    // } else {
    //     cout << "File cannot be opened" << endl;
    //     return;
    // }
    v8::Local<v8::Array> setTextArray = Nan::New<v8::Array>(textOfArray.size());
    for (uint32_t i = 0; i < setTextArray->Length(); i++) {
        // v8::Local<v8::Value> jsElement = Nan::New(textOfArray[i]);
        setTextArray->Set(i, Nan::New(textOfArray[i]).ToLocalChecked());
    }
    info.GetReturnValue().Set(setTextArray);
}


// NAN_METHOD(Stemming){
//     if(!info[0]->IsString()){
//         cout << "Argument must a string" << endl;
//         return;
//     }
//     // cout << info[0] << endl;
//     string text = *v8::String::Utf8Value(info[0]->ToString());
//     class::Stemming s(text);
//     auto message = Nan::New(s.getVal()).ToLocalChecked();
//     info.GetReturnValue().Set(message);
// }

NAN_MODULE_INIT(Initialize){
    // NAN_EXPORT(target, Stemming);
    NAN_EXPORT(target, Stopword);
}

NODE_MODULE(addon, Initialize);