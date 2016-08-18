function testNoteController() {
  var newList = new NoteList();
  var newView = new noteListView(newList);
  var newController = new NoteController(newView);
  if (newController.listView === newView) {
    console.log('testNoteController 01: This test has passed');
  } else {
    console.log('testNoteController 01: This test has failed');
  }

  newList.storeNote('Favourite Drink: Seltzer');
  var element = document.createElement('div',{id: "app"});
  newController._getAppDiv = function() {
    return element;
  };
  newController.displayNotes();
  if (newController._getAppDiv().innerHTML === newView.getNoteListInHtml()) {
    console.log('testNoteController 02: This test has passed');
  } else {
    console.log('testNoteController 02: This test has failed');
  }
}

testNoteController();
