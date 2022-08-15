function myFunction() {
   
    alert("Ques 1 : Write code to remove extra white space in between the string ");
    let string = prompt("Enter any string with extra spaces");
    alert("Answer : "+string.trim());
}
function myFunction2() {
    
    alert("Ques 2 : Write a code to Copy an array into another using forEach()");
    var number =prompt("Enter element seprated by space");
    // let ans = Array.from(number);
    let ans = number.split(" ");
    // copy string to another
    let res = [];
    ans.forEach(myCopy);
    function myCopy(item) {
        res.push(item);
    }
    alert("Your string : "+ ans  + "  Copy Array : " + res);
}
function myFunction3() {
    
    alert("Ques 3 : Write a code in JavaScript to Check all Students passed ");
    // let string = prompt("Enter any string with extra spaces");
    let size = prompt("Enter the size of array");
    let res = [];
    let sum = 0;
    while (size-- > 0 ) {
        var num = Number(prompt("Enter number"));
        checkNum(num);
        sum = sum+num;
    }  

    function checkNum(num) {
        while (!/^[0-9]+$/.test(num)) {
            alert("You did not enter a number.");
            answer = prompt("Enter a number: ");
        }
        res.push(num);
        alert("Number added to array");
    }
    alert("Given Array : "+ res);
    sum= sum/size;
    let marksCriteria = prompt("Enter the passing criteria");
    if (sum >= marksCriteria ) {
        alert("Students passed"); 
    }
    else{
        alert("Students failed"); 
    }

}
function myFunction4() {
    
    alert("Ques 4 : Write a code to add an Element at a particular List inside an array");
    var number =prompt("Enter element seprated by space");
    let ans = Array.from(number);
    alert("Current array : "+number);
    var item =prompt("Enter new element");
    ans.push(item);
    alert("New array : "+ ans);
    
}

function myFunction5() {
   
    alert("Ques 5 : Write a code to sort the string in descending order.");
    let string = prompt("Enter any string");
    let ans =Array.from(string);
    ans.sort();
    alert("Answer : "+ ans);
    
}

