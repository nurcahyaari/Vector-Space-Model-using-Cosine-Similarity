#include<iostream>
#include<iterator>
#include<vector>
#include<fstream>
#include<string.h>
using namespace std;

class Stopword {
    private:
        vector<string> text;
        void readFileFromDb();
    public:
        Stopword(vector<string> text);
        string SearchText();
        
};

Stopword::Stopword(vector<string> text){
    for(int i = 0; i < text.size(); i++){
        this.text.push_back(text);
    }
}

string Stopword::SearchText(){
    ifstream stopwordFile;
    string line;
    bool found;
    stopwordFile.open("./db/stopword.db.txt");
    if (stopwordFile.is_open()){
        while ( getline (stopwordFile,line) ){
            if(line == "mau"){
                found = false;
            }
        }
        stopwordFile.close();
    }
}
