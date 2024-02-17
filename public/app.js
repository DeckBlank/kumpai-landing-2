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
        <h2 class="t-bluekind t-48 t-center">${item.title}</h2>
            <div class="twoBoxs  efects">
                <div class="sTBoxOne bg-white border-box card">
                    <img  src="${item.icon1}" alt=""/>
                    <p>${item.p1}</p>
                </div>
                <div class="sTBoxtwo">
                    <img class="phoneCircle card" src="${item.imgSrc1}" alt=""/>

                </div>
            </div>
            <div class="twoBoxs efects">
                <div class="sTBoxOne">
                    <img class= "desktopCircle" src="${item.imgSrc2}" alt=""/>
                    <div class="orangeCircle"></div>
                </div>
                <div class="sTBoxtwo bg-white border-box">
                    <img  src="${item.icon2}" alt=""/>
                    <p>${item.p2}</p>
                </div>
            </div>
            <div class="twoBoxs  efects">
                <div class="sTBoxOne bg-white border-box card">
                    <img  src="${item.icon3}" alt=""/>
                    <p>${item.p3}</p>
                </div>
                <div class="sTBoxtwo">
                    <img class="phoneCircle card" src="${item.imgSrc3}" alt="">
                </div>
            </div>
            <div class="twoBoxs efects">
                <div class="sTBoxOne">
                    <img class= "desktopCircle" src="${item.imgSrc4}" alt=""/>

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
                    <h2 class="t-48">${item.h2}</h2>
                    <img  src="${item.img}" alt=""/>
                    <h2 class="t-48">HOLA HOLA</h2>
            `;
        });

        //section four funciones
/* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

// Seleccionar el contenedor principal de la sección desde el HTML
const sectionContainer = document.querySelector('.fourSection');

// Crear el contenedor de las diapositivas para esta sección
const sectionSwiperWrapper = document.createElement('div');
sectionSwiperWrapper.classList.add('swiper-wrapper');

// Agregar cada diapositiva al contenedor de esta sección
data.fourSection[0].itemBox.forEach(boxItem => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerHTML = `
        <div class="boxy ${boxItem.bgColor} efectsBoxy">
            <img src="${boxItem.icon}" alt=""/>
            <p class="boxTitle">${boxItem.t}</p>
            <p class="boxText t-18">${boxItem.p}</p>
        </div>
    `;
    sectionSwiperWrapper.appendChild(swiperSlide);
});

// Agregar el contenedor de diapositivas al contenedor principal de la sección
sectionContainer.appendChild(sectionSwiperWrapper);

// Inicializar Swiper para esta sección
new Swiper(sectionContainer, {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination: {
      el: ".pagination",
      clickable: true
    },
    autoplay: {
      enabled: true,
      delay: 5000
    },
});



/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

        //section five objetivos
        const fiveSection = document.querySelector('.fiveSection');
        fiveSection.classList.add('flex-col');
        data.fiveSection.forEach(item => {
        const cajaCero = document.createElement('div');
        cajaCero.innerHTML = `
                    <h2 class="t-48">${item.h2}</h2>
        `;
        const cajaOne = document.createElement('div');
        cajaOne.classList.add('box-five');
        cajaOne.classList.add('flex-col');
        item.itemBox.forEach(boxItem => {
            cajaOne.innerHTML += `
                <div class= "efectsBoxy boxCard">
                    <img  src="${boxItem.img}" alt=""/>
                    <p>${boxItem.p}</p>
                </div>
            `;
        
        });
        fiveSection.appendChild(cajaCero);
        fiveSection.appendChild(cajaOne)
        });
        
         //section six servicios
        const sixSection = document.querySelector('.sixSection');
        data.sixSection.forEach(item => {
        const cajaCero = document.createElement('div');
        cajaCero.classList.add('flex-col');
        cajaCero.innerHTML =`
                <h2 class=" t-48">${item.h2}</h2>
        `;    
        const cajaOne = document.createElement('div');
        cajaOne.classList.add('flex-row');
        item.itemBox.forEach(boxItem => {
            cajaOne.innerHTML += `
                <div class= "box-services efectsBoxy ${boxItem.bgColor}">
                    <p class="boxText t-18">${boxItem.p}</p>
                </div>
            `;
        
        });
        sixSection.appendChild(cajaCero);
        sixSection.appendChild(cajaOne);
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
