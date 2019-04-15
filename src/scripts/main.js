console.log("main.js working");

//posts current journals to DOM when page loads.
API.getJournals();

//variable containing reference to the button element.
const submitButton = document.getElementById("submitbtn")

//event listener for the submit button.
submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    //gathers data and creates a journal entry.
    createJournal();
});

const radioField = document.getElementById("journal--filter");

radioField.addEventListener("click", event => {
    if (event.target.name === "filter"){
        const filter = event.target.value
        API.getJournalEntries().then(response => filterJournals(response, filter));
    }
})

const searchTextBox = document.getElementById("journal--search");

searchTextBox.addEventListener("keypress", event => {
    if (event.keyCode ===  13){
        searchEntries(searchTextBox.value);
    }
})