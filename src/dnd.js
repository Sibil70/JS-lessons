/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */
function createDiv() {
    let newDiv = document.createElement('div');
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

    newDiv.className = 'draggable-div';
    newDiv.style.top = Math.floor(Math.random() * 100) + 'px';
    newDiv.style.left = Math.floor(Math.random() * 100) + 'px';
    newDiv.style.width = Math.floor(Math.random() * 100) + 'px';
    newDiv.style.height = Math.floor(Math.random() * 100) + 'px';
    newDiv.style.backgroundColor = bgColor;

    return newDiv;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
    target.onmousedown = function(e) {
      
        target.style.position = 'absolute';
        moveAt(e);
        // переместим в body, чтобы мяч был точно не внутри position:relative
        document.body.appendChild(target);

        target.style.zIndex = 1000; // показывать мяч над другими элементами

        // передвинуть мяч под координаты курсора
        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(e) {
            target.style.top = e.pageY - target.offsetHeight / 2 + 'px';
            target.style.left = e.pageX - target.offsetWidth / 2 + 'px';
        }

        // 3, перемещать по экрану
        document.onmousemove = function(e) {
            moveAt(e);
        };

        // 4. отследить окончание переноса
        target.onmouseup = function() {
            target.onmouseup = null;
            document.onmousemove = null;
        };
    };
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
