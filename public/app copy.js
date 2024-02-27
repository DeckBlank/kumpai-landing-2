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
                    <h2 class="t-48">FUNCIONES</h2>
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
    swiperSlide.classList.add(`${boxItem.bgColor}`);
    swiperSlide.innerHTML = `
        <div class="boxTotal ">
            <div class="boxText flex-row boxy mr10 ">
                <img style="height: 80px"  src="${boxItem.icon}" alt=""/>
                <div class="flex-col mr10">
                    <h3 class="boxTitle t-16 t-b mr10" >${boxItem.t}</h3>
                    <p class="boxText t-16 mr10">${boxItem.p}</p>
                </div>
            </div>
            <div class="boxCel flex-row">
                <img  style="height: 300px;" src="${boxItem.img}" alt=""/>
            </div>
        </div>
    `;
    sectionSwiperWrapper.appendChild(swiperSlide);
});

// Agregar el contenedor de diapositivas al contenedor principal de la sección
sectionContainer.appendChild(sectionSwiperWrapper);

// Inicializar Swiper para esta sección
new Swiper(sectionContainer, {
    slidesPerView: 2.5,//3,
    spaceBetween: 80,//50,
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
                <div class= "boxCard">
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
        cajaOne.classList.add('flex-row', 'sixSectionBox');
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

        // Section seven testimonios
        const sevenSection = document.querySelector('.sevenSection');
        sevenSection.classList.add('owl-carousel', 'owl-theme');
        data.sevenSection.forEach(item => {
            item.itemBox.forEach(boxItem => {
                const boxServices = document.createElement('div');
                boxServices.classList.add('box-services', 'item');
                boxServices.innerHTML = `
                    <div class="globo">
                        <p class="boxText t-18">${boxItem.quote}</p>
                    </div>
                    <p class="boxText t-18">${boxItem.name}</p>
                    <p class="boxText t-18">${boxItem.cargo}</p>
                `;
                /* sevenSection.appendChild(cajaCero); */
                sevenSection.appendChild(boxServices);
            });
        });

        // Inicializar el carrusel después de agregar todos los elementos
        $('.sevenSection').owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });

        //section eight
        const eightSection = document.querySelector('.eightSection');
        eightSection.classList.add('flex-col','bg-bluekindUltraLigth')
        data.eightSection.forEach(item => {
            eightSection.innerHTML += `
                    
                    <h2 class="title t-48b">${item.h2}</h2>
                    <div class="gridMovil">
                        <p class="boxText boxNews t-18">${item.n1}</p>
                        <p class="boxText  boxNews t-18">${item.n2}</p>
                    </div>
            `;
        });
        
        //::::::::::::::::::::::::::::::::::::::::::::::://

        //section nine
        const formSection = data.nineSectionform;
        const form = document.querySelector('.form');
        form.innerHTML = `
        <h2 class="t-48">${formSection.title}</h2>
        `;
        formSection.fields.forEach(field => {
        const input = document.createElement('input');
        input.setAttribute('type', field.type);
        input.setAttribute('id', field.id);
        input.setAttribute('placeholder', field.placeholder);
        input.required = field.required;
        form.appendChild(input);
        });

        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.textContent = formSection.submitButton;
        form.appendChild(button);

        // Añadir evento de envío al formulario
        form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validar los campos del formulario
        let isValid = true;
        const formData = {};
        formSection.fields.forEach(field => {
            const inputValue = document.getElementById(field.id).value;
            const regex = new RegExp(field.regex); // Convertir la cadena de regex en objeto RegExp
            if (!regex.test(inputValue)) {
            isValid = false;
            alert(`Por favor ingrese un valor válido para ${field.label}`);
            return; // Salir del bucle forEach si hay un campo inválido
            }
            formData[field.id] = inputValue;
        });

        // Si todos los campos son válidos, almacenar los datos en localStorage y crear un nuevo JSON
        if (isValid) {
            localStorage.setItem('dataForm', JSON.stringify(formData));

            // Crear nuevo JSON con la información ingresada
            const newDataJSON = {
            "formData": formData
            };

            // Convertir el nuevo JSON a una cadena de texto
            const newDataString = JSON.stringify(newDataJSON);

            // Descargar el nuevo JSON como un archivo dataForm.json
            const downloadLink = document.createElement('a');
            downloadLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(newDataString);
            downloadLink.download = 'dataForm.json';
            downloadLink.click();

            // Mostrar un mensaje de éxito
            alert('Formulario enviado correctamente');
        }
    });
  

        //::::::::::::::::::::::::::::::::::::::::::::::
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

.catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
})