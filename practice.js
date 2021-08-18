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

const cleanTable = function (soap) {
  const innterFunction = (_soap) => {
    console.log(`cleaning ${this.table} using ${_soap}`);
  };
  innterFunction(soap);
};

// cleanTable.call(this, "some soap");

// cleanTable();

this.garage = {
  table: "garage table",
  //   cleanTable() {
  //     console.log(`cleaning ${this.table}`);
  //   },
};

// this.garage.table;

let johnsRoom = {
  table: "johns table",
  //   cleanTable() {
  //     console.log(`cleaning ${this.table}`);
  //   },
};

// console.log(johnsRoom.table);
// johnsRoom.cleanTable();
// this.garage.cleanTable();
cleanTable.call(this, "some soap");
cleanTable.call(this.garage, "some soap");
cleanTable.call(johnsRoom, "some soap");
