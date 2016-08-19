function noteCanTakeText () {
 var note = new Note('Hello');
  if (note.getText() !== 'Hello') {
    throw new Error ('This test has failed');
  } else {
    console.log('This test has passed');
  }
}
noteCanTakeText();


function uniqueID() {
 var note = new Note("This is a damn good note");
 var note2 = new Note( " This note is even better");
 var testText = "uniqueID test has";


  if (note.id !== 2) {
    console.log(testText + ' failed');
  } else {
    console.log(testText + ' passed');
  }

  if (note2.id !== 3) {
    console.log(testText + ' 2 failed');
  } else {
    console.log(testText + ' 2 passed');
  }

};

uniqueID();
