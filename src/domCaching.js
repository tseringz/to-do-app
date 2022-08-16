function cachingDom() {
    const date = document.getElementById('date');
    const priority = document.getElementById('priority');
    const textArea = document.getElementById('description');
    const title = document.getElementById('title');
    const todoId = Date.now().toString();
    return { todoId, date, priority, textArea, title };
}
export default cachingDom;