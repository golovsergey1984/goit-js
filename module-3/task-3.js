'use strict';

// Определение наибольшего значения через распыление массива
/* function findBestEmployee(employees) {
    const employee = Object.entries(employees);
    const max = Math.max(...Object.values(employees));
    console.log(max);
  } */

// Определение наибольшего значения через перебор значений массива
function findBestEmployee(employees) {
  let highestEmployeeValue = 0;
  let highestEmployeeName;
  const EMPLOYEES = Object.entries(employees);

  for (const i = 0; i < EMPLOYEES.length; i++) {
    for (const key in employees) {
      if (highestEmployeeValue < employees[key]) {
        highestEmployeeValue = employees[key];
        highestEmployeeName = key;
      }
    }
    return highestEmployeeName;
  }
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
