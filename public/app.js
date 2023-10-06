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
            </div>
        `;
        oneSection.appendChild(div);
        });
        //section two
        const twoSection = document.querySelector('.twoSection');
        data.twoSection.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="twoBoxs  efects">
                <div class="sTBoxOne bg-blueKumpaiLigth border-box card">
                    <p>${item.p1}</p>
                </div>
                <div class="sTBoxtwo">
                    <img class="phoneCircle card" src="${item.imgSrc1}" alt="">
                    <div class="blueCircle">
                        <span class="litleCircle"></span>
                    </div>
                </div>
            </div>
            <div class="twoBoxs efects">
                <div class="sTBoxOne">
                    <img class= "desktopCircle" src="${item.imgSrc2}" alt="">
                    <div class="orangeCircle"></div>
                </div>
                <div class="sTBoxtwo bg-orangeKumpaiLigth border-box">
                    <p>${item.p2}</p>
                </div>
            </div>
        `;
        twoSection.appendChild(div);
        });

        //section three
        const threeSection = document.querySelector('.threeSection');
        data.threeSection.forEach(item => {
        const cajaCero = document.createElement('div');
        cajaCero.innerHTML =`
                    <h2 class="efects">${item.h2}</h2>
        `;    
        const cajaOne = document.createElement('div');
        cajaOne.innerHTML = `
       
                    <img class= "imgPeople efects" src="${item.imgSrc}" alt="">
        `;
        const cajatwo = document.createElement('div');
        item.itemBox.forEach(boxItem => {
            cajatwo.innerHTML += `
                <div class= "boxy ${boxItem.bgColor} efectsBoxy">
                    <p class = "boxNumero ${boxItem.tColor}" >${boxItem.n}</p>
                    <p class="boxText">${boxItem.p}</p>
                </div>
            `;
        
        });
        threeSection.appendChild(cajaCero);
        threeSection.appendChild(cajaOne);
        threeSection.appendChild(cajatwo);
        });

        //section four
        const fourSection = document.querySelector('.fourSection');
        data.fourSection.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <img class="imgCrad efects" src="${item.imgSvg}" alt="">
                    <div class="boxCard ${item.bgColor}">
                        <h2>${item.h2}</h2>
                        <p>${item.p}</p>
                        <img class= "imgPhone efects" src="${item.imgPhone}" alt="">
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
                        <img class="logoSlogan" src="${item.imgSrc}" alt="Espacio">
                    </div>
        `;
                
            fiveSection.appendChild(div);
        });
})  





