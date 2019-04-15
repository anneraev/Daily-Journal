console.log("buildHTML working");

//accepts element type, content, id, class. Builds HTML element.
const buildHTML = (title, type, content, id, className) => {
    const newElement = document.createElement(type);
    newElement.classList.add("journal--subentry")
    if (title) {
        newElement.classList.add(`${title}`)
    }
    if (title) {
        newElement.innerHTML = `<h4>${title}: </h4>`;
    }
    newElement.innerHTML += `<p>${content}</p>`;
    if (id) {
        newElement.id = id
    };
    if (className) {
        newElement.classList.add(className);
    }
    return newElement;
}