import { allDiv, allLink, renderTask, newDatas, setDataFromLocalStorage  } from './render';

const noteWrapper = document.querySelector('.note-wrapper');
const project = document.querySelector('#projectName-wrapper');
const projectName = document.querySelector('#projectname');
const addButton = document.querySelector('#addButton');
const cancelButton = document.querySelector('#cancelButton');
const projectContainer = document.querySelector('.task-container-addproject');
const addProject = document.querySelector('#addproject');


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
 for (let i = 0; i < checkButtons.length; i++) {
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
completeTask();

function deleteProjectTask() {
    for (let i = 3; i < allDiv.length; i++) {
        allDiv[i].addEventListener('click', function (e) {
            if ( allDiv[i].style.display !== 'none') {
                if (e.target.classList.contains('delete')) {
                    const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                    for ( let m = 0; m < newDatas[3].length; m++) {
                        for ( let j = 0; j < newDatas[3][m].length; j++) {
                            if ( e.target.parentNode.parentNode === currentChild[j]) {
                                for ( let k = 0; k < newDatas[0].length; k++) {
                                    if ( newDatas[3][m][j].todoId === newDatas[0][k].todoId )
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
                    setDataFromLocalStorage();
                    renderTask();
                }
            }
        });
    }
}
deleteProjectTask();

addProject.addEventListener('click', function (e) {
    projectContainer.style.display = 'flex';
});

addButton.addEventListener('click', function (e) {
    if (projectName.value !== '') {
        projectContainer.style.display = 'none';
    }
});

cancelButton.addEventListener('click', function (e) {
    e.preventDefault();
    projectName.value = '';
    projectContainer.style.display = 'none';
});

console.log(allLink);
export { completeTask, linkSelection, clickList, deleteProjectTask };