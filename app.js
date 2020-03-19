const chalk = require('chalk');
const notes = require('./notes.js') ;
const yargs = require('yargs');
yargs.version('1.1.0')


//add 
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder:{
      title:{
          describe : 'Note title',
          demandOption : true,
          type :'string'
      },
      body:{
          describe : 'Body of note',
          demandOption : true,
          type : 'string'
      }
    },
    handler : function(argv){
      notes.addnotes(argv.title,argv.body);
    }
})
//remove
yargs.command({
    command : 'remove',
    describe : 'Remove a existing note',
    builder:{
        title:{
            describe : 'Note title',
            demandOption : true,
            type :'string'
        }
    },
    handler : function(argv){
        notes.removenotes(argv.title);
    }
})
//read
yargs.command({
    command : 'read',
    describe : 'Read a note',
    builder:{
        title:{
            describe : 'Note title',
            demandOption : true,
            type :'string'
        },
    },
    handler : function(argv){
      notes.readnotes(argv.title); 
    }
})
//list
yargs.command({
    command : 'list',
    describe : 'list out the notes',
    handler : function(){
        notes.listnotes();
    }
})


yargs.parse()