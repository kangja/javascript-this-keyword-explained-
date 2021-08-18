"use strict";
// house

this.table = "window table";
// console.log(window.table);

// const cleanTable = function (soap) {
//   let that = this;
//   const innterFunction = function (_soap) {
//     console.log(`cleaning ${that.table} using ${_soap}`);
//   };
//   innterFunction(soap);
// };

// const cleanTable = function (soap) {
//   const innterFunction = function (_soap) {
//     console.log(`cleaning ${this.table} using ${_soap}`);
//   };
//   innterFunction.call(this, soap);
// };

// const cleanTable = function (soap) {
//   const innterFunction = function (_soap) {
//     console.log(`cleaning ${this.table} using ${_soap}`);
//   };
//   innterFunction.bind(this)(soap);
// };

// const cleanTable = function (soap) {
//   const innterFunction = (_soap) => {
//     console.log(`cleaning ${this.table} using ${_soap}`);
//   };
//   innterFunction(soap);
// };

// cleanTable.call(this, "some soap");

// cleanTable();

this.garage = {
  table: "garage table",
  //   cleanTable() {
  //     console.log(`cleaning ${this.table}`);
  //   },
};

// this.garage.table;

// let johnsRoom = {
//   table: "johns table",
//   //   cleanTable() {
//   //     console.log(`cleaning ${this.table}`);
//   //   },
// };

// let createRoom = function (name) {
//   this.table = `${name}s table`;
// };

class createRoom {
  constructor(name) {
    this.name = `${name}s table`;
  }
  cleanTable(soap) {
    console.log(`cleaning ${this.table} using ${soap}`);
  }
}

// createRoom.prototype.cleanTable = function (soap) {
//   console.log(`cleaning ${this.table} using ${soap}`);
// };

const jasonsRoom = new createRoom("Jason");
const johnsRoom = new createRoom("John");

jasonsRoom.cleanTable("some soap");
johnsRoom.cleanTable("some soap");

// console.log(johnsRoom.table);
// johnsRoom.cleanTable();
// this.garage.cleanTable();
// cleanTable.call(this, "some soap");
// cleanTable.call(this.garage, "some soap");
// cleanTable.call(johnsRoom, "some soap");
// cleanTable.call(jasonsRoom, "some soap");
