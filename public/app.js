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
                <a href="#solicitar" >
                <button>${item.button}</button>
                </a>
            </div>
        `;
        oneSection.appendChild(div);
        });
        //section two
        const twoSection = document.querySelector('.twoSection');
        data.twoSection.forEach(item => {
        const div = document.createElement('div');
        div.classList.add("container")
        div.innerHTML = `
            <h2 class="boxTitle t-bluekind t-48 t-center">${item.title}</h2>
            <div class="row ">
                <div class="col col-lg-6 col-md-12 col-sm-12 col-12 p-5-5 div-center">
                    <div class="sTBoxText bg-white">
                        <img  src="${item.icon1}" alt=""/>
                        <p>${item.p1}</p>
                    </div>
                </div>
                <div class="col col-lg-6 col-md-12 col-sm-12 col-12 p-5-5 div-center">
                    <div class="sTBoxImg">
                        <img class="image1" src="${item.imgSrc1}" alt=""/>
                    </div>
                </div>
            </div>
            
            <div class="row ">
                <div class="col col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-sm-2 order-2 p-5-5 div-center">
                    <div class="sTBoxImg">
                        <img class="image2" src="${item.imgSrc2}" alt=""/>
                    </div>
                </div>
                <div class="col col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-sm-1 order-1 p-5-5 div-center">
                    <div class="sTBoxText bg-white">
                        <img  src="${item.icon2}" alt=""/>
                        <p>${item.p2}</p>
                    </div>
                </div>
            </div> 

            <div class="row ">
                <div class="col col-lg-6 col-md-12 col-sm-12 p-5-5 col-12 div-center">
                    <div class="sTBoxText bg-white">
                        <img  src="${item.icon3}" alt=""/>
                        <p>${item.p3}</p>
                    </div>
                </div>
                <div class="col col-lg-6 col-md-12 col-sm-12 col-12 p-5-5 div-center">
                    <div class="sTBoxImg">
                        <img class="image3" src="${item.imgSrc3}" alt=""/>
                    </div>
                </div>
            </div>
        
            <div class="row pb-8">
                <div class="col col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-sm-2 order-2 p-5-5 div-center">
                    <div class="sTBoxImg">
                        <img class="image4" src="${item.imgSrc4}" alt=""/>
                    </div>
                </div>
                <div class="col col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-sm-1 order-1 p-5-5 div-center">
                    <div class="sTBoxText bg-white">
                        <img  src="${item.icon4}" alt=""/>
                        <p>${item.p4}</p>
                    </div>
                </div>
            </div>
        `;
        twoSection.appendChild(div);
        });

        //section three
        const threeSection = document.querySelector('.threeSection');
        data.threeSection.forEach(item => {
            threeSection.innerHTML += `
                    <div class="container">
                        <h2 class="t-48">${item.h2}</h2>
                        <p class="t-23-o t-b">${item.p}</p>
                        <img  src="${item.img}" alt=""/>
                        <h2 class="t-48" id="funciones">FUNCIONES</h2>
                    </div>
            `;
        });

        //section four funciones
/* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

// Seleccionar el contenedor principal de la sección desde el HTML
const sectionContainer = document.querySelector('.fourSection');
const sectionSwiperWrapper = document.createElement('div');
sectionSwiperWrapper.classList.add("boxTotal","container");
// Agregar cada diapositiva al contenedor de esta sección
data.fourSection[0].itemBox.forEach(boxItem => {
    const swiperSlide = document.createElement('div');
    /* swiperSlide.classList.add('swiper-slide'); */
    swiperSlide.classList.add(`${boxItem.bgColor}`,`boxCard`);
    swiperSlide.innerHTML = `
        <div>
            <div class=" boxy mr40 ">
                <div class="flex-row">
                    <img style="height: 80px"  src="${boxItem.icon}" alt=""/>
                    <h3 class=" t-18 t-b mr10" >${boxItem.t}</h3>
                </div>
                <div class="flex-col mr10">
                    <p class=" t-18">${boxItem.p}</p>
                </div>
            </div>
            <div class="boxCel flex-row">
                <img   src="${boxItem.img}" alt=""/>
            </div>
        </div>
    `;
    sectionSwiperWrapper.appendChild(swiperSlide);
});

// Agregar el contenedor de diapositivas al contenedor principal de la sección
sectionContainer.appendChild(sectionSwiperWrapper);


/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

        //section five objetivos
        const fiveSection = document.querySelector('.fiveSection');
        fiveSection.classList.add('flex-col','container');
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
        sixSection.classList.add('container')
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
                    <div class= "box-services Boxy ${boxItem.bgColor}">
                        <p class="boxText t-16">${boxItem.p}</p>
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
                    
                    <div class="container">
                        <h2 class="title t-48b">${item.h2}</h2>
                        <div class="gridMovil">
                            <p class="boxText boxNews t-18">${item.n1}</p>
                            <p class="boxText  boxNews t-18">${item.n2}</p>
                            <p class="boxText  boxNews t-18">${item.n3}</p>
                            <p class="boxText  boxNews t-18">${item.n4}</p>
                        </div>
                    </div>
            `;
        });
        
        //::::::::::::::::::::::::::::::::::::::::::::::://

        //section nine
        const formSection = data.nineSectionform;

        const formContainer = document.getElementById("formContainer");
        formContainer.classList.add('container');
        const formTitle = document.createElement("h2");
        formTitle.classList.add("t-48")
        formTitle.textContent = formSection.title;
        formContainer.appendChild(formTitle);

        const form = document.createElement("form");

        formSection.fields.forEach(field => {
            const div = document.createElement("div");
            div.classList.add("boxInput")
           /*  const label = document.createElement("label");
            label.classList.add("t-18");
            label.textContent = field.label;
            div.appendChild(label); */
            const input = document.createElement("input");
            input.classList.add("t-18")
            input.type = field.type;
            input.id = field.id;
            input.name = field.id;
            input.placeholder = field.placeholder;
            if (field.required) {
                input.required = true;
            }
            div.appendChild(input);
            form.appendChild(div);
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = formSection.submitButton;
        form.appendChild(submitButton);

        formContainer.appendChild(form);

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            validateFormData(formSection);
        });

        function validateFormData(formData) {
            let isValid = true;

            for (const field of formData.fields) {
                const input = document.getElementById(field.id);
                const regex = new RegExp(field.regex);

                if (!regex.test(input.value)) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'Datos válidos, formulario enviado correctamente',
                    confirmButtonText: 'Aceptar'
                });
                console.log("Formulario válido, enviando datos...");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, ingrese datos válidos',
                    confirmButtonText: 'Aceptar'
                });
                console.log("Formulario inválido");
            }
        }

    

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

/* .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
}) */