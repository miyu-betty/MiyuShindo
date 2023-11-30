'use strict';

var img　= new Array("images/ginza41.jpeg",
                     "images/ikebukuro11.jpg",
                     "images/ogikubo11.jpg",
                     "images/shibuya31.jpg",
                     "images/shinjuku21.jpg");
var element = document.getElementById("slideshow");
var count = -1;
imgTimer();

function imgTimer(){
  count++;
  if(count == img.length) count = 0;
  element.src = img[count];
  setTimeout("imgTimer()",5000);
}
