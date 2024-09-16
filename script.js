const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function(){
  let value = navbarLinks.classList.contains('navbar__collapse')

  if (value) {
    navbarLinks.classList.remove('navbar__collapse')
    navbarBtn.classList.remove('change')
  }
  else {
    navbarLinks.classList.add('navbar__collapse')
    navbarBtn.classList.add('change')
  }
})



const slideRow = document.querySelector('.testRow');
const slideItems =document.getElementsByClassName('testItem');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');


let index = 1;
var width;

function slideWidth(){
    width = slideItems[0].clientWidth;
}
window.addEventListener('resize', slideWidth)
slideWidth();
window.addEventListener('resize', slideWidth);
slideRow.style.transform = 'translateX('+(- width * index) + 'px)';


nextBtn.addEventListener('click', nextSlide);
function nextSlide() {
    if (index >= slideItems.length - 1){return};
    slideRow.style.transition = 'transform 0.4s ease-out';
    index ++;
    slideRow.style.transform = 'translateX('+(- width * index) + 'px)';
    indicators();
}

prevBtn.addEventListener('click', prevSlide);
function prevSlide() {
    if (index <= 0){return};
    slideRow.style.transition = 'transform 0.4s ease-out';
    index --;
    slideRow.style.transform = 'translateX('+(- width * index) + 'px)';
    indicators();
}

slideRow.addEventListener('transitionend', returnfunction);
function returnfunction(){
   if (slideItems[index].id==='firstSlideDuplicate'){
    slideRow.style.transition = 'none';
    index = slideItems.length - index; 
    slideRow.style.transform = 'translateX('+(- width * index) + 'px)';
    indicators();
}

   if (slideItems[index].id==='lastSlideDuplicate'){
    slideRow.style.transition = 'none';
    index = slideItems.length - 2; 
    slideRow.style.transform = 'translateX('+(- width * index) + 'px)';
    indicators();
}

   }

   function indicators(){
     for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
     }

     dots[index - 1].className += ' active';
   }

   function autoSlide(){
     deleteInterval = setInterval(timer, 3000);
     function timer(){
             nextSlide();
             indicators();
     }
   }

   autoSlide();

   const btns = document.querySelectorAll('.buttons span');
   btns[0].addEventListener('mouseover', pause);
   btns[1].addEventListener('mouseover', pause);
   function pause(){
    clearInterval(deleteInterval);
   }

   btns[0].addEventListener('mouseout', autoSlide);
   btns[1].addEventListener('mouseout', autoSlide);




   const year = new Date().getFullYear();
const newYear = `1 Jan ${year +1}`;
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function countDown(){
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;
  console.log(totalSeconds)
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const days = Math.floor((totalSeconds) /(3600*24));

  day.innerHTML = FormatTime(days);
  hour.innerHTML =  FormatTime(hours);
  min.innerHTML =   FormatTime(minutes);
  sec.innerHTML = FormatTime(seconds);

  function FormatTime(time){
    return time < 10 ? `0${time}` : time;
  }
}


countDown();
setInterval(countDown, 1000);




const animationDuration = 2000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round( animationDuration / frameDuration );

const easeOutQuad = t => t * ( 2 - t );


const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );

	const counter = setInterval( () => {
		frame++;
	
		const progress = easeOutQuad( frame / totalFrames );
	
		const currentCount = Math.round( countTo * progress );

	
		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

	
		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};


const runAnimations = () => {
	const countupEls = document.querySelectorAll( '.countup' );
	countupEls.forEach( animateCountUp );
};



function myFunction() {
  var x = document.getElementById("show");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// 