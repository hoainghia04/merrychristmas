var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')

boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    // boxContent.classList.add('active')
}
content.onclick = function(){
    boxContent.classList.add('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.right = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 6 }s`;
  snowflake.style.animationDelay = `${Math.random()}s`;
  document.body.appendChild(snowflake);
}

function createSnowflakes() {
  const snowflakes = 1; 
  
  for (let i = 0; i < snowflakes; i++) {
    setTimeout(createSnowflake, i * 100); 
  }
}

window.addEventListener('load', () => {
  createSnowflakes();
  setInterval(createSnowflake, 100); 
});

/////////////////
