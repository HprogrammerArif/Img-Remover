/*               BASIC COVER

document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
}, false)

document.getElementById('cat2').addEventListener('click', function(e){
    console.log("Click the Cat");
    e.stopPropagation(); //for preveent default
}, false) //bubbling

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    console.log("Google Clicked");
}, false) */

document.querySelector('#images').addEventListener
('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
    removeIt.remove();
    }
    
})
