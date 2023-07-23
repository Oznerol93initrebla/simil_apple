


// elements
var elements_to_watch = document.querySelectorAll('.watch');
// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("in-page");
    } else{
      item.target.classList.remove("in-page");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.6 } ); //quando elemento è nello schermo del 60%
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});




// select icon hamburger , when click it shows the menu

let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function() {
  document.body.classList.toggle('menu--open');
});
