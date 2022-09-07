import { renderTask, newDatas } from './render';

const noteWrapper = document.querySelector('.note-wrapper');
const project = document.querySelector('#projectName-wrapper');
const projectName = document.querySelector('#projectname');
const addButton = document.querySelector('#addButton');
const cancelButton = document.querySelector('#cancelButton');
const projectContainer = document.querySelector('.task-container-addproject');
const addProject = document.querySelector('#addproject');
let allLink = document.querySelectorAll('a');
let allDiv = document.querySelectorAll('.note-wrapper > div');
let selectCrossButton = document.querySelectorAll('#crossIcon');
allLink[0].classList.add('active-list');

let counter = 0;
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
            projectLinkName.textContent = projectName.value.charAt(0).toUpperCase() + projectName.value.slice(1); // Capitilise the project name
            flexChild.append(sideEditIcon, projectLinkName);
            newLink.append(flexChild, crossIcon);
            project.appendChild(newLink);
            noteWrapper.appendChild(newDiv);
            projectName.value = '';
            newDatas[3].push([]);
        }

       
        for (let k = 0; k < newDatas[3].length; k++) {
            if(typeof newDatas[3][k] === 'number') {
                newDatas[3].splice(k, 1);
                k--;
            }
        }

        allLink = document.querySelectorAll('a');
        allDiv = document.querySelectorAll('.note-wrapper > div');
        selectCrossButton = document.querySelectorAll('#crossIcon');
        linkSelection();
        deleteProjectTask();
        editProjectTask();
        hoverEffect();
        deleteProject();
        clickList();
        completeTask();
    });
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
            newDatas[3].splice(i, 0, i);
            // Delete link when click the cross button
            for ( let j = 3; j < allLink.length; j++) {
                 allLink[3 + i].remove();
            }

            // Delete div when click the link
            for (let k = 3; k < allDiv.length; k++) {
                allDiv[3 + i].remove();
                console.log(allDiv.length);
            }


            counter--;
            console.log(counter);
            console.log("Hi");
            console.log(newDatas[3]);
            console.log(i);
            renderTask();
        };
}

}

function linkSelection() {
    for (let i = 0; i < allLink.length; i++) {
        for (let j = 0; j < allDiv.length; j++) {
            allLink[i].addEventListener('click', function (e) {
                e.preventDefault();
                if (i === j) {
                    allDiv[j].style.display = 'block';
                } else {
                    allDiv[j].style.display = 'none';
                }
            })
        }
    }

}
linkSelection();

function clickList() {
    function removeBackground() {
        for (let i = 0; i < allLink.length; i++) {
            allLink[i].classList.remove('active-list');
        }
    }
 for (let i = 0; i < allLink.length; i++) {
     allLink[i].onclick = function (e) {
        removeBackground();
        allLink[i].classList.add('active-list');
     }
 }
}
clickList();

function completeTask() {
    const checkButtons = document.querySelectorAll('input[type="checkbox"]');
    const titles = document.querySelectorAll('.task-title');
    console.log(checkButtons.length, titles.length);
 for (let i = 0; i < checkButtons.length; i++) {
    console.log(checkButtons[i]);
    checkButtons[i].onclick = function (e) {
        for (let j = 0; j < titles.length; j++) {
            if (i === j) {
        if (checkButtons[i].checked === true) {
                    titles[j].style.textDecoration = 'line-through';
                    titles[j].style.color = "#595959";
                  } else {
                    titles[j].style.textDecoration = 'none';
                    titles[j].style.color = "#212121";
                  }
                }
            } 
}
 }
}

function deleteProjectTask() {
    for (let i = 3; i < allDiv.length; i++) {
        allDiv[i].addEventListener('click', function (e) {
            if (allDiv[i].style.display !== 'none') {
                if (e.target.classList.contains('delete')) {
                    const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                    for (let m = 0; m < newDatas[3].length; m++) {
                        for (let j = 0; j < newDatas[3][m].length; j++) {
                            if (e.target.parentNode.parentNode === currentChild[j]) {
                                for (let k = 0; k < newDatas[0].length; k++) {
                                    if (newDatas[3][m][j].todoId === newDatas[0][k].todoId)
                                        newDatas[0].splice(k, 1);
                                }
                                for (let l = 0; l < newDatas[1].length; l++) {
                                    if (newDatas[3][m][j].todoId === newDatas[1][l].todoId)
                                        newDatas[1].splice(l, 1);
                                }
                                for (let n = 0; n < newDatas[2].length; n++) {
                                    if (newDatas[3][m][j].todoId === newDatas[2][n].todoId)
                                        newDatas[2].splice(n, 1);
                                }
                                if (i === m + 3) {
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

function editProjectTask() {
    const taskAdder = document.querySelector('.task-container-edit');
    const editDate = document.querySelector('#date-edit');
    const editTitle = document.getElementById('title-edit');
    const editPriority = document.getElementById('priority-edit');
    const editTextArea = document.getElementById('description-edit');
    const confirmButton = document.getElementById('confirm-list');
    let todoIdForProject;
    for (let i = 3; i < allDiv.length; i++) {
        allDiv[i].addEventListener('click', function (e) {
            if (allDiv[i].style.display !== 'none') {
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
                                }
                            }

                        }
                    }

                }
                confirmButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    for (let l = 0; l < newDatas[3].length; l++) {
                        for (let m = 0; m < newDatas[3][l].length; m++) {
                            if (todoIdForProject === newDatas[3][l][m].todoId) {
                                console.log(todoIdForProject, newDatas[3][l][m].todoId);
                                if (i === l + 3) {
                                    newDatas[3][l][m].title = editTitle.value;
                                    newDatas[3][l][m].dueDate = editDate.value;
                                    newDatas[3][l][m].priority = editPriority.value;
                                    newDatas[3][l][m].textArea = editTextArea.value;
                                    console.log(newDatas[3][l][m]);
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

addProject.addEventListener('click', function (e) {
    projectContainer.style.display = 'flex';
});

addButton.addEventListener('click', function (e) {
    if(projectName.value !== '') {
        projectContainer.style.display = 'none';
    }
});

cancelButton.addEventListener('click', function (e) {
    e.preventDefault();
    projectName.value = '';
    projectContainer.style.display = 'none';
});



export { allDiv, addNewProject, completeTask };