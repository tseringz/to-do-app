import cachingDom from './domCaching'; // get the value of task 
import task from './task'; // create a new task 
import addlist from './addlist'; // send data to task
import { newDatas } from './render'; // factory function that will generate a task
import { createTask, renderTask } from './render'; 


function removeTask() {
    const taskContainers = Array.from(document.querySelectorAll('.note-wrapper > div'));
    console.log(taskContainers.length);

 // iterate through each task container and remove when user clicks on delete button
    taskContainers.forEach(taskContainer => {
        taskContainer.addEventListener('click', function(e){
            if(e.target.classList.contains('delete')) { 
                const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                const count = currentChild.length;
                console.log(currentChild);
                //loop through each grid child
               for ( let i = 0; i < count; ++i) {
                if (e.target.parentNode.parentNode === currentChild[i]) {
                    newDatas[1].splice(i, 1);
                    break;              
           
            }
        }
        e.target.parentNode.parentNode.remove();   
        console.log(newDatas[0]);
    }

        });

    });
    
}
removeTask();

export default removeTask;








