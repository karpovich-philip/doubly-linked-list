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
    return this;
  }

  head() {
    let pos = this.list[0];
    if (pos) {
      this._head = pos.data;
      return this._head;
    }
    return null
  }

  tail() {
    let pos = this.list[this.list.length-1];
    if (pos) {
      this._tail = pos.data;
      return this._tail;
    }
    return null;
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
    return !this.list.length;
  }

  clear() {
    this.list = [new Node];
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    this.list.splice(index, 1);
    return this;
  }

  reverse() {
    this.list = this.list.reverse();
    return this;
  }

  indexOf(data) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].data === data) {
        return i;
      }
    }
    return -1;
  }
}

module.exports = LinkedList;
