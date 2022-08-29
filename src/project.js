import { renderTask, newDatas } from './render';

const noteWrapper = document.querySelector('.note-wrapper');
const project = document.querySelector('.projectName-wrapper');
const projectName = document.querySelector('#projectname');
const addButton = document.querySelector('#addButton');
const cancelButton = document.querySelector('#cancelButton');
const projectAdder = document.querySelector('#projectadder');
const addProject = document.querySelector('.addproject');
let allLink = document.querySelectorAll('a');
let allDiv = document.querySelectorAll('.note-wrapper > div');
let selectCrossButton = document.querySelectorAll('#crossIcon');;

let counter = 0;
function addNewProject() {
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
       if(projectName.value !== '') {
        const newDiv = document.createElement('div');
        const flexChild = document.createElement('div');
        const newLink = document.createElement('a');
        const sideEditIcon = document.createElement('img');
        const crossIcon  = document.createElement('img');
        const projectLinkName = document.createElement('p');

        projectLinkName.style.marginLeft = '10px';
        newDiv.style.display = 'none';
        newDiv.setAttribute('id', `project${counter}`);
        newLink.setAttribute('id', `projectLink${counter}`);
        newLink.style.paddingTop = '16px';
        sideEditIcon.src = '../src/assets/bulleted-list.png';
        crossIcon.src = '../src/assets/cross.png';
        sideEditIcon.setAttribute('id', 'sideMenu');
        crossIcon.setAttribute('id', 'crossIcon');
        flexChild.style.display = 'flex';
        flexChild.style.flexDirection = 'row';
        counter++;
        projectLinkName.textContent = projectName.value.charAt(0).toUpperCase() + projectName.value.slice(1); // Capitilise the project name
        flexChild.append(sideEditIcon, projectLinkName);
        newLink.append(flexChild, crossIcon);
        project.appendChild(newLink);
        noteWrapper.appendChild(newDiv);
        projectAdder.style.display = 'none';
        projectName.value =  '';
        newDatas[3].push([]);
    
    }
        allLink = document.querySelectorAll('a');
        allDiv = document.querySelectorAll('.note-wrapper > div');
        selectCrossButton = document.querySelectorAll('#crossIcon');
        console.log(allDiv.length);
        console.log(allLink.length);
        console.log(newDatas[3]);
        linkSelection();
        removeProjectTask();
        editProjectTask();
        hoverEffect();
        deleteProjectTask();
    });
    cancelButton.addEventListener('click', function(e) {
        e.preventDefault();
        projectName.value =  '';
        projectAdder.style.display = 'none';
    });

}
addNewProject();

function hoverEffect() {
    for ( let i = 3; i < allLink.length; i++) {
        for( let j = 0; j < selectCrossButton.length; j++) {
            if( i === j + 3) {
        allLink[i].addEventListener('mouseover', function (e) {
            e.preventDefault();
            selectCrossButton[j].style.display = "block";
        });
        allLink[i].addEventListener('mouseout', function (e) {
            e.preventDefault();
            selectCrossButton[j].style.display = 'none';
        });
    }
}
}
}

function deleteProjectTask() {
    
        for( let j = 0; j < selectCrossButton.length; j++) {
            selectCrossButton[j].addEventListener('click', function (e) {
            e.preventDefault();
            for ( let i = 3; i < allLink.length; i++) {
                if((i - 3) === j) {
                 allLink[i].remove();
                }
            }
            for ( let l = 3; l < allDiv.length; l++) {
                if((l - 3) === j) {
                    allDiv[l].remove();
                   }
            }

            for (let k = 0; k < newDatas[3].length; k++) {
                 newDatas[3].splice(k, 1);
                }

            allLink = document.querySelectorAll('a');
            allDiv = document.querySelectorAll('.note-wrapper > div');
            console.log(allDiv.length);
            console.log(newDatas[3]);
        });
        };
    }

deleteProjectTask();

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
        })
    }
    }

}
linkSelection();

function removeProjectTask() {
    for (let i = 3; i < allDiv.length; i++) {
            allDiv[i].addEventListener('click', function(e) {
         if (allDiv[i].style.display !== 'none') {      
            if(e.target.classList.contains('delete')) { 
                const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                    for (let m = 0; m < newDatas[3].length; m++) {
                        for( let j = 0; j < newDatas[3][m].length; j++) {
                            if (e.target.parentNode.parentNode === currentChild[j]) {
                                for(let k = 0; k < newDatas[0].length; k++) {
                                    if(newDatas[3][m][j].todoId === newDatas[0][k].todoId)
                                        newDatas[0].splice(k, 1);
                                }
                                for(let l = 0; l < newDatas[1].length; l++) {
                                    if(newDatas[3][m][j].todoId === newDatas[1][l].todoId)
                                        newDatas[1].splice(l, 1);
                                }
                                for(let n = 0; n < newDatas[2].length; n++) {
                                    if(newDatas[3][m][j].todoId === newDatas[2][n].todoId)
                                        newDatas[2].splice(n, 1);
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
removeProjectTask();

function editProjectTask() {
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