(function (exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
  }

  NoteListView.prototype.getNoteListInHtml = function() {
    var HTMLString = "<ul>";
    this.notelist.getNotes().forEach(function(note)  {
      var noteText = note.getText();
      HTMLString += "<li><div>" + noteText.slice(0,20) +"</div></li>";
    });
   return HTMLString += "</ul>";
  };
  
  exports.NoteListView = NoteListView;
})(this);
