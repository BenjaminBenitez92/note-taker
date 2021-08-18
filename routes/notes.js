const notes = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helper/fsUtils');

  notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  notes.post('/', (req, res) => {
      console.log(req.body);

      const { title, text } = req.body;

      if(req.body) {
          const newNotes = {
              title,
              text
          };
          readAndAppend(newNotes,'./db/db.json');
          res.json(`Tip added successfully 🚀`);
      } else {
        res.error('Error in adding tip');
      }


  });
  module.exports = notes;