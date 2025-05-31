#include <iostream>
using namespace std;
int subarr(int arr[], int size, int k) 
{
    int start = 0, end = 0;
    int currSum = 0;
    int maxLen = 0;

    for(end;end<size;end++)
    {
        currSum += arr[end];
        while (currSum > k && start <= end) 
        {
            currSum -= arr[start];
            start++;
        }
        if (currSum == k) 
        {
            maxLen = max(maxLen, end - start + 1);
        }
    } 
    return maxLen;
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
    int k;
    cout<<"k =";
    cin>>k;
    int len =subarr(arr,size,k);
    cout<<"maxlength ="+len;
    return 0;
}
