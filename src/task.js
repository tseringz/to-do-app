
import domCaching from './domCaching';
function List() {
    // Instantiate domCaching function with destructuring method
    const { todoId, date, priority, textArea, title } = domCaching();
    return {
        todoId: todoId,
        title: title.value,
        textArea: textArea.value,
        priority: priority.value,
        dueDate: date.value
    }
}

export default List;