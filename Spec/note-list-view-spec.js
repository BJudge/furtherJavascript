function NoteListViewTest() {
  var list = new NoteList();
  var listview = new NoteListView(list);
  var note1 = new Note("This is the first note");
  var note2 = new Note("This is the second note");

  function emptyList() {
    if (listview.getNoteListInHtml() === "<ul></ul>") {
    console.log("this has passed");
    } else {
      console.log("this has failed");
    };
  }
 emptyList();

  function noteInList() {

    list.storeNote(note1);
    if(listview.getNoteListInHtml() === "<ul><li><div><a href='#" + note1.id + "'This is the first note</a></div></li></ul>") {
       console.log("this has passed");
       } else {
         console.log("this has failed");
       }

    list.storeNote(note2);
    if(listview.getNoteListInHtml() === "<ul><li><div><a href='#" + note2.id + "'This is the second note</a></div></li></ul>") {
       console.log("this has passed");
       } else {
         console.log("this has failed");
       }
  }
  noteInList();
 };
NoteListViewTest();
