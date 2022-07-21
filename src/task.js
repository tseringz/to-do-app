
import domCaching from './domCaching';
function List() {
    // Instantiate domCaching function with destructuring method
    const { todoId, date, priority, textArea, title } = domCaching();
    return {
        todoId: todoId,
        title: title,
        textArea: textArea,
        priority: priority,
        dueDate: date
    }
}

export default List;