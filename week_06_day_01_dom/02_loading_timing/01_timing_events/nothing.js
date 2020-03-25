/* There is nothing special about this script 
   It is being loaded in the head before the DOM is properly loaded, the console.log() woll happen but the 
   DOM manipulation will not, since we don't have access to 'body' yet
*
*/
function nothingSpecial(){
  console.log('this is the normal behaviour!')
  const div = document.createElement('div')
  div.innerHTML = 'nothing'
  document.querySelector('body').appendChild(div)
} 

nothingSpecial()