#include <iostream>
#include <fstream>
#include <cstdlib>

using namespace std;

void ShowHeader();
void search_id();
void input_to_file();
void get_data_of_file();
void ListStudent();

struct Student{
    int id;
    char name[50];
    float marks;
    char result;
};
Student group[50];
int count=0;

int main() {
    system("color 5");
    bool t= true;
    while (t){
        ShowHeader();
        int n;
        cout<<"Enter Choice: ";
        cin>>n;

        switch (n) {
            case 1:
                input_to_file();
                break;
            case 2:
                get_data_of_file();
                break;
            case 3:
                search_id();
                break;
            case 4:
                ListStudent();
                break;
            case 5:
                t= false;
                break;
            default:
                cout<<"Wrong Choice Clicked!!!";
        }
    }
    return 0;
}
void ShowHeader(){
    cout<<"------------------------------------------------------"<<endl;
    cout<<"----------        Student Data Base         ----------"<<endl;
    cout<<"------------------------------------------------------"<<endl;
    cout<<"1 : Student Entry"<<endl;
    cout<<"2 : Student List to File"<<endl;
    cout<<"3 : Search"<<endl;
    cout<<"4 : Show Record Students"<<endl;
    cout<<"5 : Exit"<<endl;
    cout<<"------------------------------------------------------"<<endl;
}
void search_id(){
    int n;
    int loc=1;
    cout<<"Enter Id : ";
    cin>>n;

    for(int i=0;i<count;i++){
        if(n==group[count].id){
            loc=i;
            break;
        }
    }
    if(loc==-1){
        cout<<"Record Not Found !!!"<<endl;
    }else{
        cout<<"Name : "<<group[loc].name<<endl;
    }
}
void input_to_file(){
    ofstream z;
    z.open("C://Users//Tajer//Desktop//CLion Codes//C++ Course//Projects - 1 File//Files//StudentReport.txt",ios::app);
    if(z.is_open()){
        int n;
        cout<<"Enter Number of Student you Want to Add"<<endl;
        cin>>n;
        for(int i=0;i<=n;i++){
            cout<<"Information about Student #"<<i<<endl;
            cout<<"ID : ";      cin>>group[count].id;
            cout<<"Name : ";    cin>>group[count].name;
            cout<<"Marks : ";   cin>>group[count].marks;

            z<<"#"<<i+1<<endl;
            z<<group[count].id<<endl<<group[count].name<<endl<<group[count].marks<<endl;
             count++;
        }
        z.close();
    }else{
        cout<<"File Creating was Not Successfully";
    }
}

void get_data_of_file(){
    ifstream z;
    z.open("C://Users//Tajer//Desktop//CLion Codes//C++ Course//Projects - 1 File//Files//StudentReport.txt",ios::in);
    if(z.is_open()){
        Student s;
        int c=1;
        count-0;
        cout<<"s.number\tid\t\tname\t\t   marks\t\t\t"<<endl;
        cout<<"--------------------------------------"<<endl;

        while ( z >> group[count].id >> group[count].name >> group[count].marks ){
            cout<<c<<"\t\t"<<group[count].id<<"\t\t\t"<<group[count].name<<"\t\t\t"<<group[count].marks<<endl;
            ++c;
            count++;
        }
        z.close();
    }else{
        cout<<"File Open Error !!!"<<endl;
    }
}
void ListStudent(){
    cout<<"*******************************************"<<endl;
    for(int i=0;i<count;i++){
        cout<<group[i].id<<"\t"<<group[i].name<<"\t"<<group[i].marks<<endl;
        cout<<"*******************************************"<<endl;
    }
}