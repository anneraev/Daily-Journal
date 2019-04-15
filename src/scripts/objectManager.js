console.log("objectManager working");

//journal entry object constructor function
const JournalEntry = function (date, concepts, entry, mood) {
    this.date = date;
    this.concepts = concepts;
    this.entry = entry;
    this.mood = mood;
}