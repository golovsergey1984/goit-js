'use strict';

function countTotalSalary(employees) {
  /* const EMPLOYEE = Object.values(employees); */
  let TotalSalary = 0;
  for (const key in employees) {
    TotalSalary = employees[key] + TotalSalary;
  }
  return TotalSalary;
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
