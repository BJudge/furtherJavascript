function noteListViewTest() {
  var list = new NoteList();
  var listview = new NoteListView(list);
  var note = new Note("This is the first note");
  var note2 = new Note("This is the second note");

  if (listview.getNoteListInHtml() === "<ul></ul>") {
  console.log("this has passed");
  } else {
    console.log("this has failed");
  };

  // list.storeNote(note);
  // if(listview.getNoteListInHtml() === "<ul><li><div>This is the first note</div></li></ul>") {
  //   console.log("this has passed");
  // } else {
  //     console.log("this has failed");
  //   }
  //
  // list.storeNote(note2);
  // if(listview.getNoteListInHtml() === "<ul><li><div>This is the first note</div></li><li><div>This is the second note</div></li></ul>") {
  //   console.log("this has passed");
  //   } else {
  //     console.log("this has failed");
  //   }
};
noteListViewTest();

function displayShortNoteBeginningTest() {
  var list = new NoteList();
  var listview = new NoteListView(list);
  var note = new Note("123456789 123456789 123456789 123456789 1");
  list.storeNote(note);
  if(listview.getNoteListInHtml() === "<ul><li><div>123456789 123456789 </div></li></ul>") {
    console.log(" slices 20 characters this has passed");
  } else {
      console.log(" slices 20 characters this has failed");
    }

};
displayShortNoteBeginningTest();
