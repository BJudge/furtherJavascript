(function (exports) {

  function Note(text) {
    this.noteText = text;
  }

  Note.prototype.getText = function() {
    return this.noteText;
  };

    exports.Note = Note;
})(this);
