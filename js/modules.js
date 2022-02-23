
import { functionSelect } from './select.js';
import {sity, Alusta, Yalta } from './sity.js';
import {functionInput,} from './input.js';

/*****************************************/
/*****************************************/
/*****************************************/

//Функция Input - Select

//select 
const poolSelect = document.querySelector('.blocks__select');
const selectNum = 3;
const selectBlock = 'select'
const selectClass = 'select_js';
const selectStyle = 'forms__select-style';
functionSelect(poolSelect, selectNum, selectBlock, selectClass, selectStyle)

/*****************************************/
/*****************************************/
/*****************************************/

// Инпуты для формы заказа



const poolInput = document.querySelector('.blocks__input');//a
const inputNum = 6;//b
const inputBlock = 'input';//c
const inputStyle = 'forms__input-style';//d
const inputSelect = 'select';//f
const inputNewSelect = 'mew__select';//j
//import siti //g
const inputSity = 'Алушта';//h
const optionValue = document.querySelector('.select_js');//k

functionInput(poolInput, inputNum, inputBlock,inputStyle,inputSelect,inputNewSelect,Alusta,inputSity,optionValue)





//INPUT DATE
const buttonDateJS = document.querySelector('.date__js');

buttonDateJS.addEventListener('mouseover', () => {
    buttonDateJS.type = 'date'
    console.log(buttonDateJS);
})

buttonDateJS.addEventListener('mouseout', () => {
    buttonDateJS.type = 'text'

})
/*****************************************/
/*****************************************/
/*****************************************/

//Шапка
const pollHeaderUl = document.querySelector('.header__ul');
const headerUlNum = 4;
const headerUlBlock = 'li';
const headerUlClass = 'headerUl__js';
const headerUlText = 'новое меню';

function funcHeaderUlfunction(a, b, c, d, f) {
    const fragmentUl = document.createDocumentFragment();
    for (let i = 0; i < b; i++) {
        const newUl = document.createElement(c);
        //newInput.classList.add(d);
        //newUl.classList.add(f);
        fragmentUl.appendChild(newUl);
        if (i == 0) {
            newUl.classList.add('tel');
            newUl.textContent = '8 800-000-00-00';
        } else if (i == 1) {
            newUl.classList.add('order');
            newUl.textContent = 'ОСТАВИТЬ ЗАЯВКУ';
        } else if (i == 2) {
            newUl.classList.add('entrance');
            newUl.textContent = 'ВОЙТИ';
        } else if (i == 3) {
            newUl.classList.add('registration');
            newUl.textContent = 'РЕГИСТРАЦИЯ';
        }
    }
    a.appendChild(fragmentUl);
}

funcHeaderUlfunction(pollHeaderUl, headerUlNum, headerUlBlock)

//Menu


const poolMenuHeder = document.querySelector('.menu__ul');
const menuHeader = 5;
const menuHeaderBlock = 'li';

function funcHeaderUlmenu(a, b, c, d, f) {
    const fragmentUl = document.createDocumentFragment();
    for (let i = 0; i < b; i++) {
        const newUl = document.createElement(c);
        //newInput.classList.add(d);
        //newUl.classList.add(f);
        fragmentUl.appendChild(newUl);
        if (i == 0) {
            newUl.classList.add('earn');
            newUl.textContent = 'ЗАРАБОТАЙ';
        } else if (i == 1) {
            newUl.classList.add('support');
            newUl.textContent = 'ПОДДЕРЖКА';
        } else if (i == 2) {
            newUl.classList.add('news');
            newUl.textContent = 'НОВОСТИ';
        } else if (i == 3) {
            newUl.classList.add('opinion');
            newUl.textContent = 'ОТЗЫВЫ';
        } else if (i == 4) {
            newUl.classList.add('how-to-start');
            newUl.textContent = 'КАК НАЧАТЬ';
        }
    }
    a.appendChild(fragmentUl);
}

funcHeaderUlmenu(poolMenuHeder, menuHeader, menuHeaderBlock)
//Кнопки услуг
const poolService = document.querySelector('.service');
const serviceNum = 9;
const serviceClass = 'servised__js';
const serviceText = 'Новая услуга';





function funcX2func(a, b, c, d) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < b; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add(c);
        newElement.textContent = d;

        fragment.appendChild(newElement);
        //fragment.appendChild(newImg);


        //console.log(a);
        //console.log(i);
        //console.log(newElement);
        //console.log(d);
        if (i == 0) {
            newElement.textContent = 'Мастер на час';
            newElement.classList.add('master__hour');
        } else if (i == 1) {
            newElement.textContent = 'Услуги сантехника';
            newElement.classList.add('plumber');
        } else if (i == 2) {
            newElement.textContent = 'Услуги электрика';
            newElement.classList.add('electrician');
        } else if (i == 3) {
            newElement.textContent = 'Сборка, ремонт мебели';
            newElement.classList.add('furniture');
        } else if (i == 4) {
            newElement.textContent = 'Установка дверей';
            newElement.classList.add('doors');
        } else if (i == 5) {
            newElement.textContent = 'Уборка';
        } else if (i == 6) {
            newElement.textContent = 'Переезды, грузоперевозки';
        } else if (i == 7) {
            newElement.textContent = 'Отделочные, ремонтные работы';
        } else if (i == 8) {
            newElement.textContent = 'Строительные работы';
        } else if (i == 9) {
            newElement.textContent = 'Работы по бытовым услугам';
        } else if (i == 10) {
            newElement.textContent = 'Благоустройство территории';
        }
    }
    a.appendChild(fragment);
}



funcX2func(poolService, serviceNum, serviceClass)

/***************************************/
//о нас
const poolAbout = document.querySelector('.about-us');
const aboutNum = 3;
const aboutClass = 'about__js';
const aboutText = 'Заголовок'

function funcX2func2(a, b, c, d) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < b; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add(c);
        newElement.textContent = d;
        fragment.appendChild(newElement);
        //console.log(a);

        //console.log(i);
        //console.log(newElement);
        //console.log(d);
        if (i == 0) {
            newElement.textContent = 'Мы предоставляем оперативную консультацию, от квалифицированного специалиста сервиса по ориентировочной стоимости и характеру проведения работ. Никаких подводных камней в решении вашей бытовой задачи';

        } else if (i == 1) {
            newElement.textContent = 'Вашу заявку в кратчайшие сроки изучит множество мастеров, в результате на нее быстро откликнется мастер, готовый выполнить работу в удобное Вам время. Кроме того, у Вас будет возможность договориться с мастером о цене работы на месте выполнения';
        } else if (i == 2) {
            newElement.textContent = 'Вы можете запросить у мастера акт выполненных работ, подтверждающий результат и оплату работы. Также Вы в праве удостовериться в личности мастера, запросив у него паспорт или другой документ удостоверяющий личность';
        }
    }
    a.appendChild(fragment);
}
funcX2func2(poolAbout, aboutNum, aboutClass, aboutText)




















/**************Chexkbox****************************/

const functionInputCheckbox = function (a, b, c, d, f) {
    const fragmentInput = document.createDocumentFragment();
    for (let i = 0; i < b; i++) {
        const newChecboxButton = document.createElement(c);
        newChecboxButton.type = d
        newChecboxButton.classList.add(f);
        newChecboxButton.checked = 'true';
        fragmentInput.appendChild(newChecboxButton);
        if (i == 0) {
            newChecboxButton.classList.add('button__famaly');
        } else if (i == 1) {
            newChecboxButton.classList.add('button__address');
        } else if (i == 2) {
            newChecboxButton.classList.add('button__phone');
        } else if (i == 3) {
            newChecboxButton.classList.add('button__mail');
        } else if (i == 4) {
            newChecboxButton.classList.add('button__submit');
            newChecboxButton.type = 'submit';
        }
    }

    a.appendChild(fragmentInput);
}

//button checkbox
const poolButton = document.querySelector('.block__button');
const checkboxNum = 5;
const checkboxBlock = 'input';
const checkboxType = 'checkbox';
const checkboxStyle = 'style__button-checkbox';
functionInputCheckbox(poolButton, checkboxNum, checkboxBlock, checkboxType, checkboxStyle)
//button submit


//ЧАСЫ
const poolClock = document.querySelector('.clock');
const cloclkNum = 3;
const clockBox = 'div';

const functionClock = function (a, b, c,) {
    const fragmentClock = document.createDocumentFragment();
    for (let i = 0; i < b; i++) {
        const newClock = document.createElement(c);
        const newCLockDiv = document.createElement(c)
        newClock.prepend(newCLockDiv);
        fragmentClock.appendChild(newClock);

        if (i == 0) {
            newClock.classList.add('hour');
            newCLockDiv.classList.add('hr');
            newCLockDiv.id = 'hr';
        } else if (i == 1) {
            newClock.classList.add('min');
            newCLockDiv.classList.add('mn');
            newCLockDiv.id = 'mn';
        } else if (i == 2) {
            newClock.classList.add('sec');
            newCLockDiv.classList.add('sc');
            newCLockDiv.id = 'sc';
        }

    }

    a.appendChild(fragmentClock);
}
functionClock(poolClock, cloclkNum, clockBox)



const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
});




