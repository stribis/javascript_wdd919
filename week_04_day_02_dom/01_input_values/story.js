/** Using what you know about reading input fields and managing event do the following:
 * Create a story,, the story does not really need to make any sence, but some parts of the story will be user defined
 * Give the user 5 inputs and make them answer five questions. Put the answers of the user somewhere in your story.
 * For example. Question asked: What is your favorite person, User responce Ana. You can use Ana as your main character for the 
 * story.
 * 
 * You have to show the user the complete story by putting it in the document. You can also highlight the parts that were inputed
 * by the user.
 */
document.querySelector('#submit').addEventListener('click', function(e){
  e.preventDefault()

  const enemy = document.querySelector('#enemy').value
  const hero = document.querySelector('#hero').value
  const item = document.querySelector('#item').value
  const fruit = document.querySelector('#fruit').value
  const age = document.querySelector('#age').value

  let template = `
  Once upon a time there was a person called <span class="storyItem">${enemy}</span>.
  He was walking through the woods and found an <span class="storyItem"> ${item}</span> under a <span class="storyItem">${fruit}</span> tree.
  When grabing the item <span class="storyItem">${enemy}</span> was to find out that the item transformed into <span class="storyItem">${hero}</span>
  <span class="storyItem">${hero}</span> then punched him in the face <span class="storyItem">${age}</span> times!
  ` 

  let p = document.createElement('p')
  p.innerHTML = template
  document.querySelector('body').appendChild(p)
  

})