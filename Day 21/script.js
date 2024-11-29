
const review= document.getElementById("insert");

function appendToDisplay(input){
    review.value += input;
}
function clearDisplay(){
    review.value = "";
}
function calculate(){
    try{
         review.value = eval(review.value)
    }
   catch (error){
    review.value = "Error"
   }
}