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
                <h1>${item.h1}</h1>
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
        <h2 class="t-blueKumpai t-48 t-center">${item.title}</h2>
            <div class="twoBoxs  efects">
                <div class="sTBoxOne bg-white border-box card">
                    <img  src="${item.icon1}" alt="">
                    <p>${item.p1}</p>
                </div>
                <div class="sTBoxtwo">
                    <img class="phoneCircle card" src="${item.imgSrc1}" alt="">

                </div>
            </div>
            <div class="twoBoxs efects">
                <div class="sTBoxOne">
                    <img class= "desktopCircle" src="${item.imgSrc2}" alt="">
                    <div class="orangeCircle"></div>
                </div>
                <div class="sTBoxtwo bg-white border-box">
                    <img  src="${item.icon2}" alt="">
                    <p>${item.p2}</p>
                </div>
            </div>
            <div class="twoBoxs  efects">
                <div class="sTBoxOne bg-white border-box card">
                    <img  src="${item.icon3}" alt="">
                    <p>${item.p3}</p>
                </div>
                <div class="sTBoxtwo">
                    <img class="phoneCircle card" src="${item.imgSrc3}" alt="">
                </div>
            </div>
            <div class="twoBoxs efects">
                <div class="sTBoxOne">
                    <img class= "desktopCircle" src="${item.imgSrc4}" alt="">

                </div>
                <div class="sTBoxtwo bg-white border-box">
                    <img  src="${item.icon4}" alt="">
                    <p>${item.p4}</p>
                </div>
            </div>
        `;
        twoSection.appendChild(div);
        });

        //section three
        const threeSection = document.querySelector('.threeSection');
        data.threeSection.forEach(item => {
            threeSection.innerHTML += `
                    <h2 class="efects t-48">${item.h2}</h2>
                    <img  src="${item.img}" alt=""/>
            `;
        });

        //section four
        const fourSection = document.querySelector('.fourSection');
        data.fourSection.forEach(item => {
        const cajaCero = document.createElement('div');
        cajaCero.innerHTML =`
                    <h2 class="efects">${item.h2}</h2>
        `;    
        const cajaOne = document.createElement('div');
        item.itemBox.forEach(boxItem => {
            cajaOne.innerHTML += `
                <div class= "boxy ${boxItem.bgColor} efectsBoxy">
                    <p class = "boxNumero ${boxItem.tColor}" >${boxItem.t}</p>
                    <p class="boxText">${boxItem.p}</p>
                </div>
            `;
        
        });
        fourSection.appendChild(cajaCero);
        fourSection.appendChild(cajaOne);
        });

        //section five objetivos
        const fiveSection = document.querySelector('.fiveSection');
        data.fiveSection.forEach(item => {
        const cajaCero = document.createElement('div');
        cajaCero.innerHTML = `
                    <h2 class="efects t-48">${item.h2}</h2>
        `;
        const cajaOne = document.createElement('div');
        item.itemBox.forEach(boxItem => {
            cajaOne.innerHTML += `
                <div class= " efectsBoxy">
                <img  src="${boxItem.img}" alt=""/>
                    <p>${boxItem.p}</p>
                </div>
            `;
        
        });
        fiveSection.appendChild(cajaCero);
        fiveSection.appendChild(cajaOne)
        });
        
        //section eleven
        const tenSection = document.querySelector('.tenSection');
        data.tenSection.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="itemsOne">
                            <img class="uno logoSlogan" src="${item.imgSrc}" alt="Espacio">
                            <div class="dos redes">
                                <img src="${item.fbSvg}" alt=""></img>
                                <img src="${item.twSvg}" alt=""></img>
                                <img src="${item.intSvg}" alt=""></img>
                            </div>
                            <p class="tres">${item.p}</p>
                    </div>
        `;
                
            tenSection.appendChild(div);
        });
})  





