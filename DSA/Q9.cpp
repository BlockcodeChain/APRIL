// multiplication of matrix

#include<iostreaam>
using namespace std;
int main(){
    cout<<"enter matrix 1:";
    int arr1[3][2];
    int arr1[2][3];
 for(int i=0;i<3;i++){
    for(int j=0;j<2;j++){
        cin>>arr1[i][j];
    }
 }
 cout<<"enter matrix 2:";
 for(int i=0;i<2;i++){
    for(int j=0;j<3;j++){
        cin>>arr2[i][j];
    }
 }
 int res[3][3];
 for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        res[i][j]=arr1[i][j]*arr2[j][i];
    }
 }
}