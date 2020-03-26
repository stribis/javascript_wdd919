let todoList = new Array;
getTodos()

function getTodos () {
  if( localStorage.getItem('todos')){
    todoList = JSON.parse(localStorage.getItem('todos'))

    popList()

  }else{
    return 'You do not have any todos \nclick the "+" button'
  }
}

function addTodo () {
  const newTodo = document.querySelector('#addinput').value

  if (newTodo){
    const todoObj = {
      text : newTodo,
      complete : false
    }

    todoList.push(todoObj)
    // write new todolist in localstorage
    localStorage.setItem('todos', JSON.stringify(todoList))
    popList()

  }else{
    return 'You must write something in the box'
  }
}

function popList () {
  // delete the currentList
  const list = document.querySelector('#list')
  list.innerHTML = ''
  // Create new items in the list
  if (todoList){
    todoList.forEach(todo =>{
      const condition = todo.complete
      const todoWrapper = document.createElement('div')
      todoWrapper.classList.add('todoWrapper')
      todoWrapper.innerHTML = `
      <div class="todoText">${todo.text}</div>
      <div class="todoCheck ${condition == false ? 'false' : ''}" ></div>
      `

      list.appendChild(todoWrapper)

    })
  }
}

function updateBoxes () {
  boxes = document.querySelectorAll('.todoCheck')
  boxes.forEach((box, i) => {
    box.classList.toggle('false')
    if (box.classList.contains('false')){
    // this box should be set to false in the array
      
    }else{
    // this box should be set to true in the array

    }
  })
}