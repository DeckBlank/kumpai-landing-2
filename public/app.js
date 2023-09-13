fetch('app.json')
.then(response => response.json())
.then(data => {
        // section one
        const oneSection = document.querySelector('.oneSection');
        data.oneSection.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img class="logoSlogan" src="${item.imgSrc}" alt="">
            <div class="itemsOne">
                <p>${item.p}</p>
                <button>${item.button}</button>
            </div>
        `;
        oneSection.appendChild(div);
        });
        //section two
        const twoSection = document.querySelector('.twoSection');
        data.twoSection.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <p>${item.p1}</p>
                <img src="${item.imgSrc1}" alt="">
            </div>
            <div>
                <img src="${item.imgSrc2}" alt="">
                <p>${item.p2}</p>
            </div>
        `;
        twoSection.appendChild(div);
        });

        //section three
        const threeSection = document.querySelector('.threeSection');
        data.threeSection.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <h2>${item.h2}</h2>
                    <img class= "imgPeople" src="${item.imgSrc}" alt="">
        `;

        item.itemBox.forEach(boxItem => {
            div.innerHTML += `
                <div class= "boxy ${boxItem.bgColor}">
                    <p class = "boxNumero ${boxItem.tColor}" >${boxItem.n}</p>
                    <p class = "boxText">${boxItem.p}</p>
                </div>
            `;
        
        });
        threeSection.appendChild(div);
        });

        //section four
        const fourSection = document.querySelector('.fourSection');
        data.fourSection.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <img class="imgCrad" src="${item.imgSvg}" alt="">
                    <div class="boxCard ${item.bgColor}">
                        <h2>${item.h2}</h2>
                        <p>${item.p}</p>
                        <img class= "imgPhone" src="${item.imgPhone}" alt="">
                    </div>
        `;
        
            fourSection.appendChild(div);

        
        });
        
        //section five
        const fiveSection = document.querySelector('.fiveSection');
        data.fiveSection.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <button>${item.button}</button>
                    <div class="itemsOne">
                        <p>${item.p}</p>
                        <img class="logoSlogan" src="${item.imgSrc}" alt="">
                    </div>
        `;
                
            fiveSection.appendChild(div);
        });
})  

