// KSortable plugin useing html5 DnD API start
var KSortable = (() => {
  var KSortable = function ({target = null} = {}) {
    var elems = target.children;

    this.dragElem;
    this.init(elems);
  }

  KSortable.prototype = (function() {
    function _handlerDragStart(e) {
      this.dragElem = e.target;

      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.innerHTML);
    }

    function _handlerDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
    }

    function _handlerDrop(e) {
      this.dragElem.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData("text/html");
    }

    function init (elems, only) {
      [].forEach.call(elems, (elem) => {
        elem.addEventListener("dragstart", this._handlerDragStart.bind(this));
        elem.addEventListener("dragover", this._handlerDragOver.bind(this));
        elem.addEventListener("drop", this._handlerDrop.bind(this));
      });
    }

    function update (elem) {
      elem.addEventListener("dragstart", this._handlerDragStart.bind(this));
      elem.addEventListener("dragover", this._handlerDragOver.bind(this));
      elem.addEventListener("drop", this._handlerDrop.bind(this));
    }

    return {
      init,
      update,
      _handlerDragStart,
      _handlerDragOver,
      _handlerDrop
    };
  })();

  return KSortable;
})();
// KSortable plugin useing html5 DnD API end

// user code start
function addUser () {
  document.querySelector(".add-user form").addEventListener("submit", (e) => {
    e.preventDefault();

    var value = e.target.querySelector("#user-name").value;
        value = value.trim();
        value = value.length == 0 ? null : value;

    if(value === null) return;

    var newElem = document.createElement("li");
        newElem.setAttribute("draggable", true);
        newElem.innerHTML = value;

    e.target.querySelector("#user-name").value = "";
    document.querySelector(".user-list ul").appendChild(newElem);

    // update events for new elements
    sortableList1.update(newElem);
  });
}

addUser();

// turn on KSortable plugin
var sortableList1 = new KSortable({
  target: document.getElementById("sortable-list-1")
});
// user code end
