// created a function called displaySum and added it to my btn tag 
//so that when click it displays the commands
function displaySum() {
    // used to declared a constant variable
    const sum1 =
        //parsefloat is used to parses/extract an argument from html to js and return a real number be it a string or decimal
        //doc.getEleId is used to reference an id in html and .value is used to extract value
        parseFloat(document.getElementById("num").value)
    const sum2 =
        parseFloat(document.getElementById('addNum').value)
    // if the input isn't a number then this line of code will display the enter a valid number
    //.innerhtml is used to send a message from Js to Html 
    if (isNaN(sum1) || isNaN(sum2)) {
        document.getElementById('message').innerHTML = 'Please enter a valid number';
        //return is used to send back a response to Js
        return;
    }
    const totalSum = sum1 + sum2;
    document.getElementById('message').innerHTML = 'Total sum :' + totalSum;
    // this is to output the totalsum of the values extracted.  
}