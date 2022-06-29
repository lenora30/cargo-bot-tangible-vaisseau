var close = document.getElementsByClassName("close");
var title = document.getElementsByClassName("title");
var regles = document.getElementById("regles");

for (let i = 0; i < title.length; i++) {
    title[i].onclick = function () {
        this.parentElement.classList.toggle("close");
        this.parentElement.classList.toggle("open");
    };
}



// title_close.addEventListener('click', function(){
//     console.log("hello");
// });

