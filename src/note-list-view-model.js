(function (exports) {

function noteListView(notelist) {
  this.notelist = notelist;
}

noteListView.prototype.getNoteListInHtml = function () {
  var HTMLString = "<ul>";
  this.notelist.getNotes().forEach(function(note)  {
    HTMLString += "<li><div>" + note +"</div></li>";
  });
 return HTMLString += "</ul>";
};
  exports.noteListView = noteListView;
})(this);
