import { renderTask, newDatas } from './render';

const noteWrapper = document.querySelector('.note-wrapper');
const project = document.querySelector('.project-wrapper');
const projectName = document.querySelector('#projectname');
const addButton = document.querySelector('#addButton');
const cancelButton = document.querySelector('#cancelButton');
const projectAdder = document.querySelector('#projectadder');
const addProject = document.querySelector('.addproject');
let allLink = document.querySelectorAll('a');
let allDiv = document.querySelectorAll('.note-wrapper > div');

let counter = 0;

function addNewProject() {
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        if(projectName.value !== '') {
        const newLink = document.createElement('a');
        const newDiv = document.createElement('div');
        newDiv.style.display = 'none';
        newLink.setAttribute('id', `projectLink${counter}`);
        newLink.style.paddingTop = '16px';
        newDiv.setAttribute('id', `project${counter}`);
    
        newLink.textContent = projectName.value.charAt(0).toUpperCase() + projectName.value.slice(1); // Capitilise the project name
        project.insertBefore(newLink, project.children[counter + 1]);
        noteWrapper.appendChild(newDiv);
        projectAdder.style.display = 'none';
        counter++;
        projectName.value =  '';
        newDatas[3].push([]);
    
    }
        allLink = document.querySelectorAll('a');
        allDiv = document.querySelectorAll('.note-wrapper > div');
        console.log(allDiv.length);
        linkSelection();
        removeProject();
        editProject();
    });
    cancelButton.addEventListener('click', function(e) {
        e.preventDefault();
        projectName.value =  '';
        projectAdder.style.display = 'none';

    });
}
addNewProject();
function linkSelection() {
    for(let i = 0; i < allLink.length; i++) {
        for(let j = 0; j < allDiv.length; j++) {
            allLink[i].addEventListener('click', function(e) {
                e.preventDefault();
                if( i === j) {
                allDiv[j].style.display = 'block'; 
                } else {
                    allDiv[j].style.display = 'none';
                }
                console.log(allLink[i]);  
        })
    }
    }

}
linkSelection();

function removeProject() {
    for (let i = 3; i < allDiv.length; i++) {
            allDiv[i].addEventListener('click', function(e) {
         if (allDiv[i].style.display !== 'none') {      
            if(e.target.classList.contains('delete')) { 
                const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                console.log(currentChild);
                    for (let m = 0; m < newDatas[3].length; m++) {
                        for( let j = 0; j < newDatas[3][m].length; j++) {
                            if (e.target.parentNode.parentNode === currentChild[j]) {
                                for(let k = 0; k < newDatas[0].length; k++) {
                                    if(newDatas[3][m][j].todoId === newDatas[0][k].todoId)
                                        newDatas[0].splice(k, 1);
                                }
                                if(i === m + 3) {
                                newDatas[3][m].splice(j, 1);
                                }
                        }
                            console.log(newDatas[3]);
                        
                    }
                }
                renderTask();
                  } 
         }
            });
        }
    }
removeProject();

function editProject() {
    const taskAdder = document.querySelector('.task-container-edit');
    const editDate = document.querySelector('#date-edit');
    const editTitle = document.getElementById('title-edit');
    const editPriority = document.getElementById('priority-edit');
    const editTextArea = document.getElementById('description-edit');
    const confirmButton = document.getElementById('confirm-list');
    let todoId;

    for( let i = 3; i < allDiv.length; i++) {
        allDiv[i].addEventListener('click', function(e){
            if (allDiv[i].style.display !== 'none') {      
            if(e.target.classList.contains('edit')) {
                taskAdder.style.display = 'flex';
                const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                console.log(currentChild);
        for (let m = 0; m < newDatas[3].length; m++) {
            for( let j = 0; j < newDatas[3][m].length; j++) {
            if (e.target.parentNode.parentNode === currentChild[j]) {
                if(i === m + 3) {
                    editTitle.value = newDatas[3][m][j].title;
                    editDate.value = newDatas[3][m][j].dueDate;
                    editPriority.value = newDatas[3][m][j].priority;
                    editTextArea.value = newDatas[3][m][j].textArea; 
                    todoId = newDatas[3][m][j].todoId;  
                
        }
    }

    } 
}
    
        }
        confirmButton.addEventListener('click', function(e) {   
            e.preventDefault(); 
            for(let j = 0; j < newDatas[3].length; j++) {  
                for( let k = 0; k < newDatas[3][j].length; k++) {
                if(todoId === newDatas[3][j][k].todoId) {
                 console.log(todoId, newDatas[3][j][k].todoId);
                 if(i === j + 3) {
                  newDatas[3][j][k].title = editTitle.value;
                  newDatas[3][j][k].dueDate = editDate.value;
                  newDatas[3][j][k].priority = editPriority.value; 
                  newDatas[3][j][k].textArea = editTextArea.value;
                  console.log(newDatas[3][j][k]);
                  renderTask();
                   }
                }
                }
                 }
            });
            }
    });
}
}

addProject.addEventListener('click', function(e) {
    projectAdder.style.display = 'flex';
});

export { allDiv, addNewProject };