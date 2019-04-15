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
        frag.appendChild(section);
        //returns the fragment with all the elements contained within.
        return frag
    },

    clearElement(element) {
        //replaces the HTML inside with a blank.
        element.innerHTML = "";
    },
}