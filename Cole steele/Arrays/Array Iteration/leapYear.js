function leapYearCalc(year){
    if((year % 4 == 0) && (year % 100 !=0) || year % 400 == 0)
    {
        console.log("Yes");
    } else{
        console.log("No");
    }
}

leapYearCalc(2024);