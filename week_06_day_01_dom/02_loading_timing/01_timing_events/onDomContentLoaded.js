/* We can use the event DOM Content loaded, to wait for the DOM to properly load, before executing any code */

/* Don't mix-up DOMContentLoaded with window onload, the DOMContentLoaded event ONLY wait's for the DOM to be built, and it executes */
/* Window.onload will wait for other elements to be loaded as well */
document.addEventListener("DOMContentLoaded", function(){
  whenDomIsLoaded()
})

function whenDomIsLoaded (){
  console.log('The DOM is loaded!')
  const div = document.createElement('div')
  div.innerHTML = 'Dom'
  document.querySelector('body').appendChild(div)
}