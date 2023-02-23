const fs= require('fs');

const loadNotes = ()=>{
    const buffer = fs.readFileSync('./notes.json');
    const dataStr = buffer.toString();
    const obj = JSON.parse(dataStr);
    return obj;
}

const addNotes = (title, author)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>note.title===title)
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            author:author
        })
    }
    else console.log("Note title already exist");
    saveNotes(notes);
}

const saveNotes= (notes) => {
    const dataStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataStr);
}

module.exports = {addNotes}