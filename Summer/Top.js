//get запрос, чтобы получить данные, те получаем события
var params = window
    .location  //Свойство только для чтения Window.location Получает/устанавливает расположение или текущий URL для текущего объекта окна.
    .search  //Свойства объекта Location часть адреса после символа ?, включая символ ?
    .replace("?","")  //Метод Location.replace() заменяет текущий ресурс на новый по URL, указанному в качестве параметра.
    .split("&")  // разделяем переменные
    .reduce(  //Метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента:
    //начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.
        function(p,e){
            var a = e.split("=");
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]); //Метод decodeURIComponent() декодирует управляющие последовательности символов в компоненте 
            //URI, созданные с помощью метода encodeURIComponent или другой подобной процедуры.
            return p;
        },
        {}
    );

let wrap_detailTop = document.querySelector(".wrap_detailTop");
let main_detailTop = document.querySelector(".main_detailTop");
let detailTop_close = document.querySelector(".detailTop_close");
let detailTop_header = document.querySelector(".detailTop_header");
let detailTop_img = document.querySelector(".detailTop_img");
let detailTop_text = document.querySelector(".detailTop_text");

wrap_detailTop != undefined ? main() : false;  //сравниваем, если условие истина то мейн(undefined-Если переменная объявлена, но в неё ничего не записано, то её значение как раз и есть undefined (значение не присвоено))


function deleteModal() {
    wrap_detailTop.style.display = "none"; //делаем невидимым
    main_detailTop.style.display = "none";
    history.pushState(null, null,"./index.html");  //добавляет новое состояние в историю браузера,3 параметра: state(JavaScript объект, который связан с новой записью в истории браузера),
    //title(который в данный момент игнорируется), URL(URL новой записи в истории браузера).
}

function top1() {
    detailTop_header.textContent = "Барилоче, Аргентина";
    detailTop_img.src = "./img/1.jpg";
    detailTop_text.innerHTML =`<p>Барилоче, северная часть Патагонии, славится своими живописными озерами и хорошо подходит для активного отдыха: пеших и велосипедных прогулок, гольфа и водных видов спорта.</p>
                               <p>Он известен своими лыжными курортами, а также достопримечательностями для обзора, водными видами спорта, трекингом и альпинизмом. Гора Серро Катедраль является одной из наиболее важных для лыжного спорта в Южной Америке. </p>`;
                                
}

function top2() {
    detailTop_header.textContent = "Кигали, Руанда";
    detailTop_img.src = "./img/2.jpg";
    detailTop_text.innerHTML =`<p>Руанда в целом и Кигали как столица и ворота в страну приходят в себя после геноцида, который выпал на долю предыдущего поколения.</p>
                                <p>Кигали — чистый и безопасный город с множеством интересных познавательных мест, начиная от выставок современного искусства мирового класса до модной одежды, изделий народных промыслов и даже кофейного кооператива, управляемого женщинами, которые делают лучший кофе в мире.</p>`;
}

function top3() {
    detailTop_header.textContent = "Пустыня Атакама, Чили";
    detailTop_img.src = "./img/3.jpg";
    detailTop_text.innerHTML = `<p>Эту пустыню, расположенную на высоте 2438 метров над уровнем моря, часто сравнивают с национальным парком Арки или национальным парком Каньонлендс в штате Юта. Вы можете провести большую часть времени, совершая пешие и велосипедные прогулки по окружающим горам и каньонам, наблюдая за птицами и посещая живописные деревушки и древние руины.</p>`;
}

function top4() {
    detailTop_header.textContent = "Дубровник, Хорватия";
    detailTop_img.src = "./img/4.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top5() {
    detailTop_header.textContent = "Амангири, Аризона";
    detailTop_img.src = "./img/5.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;

}

function top6() {
    detailTop_header.textContent = "Сицилия, Италия";
    detailTop_img.src = "./img/6.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top7() {
    detailTop_header.textContent = "Кейптаун, Африка";
    detailTop_img.src = "./img/7.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top8() {
    detailTop_header.textContent = "Марракеш, Марокко";
    detailTop_img.src = "./img/8.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top9() {
    detailTop_header.textContent = "Порту, Португалия";
    detailTop_img.src = "./img/9.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top10() {
    detailTop_header.textContent = "Тель-Авив, Израиль";
    detailTop_img.src = "./img/10.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top11() {
    detailTop_header.textContent = "Токио, Япония";
    detailTop_img.src = "./img/11.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top12() {
    detailTop_header.textContent = "Пиджен-Фордж, Теннесси";
    detailTop_img.src = "./img/12.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top13() {
    detailTop_header.textContent = "Котор, Черногория";
    detailTop_img.src = "./img/13.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top14() {
    detailTop_header.textContent = "Лос Кабос, Мексика";
    detailTop_img.src = "./img/14.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top15() {
    detailTop_header.textContent = "Чиангмай, Таиланд";
    detailTop_img.src = "./img/15.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top16() {
    detailTop_header.textContent = "Куско, Перу";
    detailTop_img.src = "./img/16.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top17() {
    detailTop_header.textContent = "Мельбурн, Австралия";
    detailTop_img.src = "./img/17.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top18() {
    detailTop_header.textContent = "Мендоса, Аргентина";
    detailTop_img.src = "./img/18.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top19() {
    detailTop_header.textContent = "Вира-Вира, Чили";
    detailTop_img.src = "./img/19.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function top20() {
    detailTop_header.textContent = "Сан-Мигель-де-Альенде, Мексика";
    detailTop_img.src = "./img/20.jpg";
    detailTop_text.innerHTML =`<p>Информация скоро появится.</p>`;
}

function main() {
 

    let Top = document.querySelectorAll(".Top");

    if (Top.length === 20) {
        
        Top[0].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top1();
        })
        Top[1].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top2();
        })
        Top[2].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top3();
        })
        Top[3].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top4();
        })
        Top[4].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top5();
        })
        Top[5].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top6();
        })
        Top[6].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top7();
        })
        Top[7].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top8();
        })
        Top[8].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top9();
        })
        Top[9].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top10();
        })
        Top[10].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top11();
        })
        Top[11].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top12();
        })
        Top[12].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top13();
        })
        Top[13].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top14();
        })
        Top[14].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top15();
        })
        Top[15].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top16();
        })
        Top[16].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top17();
        })
        Top[17].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top18();
        })
        Top[18].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top19();
        })
        Top[19].addEventListener("click", ()=>{
            wrap_detailTop.style.display = "block";
            main_detailTop.style.display = "flex";
            top20();
        })
    }

    
    wrap_detailTop.addEventListener("click", deleteModal);
    detailTop_close.addEventListener("click", deleteModal);
    main_detailTop.addEventListener("click", (evt)=>{
        evt.stopPropagation(); //Прекращает дальнейшую передачу текущего события.
    })
}