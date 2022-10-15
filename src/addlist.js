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
const projectName = [];
const projects = [];
    return [ inbox, today, week, projects, projectName ];
};

export default addToArray;



