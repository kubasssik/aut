const functionInput = function (a,b,c,d,f,j,g,h,k) {
    const fragmentInput = document.createDocumentFragment();
    for (let i = 0; i < b; i++) {
        const newInput = document.createElement(c);
        newInput.classList.add(d);
        const newSelect = document.createElement(f)
        newSelect.classList.add(d,j);
        fragmentInput.appendChild(newInput);
        if (i == 0) {
            newInput.classList.add('date__js')
            newInput.placeholder = 'Желаемая дата, начало работ';
        }
        else if (i == 1) {
            newInput.placeholder = 'Населенный пункт, если нет в списке';

            k.addEventListener('input', () => {
                if (k.value === h) {
                    newInput.remove();
                    document.querySelector('.date__js').after(newSelect)
                    for (let i = 0; i < g.length; i++) {
                        let newOption = new Option(g[i], g[i],);
                        newSelect.append(newOption);
                    }
                } if (k.value !== h) {
                    if (newSelect) {
                        newSelect.remove();
                    }
                    document.querySelector('.date__js').after(newInput)
                }
            })
        } else if (i == 2) {
            newInput.placeholder = 'Улица';
        } else if (i == 3) {
            newInput.placeholder = '+7 999 999 99 99';
        } else if (i == 4) {
            newInput.placeholder = 'email';
        } else if (i == 5) {
            newInput.placeholder = 'Как к вам обращаться';
        }

    }
    a.appendChild(fragmentInput);

}

export{functionInput}