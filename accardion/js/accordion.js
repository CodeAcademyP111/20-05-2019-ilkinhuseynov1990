var button = document.querySelectorAll(".accordion1");



for (var index = 0; index < button.length; index++) {
    
    button[index].addEventListener("click", function () {
      this.classList.toggle("active");

       var panel = this.nextElementSibling;
       panel.classList.toggle("panelActive");
       
        
    })
}