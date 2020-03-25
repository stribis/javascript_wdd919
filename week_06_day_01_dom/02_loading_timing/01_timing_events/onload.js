/* We can use window.onload, to wait for the while window to load before executing any code */

/* Don't mix-up DOMContentLoaded with window onload, the DOMContentLoaded event ONLY wait's for the DOM to be built, and it executes */
/* Window.onload will wait for other elements to be loaded as well */
window.onload = function(){
  whenWindowLoads()
}

function whenWindowLoads(){
  console.log('onload event has take place')
  const div = document.createElement('div')
  div.innerHTML = 'window'
  document.querySelector('body').append(div)
}