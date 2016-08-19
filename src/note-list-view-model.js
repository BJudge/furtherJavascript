(function (exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
  }

  NoteListView.prototype.getNoteListInHtml = function () {
    var HTMLString = "<ul>";
    this.notelist.getNotes().forEach(function(note)  {
      console.log(note);
      HTMLString += "<li><div><a href='#" + note.id + note.getText + "'</a></div></li>";
    });
   return HTMLString += "</ul>";
    };

  exports.NoteListView = NoteListView;
})(this);
