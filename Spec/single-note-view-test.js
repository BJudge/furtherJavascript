function workingSingleViewTest () {
var note = new Note("this is a single note");
var singleview = new noteView(note);

if (singleview.getNoteInHTML() === "<div>" + note.getText() + "</div>") {
  console.log("this test has passed");
} else {
  console.log("this test has failed");
}

};

workingSingleViewTest ();
