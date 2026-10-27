// ======================================
// TIL
// ======================================

let currentLanguage = "uz";


// ======================================
// TANLANGAN SINF
// ======================================

let selectedClass = "7";


// ======================================
// SAVOLLAR (HAR BIR SINF 30 TADAN)
// ======================================

const allQuestions = {

    // ==================================
    // 7-SINF (30 TA SAVOL)
    // ==================================
    "7": [
        {
            uz: { question: "HTML nima uchun ishlatiladi?", options: ["Kompyuterni o‘chirish uchun", "Veb-sahifa strukturasi uchun", "Rasm chizish uchun", "Musiqa tinglash uchun"] },
            ru: { question: "Для чего используется HTML?", options: ["Для выключения компьютера", "Для структуры веб-страницы", "Для рисования", "Для прослушивания музыки"] },
            answer: 1
        },
        {
            uz: { question: "CSS nima uchun ishlatiladi?", options: ["Sayt dizaynini va stilini berish uchun", "Kompyuterni formatlash uchun", "Video montaj qilish uchun", "Fayl o‘chirish uchun"] },
            ru: { question: "Для чего используется CSS?", options: ["Для стилей и дизайна сайта", "Для форматирования компьютера", "Для монтажа видео", "Для удаления файлов"] },
            answer: 0
        },
        {
            uz: { question: "Eng katta sarlavha yaratish uchun qaysi teg ishlatiladi?", options: ["<p>", "<head>", "<h1>", "<h6>"] },
            ru: { question: "Какой тег используется для самого большого заголовка?", options: ["<p>", "<head>", "<h1>", "<h6>"] },
            answer: 2
        },
        {
            uz: { question: "background-color xossasi nima qiladi?", options: ["Matn rangini o‘zgartiradi", "Rasm o‘lchamini beradi", "Chegara qo‘shadi", "Fon rangini o‘zgartiradi"] },
            ru: { question: "Что делает свойство background-color?", options: ["Изменяет цвет текста", "Задает размер картинки", "Добавляет границу", "Изменяет цвет фона"] },
            answer: 3
        },
        {
            uz: { question: "Matn rangini o‘zgartirish uchun CSS-da qaysi xossa ishlatiladi?", options: ["text-style", "color", "font-color", "background"] },
            ru: { question: "Какое свойство CSS используется для изменения цвета текста?", options: ["text-style", "color", "font-color", "background"] },
            answer: 1
        },
        {
            uz: { question: "font-size xossasining vazifasi nima?", options: ["Matn o‘lchamini o‘zgartirish", "Fon rangini tanlash", "Shrift turini o‘chirish", "Rasm yuklash"] },
            ru: { question: "Какова функция свойства font-size?", options: ["Изменение размера текста", "Выбор цвета фона", "Удаление шрифта", "Загрузка фото"] },
            answer: 0
        },
        {
            uz: { question: "width: 300px kodi nimani belgilaydi?", options: ["Element balandligini", "Element opasitisini", "Element kengligini", "Matn o‘lchamini"] },
            ru: { question: "Что задает код width: 300px?", options: ["Высоту элемента", "Прозрачность", "Ширину элемента", "Размер текста"] },
            answer: 2
        },
        {
            uz: { question: "border-radius: 50% kodi elementni qanday holatga keltiradi?", options: ["Kvadrat qiladi", "Burchaklarini yumaloq (doira) qiladi", "Yashiradi", "Kengaytiradi"] },
            ru: { question: "В какое состояние приводит элемент border-radius: 50%?", options: ["Делает квадратом", "Делает углы круглыми (кругом)", "Скрывает", "Расширяет"] },
            answer: 1
        },
        {
            uz: { question: "padding xossasi nima uchun ishlatiladi?", options: ["Elementning ichki bo‘shlig‘i uchun", "Tashqi margin uchun", "Chegara rangi uchun", "Rasm o‘lchami uchun"] },
            ru: { question: "Для чего используется свойство padding?", options: ["Для внутреннего отступа", "Для внешнего отступа", "Для цвета границы", "Для размера фото"] },
            answer: 0
        },
        {
            uz: { question: "border: none kodi nima beradi?", options: ["Qalin chegara", "Chegarani olib tashlaydi", "Fon rangini o‘chiradi", "Matnni o‘chiradi"] },
            ru: { question: "Что дает код border: none?", options: ["Толстую границу", "Убирает границу", "Удаляет цвет фона", "Удаляет текст"] },
            answer: 1
        },
        {
            uz: { question: ":hover selektori qachon ishga tushadi?", options: ["Tugma bosilganda", "Sahifa yuklanganda", "Sichqoncha element ustiga kelganda", "Kompyuter o‘chganda"] },
            ru: { question: "Когда срабатывает селектор :hover?", options: ["При клике", "При загрузке страницы", "При наведении мыши на элемент", "При выключении"] },
            answer: 2
        },
        {
            uz: { question: "HTML-da giperhavola (link) yaratish uchun qaysi teg ishlatiladi?", options: ["<link>", "<href>", "<a>", "<p>"] },
            ru: { question: "Какой тег используется для создания гиперссылки в HTML?", options: ["<link>", "<href>", "<a>", "<p>"] },
            answer: 2
        },
        {
            uz: { question: "<a> tegi ichidagi href atributi nimani bildiradi?", options: ["Havola o‘tadigan manzilni", "Matn rangini", "Rasm nomini", "Fayl hajmini"] },
            ru: { question: "Что означает атрибут href в теге <a>?", options: ["Адрес перехода ссылки", "Цвет текста", "Имя картинки", "Размер файла"] },
            answer: 0
        },
        {
            uz: { question: "CSS-da .card yozilishi nimani bildiradi?", options: ["ID selektorini", "Class selektorini", "HTML tegini", "Universal selektorni"] },
            ru: { question: "Что означает запись .card в CSS?", options: ["Селектор ID", "Селектор класса", "HTML-тег", "Универсальный селектор"] },
            answer: 1
        },
        {
            uz: { question: "HTML-da elementga class atributi nima uchun beriladi?", options: ["Faqat JS ishlatish uchun", "Stillash va guruhlash uchun CSS ulashga", "Kompyuterni tezlashtirish uchun", "Fayl yaratish uchun"] },
            ru: { question: "Зачем элементу в HTML дается атрибут class?", options: ["Только для JS", "Для подвязки CSS и стилизации", "Для ускорения ПК", "Для создания файла"] },
            answer: 1
        },
        {
            uz: { question: "display: flex kodi nima beradi?", options: ["Elementlarni moslashuvchan joylashtirish konteyneri", "Matnni o‘chirish", "Rang berish", "Rasmni kesish"] },
            ru: { question: "Что дает код display: flex?", options: ["Контейнер для гибкого размещения элементов", "Удаление текста", "Окрашивание", "Обрезку фото"] },
            answer: 0
        },
        {
            uz: { question: "HTML-da rasm chiqarish uchun qaysi teg ishlatiladi?", options: ["<picture>", "<image>", "<img>", "<src>"] },
            ru: { question: "Какой тег используется для отображения картинки в HTML?", options: ["<picture>", "<image>", "<img>", "<src>"] },
            answer: 2
        },
        {
            uz: { question: "<img> tegidagi src atributining vazifasi nima?", options: ["Rasm manzilini ko‘rsatish", "Rasm kengligi", "Rasm ramkasi", "Rasm tavsifi"] },
            ru: { question: "Какова функция атрибута src в теге <img>?", options: ["Указание пути к картинке", "Ширина картинки", "Рамка картинки", "Описание картинки"] },
            answer: 0
        },
        {
            uz: { question: "Tashqi CSS fayli odatda qanday kengaytma bilan saqlanadi?", options: [".html", ".css", ".js", ".style"] },
            ru: { question: "С каким расширением обычно сохраняется внешний файл CSS?", options: [".html", ".css", ".js", ".style"] },
            answer: 1
        },
        {
            uz: { question: "HTML fayllarining kengaytmasi qanday bo‘ladi?", options: [".doc", ".txt", ".html", ".css"] },
            ru: { question: "Какое расширение имеют файлы HTML?", options: [".doc", ".txt", ".html", ".css"] },
            answer: 2
        },
        {
            uz: { question: "HTML-da yangi qatorga o‘tish (line break) uchun qaysi teg ishlatiladi?", options: ["<br>", "<lb>", "<hr>", "<break>"] },
            ru: { question: "Какой тег используется для переноса строки в HTML?", options: ["<br>", "<lb>", "<hr>", "<break>"] },
            answer: 0
        },
        {
            uz: { question: "Gorinontal chiziq tortish uchun HTML-da qaysi teg ishlatiladi?", options: ["<line>", "<border>", "<hr>", "<br>"] },
            ru: { question: "Какой тег используется в HTML для проведения горизонтальной линии?", options: ["<line>", "<border>", "<hr>", "<br>"] },
            answer: 2
        },
        {
            uz: { question: "Matnni qalin (bold) qilish uchun CSS-da qaysi xossa ishlatiladi?", options: ["font-style: bold", "font-weight: bold", "text-weight: bold", "font-size: bold"] },
            ru: { question: "Какое свойство CSS делает текст жирным?", options: ["font-style: bold", "font-weight: bold", "text-weight: bold", "font-size: bold"] },
            answer: 1
        },
        {
            uz: { question: "Matnni og‘ma (italic) qilish uchun CSS-da qaysi xossa ishlatiladi?", options: ["font-style: italic", "font-weight: italic", "text-decoration: italic", "font-transform: italic"] },
            ru: { question: "Какое свойство CSS делает текст курсивным?", options: ["font-style: italic", "font-weight: italic", "text-decoration: italic", "font-transform: italic"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript kodlarini HTML sahifasiga ulash uchun qaysi teg ishlatiladi?", options: ["<js>", "<script>", "<javascript>", "<code"] },
            ru: { question: "Какой тег используется для подключения JavaScript к HTML?", options: ["<js>", "<script>", "<javascript>", "<code"] },
            answer: 1
        },
        {
            uz: { question: "JavaScript-da konsolga ma’lumot chiqarish uchun qaysi buyruq ishlatiladi?", options: ["print.out()", "console.log()", "document.write()", "log.console()"] },
            ru: { question: "Какая команда используется в JS для вывода информации в консоль?", options: ["print.out()", "console.log()", "document.write()", "log.console()"] },
            answer: 1
        },
        {
            uz: { question: "HTML hujjatining sarlavha va metama’lumotlar qismi qaysi teg ichida bo‘ladi?", options: ["<body>", "<meta>", "<head>", "<title>"] },
            ru: { question: "В каком теге хранятся метаданные и заголовок страницы HTML?", options: ["<body>", "<meta>", "<head>", "<title>"] },
            answer: 2
        },
        {
            uz: { question: "Sahifada ko‘rinadigan barcha kontentlar qaysi teg ichida yoziladi?", options: ["<head>", "<body>", "<html>", "<main>"] },
            ru: { question: "Внутри какого тега пишется весь видимый контент страницы?", options: ["<head>", "<body>", "<html>", "<main>"] },
            answer: 1
        },
        {
            uz: { question: "height: 100px kodi nimani belgilaydi?", options: ["Kenglikni", "Balandlikni", "Chegarani", "Shrift o‘lchamini"] },
            ru: { question: "Что задает код height: 100px?", options: ["Ширину", "Высоту", "Границу", "Размер шрифта"] },
            answer: 1
        },
        {
            uz: { question: "CSS-da matn ostiga chizishni olib tashlash uchun (masalan linklarda) nima yoziladi?", options: ["text-decoration: none", "text-style: none", "font-underline: false", "border: none"] },
            ru: { question: "Как убрать подчеркивание текста в CSS (например у ссылок)?", options: ["text-decoration: none", "text-style: none", "font-underline: false", "border: none"] },
            answer: 0
        }
    ],

    // ==================================
    // 8-SINF (30 TA SAVOL)
    // ==================================
    "8": [
        {
            uz: { question: "HTML hujjatining eng yuqori ildiz tegi qaysi?", options: ["<body>", "<html>", "<head>", "<doctype>"] },
            ru: { question: "Какой корневой тег находится на самом верхнем уровне HTML-документа?", options: ["<body>", "<html>", "<head>", "<doctype>"] },
            answer: 1
        },
        {
            uz: { question: "CSS-da class selektori qaysi belgi bilan yoziladi?", options: ["#", ".", "@", "$"] },
            ru: { question: "С какого символа начинается селектор класса в CSS?", options: ["#", ".", "@", "$"] },
            answer: 1
        },
        {
            uz: { question: "CSS-da ID selektori qaysi belgi bilan yoziladi?", options: ["#", ".", "&", "!"] },
            ru: { question: "С какого символа начинается селектор ID в CSS?", options: ["#", ".", "&", "!"] },
            answer: 0
        },
        {
            uz: { question: "margin xossasining padding-dan farqi nimada?", options: ["Margin — ichki bo‘shliq", "Margin — elementning tashqi bo‘shlig‘i", "Margin — matn rangi", "Hech qanday farqi yo‘q"] },
            ru: { question: "В чем отличие свойства margin от padding?", options: ["Margin — внутренний отступ", "Margin — внешний отступ элемента", "Margin — цвет текста", "Разницы нет"] },
            answer: 1
        },
        {
            uz: { question: "padding xossasi nimani boshqaradi?", options: ["Tashqi chegara masofasini", "Element ichidagi tarkib va chegara orasidagi masofani", "Matn shriftini", "Faqat orqa fonni"] },
            ru: { question: "Чем управляет свойство padding?", options: ["Внешним отступом", "Внутренним отступом между контентом и границей", "Шрифтом", "Только фоном"] },
            answer: 1
        },
        {
            uz: { question: "Flexbox-da justify-content xossasi elementlarni qaysi o‘q bo‘yicha joylashtiradi?", options: ["Asosiy o‘q (main axis) bo‘yicha", "Vertikal o‘q bo‘yicha", "Z-indeks bo‘yicha", "Aylana bo‘ylab"] },
            ru: { question: "По какой оси justify-content выравнивает элементы в Flexbox?", options: ["По главной оси (main axis)", "По вертикали", "По Z-индексу", "По кругу"] },
            answer: 0
        },
        {
            uz: { question: "align-items xossasining Flexbox-dagi vazifasi nima?", options: ["Elementlarni ko‘ndalang o‘q (cross axis) bo‘yicha joylashtirish", "Matnni tekislash", "Rang berish", "Kenglik berish"] },
            ru: { question: "Какова функция align-items в Flexbox?", options: ["Выравнивание по поперечной оси (cross axis)", "Выравнивание текста", "Окрашивание", "Задание ширины"] },
            answer: 0
        },
        {
            uz: { question: "display: flex berilgan element nima deb ataladi?", options: ["Flex item", "Flex container", "Grid box", "Inline block"] },
            ru: { question: "Как называется элемент, которому задано display: flex?", options: ["Flex item", "Flex container", "Grid box", "Inline block"] },
            answer: 1
        },
        {
            uz: { question: "position: fixed berilgan element qanday joylashadi?", options: ["Ota-ona elementga nisbatan", "Brauzer oynasiga (viewport) nisbatan qotiriladi", "Normal oqimda turadi", "Sahifa bilan birga scroll bo‘ladi"] },
            ru: { question: "Как позиционируется элемент с position: fixed?", options: ["Относительно родителя", "Фиксируется относительно окна браузера", "В обычном потоке", "Скроллится вместе со страницей"] },
            answer: 1
        },
        {
            uz: { question: "position: sticky qanday ishlaydi?", options: ["Scroll qilinganda belgilangan chegarada yopishib qoladi", "Mutlaqo ko‘rinmaydi", "Sahifadan chiqib ketadi", "Faqat mobilda ishlaydi"] },
            ru: { question: "Как работает position: sticky?", options: ["Липнет при прокрутке в заданной позиции", "Полностью исчезает", "Уходит за пределы", "Работает только на мобильных"] },
            answer: 0
        },
        {
            uz: { question: "HTML-da forma yaratish uchun qaysi teg ishlatiladi?", options: ["<input>", "<form>", "<fieldset>", "<button>"] },
            ru: { question: "Какой тег используется для создания формы в HTML?", options: ["<input>", "<form>", "<fieldset>", "<button>"] },
            answer: 1
        },
        {
            uz: { question: "Foydalanuvchi ma’lumot kiritishi uchun eng ko‘p ishlatiladigan HTML tegi qaysi?", options: ["<input>", "<label>", "<select>", "<option>"] },
            ru: { question: "Какой тег HTML чаще всего используется для ввода данных пользователем?", options: ["<input>", "<label>", "<select>", "<option>"] },
            answer: 0
        },
        {
            uz: { question: "HTML-da tugma yaratish tegi qaysi?", options: ["<click>", "<submit>", "<button>", "<input type='text'>"] },
            ru: { question: "Какой тег создает кнопку в HTML?", options: ["<click>", "<submit>", "<button>", "<input type='text'>"] },
            answer: 2
        },
        {
            uz: { question: "max-width: 1200px CSS xossasi nimani anglatadi?", options: ["Element kengligi har doim 1200px", "Element kengligi maksimum 1200px bo‘lishi mumkin", "Eng kam kenglik 1200px", "Balandlik 1200px"] },
            ru: { question: "Что означает max-width: 1200px в CSS?", options: ["Ширина всегда 1200px", "Максимальная ширина элемента — 1200px", "Минимальная ширина 1200px", "Высота 1200px"] },
            answer: 1
        },
        {
            uz: { question: "Responsive Web Design (Moslashuvchan dizayn) nima?", options: ["Saytning turli qurilmalar va ekran o‘lchamlariga moslashishi", "Saytga tezkor JavaScript ulanishi", "Faqat kompyuterlar uchun dizayn", "Faqat dizayn dasturida ishlash"] },
            ru: { question: "Что такое Responsive Web Design (адаптивный дизайн)?", options: ["Адаптация сайта под разные устройства и экраны", "Быстрое подключение JS", "Дизайн только для ПК", "Работа только в графическом редакторе"] },
            answer: 0
        },
        {
            uz: { question: "CSS-da turli ekran o‘lchamlari uchun stil yozishda qaysi qoida ishlatiladi?", options: ["@import", "@keyframes", "@media", "@font-face"] },
            ru: { question: "Какое правило используется в CSS для стилей под разные экраны?", options: ["@import", "@keyframes", "@media", "@font-face"] },
            answer: 2
        },
        {
            uz: { question: "text-align: center nima qiladi?", options: ["Matnni chapga tekislaydi", "Matnni o‘ngga tekislaydi", "Matnni markazga tekislaydi", "Matnni o‘chiradi"] },
            ru: { question: "Что делает text-align: center?", options: ["Выравнивает по левому краю", "Выравнивает по правому краю", "Выравнивает текст по центру", "Удаляет текст"] },
            answer: 2
        },
        {
            uz: { question: "box-shadow CSS xossasining vazifasi nima?", options: ["Elementga soya berish", "Elementni qorong‘ilashtirish", "Matnni yashirish", "Chegarani o‘chirish"] },
            ru: { question: "Какова функция CSS-свойства box-shadow?", options: ["Добавление тени элементу", "Затемнение элемента", "Скрытие текста", "Удаление границы"] },
            answer: 0
        },
        {
            uz: { question: "transition xossasi CSS-da nima uchun kerak?", options: ["Element animatsiyalari va o‘zgarishlarini silliq bajarish uchun", "Sahifani boshqa sahifaga o‘tkazish uchun", "JavaScript kodini yuklash uchun", "Ranglarni almashtirish uchun"] },
            ru: { question: "Зачем нужно свойство transition в CSS?", options: ["Для плавного изменения CSS-свойств", "Для перехода на другую страницу", "Для загрузки JS", "Для смены цвета"] },
            answer: 0
        },
        {
            uz: { question: "cursor: pointer kodi qanday natija beradi?", options: ["Sichqoncha kursorini ko‘rsatkich barmoq shakliga keltiradi", "Kursor yo‘qoladi", "Kursor text holatiga o‘tadi", "Kursor kattalashadi"] },
            ru: { question: "Какой результат дает cursor: pointer?", options: ["Меняет курсор на указатель (палец)", "Курсор исчезает", "Курсор становится текстовым", "Курсор увеличивается"] },
            answer: 0
        },
        {
            uz: { question: "HTML-da tartiblangan ro‘yxat (ordered list) yaratish uchun qaysi teg ishlatiladi?", options: ["<ul>", "<ol>", "<li>", "<dl>"] },
            ru: { question: "Какой тег используется для нумерованного (упорядоченного) списка?", options: ["<ul>", "<ol>", "<li>", "<dl>"] },
            answer: 1
        },
        {
            uz: { question: "HTML-da tartibsiz (bulleted list) ro‘yxat yaratish uchun qaysi teg ishlatiladi?", options: ["<ol>", "<ul>", "<li>", "<list>"] },
            ru: { question: "Какой тег используется для маркированного списка?", options: ["<ol>", "<ul>", "<li>", "<list>"] },
            answer: 1
        },
        {
            uz: { question: "Ro‘yxat elementlarini bildirish uchun <ul> va <ol> ichida qaysi teg ishlatiladi?", options: ["<item>", "<list>", "<li>", "<option>"] },
            ru: { question: "Какой тег используется внутри <ul> и <ol> для элементов списка?", options: ["<item>", "<list>", "<li>", "<option>"] },
            answer: 2
        },
        {
            uz: { question: "CSS-da z-index xossasi nimani boshqaradi?", options: ["Elementlarning ustma-ust taxlanish tartibini (qavatini)", "Element kengligini", "Shrift kattaligini", "Shaffoflikni"] },
            ru: { question: "Чем управляет свойство z-index в CSS?", options: ["Порядком наложения элементов по оси Z (слоями)", "Шириной", "Размером шрифта", "Прозрачностью"] },
            answer: 0
        },
        {
            uz: { question: "opacity: 0.5 kodi nima qiladi?", options: ["Elementni 50% shaffof (yarim shaffof) qiladi", "Elementni 50px suradi", "Kenglikni 50% qiladi", "Balandlikni 50% qiladi"] },
            ru: { question: "Что делает opacity: 0.5?", options: ["Делает элемент полупрозрачным (50%)", "Сдвигает на 50px", "Ширина 50%", "Высота 50%"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript-da let va const o‘rtasidagi asosiy farq nimada?", options: ["Const qiymatini qayta o‘zgartirib bo‘lmaydi", "Let faqat sonlar uchun", "Farqi yo‘q", "Const o‘zgaruvchi yaratmaydi"] },
            ru: { question: "В чем главное отличие const от let в JS?", options: ["Значение const нельзя переназначить", "Let только для чисел", "Разницы нет", "Const не создает переменную"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript-da satr (String) qanday belgilarda yoziladi?", options: ["Qavslar ichida ()", "Qoshtirnoq yoki birlik tirnoq ichida (' ' yoki \" \")", "Kvadrat qavsda []", "Figurali qavsda {}"] },
            ru: { question: "Как записываются строки (String) в JavaScript?", options: ["В скобках ()", "В кавычках (' ' или \" \")", "В квадратных скобках []", "В фигурных скобках {}"] },
            answer: 1
        },
        {
            uz: { question: "HTML-da jadval yaratish qaysi teg bilan boshlanadi?", options: ["<grid>", "<table>", "<tr>", "<td>"] },
            ru: { question: "Каким тегом начинается создание таблицы в HTML?", options: ["<grid>", "<table>", "<tr>", "<td>"] },
            answer: 1
        },
        {
            uz: { question: "Jadvalda qator yaratish uchun HTML-da qaysi teg ishlatiladi?", options: ["<td>", "<th>", "<tr>", "<row>"] },
            ru: { question: "Какой тег используется для строки таблицы в HTML?", options: ["<td>", "<th>", "<tr>", "<row>"] },
            answer: 2
        },
        {
            uz: { question: "display: none kodi berilgan element brauzerda qanday ko‘rinadi?", options: ["Yarim shaffof ko‘rinadi", "Umuman ko‘rinmaydi va joy ham egallamaydi", "Kulrang bo‘lib qoladi", "Faqat matni ko‘rinadi"] },
            ru: { question: "Как отображается элемент с display: none?", options: ["Полупрозрачный", "Полностью исчезает и не занимает место", "Серый", "Виден только текст"] },
            answer: 1
        }
    ],

    // ==================================
    // 9-SINF (30 TA SAVOL)
    // ==================================
    "9": [
        {
            uz: { question: "JavaScript (JS) ning veb-dasturlashdagi asosiy vazifasi nima?", options: ["Faqat sahifani bezash", "Sahifaga interaktivlik va dinamik mantiq qo‘shish", "Faqat ma’lumotlar bazasi bilan ishlash", "Brauzerni yopish"] },
            ru: { question: "Какова главная задача JavaScript в веб-разработке?", options: ["Только стилизация", "Интерактивность и динамика страницы", "Работа только с БД", "Закрытие браузера"] },
            answer: 1
        },
        {
            uz: { question: "JavaScript fayllari qanday kengaytma bilan saqlanadi?", options: [".script", ".js", ".java", ".code"] },
            ru: { question: "С каким расширением сохраняются файлы JavaScript?", options: [".script", ".js", ".java", ".code"] },
            answer: 1
        },
        {
            uz: { question: "JS-da modern o‘zgaruvchilar e’lon qilish uchun qaysi kalit so‘zlar ishlatiladi?", options: ["var, float, int", "let va const", "string, bool", "make, create"] },
            ru: { question: "Какие ключевые слова используются в современном JS для объявления переменных?", options: ["var, float, int", "let и const", "string, bool", "make, create"] },
            answer: 1
        },
        {
            uz: { question: "const kalit so‘zi bilan yaratilgan o‘zgaruvchi xususiyati qanday?", options: ["Qiymati keyinchalik o‘zgartirilmaydigan o‘zgarmas qiymat", "Faqat son saqlaydi", "Har doim 0 ga teng", "Xotiradan joy olmaydi"] },
            ru: { question: "Какова особенность переменной, созданной с const?", options: ["Значение константы нельзя переназначить", "Хранит только числа", "Всегда равна 0", "Не занимает память"] },
            answer: 0
        },
        {
            uz: { question: "let x = 15; kodidagi 15 nima deb ataladi?", options: ["O‘zgaruvchi nomi", "O‘zgaruvchi qiymati (Value)", "Funksiya", "Operator"] },
            ru: { question: "Чем является 15 в коде let x = 15;?", options: ["Имя переменной", "Значение переменной (Value)", "Функция", "Оператор"] },
            answer: 1
        },
        {
            uz: { question: "JavaScript-da if shart operatori nima uchun kerak?", options: ["Ma’lum shart bajarilishiga qarab kodni ishlatish uchun", "Takrorlanuvchi sikl hosil qilish uchun", "O‘zgaruvchini o‘chirish uchun", "HTML tegini yaratish uchun"] },
            ru: { question: "Зачем нужен условный оператор if в JS?", options: ["Выполнение кода по условию", "Для циклов", "Удаление переменной", "Создание HTML-тега"] },
            answer: 0
        },
        {
            uz: { question: "if...else strukturasi ichidagi else bloki qachon ishlaydi?", options: ["if sharti yolg‘on (false) bo‘lganda", "Har doim ishlaydi", "if sharti rost bo‘lganda", "Faqat xatolik bo‘lganda"] },
            ru: { question: "Когда выполняется блок else в конструкции if...else?", options: ["Когда условие if ложно (false)", "Всегда", "Когда условие if истинно", "Только при ошибке"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript-da function nima?", options: ["Qayta ishlatiladigan kodlar bloki", "Maxsus CSS xossasi", "HTML atributi", "Xatolik turi"] },
            ru: { question: "Что такое function в JavaScript?", options: ["Многократно используемый блок кода", "Свойство CSS", "Атрибут HTML", "Тип ошибки"] },
            answer: 0
        },
        {
            uz: { question: "onclick hodisasi (event) qachon sodir bo‘ladi?", options: ["Foydalanuvchi elementga sichqoncha bilan bosganda", "Sichqoncha element ustiga kelganda", "Sahifa yuklanishi tugaganda", "Tugmacha bosib turilganda"] },
            ru: { question: "Когда срабатывает событие onclick?", options: ["При клике мышью на элемент", "При наведении", "При загрузке", "При зажатии"] },
            answer: 0
        },
        {
            uz: { question: "document.querySelector('.title') kodi nima qiladi?", options: ["Title classli eng birinchi HTML elementni topib beradi", "Sahifa sarlavhasini o‘zgartiradi", "Class yaratadi", "Elementni o‘chiradi"] },
            ru: { question: "Что делает код document.querySelector('.title')?", options: ["Находит первый HTML-элемент с классом title", "Меняет title страницы", "Создает класс", "Удаляет элемент"] },
            answer: 0
        },
        {
            uz: { question: "DOM elementining matnini o‘zgartirish uchun JS-da qaysi xossadan foydalaniladi?", options: ["textContent", "changeText", "innerFont", "valueText"] },
            ru: { question: "Какое свойство JS используется для изменения текста DOM-элемента?", options: ["textContent", "changeText", "innerFont", "valueText"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript-da massiv (Array) qaysi qavslar yordamida e’lon qilinadi?", options: ["{ }", "( )", "[ ]", "< >"] },
            ru: { question: "С помощью каких скобок объявляется массив (Array) в JS?", options: ["{ }", "( )", "[ ]", "< >"] },
            answer: 2
        },
        {
            uz: { question: "JavaScript-da massiv (Array) tushunchasi nimani anglatadi?", options: ["Tartiblangan ma’lumotlar to‘plami va ro‘yxati", "Faqat bitta son saqlovchi o‘zgaruvchi", "HTML teglari to‘plami", "Stillar ro‘yxati"] },
            ru: { question: "Что означает массив (Array) в JavaScript?", options: ["Упорядоченная коллекция данных", "Переменная для одного числа", "Список тегов HTML", "Список стилей"] },
            answer: 0
        },
        {
            uz: { question: "console.log() funksiyasining vazifasi nima?", options: ["Dasturlash konsoliga ma’lumot chiqarish/tekshirish", "Foydalanuvchiga modal oyna chiqarish", "Faylni saqlash", "Sahifani chop etish"] },
            ru: { question: "Какова функция console.log()?", options: ["Вывод данных в консоль разработчика", "Вывод модального окна", "Сохранение файла", "Печать страницы"] },
            answer: 0
        },
        {
            uz: { question: "document.getElementById('btn') kodi nima qiladi?", options: ["ID si 'btn' bo‘lgan elementni oladi", "Yangi ID yaratadi", "Classni o‘zgartiradi", "Tugma chizadi"] },
            ru: { question: "Что делает document.getElementById('btn')?", options: ["Получает элемент с ID 'btn'", "Создает новый ID", "Меняет класс", "Рисует кнопку"] },
            answer: 0
        },
        {
            uz: { question: "addEventListener funksiyasi nima uchun ishlatiladi?", options: ["Elementga hodisa (event listener) biriktirish uchun", "Styleni qo‘shish uchun", "HTML element hosil qilish uchun", "Massiv elementlarini qo‘shish uchun"] },
            ru: { question: "Для чего используется addEventListener?", options: ["Для назначения обработчика событий", "Для добавления стиля", "Для создания HTML", "Для элементов массива"] },
            answer: 0
        },
        {
            uz: { question: "JS-da == va === operatorlari o‘rtasidagi farq nimada?", options: ["=== qiymat bilan birga ma’lumot turini ham tekshiradi", "== qat’iyroq", "Farqi yo‘q", "=== faqat matnlar uchun"] },
            ru: { question: "В чем разница между == и === в JS?", options: ["=== проверяет значение и тип данных", "== строже", "Разницы нет", "=== только для строк"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript-da CSS stillarini JS orqali o‘zgartirish uchun qaysi xossa ishlatiladi?", options: ["element.style", "element.css", "element.design", "element.theme"] },
            ru: { question: "Какое свойство используется для изменения CSS через JS?", options: ["element.style", "element.css", "element.design", "element.theme"] },
            answer: 0
        },
        {
            uz: { question: "setTimeout() funksiyasi nima qiladi?", options: ["Kodni ma’lum vaqt kechikishidan keyin bir marta bajaradi", "Kodni har soniyada takrorlaydi", "Vaqtni to‘xtatadi", "Soatni ko‘rsatadi"] },
            ru: { question: "Что делает функция setTimeout()?", options: ["Выполняет код один раз через указанную задержку", "Повторяет код каждую секунду", "Останавливает время", "Показывает часы"] },
            answer: 0
        },
        {
            uz: { question: "setInterval() funksiyasi setTimeout-dan nimasi bilan farq qiladi?", options: ["Kodni har belgilangan vaqt oralig‘ida qayta-qayta takrorlaydi", "Faqat bir marta ishlaydi", "Tezroq ishlaydi", "Vaqtni o‘lchaydi"] },
            ru: { question: "Чем setInterval отличается от setTimeout?", options: ["Повторяет код через равные интервалы времени", "Работает только 1 раз", "Работает быстрее", "Измеряет время"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript-da mantiqiy (Boolean) turga qaysi qiymatlar kiradi?", options: ["true va false", "yes va no", "1 va -1", "on va off"] },
            ru: { question: "Какие значения относятся к логическому типу (Boolean) в JS?", options: ["true и false", "yes и no", "1 и -1", "on и off"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript-da qiymati yo‘q, aniqlanmagan o‘zgaruvchi turi qanday ko‘rsatiladi?", options: ["undefined", "null", "NaN", "zero"] },
            ru: { question: "Как обозначается неинициализированная/неопределенная переменная в JS?", options: ["undefined", "null", "NaN", "zero"] },
            answer: 0
        },
        {
            uz: { question: "Massivning elementlar sonini (uzunligini) bilish uchun qaysi xossa ishlatiladi?", options: ["array.length", "array.size", "array.count", "array.total"] },
            ru: { question: "Какое свойство используется для получения длины (количества элементов) массива?", options: ["array.length", "array.size", "array.count", "array.total"] },
            answer: 0
        },
        {
            uz: { question: "Massiv oxiriga yangi element qo‘shish uchun qaysi JS metodi ishlatiladi?", options: ["push()", "pop()", "shift()", "append()"] },
            ru: { question: "Какой метод JS используется для добавления элемента в конец массива?", options: ["push()", "pop()", "shift()", "append()"] },
            answer: 0
        },
        {
            uz: { question: "Massivning eng oxirgi elementini o‘chirib tashlash uchun qaysi metod ishlatiladi?", options: ["pop()", "push()", "delete()", "remove()"] },
            ru: { question: "Какой метод удаляет последний элемент из массива?", options: ["pop()", "push()", "delete()", "remove()"] },
            answer: 0
        },
        {
            uz: { question: "JavaScript-da obyekt (Object) qaysi qavslar ichida e’lon qilinadi?", options: ["{ }", "[ ]", "( )", "< >"] },
            ru: { question: "В каких скобках объявляется объект (Object) в JS?", options: ["{ }", "[ ]", "( )", "< >"] },
            answer: 0
        },
        {
            uz: { question: "Foydalanuvchiga ogohlantirish darchasini ko‘rsatish uchun qaysi JS funksiyasi ishlatiladi?", options: ["alert()", "popup()", "msg()", "show()"] },
            ru: { question: "Какая функция JS выводит всплывающее окно с предупреждением?", options: ["alert()", "popup()", "msg()", "show()"] },
            answer: 0
        },
        {
            uz: { question: "Foydalanuvchidan tasdiq (OK / Cancel) olish uchun qaysi oyna chiqariladi?", options: ["confirm()", "prompt()", "alert()", "choice()"] },
            ru: { question: "Какая функция выводит окно с подтверждением (ОК / Отмена)?", options: ["confirm()", "prompt()", "alert()", "choice()"] },
            answer: 0
        },
        {
            uz: { question: "Foydalanuvchidan matnli ma’lumot kiritishni so‘raydigan JS muloqot oynasi qaysi?", options: ["prompt()", "confirm()", "input()", "read()"] },
            ru: { question: "Какое диалоговое окно в JS просит пользователя ввести текст?", options: ["prompt()", "confirm()", "input()", "read()"] },
            answer: 0
        },
        {
            uz: { question: "for sikli JavaScript-da nima uchun ishlatiladi?", options: ["Kod qismini ma’lum marta takrorlash uchun", "Faqat 1 marta shart tekshirish uchun", "Xatoni ushlash uchun", "CSS faylini ulash uchun"] },
            ru: { question: "Для чего используется цикл for в JavaScript?", options: ["Для многократного повторения участка кода", "Для одиночной проверки", "Для отлова ошибок", "Для подключения CSS"] },
            answer: 0
        }
    ]

};


// ======================================
// UMUMIY O'ZGARUVCHILAR
// ======================================

let questions = [];
let currentQuestion = 0;
let studentName = "";
let answers = [];
let timeLeft = 30 * 60; // 30 daqiqa
let timerInterval;


// ======================================
// HTML ELEMENTLAR
// ======================================

const startScreen = document.getElementById("startScreen");
const testScreen = document.getElementById("testScreen");
const resultScreen = document.getElementById("resultScreen");
const studentNameInput = document.getElementById("studentName");
const startButton = document.getElementById("startButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const finishButton = document.getElementById("finishButton");
const restartButton = document.getElementById("restartButton");
const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const optionsContainer = document.getElementById("optionsContainer");
const questionNumbers = document.getElementById("questionNumbers");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const timer = document.getElementById("timer");


// ======================================
// TARJIMALAR
// ======================================

const translations = {
    uz: {
        startTitle: "IT bilimlaringizni sinang",
        startDescription: "Ismingizni kiriting, sinfingiz va tilingizni tanlang.",
        nameLabel: "O‘quvchi ismi:",
        placeholder: "Ismingizni kiriting",
        classTitle: "Sinfni tanlang:",
        languageTitle: "Tilni tanlang:",
        questionsInfo: "Savol",
        timeInfo: "Daqiqa",
        scoreInfo: "Ball",
        start: "Testni boshlash",
        previous: "← Oldingi",
        next: "Keyingi →",
        questions: "Savollar",
        finish: "Testni yakunlash",
        result: "Test yakunlandi!",
        correct: "To‘g‘ri",
        wrong: "Noto‘g‘ri",
        unanswered: "Javobsiz",
        restart: "Qaytadan boshlash",
        excellent: "A’lo",
        good: "Yaxshi",
        satisfactory: "Qoniqarli",
        bad: "Qoniqarsiz",
        excellentMessage: "Juda yaxshi natija!",
        goodMessage: "Yaxshi natija! Bilimingizni yanada mustahkamlang.",
        satisfactoryMessage: "Yaxshi harakat. Mavzularni yana bir bor takrorlang.",
        badMessage: "Mavzularni yana bir bor o‘rganib chiqing.",
        enterName: "Iltimos, ismingizni kiriting.",
        finishConfirm: "Javobsiz savollar bor. Testni yakunlaysizmi?",
        timeUp: "Vaqt tugadi! Test avtomatik yakunlanadi.",
        classText: "sinf"
    },

    ru: {
        startTitle: "Проверьте свои знания по IT",
        startDescription: "Введите имя, выберите класс и язык.",
        nameLabel: "Имя ученика:",
        placeholder: "Введите своё имя",
        classTitle: "Выберите класс:",
        languageTitle: "Выберите язык:",
        questionsInfo: "Вопросов",
        timeInfo: "Минут",
        scoreInfo: "Баллов",
        start: "Начать тест",
        previous: "← Назад",
        next: "Далее →",
        questions: "Вопросы",
        finish: "Завершить тест",
        result: "Тест завершён!",
        correct: "Правильных",
        wrong: "Неправильных",
        unanswered: "Без ответа",
        restart: "Начать заново",
        excellent: "Отлично",
        good: "Хорошо",
        satisfactory: "Удовлетворительно",
        bad: "Неудовлетворительно",
        excellentMessage: "Отличный результат!",
        goodMessage: "Хороший результат! Продолжайте закреплять знания.",
        satisfactoryMessage: "Неплохой результат. Повторите темы ещё раз.",
        badMessage: "Рекомендуется ещё раз изучить темы.",
        enterName: "Пожалуйста, введите своё имя.",
        finishConfirm: "Есть вопросы без ответа. Завершить тест?",
        timeUp: "Время вышло! Тест будет автоматически завершён.",
        classText: "класс"
    }
};


// ======================================
// SINF TANLASH
// ======================================

document.querySelectorAll(".class-button").forEach(button => {
    button.addEventListener("click", () => {
        selectedClass = button.dataset.class;
        document.querySelectorAll(".class-button").forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});


// ======================================
// TIL TANLASH
// ======================================

document.querySelectorAll(".language-button").forEach(button => {
    button.addEventListener("click", () => {
        currentLanguage = button.dataset.lang;
        document.querySelectorAll(".language-button").forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        updateLanguage();
    });
});


// ======================================
// TILNI YANGILASH
// ======================================

function updateLanguage() {
    const t = translations[currentLanguage];

    document.getElementById("startTitle").textContent = t.startTitle;
    document.getElementById("startDescription").textContent = t.startDescription;
    document.getElementById("nameLabel").textContent = t.nameLabel;
    studentNameInput.placeholder = t.placeholder;
    document.getElementById("classTitle").textContent = t.classTitle;
    document.getElementById("languageTitle").textContent = t.languageTitle;
    document.getElementById("questionsInfo").textContent = t.questionsInfo;
    document.getElementById("timeInfo").textContent = t.timeInfo;
    document.getElementById("scoreInfo").textContent = t.scoreInfo;
    startButton.textContent = t.start;
    prevButton.textContent = t.previous;
    nextButton.textContent = t.next;
    document.getElementById("questionListTitle").textContent = t.questions;
    finishButton.textContent = t.finish;
    document.getElementById("resultTitle").textContent = t.result;
    document.getElementById("correctText").textContent = t.correct;
    document.getElementById("wrongText").textContent = t.wrong;
    document.getElementById("unansweredText").textContent = t.unanswered;
    restartButton.textContent = t.restart;
}


// ======================================
// TESTNI BOSHLASH
// ======================================

startButton.addEventListener("click", startTest);

function startTest() {
    studentName = studentNameInput.value.trim();
    const t = translations[currentLanguage];

    if (studentName === "") {
        alert(t.enterName);
        studentNameInput.focus();
        return;
    }

    questions = allQuestions[selectedClass];
    answers = new Array(questions.length).fill(null);
    currentQuestion = 0;
    timeLeft = 30 * 60; // 30 daqiqa

    startScreen.style.display = "none";
    testScreen.style.display = "block";
    resultScreen.style.display = "none";

    document.getElementById("studentDisplay").textContent = studentName;
    document.getElementById("testTitle").textContent = `${selectedClass}-${t.classText} — IT Test`;

    createQuestionNumbers();
    showQuestion();
    startTimer();
}


// ======================================
// SAVOLNI KO'RSATISH
// ======================================

function showQuestion() {
    const current = questions[currentQuestion][currentLanguage];
    const t = translations[currentLanguage];

    questionNumber.textContent = `${currentQuestion + 1}. ${t.questions}`;
    questionText.textContent = current.question;
    optionsContainer.innerHTML = "";

    current.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;

        if (answers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            answers[currentQuestion] = index;
            showQuestion();
        });

        optionsContainer.appendChild(button);
    });

    updateProgress();
    updateQuestionNumbers();

    prevButton.disabled = currentQuestion === 0;
    nextButton.disabled = currentQuestion === questions.length - 1;
}


// ======================================
// PROGRESS
// ======================================

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;
}


// ======================================
// SAVOL RAQAMLARI
// ======================================

function createQuestionNumbers() {
    questionNumbers.innerHTML = "";
    questions.forEach((_, index) => {
        const button = document.createElement("button");
        button.className = "question-number-button";
        button.textContent = index + 1;

        button.addEventListener("click", () => {
            currentQuestion = index;
            showQuestion();
        });

        questionNumbers.appendChild(button);
    });
}


// ======================================
// SAVOL RAQAMLARINI YANGILASH
// ======================================

function updateQuestionNumbers() {
    const buttons = document.querySelectorAll(".question-number-button");
    buttons.forEach((button, index) => {
        button.classList.remove("current", "answered");

        if (index === currentQuestion) {
            button.classList.add("current");
        }

        if (answers[index] !== null) {
            button.classList.add("answered");
        }
    });
}


// ======================================
// OLDINGI
// ======================================

prevButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});


// ======================================
// KEYINGI
// ======================================

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
});


// ======================================
// TIMER
// ======================================

function startTimer() {
    clearInterval(timerInterval);
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert(translations[currentLanguage].timeUp);
            finishTest();
        }
    }, 1000);
}


// ======================================
// TIMER UPDATE
// ======================================

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timer.classList.remove("warning", "danger");

    if (timeLeft <= 60) {
        timer.classList.add("danger");
    } else if (timeLeft <= 300) {
        timer.classList.add("warning");
    }
}


// ======================================
// YAKUNLASH
// ======================================

finishButton.addEventListener("click", () => {
    const unanswered = answers.filter(answer => answer === null).length;

    if (unanswered > 0) {
        const confirmFinish = confirm(translations[currentLanguage].finishConfirm);
        if (!confirmFinish) {
            return;
        }
    }

    finishTest();
});


// ======================================
// NATIJANI HISOBLASH (30 ta savol uchun 100 ballik shkala)
// ======================================

function finishTest() {
    clearInterval(timerInterval);

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    answers.forEach((answer, index) => {
        if (answer === null) {
            unanswered++;
        } else if (answer === questions[index].answer) {
            correct++;
        } else {
            wrong++;
        }
    });

    // 30 ta savoldan kelib chiqib 100 ballik tizim bo'yicha hisoblash
    const score = Math.round((correct / questions.length) * 100);
    const grade = getGrade(score);
    const message = getGradeMessage(score);

    document.getElementById("score").textContent = score;
    document.getElementById("grade").textContent = grade;
    document.getElementById("gradeMessage").textContent = message;
    document.getElementById("correctAnswers").textContent = correct;
    document.getElementById("wrongAnswers").textContent = wrong;
    document.getElementById("unansweredAnswers").textContent = unanswered;
    document.getElementById("resultStudent").textContent = studentName;
    document.getElementById("resultClass").textContent = `${selectedClass}-sinf`;

    testScreen.style.display = "none";
    resultScreen.style.display = "block";
}


// ======================================
// BAHO
// ======================================

function getGrade(score) {
    const t = translations[currentLanguage];

    if (score >= 90) {
        return t.excellent;
    }
    if (score >= 75) {
        return t.good;
    }
    if (score >= 55) {
        return t.satisfactory;
    }
    return t.bad;
}


// ======================================
// BAHO XABARI
// ======================================

function getGradeMessage(score) {
    const t = translations[currentLanguage];

    if (score >= 90) {
        return t.excellentMessage;
    }
    if (score >= 75) {
        return t.goodMessage;
    }
    if (score >= 55) {
        return t.satisfactoryMessage;
    }
    return t.badMessage;
}


// ======================================
// QAYTADAN BOSHLASH
// ======================================

restartButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    studentNameInput.value = "";
    answers = [];
    currentQuestion = 0;
    timeLeft = 30 * 60;

    resultScreen.style.display = "none";
    testScreen.style.display = "none";
    startScreen.style.display = "block";

    timer.classList.remove("warning", "danger");
    updateTimer();
});


// ======================================
// BOSHLANG'ICH HOLAT
// ======================================

updateLanguage();