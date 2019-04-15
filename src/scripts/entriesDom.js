console.log("domManager working")

const domManager = {
    //builds the elements and the content of the journal entry from the passed values.
    buildJournalEntry(date, concepts, entry, mood) {
        //fragment the new elements are added to.
        const frag = document.createDocumentFragment();
        const section = document.createElement("section");
        section.id = "journal--page";
        console.log(date, concepts, entry, mood);
        section.appendChild(buildHTML("Date", "span", date));
        section.appendChild(buildHTML("Concepts", "span", concepts));
        section.appendChild(buildHTML("Entry", "p", entry));
        section.appendChild(buildHTML("Mood", "span", mood));
        section.appendChild(document.createElement("hr"));
        frag.appendChild(section);
        console.log(frag);
        //returns the fragment with all the elements contained within.
        return frag
    },

    clearElement(element) {
        //replaces the HTML inside with a blank.
        element.innerHTML = "";
    },
}