import addToArray from './addlist';
import List from './task';
import {  addDays, format, isToday, isTomorrow,  startOfToday } from 'date-fns';
import project from './project';


export const newDatas = addToArray();

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

function renderTask() {
    const tasks = document.querySelectorAll('.list-wrapper');
    tasks.forEach(task => {
       task.remove(); 
    });

    for (let i = 0; i < newDatas.length; i++) {
    for(let j = 0; j < newDatas[i].length; j++) {
        createTask(i, j);
    };
}
 return tasks;
}
renderTask();

function addTask() {
    const addButtons = document.querySelector('#addtolist');
    const listOfProjects = document.querySelector('.project-wrapper > a');
    const projectContainers = document.querySelector('.note-wrapper');
        addButtons.addEventListener('click', function(e) {
            e.preventDefault();
            let date = startOfToday();
            console.log(date);// get todays date to compare with user's selected date
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

            renderTask();
        });
    
}
addTask();
export { createTask, renderTask };
// delete task
// add notification as number of task 
// add to project section
// delete project when all tasks are deleted
// edit task
