// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
int secontinarray(int arr[],int size)
{
    int a=arr[0];
    int b=arr[0];
    for(int i=0;i<size;i++)
    {
        if(arr[i]>a)
        {
            b=a;
            a=arr[i];
        }
        if(arr[i]<a && arr[i]>b)
        {
            b=arr[i];
        }
    }
    return b;
}
int main() {
    cout << "size of array: ";
    int size;
    cin >> size;

    int* arr = new int[size]; 
    int sum=0;
    cout << "Enter array elements:\n";
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
        sum+=arr[i];
    }
    int sec=secontinarray(arr,size);
    cout<<"Second max : "<<sec;

    return 0;
}