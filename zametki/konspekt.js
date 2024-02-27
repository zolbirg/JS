/* переменные 
let  mun = 2; любые тут динамическая типизация и строка тоже лет
const puk = 2; константа ее не поменять есть исключения
var            старый вариант записи почти не используется
*/

/* операторы
==      //сравнение значений но не типов данных
===     //сравнение знач и типов данных одновременно
''/ ""  //оба значения одинаковы можно и так
 ---------------------------------------------------------------
``      //многострочные блоки с переносами итд
` ${} ` // если нужна вставка в код из блока выше

ост как в с#
*/

/* типы данных
number             //числовые 
Infinity           //математическую бесконечность ∞
bigInt             // пиздец большое число больше (2 в53-1)
str                // строка
true  /  false     // правда или нет
null               //пустота
undefined          // не присвоенное значение похоже на null
nan                // 0 Если где-то в математическом выражении есть NaN, то оно распространяется на весь результат (есть только одно исключение: NaN ** 0 равно 1).
symbol             //для уникальных идентификаторов
object             //для более сложных структур данных.
typeof             //позволяет нам увидеть, какой тип данных сохранён в переменной.
*/

/* вывод на экран
alert(zana4);                 // вывод в отдельное диалог окно
console.log('Test: ', zana4); // вывод в консоль через запятую
*/

/* тернарный опретор
return action  ='+' ? num1 + num2 : num1 - num2; // (if action = +) будет первая часть иначе после точек и вернуть результат
*/

/* функции преобразования
    // приведение строки к числу
        Number(input1.value)  //функц преобраз в число
        parseInt(input1.value)// тоже самое 
        const sum = Number(input1.value) + Number(input2.value); //сложение 2 х чисел
        const sum = Number(input1.value) + 3;                    //тоже самое
        const sum = 3 + 3;

        return number % 2 == 0 ? "Even" : "Odd";
    //
 */

/* массывы
https://www.youtube.com/watch?v=fcMcf_4PjfI
2:45 min

const notes [1,2,3];
const notes [];

const notes = new Array(1,2,3,4,6,88,99,3);
                методы
notes.length // передает длину массива
notes.push('данные');       // запишет элемент в конце масива
notes.unshift('данные')     //а этот в начале (но очень долго работает) он переназначает все элементы
notes.shift()               // условно удаляет/вытаскиват первый элемент const firstName = names.shift()
notes.pop()                 // условно удаляет/вытаскиват последний элемент массива https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop 
notes.reverse()             //переворачивает весь массив но меняет весь массив 
  notes.toreverse()           //переворачивает и делает новый не меняя оригу
notes.sort()                // сортирует массив но изменяет его
  notes.tosorted()             // сортирует массив но создает новый не изменяет старый
notes.splice(2,1)           //удаляет элементы паравмтры=>(индекс элемента,кол элеменотов)
  notes.toSpliced(2,1)      //удаляет но не меняет оригу
notes.includes('лена')      //ищет элемент в массиве и возвращат true если есть или фалс     
notes.indexOf('лена')      //ищет элемент в массиве и возвращает его номер.. или если нету то -1
  notes.with(index,'лена великая')//заменит значение по индексу на навое при этом в новом массиве не меняя стары
 return str.substring(1).slice(0,-1); //удаление первого и последнего элемента
  
  -------------------
  const capitalNames = names.map(function(name,index){  // меняет каждый элемент по сути функция 
    const newName = name + '!';                  // важно что мап всегда создает новый массив старый не меняет
    return newName   //// это обязательно
    })
    -----------------------
        методы строк
    name.toLowerCase(); ///// приводит каждый элемен к ниж регистру
    name.toUpperCase(); /// приводит к верхнему регистру все буквы капсом
*/

/* циклы
for (let i = 0; i < notes.length; i++)
{listElement.insertAdjacentHTML( 'beforeend', getNoteTemplate(notes[i]) );} //простой цикл от числа i

for (let note of notes) // let создать note (of) из notes
 {listElement.insertAdjacentHTML( 'beforeend', getNoteTemplate(note) );}    //так создает саму заметку из массыва notes

*/

/* битовые операторы
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/

/*про обьекты object  
 const person = {
    firstName: 'Roman',         
    lastName: 'Kanin',
    year: 1991,
    hasGirlfriend: false,
    languages: ['ru','en','xz'],
    getFullName: function(){
        console.log(person.firstName + ' ' + person.lastName)
    },
 }

 console.log(person.year);
 console.log(person['languages']);
 const key  = 'hasGirlfriend';
 console.log(person[key]); // false
    person.hasGirlfriend =  true;
    console.log(person[key]); // true
person.getFullName();
------------------------------------------------
https://www.youtube.com/watch?v=fcMcf_4PjfI
3:10
//методы достать
const findedPerson = people.find(function(person){     //дастанет из обьекта один элемент с значением 
  if(person.budget === 7250){
    return true;
  }
})

const findedPerson = people.find ((p) => p.budget === 7520); // тоже самое только коротко стрелочная функция

people.findIndex  ///вернет индекс того элемента где будет совпадение 

//метод фильтрации массива
const filtred = people.filter(function(p){    // фильтрует массив по параметру и возвращает новый массив
  return p.budget > 5000;
})
//
people.forEach(function(p))               //просто перебор элементов массива

*/

/*числа и математика. кос син PI округления рандом 
https://www.youtube.com/watch?v=fcMcf_4PjfI  
3:40
*/

/*работа со строками
https://www.youtube.com/watch?v=fcMcf_4PjfI 
4:10
*/

/*формат строки по шаблону
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;*/
//4;30
