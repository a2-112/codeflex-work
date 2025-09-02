
const review= document.getElementById("insert");
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


function appendToDisplay(input){
    review.value += input;
    history();
}
function clearDisplay(){
    review.value = "";
    history();
}
function deleteDisplay(){
    review.value = review.value.slice(0, -1);
}
function calculate(){
    try{
         review.value = eval(review.value)
    }
   catch (error){
    review.value = "Error"
   }
}


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});