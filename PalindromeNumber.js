function palindromeNumber(number)
{
    var remainder, temp, reversedNumber = 0;
    temp = number;
    
    while(number > 0)
    {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber*10 + remainder;
    }
    if(reversedNumber == temp)
    {
        console.log("The number is Palindrome");
    }
    else
    {
        console.log("The number is not palindrome");
    }
}

palindromeNumber(16461)
