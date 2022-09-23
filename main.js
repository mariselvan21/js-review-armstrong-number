var number=parseInt(prompt("enter multiple digit number"));
var temp=number;

var noOfDigits=0;
var lastDigit;
while(temp>=1){
    noOfDigits=noOfDigits+1;
    lastDigit=temp%10;
    temp=temp-lastDigit;
    temp=temp/10;
}
temp=number;

var sum=0;
while(temp>=1){
    lastDigit=temp%10;
    temp=temp-lastDigit;
    temp=temp/10;
    var multiplyValue=1;
    for(i=1;i<=noOfDigits;i++)
    {
        multiplyValue=multiplyValue*lastDigit;
    }
    sum=sum+multiplyValue;
}
if(sum==number)
{
    console.log('It is an armstrong number');
}
else{
    console.log('It is not an armstrong number');
}