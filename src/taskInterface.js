import { allDiv, newDatas, renderTask, setDataFromLocalStorage } from './render'; 

const taskAdder = document.querySelector('.task-container-edit');
const addButton = document.querySelector('.addlist');
const taskEditor = document.querySelector('.task-container');
const crossButton = document.querySelector('.cross');
const crossButton2 = document.querySelector('.cross2');
const addTask = document.querySelector('#addtolist');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');



const taskUI = (function () {
    function deleteTask() {
        for ( let i = 0; i < allDiv.length; i++) {
            allDiv[i].addEventListener('click', function(e){
                if (e.target.classList.contains('delete')) { 
                    const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                      if (i === 0) {
                        for (let i = 0; i < newDatas[0].length; i++) {
                            if (e.target.parentNode.parentNode === currentChild[i]) {
                                for (let j = 0; j < newDatas[1].length; j++) {
                                    if (newDatas[0][i].todoId === newDatas[1][j].todoId)
                                        newDatas[1].splice(j, 1);
                                }

                                for ( let k = 0; k < newDatas[2].length; k++) {
                                    if(newDatas[0][i].todoId === newDatas[2][k].todoId)
                                    newDatas[2].splice(k, 1);
                                }
    
                                for (let l = 0; l < newDatas[3].length; l++) {
                                    for (let m = 0; m < newDatas[3][l].length; m++) {
                                        if (newDatas[0][i].todoId === newDatas[3][l][m].todoId) {
                                            newDatas[3][l].splice(m, 1);
                                        }
                                    }
                                }
                                newDatas[0].splice(i, 1);             
                        }
                    }
                    setDataFromLocalStorage();
                    renderTask();
                      }  else if(i === 1) {
                        for (let i = 0; i < newDatas[1].length; i++) {
                        if (e.target.parentNode.parentNode === currentChild[i]) {
                        for (let j = 0; j < newDatas[0].length; j++) {
                        if(newDatas[1][i].todoId === newDatas[0][j].todoId)
                          newDatas[0].splice(j, 1);
                         }
                         for (let l = 0; l < newDatas[3].length; l++) {
                            for (let m = 0; m < newDatas[3][l].length; m++) {
                                if (newDatas[1][i].todoId === newDatas[3][l][m].todoId) {
                                    newDatas[3][l].splice(m, 1);
                                }
                            }
                        }
                        newDatas[1].splice(i, 1);
                        break;              
                               
                         }
                     }
                     setDataFromLocalStorage();
                    renderTask();
                      } else if(i === 2) {
                       for (let i = 0; i < newDatas[2].length; i++) {
                       if (e.target.parentNode.parentNode === currentChild[i]) {

                        for (let j = 0; j < newDatas[0].length; j++) {
                            if(newDatas[2][i].todoId === newDatas[0][j].todoId)
                            newDatas[0].splice(j, 1); 
                             }

                        for (let l = 0; l < newDatas[3].length; l++) {
                                for (let m = 0; m < newDatas[3][l].length; m++) {
                                    if (newDatas[2][i].todoId === newDatas[3][l][m].todoId) {
                                        newDatas[3][l].splice(m, 1);
                                    }
                                }
                            }

                        newDatas[2].splice(i, 1);
                        break;                     
                     }
                    
                     }
                     setDataFromLocalStorage();
                     renderTask();
                      } 
                    }
    })
    }
    }
    
    function editTask() {
        const editDate = document.querySelector('#date-edit');
        const editTitle = document.getElementById('title-edit');
        const editPriority = document.getElementById('priority-edit');
        const editTextArea = document.getElementById('description-edit');
        const confirmButton = document.getElementById('confirm-list');
        let todoId;
    
        for ( let i = 0; i < allDiv.length; i++) {
            allDiv[i].onclick = function(e) {
                if (e.target.classList.contains('edit')) {
                    taskAdder.style.display = 'flex';
                    const currentChild = e.target.parentNode.parentNode.parentNode.childNodes;
                    if(i === 0) {
                        for (let i = 0; i < newDatas[0].length; i++) {
                            if (e.target.parentNode.parentNode === currentChild[i]) {
                                    editTitle.value = newDatas[0][i].title;
                                    editDate.value = newDatas[0][i].dueDate;
                                    editPriority.value = newDatas[0][i].priority;
                                    editTextArea.value = newDatas[0][i].textArea; 
                                    todoId = newDatas[0][i].todoId;
                                    console.log("Hi!");
                                    // Adding edited data when user clicks on confirm button
                      }
                    } 
                    } else if (i === 1){
                        for (let i = 0; i < newDatas[1].length; i++) {
                            if (e.target.parentNode.parentNode === currentChild[i]) {
                                    editTitle.value = newDatas[1][i].title;
                                    editDate.value = newDatas[1][i].dueDate;
                                    editPriority.value = newDatas[1][i].priority;
                                    editTextArea.value = newDatas[1][i].textArea;   
                                    todoId = newDatas[1][i].todoId;
                     }
        
                    }
    
                    } else if (i === 2) {
                        for (let i = 0; i < newDatas[2].length; i++) {
                            if (e.target.parentNode.parentNode === currentChild[i]) {
                                    editTitle.value = newDatas[2][i].title;
                                    editDate.value = newDatas[2][i].dueDate;
                                    editPriority.value = newDatas[2][i].priority;
                                    editTextArea.value = newDatas[2][i].textArea; 
                                    todoId = newDatas[2][i].todoId;  
                     }
            
                    } 
                    } 
                }
                confirmButton.onclick = function(e) {   
                  e.preventDefault(); 
                  if (i === 0) {
                  for (let j = 0; j < newDatas[0].length; j++) {  
                      if (todoId === newDatas[0][j].todoId) {
                       console.log(todoId, newDatas[0][j].todoId);
                        newDatas[0][j].title = editTitle.value;
                        newDatas[0][j].dueDate = editDate.value;
                        newDatas[0][j].priority = editPriority.value; 
                        newDatas[0][j].textArea = editTextArea.value;
                      }
                        
                        for (let k = 0; k < newDatas[1].length; k++) {
                            if(todoId === newDatas[1][k].todoId) {
                                newDatas[1][k].title = editTitle.value;
                                newDatas[1][k].dueDate = editDate.value;
                                newDatas[1][k].priority = editPriority.value; 
                                newDatas[1][k].textArea = editTextArea.value;
                            }
                           }
                           for (let k = 0; k < newDatas[2].length; k++) {
                            if(todoId === newDatas[2][k].todoId) {
                                newDatas[2][k].title = editTitle.value;
                                newDatas[2][k].dueDate = editDate.value;
                                newDatas[2][k].priority = editPriority.value; 
                                newDatas[2][k].textArea = editTextArea.value;
                            }
                           }

                           for (let l = 0; l < newDatas[3].length; l++) {
                            for (let m = 0; m < newDatas[3][l].length; m++) {
                            if (todoId === newDatas[3][l][m].todoId) {
                                newDatas[3][l][m].title = editTitle.value;
                                newDatas[3][l][m].dueDate = editDate.value;
                                newDatas[3][l][m].priority = editPriority.value; 
                                newDatas[3][l][m].textArea = editTextArea.value;
                                console.table(todoId, newDatas[3][l][m].todoId, newDatas[3][l], newDatas[3][l][m]);
                            }
                            
                           }
                         }
                        }
                        setDataFromLocalStorage();
                        renderTask();
                       
                      } else if (i === 1) {
                        for (let j = 0; j < newDatas[1].length; j++) {  
                            if (todoId === newDatas[1][j].todoId) {
                              console.log(todoId, newDatas[1][j].todoId);
                              newDatas[1][j].title = editTitle.value;
                              newDatas[1][j].dueDate = editDate.value;
                              newDatas[1][j].priority = editPriority.value; 
                              newDatas[1][j].textArea = editTextArea.value;
                            }
                              for ( let k = 0; k < newDatas[0].length; k++) {
                               if (todoId === newDatas[0][k].todoId) {
                                   console.log(todoId, newDatas[0][k].todoId);
                                    newDatas[0][k].title = editTitle.value;
                                    newDatas[0][k].dueDate = editDate.value;
                                    newDatas[0][k].priority = editPriority.value; 
                                    newDatas[0][k].textArea = editTextArea.value;
                             }
                              }
                              for (let l = 0; l < newDatas[3].length; l++) {
                               for (let m = 0; m < newDatas[3][l].length; m++) {
                               if (todoId === newDatas[3][l][m].todoId) {
                                   newDatas[3][l][m].title = editTitle.value;
                                   newDatas[3][l][m].dueDate = editDate.value;
                                   newDatas[3][l][m].priority = editPriority.value; 
                                   newDatas[3][l][m].textArea = editTextArea.value;
                                   console.table(todoId, newDatas[3][l][m].todoId, newDatas[3][l], newDatas[3][l][m]);
                               }
                               
                              }
                            }
                                  }
                                  console.log('Hello!');
                          setDataFromLocalStorage();
                         renderTask();
                          
                     } else if (i === 2) {
                        for (let j = 0; j < newDatas[2].length; j++) {  
                         if (todoId === newDatas[2][j].todoId) {
                           console.log(todoId, newDatas[2][j].todoId);
                           newDatas[2][j].title = editTitle.value;
                           newDatas[2][j].dueDate = editDate.value;
                           newDatas[2][j].priority = editPriority.value; 
                           newDatas[2][j].textArea = editTextArea.value;
                         }
                           for ( let k = 0; k < newDatas[0].length; k++) {
                            if (todoId === newDatas[0][k].todoId) {
                                console.log(todoId, newDatas[0][k].todoId);
                                 newDatas[0][k].title = editTitle.value;
                                 newDatas[0][k].dueDate = editDate.value;
                                 newDatas[0][k].priority = editPriority.value; 
                                 newDatas[0][k].textArea = editTextArea.value;
                          }
                           }
                           for (let l = 0; l < newDatas[3].length; l++) {
                            for (let m = 0; m < newDatas[3][l].length; m++) {
                            if (todoId === newDatas[3][l][m].todoId) {
                                newDatas[3][l][m].title = editTitle.value;
                                newDatas[3][l][m].dueDate = editDate.value;
                                newDatas[3][l][m].priority = editPriority.value; 
                                newDatas[3][l][m].textArea = editTextArea.value;
                                console.table(todoId, newDatas[3][l][m].todoId, newDatas[3][l], newDatas[3][l][m]);
                            }
                            
                           }
                         }
                           
                               }
                               setDataFromLocalStorage();
                              renderTask();
                         }
                         taskAdder.style.display = 'none';
                      };
            };
        }
    }
    
    function openCloseTask() {
        
        addButton.addEventListener('click', function(e) {   
            taskEditor.style.display = 'flex';
        });
        crossButton.addEventListener('click', function(e) {
            taskEditor.style.display = 'none';
        });
        crossButton2.addEventListener('click', function(e) {
            taskAdder.style.display = 'none';
        });
        
        addTask.addEventListener('click', function(e) {
            const titleValue = title.value;
            const descriptionValue = description.value;
            const dateValue = date.value;
            if ( titleValue !== '' && descriptionValue !== '' && dateValue !== '') {
                taskEditor.style.display = 'none';
            }
        });

    }

    return { deleteTask, editTask, openCloseTask };
})();

taskUI.deleteTask();
taskUI.editTask();
taskUI.openCloseTask();

export default taskUI;
