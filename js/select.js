import { selectMenu, sity, typeHome } from './sity.js';


//Функция Input - Select
const functionSelect = function (a, b, c, d, f) {
    const fragmentInput = document.createDocumentFragment();
    for (let i = 0; i < b; i++) {
        const newInput = document.createElement(c);
        newInput.classList.add(f);
        fragmentInput.appendChild(newInput);

        if (i == 0) {
            for (let i = 0; i < selectMenu.length; i++) {
                let newOption = new Option(selectMenu[i], selectMenu[i],);
                newInput.append(newOption);   
            }
        } else if (i == 1) {
            for (let i = 0; i < sity.length; i++) {
                newInput.classList.add(d);
                let newOption2 = new Option(sity[i], sity[i],);
                //console.log(sity[i]);
                newInput.append(newOption2);               
            } 
        }else if( i == 2){
            for (let i = 0; i < typeHome.length; i++) {
                let newOption3 = new Option(typeHome[i], typeHome[i],);
                newInput.append(newOption3);
            }
        }
    }
    a.appendChild(fragmentInput);
}



export { functionSelect };

