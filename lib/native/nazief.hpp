#include<iostream>
#include"nlohmann/json.hpp"
#include<iterator>
#include<fstream>
#include<string.h>
using namespace std;
using json = nlohmann::json;

// base project https://raw.githubusercontent.com/ilhamdp10/algoritma-stemming-nazief-adriani/master/idnstemmer.php

class Stemming{
    private :
        string text;
        void lowerCase();
        void delPrefix();
        void delSuffix();
    public :
        Stemming(string text);
        string getVal();
        // bool inDatabase(string text);
};

Stemming::Stemming(string text){
    this->text = text;
    this->lowerCase();
}

// bool Stemming::inDatabase(string text){
//      ifstream jsonFile;
//      jsonFile.open("./dict.json");
//     //  auto json = json::parse(jsonFile);
//     //  string t = json.dump();
//     //  cout << t << endl;
//     //  int sizeOfJsonData = json[2]["data"].size();
//      int found = 0;
//     //  for(int i = 0; i < sizeOfJsonData; i++){
//         //  if(text == json[2]["data"][i]["word"]){
//         //      text = json[2]["data"][i]["word"];
//         //      found = 1;
//         //      break;
//         //  }
//     //  }
//      return found == 0 ? false : true;
// }

string Stemming::getVal(){
    this->delPrefix();
    this->delSuffix();
    this->delSuffix(); 
    return this->text;
}

void Stemming::lowerCase(){
    transform(this->text.begin(), this->text.end(), this->text.begin(), ::tolower); 
}

void Stemming::delPrefix(){
    // awalan : ber, bel, be, ke, se, te, ter, me, mem, men, meng, menge, pe, pem, pen, peng, penge, pe, pel, per, memper; Sumber : http://tatabahasabm.tripod.com/tata/awalan.htm
    if(this->text.substr(0,6) == "memper"){ // substring memper
        this->text = this->text.substr(6,this->text.size());
    } // substring memper
    else {
        if(this->text.substr(0,3) == "ber"){
            this->text = this->text.substr(3,this->text.size());
        } // end substring ber
        else {
            if(this->text.substr(0,4) == "bela"){ // substring bela
                this->text = this->text.substr(3,this->text.size());
            } // end substring bela
            else { // substring ber
                if(this->text.substr(0,2) == "di"){ 
                    this->text = this->text.substr(2,this->text.size());
                } 
                else {
                    if(this->text.substr(0,2) == "ke"){ 
                        this->text = this->text.substr(2,this->text.size());
                    } 
                    else {
                        if(this->text.substr(0,2) == "ku"){ 
                            this->text = this->text.substr(2,this->text.size());
                        } 
                        else {
                            if(this->text.substr(0,3) == "kau"){ 
                                this->text = this->text.substr(3,this->text.size());
                            } 
                            else {
                                if(this->text.substr(0,2) == "me"){ 
                                    if(this->text.substr(0,4) == "memb"){ 
                                        this->text = this->text.substr(3,this->text.size());
                                    } 
                                    else {
                                        if(this->text.substr(0,4) == "mend" || this->text.substr(0,4) == "menf" || this->text.substr(0,4) == "menj"){ 
                                            this->text = this->text.substr(3,this->text.size());
                                        } 
                                        else {
                                            if(this->text.substr(0,4) == "meny"){ 
                                                this->text = "s" + this->text.substr(4,this->text.size());
                                            } 
                                            else {
                                                if(this->text.substr(0,4) == "meng"){ 
                                                    if(this->text.substr(4,1) == "a" || this->text.substr(4,1) == "e" || this->text.substr(4,1) == "g" || this->text.substr(4,1) == "h" || this->text.substr(4,1) == "i" || this->text.substr(4,1) == "o" || this->text.substr(4,1) == "u"){
                                                        this->text = this->text.substr(4,this->text.size());
                                                    }
                                                } 
                                                else {
                                                    if(this->text.substr(0,3) == "men"){
                                                        this->text = "t" + this->text.substr(3,this->text.size());
                                                    } 
                                                    else {
                                                        if(this->text.substr(2,1) == "l" || this->text.substr(2,1) == "m" || this->text.substr(2,1) == "n" || this->text.substr(2,1) == "r"){
                                                            this->text = this->text.substr(2,this->text.size());
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } 
                                else {
                                    if(this->text.substr(0,2) == "pe"){
                                        this->text = this->text.substr(2,this->text.size());
                                    } 
                                    else {
                                        if(this->text.substr(0,2) == "se"){
                                            this->text = this->text.substr(2,this->text.size());
                                        } 
                                        else {
                                            if(this->text.substr(0,3) == "ter"){
                                                this->text = this->text.substr(3,this->text.size());
                                            }  
                                            else {
                                                if(this->text.substr(0,3) == "eka"){
                                                    this->text = this->text.substr(3,this->text.size());
                                                } 
                                                else {
                                                    if(this->text.substr(0,6) == "ekstra"){
                                                        this->text = this->text.substr(6,this->text.size());
                                                    } 
                                                    else{
                                                        if(this->text.substr(0,3) == "eks"){
                                                            this->text = this->text.substr(3,this->text.size());
                                                        } 
                                                        else {
                                                            if(this->text.substr(0,5) == "intra"){
                                                                this->text = this->text.substr(5,this->text.size());
                                                            }
                                                        }
                                                    }
                                                    this->text = this->text;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }    
                }
            }
        }
    }
}

void Stemming::delSuffix(){
    if(this->text.substr(this->text.size() - 3, 3) == "nda"){
        this->text = this->text.substr(0, this->text.size() - 3);
    }
    else {
        if(this->text.substr(this->text.size() - 3, 3) == "nya"){
            this->text = this->text.substr(0, this->text.size() - 3);
        }
        else {
            if(this->text.substr(this->text.size() - 3, 3) == "lah"){
                this->text = this->text.substr(0, this->text.size() - 3);
            } else {
                if(this->text.substr(this->text.size() - 3, 3) == "kan" && this->text.size() > 5){
                    this->text = this->text.substr(0, this->text.size() - 3);
                }
                else {
                    if(this->text.substr(this->text.size() - 2, 2) == "an" && this->text.size() > 5){
                        this->text = this->text.substr(0, this->text.size() - 2);
                    }
                    else {
                        if(this->text.substr(this->text.size() - 2, 2) == "ku" && this->text.size() > 6){
                            this->text = this->text.substr(0, this->text.size() - 2);
                        } 
                        else {
                            if(this->text.substr(this->text.size() - 2, 2) == "i" && this->text.size() > 6){
                                this->text = this->text.substr(0, this->text.size() - 1);
                            }     
                        }
                    }
                }
            }
        }
    }
}