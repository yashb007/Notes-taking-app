const fs = require('fs');
const chalk = require('chalk');

//adding
const addnotes= function(title,body){
 const notes = loadnotes();

 const duplicate = notes.filter(function(notes){
        return notes.title==title;
 }
 )
 if(duplicate.length==0){
 notes.push({
     title:title,
     body : body
 })
 savenotes(notes);
 console.log("New notes added");
  }
  else{
      console.log("notes already taken")
  }
}

//saving
const savenotes = function(notes){
    const datajson = JSON.stringify(notes);
fs.writeFileSync('notes.json',datajson);
}

//loading
const loadnotes=function ()  {
try{
    const databuffer = fs.readFileSync('notes.json');
    const datajson = databuffer.toString();
    return JSON.parse(datajson);
}
catch(e){
    return []
}
}

//removing
const removenotes= function(title){
    const notes = loadnotes();
    const notremove = notes.filter(function(notes){
        return notes.title!==title;}
    )
    if(notes.length==notremove.length){
       console.log(chalk.bgRed("No notes to delete"));
    }
    else{
    savenotes(notremove);
    console.log(chalk.bgGreen(" Notes deleted"));
    }
}

//listing
const listnotes= function(){
    const notes = loadnotes();
     console.log("Your notes titles are :");
    notes.forEach((notes) => {
        console.log( notes.title);
      
    })
    
}

//reading
const readnotes = (title) => {
    const notes = loadnotes();
  const note = notes.find((notes) => notes.title===title)
  
  if(note){
      console.log(note.body);
  }
  else{
      console.log("Your notes doesnot found");
  }
}
//exporting
module.exports = {
    addnotes : addnotes,
    removenotes : removenotes,
    listnotes: listnotes,
    readnotes : readnotes,
}