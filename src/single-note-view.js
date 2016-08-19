(function(exports) {
 function noteView (note) {
   this.note = note
 }
 noteView.prototype.getNoteInHTML = function () {
   return "<div>" + this.note.getText() + "</div>"
 };

 exports.noteView = noteView;
})(this);
