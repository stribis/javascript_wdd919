/* This script is being linked to the HTML using the 'defered' attribute */
/* Regardless of it being on the head of the HTML, it will wait for the DOM to be loaded before executing any code */
/* Additionally the loading of the scripts takes place in parallel to the loading of the DOM, not blocking any of the rendering */

// DUMMY FUCTION - makes a console log, and inserts an element into the HTML
function deferedScript( ){
  console.log('Defered script is running')
  const div = document.createElement('div')
  div.innerHTML = 'Defered'
  document.querySelector('body').appendChild(div)
}

deferedScript()