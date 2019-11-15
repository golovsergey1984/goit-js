'use strict';

class Car {
  constructor(params) {
    this.maxSpeed = params.maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.price = params.price;
  }

  static getSpecs(car) {
    console.log(car);
  }

  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(val) {
    if (val < this.maxSpeed) {
      this.speed = val;
    }
  }
  decelerate(val) {
    if (this.speed - val > 0) {
      this.speed = this.speed - val;
    }
  }
  drive(val) {
    if (this.isOn === true) {
      this.distance = this.speed * val;
    } else {
      this.distance = 0;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
// Первая проверка
//
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
//Вторая проверка
//
mustang.turnOff();
mustang.decelerate(20);
mustang.drive(1);
Car.getSpecs(mustang);
// Проверка на стоимость
//
console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price); // 4000
