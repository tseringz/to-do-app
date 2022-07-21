function cachingDom() {
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const textArea = document.getElementById('description').value;
    const title = document.getElementById('title').value;
    const todoId = Date.now().toString();
    return { todoId, date, priority, textArea, title };
}
export default cachingDom;