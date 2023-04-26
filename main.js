const navIconEl=document.querySelector('.nav--icon');
const navCloseEl=document.querySelector('.nav--close');
const navList=document.querySelector('.nav--list');
const navBgOverlayEl=document.querySelector('.nav--bgOverlay');

const navOpen=()=>{
  navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style='visibility:visible; height:100vh; width: 100wh; overflow: hidden;';
}
const navClose=()=>{
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style='visibility: visible; height: initial; width: 100%;overflow-x: hidden; ';


}
navIconEl.addEventListener('click',navOpen);
navCloseEl.addEventListener('click',navClose);
navBgOverlayEl.addEventListener('click',navClose);




//food eat ideas

const btnOne=document.querySelector('.btn-one');
const btnTwo=document.querySelector('.btn-two')
const btnThree=document.querySelector('.btn-three')


const fast=document.querySelector('.foodEatingInfo-wrapper-fast')
const healthy=document.querySelector('.foodEatingInfo-wrapper-healthy')
const popular=document.querySelector('.foodEatingInfo-wrapper-popular')

btnOne.addEventListener('click',displayOne)

btnTwo.addEventListener('click',displayTwo)
btnThree.addEventListener('click',displayThree)


function displayOne(){
  if(fast.classList.contains('show-1')){
    fast.classList.remove('show-1')
  }else{
    fast.classList.add('show-1')
    healthy.classList.remove('show-2')
    popular.classList.remove('show-3')
  }
}

function displayTwo(){
  if(healthy.classList.contains('show-2')){
    healthy.classList.remove('show-2')
  }else{
    healthy.classList.add('show-2')
    fast.classList.remove('show-1')
    popular.classList.remove('show-3')
  }
}


function displayThree(){
  if(popular.classList.contains('show-3')){
    popular.classList.remove('show-3')
  }else{
    popular.classList.add('show-3')
    fast.classList.remove('show-1')
    healthy.classList.remove('show-2')
  }
}