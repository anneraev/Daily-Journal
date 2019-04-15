console.log("journal.js working")

//called after fetching the journals from the api. Is passed the journals as an array to be looped through.
const displayJournals = (journals) => {
    //reference to main display element. To this will be appended all the assembled journal entries once they and their respective HTML tags have been assembled.
    const journalDisplay = document.getElementById("display-container");
    //reference to the fragment that will be added to, ultimately appended to the main display element.
    const journalFrag = document.createDocumentFragment();
    //clear HTML element (entriesDom).
    domManager.clearElement(journalDisplay);
    //loop through each journal
    journals.forEach(journal => {
        //assemble journal entry from the values stored in the keys from the API. Store the assmebled HTML tags in the below variable.
        const journalEntry = domManager.buildJournalEntry(journal.date, journal.concepts, journal.entry, journal.mood, journal.id);
        //append the new HTML to the fragment.
        journalEntry.appendChild(document.createElement("hr"));
        journalFrag.appendChild(journalEntry);
    })

    journalDisplay.appendChild(journalFrag);
}

const filterJournals = (journals, filter) => {
    const filteredJournals = journals.filter(journal => {
        let isMood = false;
        if (journal.mood === filter){
            isMood = true
        }
        return isMood;
    })
    displayJournals(filteredJournals)
}

const deleteJournal = (id) => {
    API.delete(id).then(() => {
        API.getJournals()
    })
}

const editJournal = (fieldId, date, entry, concepts, mood, dataId) => {
    const field = document.getElementById(fieldId);
    domManager.clearElement(field);
    const entryField = domManager.createEntryField(date, entry, concepts, mood, dataId);
    field.appendChild(entryField);
}

const updateJournal = (dateEntry, conceptEntry, entryField, moodEntry, id) => {
    //build object
    //pass to pass to api
    const updatedJournal = {
        date: dateEntry.value,
        concepts: conceptEntry.value,
        entry: entryField.value,
        mood: moodEntry.value
    }
    API.patch(id, updatedJournal).then(() => API.getJournals());
}

searchEntries = (searchString) => {
    API.getJournalEntries().then(entries => {
        return searchedJournals = entries.filter(entry => {
            let searchMatch = false;
            for (value of Object.values(entry)){
                if (typeof value === "string" && value.includes(searchString)){
                    searchMatch = true
                }
            }
            return searchMatch;
        })
    }).then(journals => {
        displayJournals(journals)
    });
}