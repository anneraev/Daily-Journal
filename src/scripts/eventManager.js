console.log("eventManager working")

//function that creates a new journal entry with info passed by event listener, then pushes that entry into the journals array.
const createJournalEntry = (date, concepts, entry, mood) => {
    const newJournal = new JournalEntry(date, concepts, entry, mood);
    return newJournal;
}

const createJournal = () => {
    //data to be passed defined here.
    const date = document.getElementById("journalDate");
    const concepts = document.getElementById("journalConcepts");
    const entry = document.getElementById("journalEntry");
    const mood = document.getElementById("currentMood");
    //pass data to function that calls object constructor.
    const journalEntry = createJournalEntry(date.value, concepts.value, entry.value, mood.value);
    //passes journal entry to the API function that adds it to the database.
    //
    API.postToDatabase(journalEntry).then(() => API.getJournals());
    date.value = ""
    concepts.value = ""
    entry.value = ""
    mood.value = ""
}