/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  var results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(fn(array[i], i, array));
  }
  return results;

}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let prev, i;

  if (initial) {
    prev = initial;
    i = 0;

  } else {
    prev = array[0];
    i = 1;
  };

  for (i; i < array.length; i++) {
    prev = fn(prev, array[i], i, array);
  };
  return prev;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  var array = [];

  //////// первый вариант

  Object.keys(obj).forEach(function (key) {
    let keys = key.toUpperCase();
    array.push(keys);
  }, obj);

  //////// второй вариант

  /* for (var key in obj) {
     let big = key.toUpperCase();
     array.push(big);    
   }*/
  return array;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
  var newArr = [], i, till;
  if (to > array.length) {
    to = array.length
  };
  
  if (from >= 0 && to >= 0) {
    i = from;
    till = to;
  };

  if (from >= 0 && to < 0) {
    i = from;
    till = array.length - Math.abs(to);
  };

  if (from < 0 && to > 0) {
    i = 0;
    till = to;
  };

  if (from < 0 && to < 0) {
    i = 0;
    till =  array.length - Math.abs(to);
  };

  for (i; i < till; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value*value;

      return true;
  }
});  
}

export {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy
};