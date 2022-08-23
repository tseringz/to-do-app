// self contain modules
// everything to do with my module is in my module
// no global variable
// if a module manages more than one thing it should split into multiple
// separation of concerns 
// Dry code -  Don't repeat yourself 
// efficient DOM usage 
// very few selections 
// no memory leaks
// all event can be unbound
import List from './task';
import { addDays, format, isToday, isTomorrow,  startOfToday } from 'date-fns';

function addToArray(){
        
    const inbox = [
        {
            todoId: '1658394469179',
            title: 'You are fucked up',
            textArea: 'You deserve more',
            priority: 'Medium',
            dueDate: '2022-07-17'
        },
        {   
        todoId: '1658394644503',
        title: 'I don\'t give a fuck',
        textArea: 'You deserve more',
        priority: 'Low',
        dueDate: '2022-07-17'
    },
    {   
        todoId: '1658394665510',
        title: 'this is cool',
        textArea: 'You deserve more',
        priority: 'Low',
        dueDate: '2022-07-17'
    },
    {
        todoId: '1658394693442',
        title: 'this is cool',
        textArea: 'You deserve more',
        priority: 'Low',
        dueDate: '2022-07-17'
    },
    { 
    todoId: '1658394723438',
    title: 'this is cool',
    textArea: 'You deserve more',
    priority: 'Low',
    dueDate: '2022-07-17'
},
{   todoId: '1658394745255',
    title: 'this is not cool',
    textArea: 'You deserve more',
    priority: 'Low',
    dueDate: '2022-07-17'
}];

    const today = [{
        todoId: '1658394469179',
        title: 'You are fucked up',
        textArea: 'You deserve more',
        priority: 'Medium',
        dueDate: '2022-07-17'
    },
    {   
    todoId: '1658394644503',
    title: 'I don\'t give a fuck',
    textArea: 'You deserve more',
    priority: 'Low',
    dueDate: '2022-07-17'
},
{   
    todoId: '1658394665510',
    title: 'this is cool',
    textArea: 'You deserve more',
    priority: 'Low',
    dueDate: '2022-07-17'
}];
    const week = [{
        todoId: '1658394693442',
        title: 'this is cool',
        textArea: 'You deserve more',
        priority: 'Low',
        dueDate: '2022-07-17'
    },
    { 
    todoId: '1658394723438',
    title: 'this is cool',
    textArea: 'You deserve more',
    priority: 'Low',
    dueDate: '2022-07-17'
},
{   todoId: '1658394745255',
    title: 'this is not cool',
    textArea: 'You deserve more',
    priority: 'Low',
    dueDate: '2022-07-17'
}];

const projects = [];
    return [ inbox, today, week, projects ];
};

export default addToArray;

// function someFunc(arg) {
//     alert(arg.foo);
//     alert(arg.bar);
// }

// someFunc({foo: "This", bar: "works!"});


