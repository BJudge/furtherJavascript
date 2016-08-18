(function(exports) {

  function NoteController(listView) {
    this.listView = listView;
  }

  NoteController.prototype._getAppDiv = function(){
    return document.getElementById("app");
  };

  NoteController.prototype.displayNotes = function () {
    this._getAppDiv().innerHTML = this.listView.getNoteListInHtml();
  };

  exports.NoteController = NoteController;

})(this);
