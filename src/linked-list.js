const Node = require('./node');

class LinkedList {
  constructor() {
    this.previous = null;
    this.next = null;
    this._head = null;
    this._tail = null;
    this.list = [];
    this.length = 0;
  }

  append(data) {
    if (!this.length) { //===0
      this._head = new Node(data);
      this._tail = new Node(data);
    }
    let node = new Node(data);
    this.list.push(node);
    this.length = this.list.length;
  }

  head() {
    this._head = this.list[0].data;
    return this._head;
  }

  tail() {
    this._tail = this.list[this.list.length-1].data;
    return this._tail;
  }

  at(index) {}

  insertAt(index, data) {}

  isEmpty() {}

  clear() {}

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;
