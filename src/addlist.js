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
import { addDays, addMonths, format, addYears, startOfDay,  subDays } from 'date-fns';
const date = new Date();
const tomorrow = addDays(date, 1);
const dateFormatted = format(date, "MM/dd/yyyy");

console.log(date);
console.log(tomorrow);
console.log(dateFormatted);

const addList = ( function(){
    const inbox = [];
    const today = [];
    const week = [];

    function List(addlist) {
        return {
            textArea: "Your description",
            priority: "Low",
            dueDate: "2/07/2022",
            addList: 'Add to project'
        }
    }
    
    const newList = List('Add to project');
    console.log(newList.textArea);
    console.log(newList);

    const btnClick = document.querySelector('#jokeBtn');
    
    btnClick.addEventListener('click', function(e) {
        e.preventDefault();
        inbox.push(newList);
        console.log(inbox);
    });
})();










