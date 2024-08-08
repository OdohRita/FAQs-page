var questitle = document.getElementsByClassName('questitle');
var plus = document.getElementsByClassName('plus')
var minus = document.getElementsByClassName('minus')
var i;
for (i = 0; i< questitle.length; i++ ){
    questitle[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var quesContent = this.nextElementSibling;
        if (quesContent.style.display === "block"){
            quesContent.style.display = "none";

        }
        else{
            quesContent.style.display = "block";            
        }
        
    })
}