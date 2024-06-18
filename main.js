var goluDivs = document.getElementsByClassName('b');

for (var i = 0; i < goluDivs.length; i++) {
  goluDivs[i].addEventListener('mouseover', function() 
  {
    this.style.color = 'red';
    this.style.border = '1px solid red';
    this.style.boxShadow = '2px 2px 7px red';
    this.style.textShadow = '2px 2px 7px red';
    
    
  });

  
}

