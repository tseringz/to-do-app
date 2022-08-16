import cachingDom from './domCaching'; // get the value of task 
import task from './task'; // create a new task 
import addlist from './addlist'; // send data to task
import { newDatas, createTask, renderTask } from './render'; // factory function that will generate a task
import List from './task';


const projectButton = document.querySelector('#addtoproject');
const noteWrapper = document.querySelector('.note-wrapper');
const project = document.querySelector('.project-wrapper');
const projectName = document.querySelector('#projectname');
const addButton = document.querySelector('#addButton');
const projectAdder = document.querySelector('#projectadder');
const addProject = document.querySelector('.addproject');
let allLink = document.querySelectorAll('a');
let allDiv = document.querySelectorAll('.note-wrapper > div');

let counter = 0;
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(projectName.value !== '') {
    const newLink = document.createElement('a');
    const newDiv = document.createElement('div');
    newDiv.style.display = 'none';
    newLink.setAttribute('id', `projectLink${counter}`);
    newDiv.setAttribute('id', `project${counter}`);

    newLink.textContent = projectName.value.charAt(0).toUpperCase() + projectName.value.slice(1); // Captilise the project name
    project.insertBefore(newLink, project.children[counter + 1]);
    noteWrapper.appendChild(newDiv);
    projectAdder.style.display = 'none';
    counter++;
    projectName.value =  '';

    console.log(allLink.length);
    console.log(allDiv.length);
}
    allLink = document.querySelectorAll('a');
    allDiv = document.querySelectorAll('.note-wrapper > div');
});

    for(let i = 0; i < allLink.length; i++) {
        for(let j = 0; j < allDiv.length; j++) {
            allLink[i].addEventListener('click', function(e) {
                e.preventDefault();
                if( i === j) {
                console.log(allDiv[j]);
                console.log(allLink[i]);
                allDiv[j].style.display = 'block'; 
                } else {
                    allDiv[j].style.display = 'none';
                }
                console.log(allLink[i]);
                
        })
    }
    }


addProject.addEventListener('click', function(e) {
    projectAdder.style.display = 'flex';

});


