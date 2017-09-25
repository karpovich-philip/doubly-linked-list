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
    if (!this.length) {
      this._head = new Node(data);
      this._tail = new Node(data);
    }
    let node = new Node(data);
    this.list.push(node);
    this.length = this.list.length;
  }

  head() {
    let pos = this.list[0];
    if (pos) {
      this._head = pos.data;
      return this._head;
    } else
      return null
  }

  tail() {
    let pos = this.list[this.list.length-1];
    if (pos) {
      this._tail = pos.data;
      return this._tail;
    } else
      return null
  }

  at(index) {
    let i = this.list.find(function(el, ind) {
      return index === ind ? el : false;
    })
    return i.data;
  }

  insertAt(index, data) {
    let i = this.list.find(function(el, ind) {
      return index === ind ? el : false;
    })
    i.data = data;
  }

  isEmpty() {
    return !this.list.length
  }

  clear() {
    this.list = [];
    this.length = 0;
  }

  deleteAt(index) {
    this.list.splice(index, 1);
  }

  reverse() {
    this.list = this.list.reverse();
  }

  indexOf(data) {
    return this.list.indexOf(data)
  }
}

module.exports = LinkedList;
