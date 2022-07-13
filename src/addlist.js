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

const addList = ( function(){
    const inbox = [];
    const today = [];
    const week = [];

    function List(newToDo) {
        newToDo = {
            textArea: function() {
                return this.priority;
            },
            priority: "Low",
            dueDate: "2/07/2022",
            addList: "Add to my list"
        };
    
        return { newToDo }; 
    }
    
    const newList = List();
    console.log(newList.newToDo.textArea());
    const btnClick = document.querySelector('#jokeBtn');
    
    btnClick.addEventListener('click', function(e) {
        e.preventDefault();
        inbox.push(newList);
        console.log(inbox);
    });
})();










