console.log("buildHTML working");

//accepts element type, content, id, class. Builds HTML element.
const buildHTML = (title, type, content, id, className) => {
    const newElement = document.createElement(type);
    newElement.classList.add("journal--subentry")
    newElement.classList.add(`${title}`)
    console.log("content", content);
    newElement.innerHTML = `<h4>${title}: </h4>`;
    newElement.innerHTML += `<p>${content}</p>`;
    if (id) {
        newElement.id = id
    };
    if (className) {
        newElement.classList.add(className);
    }
    console.log(newElement);
    return newElement;
}