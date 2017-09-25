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
    this._head = this.list[0].data;
    return this._head;
  }

  tail() {
    this._tail = this.list[this.list.length-1].data;
    return this._tail;
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
  }

  deleteAt(index) {}

  reverse() {
    this.list = this.list.reverse();
  }

  indexOf(data) {
    return this.list.indexOf(data)
  }
}

module.exports = LinkedList;
