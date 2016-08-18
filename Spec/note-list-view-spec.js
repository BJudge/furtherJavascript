function noteListViewTest() {
  var list = new NoteList();
  var listview = new noteListView(list);
  if (listview.getNoteListInHtml() === "<ul></ul>") {
  console.log("this has passed");
  } else {
    console.log("this has failed");
  };
  list.storeNote("This is the first note");
  if(listview.getNoteListInHtml() === "<ul><li><div>This is the first note</div></li></ul>") {
    console.log("this has passed");
    } else {
      console.log("this has failed");
    }
    list.storeNote("This is the second note");
    if(listview.getNoteListInHtml() === "<ul><li><div>This is the first note</div></li><li><div>This is the second note</div></li></ul>") {
      console.log("this has passed");
      } else {
        console.log("this has failed");
      }
};
noteListViewTest();
