const API = {
    //gets journals from API. Stored in object APIfetch.
    getJournalEntries() {
        return fetch("http://localhost:8088/journalEntries")
            .then(response => response.json())
    },
    //parses journals then passes the array of journal objects to a function that will iterate through them and add HTML before posting them to the DOM.
    getJournals() {
        console.log("fetching journals")
        API.getJournalEntries().then(parsedJournals => {
            displayJournals(parsedJournals);
        })
    },
    //posts new journal object to database.
    postToDatabase(newJournal) {
        return fetch("http://localhost:8088/journalEntries", {
                method: "POST",
                body: JSON.stringify(newJournal),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
    },
    delete: (id) => {
        return fetch(`http://localhost:8088/journalEntries/${id}`, {
            //method
            method: "DELETE",
        })
    },
    patch: (id, object) => {
        return fetch(`http://localhost:8088/journalEntries/${id}`, {
            //method
            method: "PATCH",
            //required metadata.
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(object)
        })
    }

}