document.addEventListener('DOMContentLoaded', (e) => {
  let dcl = document.querySelector('.dcl span')
  dcl.innerHTML = 'DONE!'
  dcl.style.color = 'lime'
})

window.addEventListener('load', (e) => {
  let load = document.querySelector('.load span')
  load.innerHTML = 'DONE!'
  load.style.color = 'lime'
});