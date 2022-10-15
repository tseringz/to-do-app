import addToArray from './addlist';
import List from './task';
import {  addDays, format, startOfToday } from 'date-fns';
import { completeTask, linkSelection, clickList,  deleteProjectTask } from './project';

let newDatas = addToArray(); 

function getDataFromLocalStorage() {
    if (localStorage.getItem('newList') === null) {
        newDatas = addToArray();
    
    } else {
        newDatas = JSON.parse(localStorage.getItem('newList'));
    } 
}
getDataFromLocalStorage();
// Setup localStorage for rendering lists
function setDataFromLocalStorage() {
    let localData = localStorage.setItem('newList', JSON.stringify(newDatas));
}
setDataFromLocalStorage();


const noteWrapper = document.querySelector('.note-wrapper');
const project = document.querySelector('#projectName-wrapper');
const projectName = document.querySelector('#projectname');
const addButton = document.querySelector('#addButton');
const cancelButton = document.querySelector('#cancelButton');
const projectContainer = document.querySelector('.task-container-addproject');
const addProject = document.querySelector('#addproject');
const taskAdder = document.querySelector('.task-container-edit');
const editDate = document.querySelector('#date-edit');
const editTitle = document.getElementById('title-edit');
const editPriority = document.getElementById('priority-edit');
const editTextArea = document.getElementById('description-edit');
const confirmButton = document.getElementById('confirm-list');
let todoIdForProject;

function createProject(index) {
    const newDiv = document.createElement('div');
    const flexChild = document.createElement('div');
    const newLink = document.createElement('a');
    const sideEditIcon = document.createElement('img');
    const crossIcon = document.createElement('img');
    const projectLinkName = document.createElement('p');

    projectLinkName.style.marginLeft = '10px';
    newDiv.style.display = 'none';
    newDiv.setAttribute('id', `project${0}`);
    newLink.setAttribute('id', `projectLink${0}`);
    newLink.style.padding = '10px';
    sideEditIcon.src = '../src/assets/bulleted-list.png';
    crossIcon.src = '../src/assets/cross.png';
    sideEditIcon.setAttribute('id', 'sideMenu');
    crossIcon.setAttribute('id', 'crossIcon');
    flexChild.style.display = 'flex';
    flexChild.style.flexDirection = 'row';
    counter++;
    projectLinkName.textContent = newDatas[4][index];  // Capitlise the project name
    flexChild.append(sideEditIcon, projectLinkName);
    newLink.append(flexChild, crossIcon);
    project.appendChild(newLink);
    noteWrapper.appendChild(newDiv);
}

function renderProject() {
    for ( let i = 0; i < newDatas[4].length; i++) {
        createProject(i); 
    }
}
renderProject();
  
let allLink = document.querySelectorAll('a');
let allDiv = document.querySelectorAll('.note-wrapper > div');
let selectCrossButton = document.querySelectorAll('#crossIcon');
allLink[0].classList.add('active-list');
let counter = 0;
let isAdded = false;


function addNewProject() {
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (projectName.value !== '') {
            const newDiv = document.createElement('div');
            const flexChild = document.createElement('div');
            const newLink = document.createElement('a');
            const sideEditIcon = document.createElement('img');
            const crossIcon = document.createElement('img');
            const projectLinkName = document.createElement('p');

            projectLinkName.style.marginLeft = '10px';
            newDiv.style.display = 'none';
            newDiv.setAttribute('id', `project${counter}`);
            newLink.setAttribute('id', `projectLink${counter}`);
            newLink.style.padding = '10px';
            sideEditIcon.src = '../src/assets/bulleted-list.png';
            crossIcon.src = '../src/assets/cross.png';
            sideEditIcon.setAttribute('id', 'sideMenu');
            crossIcon.setAttribute('id', 'crossIcon');
            flexChild.style.display = 'flex';
            flexChild.style.flexDirection = 'row';
            counter++;
            newDatas[4].push(projectName.value.charAt(0).toUpperCase() + projectName.value.slice(1));
            projectLinkName.textContent = projectName.value.charAt(0).toUpperCase() + projectName.value.slice(1); // Capitilise the project name
            flexChild.append(sideEditIcon, projectLinkName);
            newLink.append(flexChild, crossIcon);
            project.appendChild(newLink);
            noteWrapper.appendChild(newDiv);
            projectName.value = '';
            newDatas[3].push([]);

        }
  
        for (let k = 0; k < newDatas[3].length; k++) {
            if (typeof newDatas[3][k] === 'number') {
                newDatas[3].splice(k, 1);
                k--;
            }
        }

        allLink = document.querySelectorAll('a');
        allDiv = document.querySelectorAll('.note-wrapper > div');
        selectCrossButton = document.querySelectorAll('#crossIcon');
        isAdded = true;
        linkSelection();
        hoverEffect();
        callEditProject();
        deleteProjectTask();
        deleteProject();
        clickList();
        completeTask();
        setDataFromLocalStorage();
        console.log(selectCrossButton);
    });
}
addNewProject();


function editProjectTask() {

    for (let i = 3; i < allDiv.length; i++) {
        console.log("Hello!");
        allDiv[i].onclick = function(e) {
            console.log('my bad as always');
                console.log(i);
                if (e.target.classList.contains('edit')) {
                    taskAdder.style.display = 'flex';
                    const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                    for (let j = 0; j < newDatas[3].length; j++) {
                        for (let k = 0; k < newDatas[3][j].length; k++) {
                            if (e.target.parentNode.parentNode === currentChild[k]) {
                                if (i === j + 3) {
                                    editTitle.value = newDatas[3][j][k].title;
                                    editDate.value = newDatas[3][j][k].dueDate;
                                    editPriority.value = newDatas[3][j][k].priority;
                                    editTextArea.value = newDatas[3][j][k].textArea;
                                    todoIdForProject = newDatas[3][j][k].todoId;
                                    console.log('my bad');
                                    console.log(e.target.parentNode.parentNode, currentChild[k]);
                                }
                            }

                        }
                    }

                }
                confirmButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    for (let l = 0; l < newDatas[3].length; l++) {
                        for (let m = 0; m < newDatas[3][l].length; m++) {
                            if (i === l + 3) {
                            if (todoIdForProject === newDatas[3][l][m].todoId) {
                                console.log(todoIdForProject, newDatas[3][l][m].todoId);
                                    newDatas[3][l][m].title = editTitle.value;
                                    newDatas[3][l][m].dueDate = editDate.value;
                                    newDatas[3][l][m].priority = editPriority.value;
                                    newDatas[3][l][m].textArea = editTextArea.value;
                                    console.log(newDatas[3][l][m]);        
                            }
                        }
                
                            for (let j = 0; j < newDatas[0].length; j++) {  
                                if (todoIdForProject === newDatas[0][j].todoId) {
                                 console.log(todoIdForProject, newDatas[0][j].todoId);
                                  newDatas[0][j].title = editTitle.value;
                                  newDatas[0][j].dueDate = editDate.value;
                                  newDatas[0][j].priority = editPriority.value; 
                                  newDatas[0][j].textArea = editTextArea.value;
                                }
                            }
                        }

                            setDataFromLocalStorage();
                            renderTask();
                        }
                    
                });
        }
    }
}
editProjectTask();

function callEditProject() {
    editProjectTask();
}

function hoverEffect() {
    for (let i = 3; i < allLink.length; i++) {
        for (let j = 0; j < selectCrossButton.length; j++) {
            if (i === j + 3) {
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
hoverEffect();

function deleteProject() {
    for (let i = 0; i < selectCrossButton.length; i++) {
        selectCrossButton[i].onclick = function() {
                for (let m = 0; m < newDatas[3][i].length; m++) {
                    for (let l = 0; l < newDatas[0].length; l++) {
                        if (newDatas[0][l].todoId === newDatas[3][i][m].todoId) {
                            newDatas[0].splice(l, 1);
                        }
                    }

                    for (let l = 0; l < newDatas[1].length; l++) {
                        if (newDatas[1][l].todoId === newDatas[3][i][m].todoId) {
                            newDatas[1].splice(l, 1);
                        }
                    }

                    for (let l = 0; l < newDatas[2].length; l++) {
                        if (newDatas[2][l].todoId === newDatas[3][i][m].todoId) {
                            newDatas[2].splice(l, 1);
                        }
                    }

                    }

            newDatas[3].splice(i, 1);
            // newDatas[3].splice(i, 0, i);
            newDatas[4].splice(i, 1);
            console.log(newDatas[4]);
            setDataFromLocalStorage();
            // Delete link when click the cross button
            for ( let j = 3; j < allLink.length; j++) {
                 allLink[3 + i].remove();
            }

            // Delete div when click the link
            for (let k = 3; k < allDiv.length; k++) {
                allDiv[3 + i].remove();
            }

            counter--;
            allDiv = document.querySelectorAll('.note-wrapper > div');
            selectCrossButton = document.querySelectorAll('#crossIcon');
            allLink = document.querySelectorAll('a');
            renderTask();
            linkSelection();
            hoverEffect();
            deleteProjectTask();
            editProjectTask();
            deleteProject();
            clickList();
            completeTask();
            console.log(selectCrossButton);
        };
}

}
deleteProject();



function createTask(outerIndex, innerIndex) {
    //selecting div container that will contain task list 
    const inbox = document.getElementById('inbox');
    const today = document.getElementById('today');
    const week = document.getElementById('week');
    //creating new Div element that will contain task details
    const newDiv = document.createElement('div');
    const newInnerDivOne = document.createElement('div');
    const newInnerDivTwo = document.createElement('div');
    const checkButton = document.createElement('input');
    const newSpanTitle = document.createElement('span');
    const newSpanPriority = document.createElement('span');
    const newSpanDate = document.createElement('span');
    const newSpanEdit = document.createElement('span');
    const newSpanDelete = document.createElement('img');
    //const deleteIcon = document.createElement('img');

    //adding class to each element
    newDiv.classList.add('list-wrapper');
    newInnerDivOne.classList.add('list-element-one');
    newInnerDivTwo.classList.add('list-element-two');
    checkButton.setAttribute('type', 'checkbox');
    checkButton.classList.add('taskComplete');
    newSpanDelete.classList.add('delete');
    newSpanEdit.classList.add('edit');
    newSpanTitle.classList.add('task-title');

    // adding contents to each element 
    newSpanTitle.textContent = `${ newDatas[outerIndex][innerIndex].title }`;
    newSpanPriority.textContent = `${ newDatas[outerIndex][innerIndex].priority }`;
    newSpanDate.textContent = `${ newDatas[outerIndex][innerIndex].dueDate }`;
    newSpanEdit.textContent = 'Edit';
    newSpanEdit.style.cursor = 'pointer';
    newSpanDelete.style.cursor = 'pointer';
    newSpanDelete.src = "../src/assets/trash-96.png";
    newSpanDelete.style.width = "20px";
    newDiv.append(newInnerDivOne, newInnerDivTwo);
    newInnerDivOne.append(checkButton, newSpanTitle);
    newInnerDivTwo.append(newSpanPriority, newSpanDate, newSpanEdit, newSpanDelete);
    inbox.appendChild(newDiv);
    // controlling which task to go where 
    if (newDatas[outerIndex] === newDatas[1]) {
        today.appendChild(newDiv);
    } else if (newDatas[outerIndex] === newDatas[2]) {
        week.appendChild(newDiv);
    } 
    }

function createProjectTask(outerIndex, innerIndex) {
    if (newDatas[outerIndex] === newDatas[3]) {
      for (let i = 3; i < allDiv.length; i++) {
            for (let k = 0; k < newDatas[3][innerIndex].length; k++) {
                if (i === innerIndex + 3) {
                const newDiv = document.createElement('div');
                const newInnerDivOne = document.createElement('div');
                const newInnerDivTwo = document.createElement('div');
                const checkButton = document.createElement('input');
                const newSpanTitle = document.createElement('span');
                const newSpanPriority = document.createElement('span');
                const newSpanDate = document.createElement('span');
                const newSpanEdit = document.createElement('span');
                const newSpanDelete = document.createElement('img');
    
                //adding class to each element
                newDiv.classList.add('list-wrapper');
                newInnerDivOne.classList.add('list-element-one');
                newInnerDivTwo.classList.add('list-element-two');
                checkButton.setAttribute('type', 'checkbox');
                checkButton.classList.add('taskComplete');
                newSpanDelete.classList.add('delete');
                newSpanDelete.style.cursor = 'pointer';
                newSpanEdit.classList.add('edit');
                newSpanTitle.classList.add('task-title');
                newSpanEdit.style.cursor = 'pointer';
                newSpanDelete.style.cursor = 'pointer';
                newSpanDelete.src = "../src/assets/trash-96.png";
                newSpanDelete.style.width = "20px";

                newSpanTitle.textContent = `${ newDatas[3][innerIndex][k].title }`;
                newSpanPriority.textContent = `${ newDatas[3][innerIndex][k].priority }`;
                newSpanDate.textContent = `${ newDatas[3][innerIndex][k].dueDate }`;
                newSpanEdit.textContent = 'Edit';
                newDiv.append(newInnerDivOne, newInnerDivTwo);
                newInnerDivOne.append(checkButton, newSpanTitle);
                newInnerDivTwo.append(newSpanPriority, newSpanDate, newSpanEdit, newSpanDelete);
                allDiv[i].appendChild(newDiv);
            }
            }
        }
        }
        }

function renderTask() {
    const tasks = document.querySelectorAll('.list-wrapper');
    tasks.forEach(task => {
       task.remove(); 
    });
        
     for (let i = 0; i < newDatas.length - 2; i++) {
    for(let j = 0; j < newDatas[i].length; j++) {
            createTask(i, j);
    };
    };

    for (let i = 3; i < newDatas.length; i++) {
        for(let j = 0; j < newDatas[i].length; j++) {
                createProjectTask(i, j);
        };
        };

    completeTask();
    return tasks;
    
}
renderTask();



(function addTask() {
    const addButtons = document.querySelector('#addtolist');
        addButtons.addEventListener('click', function(e) {
            e.preventDefault();
            let date = startOfToday();
            let weeksDate = addDays(date, 8); // get next week's date to compare with user's selected date
            const newList = List(); // create new to do list when user clicks on the button
            newDatas[0].push(newList); // pushing any data the user add
            date = format(date, 'yyyy-MM-dd');
            weeksDate = format(weeksDate, 'yyyy-MM-dd');
            if (date == newList.dueDate) {
                newDatas[1].push(newList);
            } else if (newList.dueDate > date && newList.dueDate < weeksDate) {
                newDatas[2].push(newList);
            }
            for (let i = 3; i < allDiv.length; i++) {
              if(allDiv[i].style.display !== 'none') {
                for(let j = 0; j < newDatas[3].length; j++) {
                    if(i === j + 3) {
                        newDatas[3][j].push(newList); 
                    }
                }
                
              }
            }
            setDataFromLocalStorage();
            renderTask();
        });
    
})();


export { allDiv, allLink, renderTask, newDatas, setDataFromLocalStorage };
// delete task
// add notification as number of task 
// add to project section
// delete project when all tasks are deleted
// edit task
