let thumbnails = document.getElementsByClassName('test')
let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('click', function(){
        console.log(activeImages)
        console.log(thumbnails)
        
        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
           
//             	document.getElementById("par").textContent="Hello World";
// "Hello World"
        }
        

        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}

