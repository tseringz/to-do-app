import { createTask, renderTask, newDatas } from './render';

const noteWrapper = document.querySelector('.note-wrapper');
const project = document.querySelector('.project-wrapper');
const projectName = document.querySelector('#projectname');
const addButton = document.querySelector('#addButton');
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
    });
}

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


addProject.addEventListener('click', function(e) {
    projectAdder.style.display = 'flex';
});

export { allDiv, addNewProject };