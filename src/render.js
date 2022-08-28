import addToArray from './addlist';
import List from './task';
import {  addDays, format, startOfToday } from 'date-fns';
import { allDiv, addNewProject } from './project';

let newDatas = addToArray();
addNewProject();
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
    const newSpanDelete = document.createElement('span');

    //adding class to each element
    newDiv.classList.add('list-wrapper');
    newInnerDivOne.classList.add('list-element-one');
    newInnerDivTwo.classList.add('list-element-two');
    checkButton.setAttribute('type', 'checkbox');
    checkButton.classList.add('taskComplete');
    newSpanDelete.classList.add('delete');
    newSpanEdit.classList.add('edit');

    // adding contents to each element 
    newSpanTitle.textContent = `${ newDatas[outerIndex][innerIndex].title }`;
    newSpanPriority.textContent = `${ newDatas[outerIndex][innerIndex].priority }`;
    newSpanDate.textContent = `${ newDatas[outerIndex][innerIndex].dueDate }`;
    newSpanEdit.textContent = 'Edit';
    newSpanDelete.textContent = 'Delete';
    newDiv.append(newInnerDivOne, newInnerDivTwo);
    newInnerDivOne.append(checkButton, newSpanTitle);
    newInnerDivTwo.append(newSpanPriority, newSpanDate, newSpanEdit, newSpanDelete);
    inbox.appendChild(newDiv);
    // controlling which task to go where 
    if(newDatas[outerIndex] === newDatas[1]) {
        today.appendChild(newDiv);
    } else if(newDatas[outerIndex] === newDatas[2]) {
        week.appendChild(newDiv);
    } 
    }

function createProjectTask(outerIndex, innerIndex) {
    if (newDatas[outerIndex] === newDatas[3]) {
        console.log('Yeah!');
      for(let i = 3; i < allDiv.length; i++) {
            for(let k = 0; k < newDatas[3][innerIndex].length; k++) {
                if (i === innerIndex + 3) {
                console.log(newDatas[3][innerIndex].length);
                const newDiv = document.createElement('div');
                const newInnerDivOne = document.createElement('div');
                const newInnerDivTwo = document.createElement('div');
                const checkButton = document.createElement('input');
                const newSpanTitle = document.createElement('span');
                const newSpanPriority = document.createElement('span');
                const newSpanDate = document.createElement('span');
                const newSpanEdit = document.createElement('span');
                const newSpanDelete = document.createElement('span');
    
                //adding class to each element
                newDiv.classList.add('list-wrapper');
                newInnerDivOne.classList.add('list-element-one');
                newInnerDivTwo.classList.add('list-element-two');
                checkButton.setAttribute('type', 'checkbox');
                checkButton.classList.add('taskComplete');
                newSpanDelete.classList.add('delete');
                newSpanDelete.style.cursor = 'pointer';
                newSpanEdit.classList.add('edit');
                newSpanTitle.textContent = `${ newDatas[3][innerIndex][k].title }`;
                newSpanPriority.textContent = `${ newDatas[3][innerIndex][k].priority }`;
                newSpanDate.textContent = `${ newDatas[3][innerIndex][k].dueDate }`;
                newSpanEdit.textContent = 'Edit';
                newSpanDelete.textContent = 'Delete';
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
        
     for (let i = 0; i < newDatas.length - 1; i++) {
    for(let j = 0; j < newDatas[i].length; j++) {
            createTask(i, j);
    };
    };

    for (let i = 3; i < newDatas.length; i++) {
        for(let j = 0; j < newDatas[i].length; j++) {
                createProjectTask(i, j);
        };
        };
    return tasks;
}
renderTask();

function addTask() {
    const addButtons = document.querySelector('#addtolist');
        addButtons.addEventListener('click', function(e) {
            e.preventDefault();
            let date = startOfToday();
            let weeksDate = addDays(date, 8); // get next week's date to compare with user's selected date
            const newList = List(); // create new to do list when user clicks on the button
            newDatas[0].push(newList); // pushing any data the user add
            console.log(newDatas[0]);
            date = format(date, 'yyyy-MM-dd');
            console.log(date);
            weeksDate = format(weeksDate, 'yyyy-MM-dd');
            if(date == newList.dueDate) {
                newDatas[1].push(newList);
            } else if (newList.dueDate > date && newList.dueDate < weeksDate) {
                newDatas[2].push(newList);
            }

            for(let i = 3; i < allDiv.length; i++) {
              if(allDiv[i].style.display !== 'none') {
                for(let j = 0; j < newDatas[3].length; j++) {
                    if(i === j + 3) {
                        newDatas[3][j].push(newList);   
                        console.log(j);
                    }
                }
                
              }
            }

            console.log(newDatas);
            console.log(allDiv.length);
            renderTask();
        });
    
}
addTask();
export { createTask, renderTask, newDatas, createProjectTask };
// delete task
// add notification as number of task 
// add to project section
// delete project when all tasks are deleted
// edit task
