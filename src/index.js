document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById("create-task-form")
    form.addEventListener ('submit', function(e){
        e.preventDefault()
        createNewTask(e.target['new-task-description'].value)
    })
})

function createNewTask(newTask){
    const p = document.createElement ('p')
    const btn = document.createElement('button')
    btn.textContent = ' X '
    p.textContent = newTask
    document.getElementById('list').appendChild(p)
    p.appendChild(btn)
    btn.addEventListener('click', deleteTask)
}

function deleteTask(e){
    e.target.parentNode.remove()
}