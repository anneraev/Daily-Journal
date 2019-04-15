console.log("domManager working")

const domManager = {
    //builds the elements and the content of the journal entry from the passed values.
    buildJournalEntry(date, concepts, entry, mood, id) {
        //fragment the new elements are added to.
        const frag = document.createDocumentFragment();
        const section = document.createElement("section");
        section.id = `journal--page--${id}`;
        section.appendChild(buildHTML("Date", "span", date));
        section.appendChild(buildHTML("Concepts", "span", concepts));
        section.appendChild(buildHTML("Entry", "p", entry));
        section.appendChild(buildHTML("Mood", "span", mood));
        //delete button
        const journalDelete = document.createElement("button");
        journalDelete.setAttribute("id", "journalDelete");
        journalDelete.textContent = "Delete";
        journalDelete.addEventListener("click", event => {
            const id = event.target.parentNode.id
            console.log(id);
            const idArray = id.split("--")
            const journalId = idArray[2];
            console.log(journalId);
            deleteJournal(journalId);
        })
        section.appendChild(journalDelete);
        //edit button
        const journalEdit = document.createElement("button");
        journalEdit.setAttribute("id", "journalEdit");
        journalEdit.textContent = "Edit";
        journalEdit.addEventListener("click", event => {
            const id = event.target.parentNode.id
            editJournal(id, date, entry, concepts, mood);
        })
        section.appendChild(journalEdit);
        frag.appendChild(section);
        //returns the fragment with all the elements contained within.
        return frag
    },

    clearElement(element) {
        //replaces the HTML inside with a blank.
        element.innerHTML = "";
    },

    createEntryField(date, entry, concepts, mood) {
        const fieldFrag = document.createDocumentFragment();
        const dateEntry = document.createElement("input");
        dateEntry.setAttribute("type","date");
        dateEntry.value = date;
        const entryField = document.createElement("textarea");
        entryField.value = entry
        const conceptEntry = document.createElement("input")
        conceptEntry.setAttribute("type","text");
        conceptEntry.value = concepts
        const moodEntry = document.createElement("select")
        const option1 = document.createElement("option")
        const option2 = document.createElement("option")
        const option3 = document.createElement("option")
        const option4 = document.createElement("option")
        const option5 = document.createElement("option")
        const option6 = document.createElement("option")
        option1.value = "Happy"
        option1.textContent = "Happy"
        option2.value = "Sad"
        option2.textContent = "Sad"
        option3.value = "Confused"
        option3.textContent = "Confused"
        option4.value = "Frustrated"
        option4.textContent = "Frustrated"
        option5.value = "Optimistic"
        option5.textContent = "Optimistic"
        option6.value = "Solipsistic"
        option6.textContent = "Solipsistic"
        moodEntry.appendChild(option1)
        moodEntry.appendChild(option2)
        moodEntry.appendChild(option3)
        moodEntry.appendChild(option4)
        moodEntry.appendChild(option5)
        moodEntry.appendChild(option6)
        moodEntry.value = mood;
        fieldFrag.appendChild(dateEntry)
        fieldFrag.appendChild(conceptEntry)
        fieldFrag.appendChild(entryField)
        fieldFrag.appendChild(moodEntry)
        return fieldFrag;
    }
}