const arrLessonsFront = [
  {
    id: 1,
    title: 'Основы HTML',
    elements: [
      {
        id: 1,
        title: 'Lessons 1',
        url: 'lesson1',
      },
      {
        id: 2,
        title: 'Lessons 2',
        url: 'lesson2',
      },
    ],
  },
  {
    id: 2,
    title: 'Основы CSS',
    elements: [
      {
        id: 1,
        title: 'Lessons 3',
        url: 'lesson3',
      },
      {
        id: 2,
        title: 'Lessons 4',
        url: 'lesson4',
      },
      {
        id: 3,
        title: 'Lessons 5',
        url: 'lesson5',
      },
    ],
  },
];

const arrLessonFront = [
  {
    id: 1,
    title: 'Язык разметки HTML',
    url: 'lesson1',
    elements: [
      {
        id: 1,
        title: 'html',
        p: `Тег <html> является контейнером, который заключает 
      в себе все содержимое веб-страницы, включая теги <head> и 
      <body>. Открывающий и закрывающий теги <html> в документе 
      необязательны, но хороший стиль диктует непременное их использование. 
      Как правило, тег <html> идет в документе вторым, после определения типа 
      документа (Document Type Definition, DTD), устанавливаемого через элемент 
      <!DOCTYPE>. Закрывающий тег <html> должен всегда стоять в документе последним.`,
        pre: `<!DOCTYPE HTML>
      <html>
       <head>
         <!-- Этот раздел предназначен для заголовка 
         страницы и технической информации. -->
       </head>
      
       <body>
         <!-- А здесь надо размещать все, что хочется увидеть на странице. -->
       </body>
      </html>`,
      },
      {
        id: 2,
        title: 'head',
        p: `Тег <head> предназначен для хранения других элементов,
         цель которых — помочь браузеру в работе с данными. Также 
         внутри контейнера <head> находятся метатеги, которые 
         используются для хранения информации предназначенной для
          браузеров и поисковых систем. Например, механизмы поисковых 
          систем обращаются к метатегам для получения описания сайта, 
          ключевых слов и других данных.
        Содержимое тега <head> не отображается напрямую 
        на веб-странице, за исключением тега <title>
         устанавливающего заголовок окна веб-страницы.
        Внутри контейнера <head> допускается размещать 
        следующие элементы: <base>, <basefont>, <bgsound>,
         <link>, <meta>, <script>, <style>, <title>.`,
        pre: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
        "http://www.w3.org/TR/html4/strict.dtd">
         <html>
           <head>
            <!-- Этот раздел предназначен для 
            заголовка страницы и технической информации. -->
           </head>
         
           <body>
            <!-- А здесь надо размещать все, что хочется увидеть на странице. -->
           </body>
          </html>`,
      },
      {
        id: 3,
        title: 'meta',
        p: `<meta> определяет метатеги, которые используются для хранения
         информации предназначенной для браузеров и поисковых систем.
          Например, механизмы поисковых систем обращаются к метатегам 
          для получения описания сайта, ключевых слов и других данных.
           Разрешается использовать более чем один метатег, все они 
           размещаются в контейнере <head>. Как правило, атрибуты любого
            метатега сводятся к парам «имя=значение», 
        которые определяются ключевыми словами content, name или http-equiv.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <title>Тег META</title>
          <meta charset="utf-8">
          <meta name="GENERATOR" content="Microsoft FrontPage 4.0">
          <meta name="ProgId" content="FrontPage.Editor.Document">
         </head>
         <body>
          <p>...</p>
         </body>
        </html>`,
      },
      {
        id: 4,
        title: 'title',
        p: `Определяет заголовок документа. Элемент <title> 
      не является частью документа и не показывается напрямую 
      на веб-странице. Допускается использовать только один тег
       <title> на документ и размещать его в контейнере <head>.`,
        pre: `<!DOCTYPE HTML>
       <html>
        <head>
         <title>htmlbook.ru - Как правильно писать заголовок страницы</title>
        </head> 
        <body>
       
         <p>...</p>
       
        </body>
       </html>`,
      },
      {
        id: 5,
        title: 'body',
        p: `Элемент <body> предназначен для хранения содержания веб-страницы
         (контента), отображаемого в окне браузера. Информацию, которую следует 
         выводить в документе, следует располагать именно внутри контейнера 
         <body>. К такой информации относится текст, изображения, теги, 
         скрипты JavaScript и т.д.
        Тег <body> также применяется для определения цветов ссылок и текста на 
        веб-странице. Подобная практика в HTML 4 осуждается и взамен для указания 
        цветовой схемы рекомендуется использовать стили, применяя их к селектору BODY.
         Тем не менее, большинство атрибутов до сих пор поддерживается разными браузерами.
        Часто тег <body> используется для размещения обработчика событий, например, 
        onload, которое выполняется после того, как документ завершил загрузку в
         текущее окно или фрейм.
        Открывающий и закрывающий теги <body> на веб-странице не являются 
        обязательными, однако хорошим стилем считается их использование, чтобы 
        определить начало и конец HTML-документа.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <title>Тег BODY</title>
          <meta charset="utf-8">
         </head>
         <body onload="alert('Документ загружен')">
        
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
          nonummy nibh euismod tincidunt ut lacreet 
          dolore magna aliguam erat volutpat.</p>
          <p>Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper 
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        
         </body>
        </html>`,
      },
      {
        id: 6,
        title: 'style',
        p: `Тег <style> применяется для определения стилей элементов веб-страницы.
         Тег <style> необходимо использовать внутри контейнера <head>. Можно задавать
          более чем один тег <style>.`,
        pre: `<!DOCTYPE HTML>
          <html>
           <head>
            <meta charset="utf-8">
            <title>Тег STYLE</title>
            <style type="text/css">
             h1 { 
              font-size: 120%; 
              font-family: Verdana, Arial, Helvetica, sans-serif; 
              color: #333366;
             }
            </style>
           </head> 
           <body>
          
             <H1>Hello, world!</H1>
          
           </body>
          </html>`,
      },
      {
        id: 7,
        title: 'header',
        p: `Тег <header> задает «шапку» сайта или раздела,
         в которой обычно располагается заголовок.`,
        pre: `<!DOCTYPE html>
         <html>
          <head>
           <meta charset="utf-8">
           <title>header</title>
          </head> 
          <body>
           <header>
             <h1>Персональный сайт Кристины Ветровой</h1>
           </header>
           <article>
             <h2>Добро пожаловать!</h2>
             <p>Рада приветствовать вас на своем сайте.</p>
           </article>
           <footer>
             Copyright Кристина Ветрова
           </footer>
          </body> 
         </html>`,
      },
      {
        id: 8,
        title: 'nav',
        p: `Тег <nav> задает навигацию по сайту. Если на 
        странице несколько блоков ссылок, то в <nav> обычно
         помещают приоритетные ссылки. Также допустимо использовать
          несколько тегов <nav> в документе. Запрещается вкладывать 
          <nav> внутрь <address>.`,
        pre: `<!DOCTYPE html>
          <html>
           <head>
            <meta charset="utf-8">
            <title>nav</title>
           </head> 
           <body>
            <header>
              <h1>Чебурашка и крокодил Гена</h1>
            </header>
            <nav><a href="1.html">Чебурашка</a> | <a href="2.html">Гена</a> |
                 <a href="3.html">Шапокляк</a> | <a href="4.html">Лариска</a></nav>
            <article>
              <h2>Добро пожаловать!</h2>
            </article>
           </body> 
          </html>`,
      },
      {
        id: 9,
        title: 'img',
        p: `Тег <img> предназначен для отображения на веб-странице изображений в 
        графическом формате GIF, JPEG или PNG. Адрес файла с картинкой задаётся через 
        атрибут src. Если необходимо, то рисунок можно сделать ссылкой на другой файл,
         поместив тег <img> в контейнер <a>. При этом вокруг изображения отображается 
         рамка, которую можно убрать, добавив атрибут border="0" в тег <img>.
        Рисунки также могут применяться в качестве карт-изображений, когда картинка 
        содержит активные области, выступающие в качестве ссылок. Такая карта по 
        внешнему виду ничем не отличается от обычного изображения, но при этом оно 
        может быть разбито на невидимые зоны разной формы, где каждая из областей служит
         ссылкой.`,
        pre: `<!DOCTYPE HTML>
         <html>
          <head>
           <meta charset="utf-8">
           <title>Тег IMG</title>
          </head>
          <body> 
         
           <p><a href="lorem.html"><img src="images/girl.png" 
           width="189" height="255" alt="lorem"></a>
           Lorem ipsum dolor sit amet...</p>
         
          </body>
         </html>`,
      },
      {
        id: 10,
        title: 'ul',
        p: `Тег <ul> устанавливает маркированный список. Каждый элемент списка должен
         начинаться с тега <li>. Если к тегу <ul> применяется таблица стилей, то элементы 
         <li> наследуют эти свойства.`,
        pre: `<!DOCTYPE HTML>
         <html>
          <head>
           <meta charset="utf-8">
           <title>Тег UL</title>
          </head>
          <body>
         
           <ul>
             <li>Чебурашка</li>
             <li>Крокодил Гена</li>
             <li>Шапокляк</li>
           </ul>
         
          </body>
         </html>`,
      },
      {
        id: 11,
        title: 'ol',
        p: `Тег <ol> устанавливает нумерованный список. Каждый элемент списка должен 
        начинаться с тега <li>. Если к тегу <ol> применяется таблица стилей, то элементы 
        <li> наследуют эти свойства.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <meta charset="utf-8">
          <title>Тег OL</title>
         </head>
         <body>
         
          <ol>
            <li>Чебурашка</li>
            <li>Крокодил Гена</li>
            <li>Шапокляк</li>
          </ol>
        
         </body>
        </html>`,
      },
      {
        id: 12,
        title: 'li',
        p: `Тег <li> определяет отдельный элемент списка. Внешний тег <ul> или <ol> 
        устанавливает тип списка — маркированный или нумерованный.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <meta charset="utf-8">
          <title>Тег LI</title>
         </head>
         <body>
        
          <ul>
           <li>Чебурашка</li>
           <li>Крокодил Гена</li>
           <li>Шапокляк</li>
          </ul>
        
         </body>
        </html>`,
      },
      {
        id: 13,
        title: 'div',
        p: `Элемент <div> является блочным элементом и предназначен для выделения 
        фрагмента 
        документа с целью изменения вида содержимого. Как правило, вид блока управляется с
        помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить 
        стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с 
        именем селектора.
        Как и при использовании других блочных элементов, содержимое тега <div> 
        всегда начинается с новой строки. После него также добавляется перенос строки.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <meta charset="utf-8">
          <title>Тег DIV</title>
          <style type="text/css">
           .block1 { 
            width: 200px; 
            background: #ccc;
            padding: 5px;
            padding-right: 20px; 
            border: solid 1px black; 
            float: left;
           }
           .block2 { 
            width: 200px; 
            background: #fc0; 
            padding: 5px; 
            border: solid 1px black; 
            float: left; 
            position: relative; 
            top: 40px; 
            left: -70px; 
           }
          </style> 
         </head>
         <body>
        
          <div class="block1">Lorem ipsum dolor sit amet, consectetuer 
           adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet 
           dolore magna aliguam erat volutpat.</div>
          <div class="block2">Ut wisis enim ad minim veniam, quis nostrud 
           exerci tution ullamcorper suscipit lobortis nisl ut aliquip ex 
           ea commodo consequat.</div> 
        
         </body>
        </html`,
      },
      {
        id: 14,
        title: 'section',
        p: `Задаёт раздел документа, может применяться для блока новостей, 
        контактной информации, глав текста, вкладок в диалоговом окне и др. 
        Раздел обычно содержит заголовок. Допускается вкладывать один тег <section>
         внутрь другого.`,
        pre: `<!DOCTYPE html>
         <html>
          <head>
           <meta charset="utf-8">
           <title>section</title>
          </head> 
          <body>
           <section>
            <h1>Съёмки фильма Полипропилен</h1>
            <p>История о том, как снимали фильм, где герои отдыхали на пляже, 
            потом пришёл антагонист, избил протагонистов, сбросил их в бассейн, 
            и что из этого получилось.</p>
           </section>
           <section>
            <h1>Хороший язык</h1>
            <p>История о том, как проходила студия изучения языка эсперанто, 
            в то время, как над ней, на веранде велась студия приколистов, 
            где травились анекдоты, и что из этого получилось.</p>
           </section>
          </body>
         </html>`,
      },
      {
        id: 15,
        title: 'article',
        p: `Тег <article> задает содержание сайта вроде новости, статьи,
         записи блога, форума или др.`,
        pre: `<!DOCTYPE html>
         <html>
          <head>
           <meta charset="utf-8">
           <title>article</title>
          </head> 
          <body>
           <header>
             <h1>Следы невиданных зверей</h1>
           </header>
           <article>
             История о том, как возле столовой появились загадочные розовые 
             следы с шестью пальцами, и почему это случилось. 
           </article>
          </body> 
         </html>`,
      },
      {
        id: 16,
        title: 'main',
        p: `Элемент <main> предназначен для основного содержимого документа. 
        Содержимое должно быть уникальным и не включать типовые блоки вроде шапки 
        сайта, подвала, навигации, боковой панели, формы поиска и т. п.`,
        pre: `<!DOCTYPE html>
        <html>
         <head>
          <meta charset="utf-8">
          <title>main</title>
         </head> 
         <body>
          <h1>Следы невиданных зверей</h1>
          <main>
            История о том, как возле столовой появились загадочные розовые 
            следы с шестью пальцами, и почему это случилось. 
          </main>
         </body> 
        </html>`,
      },
      {
        id: 17,
        title: 'footer',
        p: `Тег <footer> задаёт «подвал» сайта или раздела, в нём может располагаться 
        имя автора, дата документа, контактная и правовая информация.`,
        pre: `<!DOCTYPE html>
        <html>
         <head>
          <meta charset="utf-8">
          <title>footer</title>
         </head> 
         <body>
          <header>
            <h1>Персональный сайт Кристины Ветровой</h1>
          </header>
          <article>
            <h2>Добро пожаловать!</h2>
            <p>Рада приветствовать вас на своем сайте.</p>
          </article>
          <footer>
            Copyright Кристина Ветрова
          </footer>
         </body> 
        </html>`,
      },
      {
        id: 18,
        title: 'span',
        p: `Тег <span> предназначен для определения строчных элементов документа.
         В отличие от блочных элементов, таких как <table>, <p> или <div>, с 
         помощью тега <span> можно выделить часть информации внутри других тегов 
         и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно
          изменить цвет и размер первой буквы, если добавить начальный и конечный 
          тег <span> и определить для него стиль текста. Чтобы не описывать каждый
           раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей,
            а для тега добавить атрибут class или id с именем селектора.`,
        pre: `<!DOCTYPE HTML>
            <html>
             <head>
              <meta charset="utf-8">
              <title>Тег SPAN</title>
              <style>
                body { 
                 font-family: Arial, sans-serif; /* Рубленый шрифт */ 
                }
                .letter { 
                 color: red; /* Красный цвет символов */ 
                 font-size: 200%; /* Размер шрифта в процентах */ 
                 font-family: serif; /* Шрифт с засечками */ 
                 position: relative; /* Относительное позиционирование */ 
                 top: 5px; /* Сдвиг сверху */ 
                }
              </style> 
             </head>
             <body>
            
              <p><span class="letter">Р</span>азумные люди приспосабливаются к 
              окружающему миру. 
              Неразумные люди приспосабливают мир к себе. Вот почему прогресс 
              определяется 
              действиями неразумных людей.</p> 
              <p>Бернард Шоу</p>
             
             </body>
            </html>`,
      },
      {
        id: 19,
        title: 'hr',
        p: `Рисует горизонтальную линию, которая по своему виду зависит от 
        используемых параметров, а также браузера. Тег <hr> относится к блочным 
        элементам, линия всегда начинается с новой строки, а после нее все 
        элементы отображаются на следующей строке.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <meta charset="utf-8">
          <title>Тег HR</title>
         </head>
         <body>
        
         <hr>
          <p>Lorem ipsum dolor sit amet, consectetuer 
          adipiscing elit, sed diem nonummy nibh 
          euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Ut wisis enim 
          ad minim veniam, quis nostrud exerci tution ullamcorper suscipit lobortis nisl 
          ut aliquip ex ea commodo consequat.</p>
         <hr> 
        
         </body>
        </html>`,
      },
      {
        id: 20,
        title: 'em',
        p: `Тег <em> предназначен для акцентирования текста. Браузеры отображают
         такой текст курсивным начертанием.`,
        pre: `<!DOCTYPE HTML>
         <html>
          <head>
           <meta charset="utf-8">
           <title>Тег EM</title>
          </head>
          <body>
         
           <p><em>Lorem ipsum dolor sit amet</em></p>
           <p><b><em>Lorem</em></b> ipsum dolor sit amet, consectetuer 
           adipiscing elit, sed diem nonummy nibh euismod tincidunt ut 
           lacreet dolore magna 
           aliguam erat volutpat. <em>Ut</em> wisis enim ad minim veniam, quis 
           nostrud exerci tution ullamcorper suscipit lobortis nisl ut 
           aliquip ex ea commodo 
           consequat.</p>
         
          </body>
         </html>`,
      },
      {
        id: 21,
        title: 'i',
        p: `Устанавливает курсивное начертание шрифта. Допустимо 
        использовать этот тег совместно с другими тегами, которые 
        определяют начертание текста.`,
        pre: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
        "http://www.w3.org/TR/html4/strict.dtd">
      <html>
       <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Тег I</title>
       </head>
       <body>
      
        <p><b><i>Lorem ipsum dolor sit amet</i></b></p>
        <p><i>Lorem</i> ipsum dolor sit amet, consectetuer adipiscing elit, 
        sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat 
        volutpat. <i>Ut</i> wisis enim ad minim veniam, quis nostrud exerci 
        tution ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      
       </body>
      </html>`,
      },
      {
        id: 22,
        title: 'b',
        p: `Устанавливает жирное начертание шрифта. 
        Допустимо использовать этот тег совместно с другими 
        тегами, которые определяют начертание текста.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <meta charset="utf-8">
          <title>Тег B</title>
         </head>
         <body>
          <p><b>Lorem ipsum dolor sit amet</b></p>
          <p><b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, 
          sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat 
          volutpat. <b>Ut wisis</b> enim ad minim veniam, quis nostrud exerci 
          tution ullamcorper suscipit lobortis nisl 
          ut aliquip ex ea commodo consequat.</p>
         </body>
        </html>`,
      },
      {
        id: 23,
        title: 'strong',
        p: `Тег <strong> предназначен для акцентирования текста. Браузеры отображают 
        такой текст жирным начертанием.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <meta charset="utf-8">
          <title>Тег STRONG</title>
         </head>
         <body>
        
          <p><strong>Lorem ipsum dolor sit amet</strong></p>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetuer adipiscing elit, 
          sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat 
          volutpat. <strong>Ut wisis</strong> enim ad minim veniam, quis nostrud exerci 
          tution ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
          consequat.</p>
        
         </body>
        </html>`,
      },
      {
        id: 24,
        title: 'form',
        p: `ег <form> устанавливает форму на веб-странице. Форма предназначена
         для обмена данными между пользователем и сервером. Область применения
          форм не ограничена отправкой данных на сервер, с помощью клиентских 
          скриптов можно получить доступ к любому элементу формы, изменять его и 
          применять по своему усмотрению.
        Документ может содержать любое количество форм, но одновременно на сервер
         может быть отправлена только одна форма. По этой причине данные форм 
         должны быть независимы друг от друга.
        Для отправки формы на сервер используется кнопка Submit, того же можно
         добиться, если нажать клавишу Enter в пределах формы. Если кнопка Submit 
         отсутствует в форме, клавиша Enter имитирует ее использование.`,
        pre: `<!DOCTYPE HTML>
         <html>
          <head>
           <meta charset="utf-8">
           <title>Тег FORM</title>
          </head>
          <body>
         
          <form action="handler.php">
           <p><b>Как по вашему мнению расшифровывается аббревиатура 
           &quot;ОС&quot;?</b></p>
           <p><input type="radio" name="answer" value="a1">Офицерский состав<Br>
           <input type="radio" name="answer" value="a2">Операционная система<Br>
           <input type="radio" name="answer" value="a3">Большой полосатый мух</p>
           <p><input type="submit"></p>
          </form>
         
          </body>
         </html>`,
      },
      {
        id: 25,
        title: 'input',
        p: `Тег <input> является одним из разносторонних элементов формы и 
        позволяет создавать разные элементы интерфейса и обеспечить
         взаимодействие с пользователем. Главным образом <input> предназначен 
         для создания текстовых полей, различных кнопок, переключателей и флажков
         . Хотя элемент <input> не требуется помещать внутрь контейнера <form>, 
         определяющего форму, но если введенные пользователем данные должны быть
          отправлены на сервер, где их обрабатывает серверная программа, то указывать
           <form> обязательно. То же самое обстоит и в случае обработки данных с 
           помощью клиентских приложений, например, скриптов на языке JavaScript.`,
        pre: `<!DOCTYPE HTML>
           <html>
            <head>
             <meta charset="utf-8">
             <title>Тег INPUT</title>
            </head>
            <body>
           
            <form name="test" method="post" action="input1.php">
             <p><b>Ваше имя:</b><br>
              <input type="text" size="40">
             </p>
             <p><b>Каким браузером в основном пользуетесь:</b><Br>
              <input type="radio" name="browser" value="ie"> Internet Explorer<Br>
              <input type="radio" name="browser" value="opera"> Opera<Br>
              <input type="radio" name="browser" value="firefox"> Firefox<Br>
             </p>
             <p>Комментарий<Br>
              <textarea name="comment" cols="40" rows="3"></textarea></p>
             <p><input type="submit" value="Отправить">
              <input type="reset" value="Очистить"></p>
            </form>
           
            </body>
           </html>`,
      },
      {
        id: 26,
        title: 'option',
        p: `Тег <option> определяет отдельные пункты списка, создаваемого с
         помощью контейнера <select>. Ширина списка определяется самым широким
          текстом, указанным в теге <option>, а также может изменяться с помощью 
          стилей. Если планируется отправлять данные списка на сервер, то 
          требуется поместить элемент <select> внутрь формы. Это также необходимо
          , когда к данным списка идет обращение через скрипты.`,
        pre: `<!DOCTYPE HTML>
          <html>
           <head>
            <meta charset="utf-8">
            <title>Тег OPTION</title>
           </head>
           <body> 
          
            <form action="option1.php">
             <p><select size="3" name="hero">
              <option disabled>Выберите героя</option>
              <option value="t1" selected>Чебурашка</option>
              <option value="t2">Крокодил Гена</option>
              <option value="t3">Шапокляк</option>
              <option value="t4">Крыса Лариса</option>
             </select></p>
             <p><input type="submit" value="Отправить"></p>
            </form>
          
           </body>
          </html>`,
      },
      {
        id: 27,
        title: 'optgroup',
        p: `Тег <optgroup> представляет собой контейнер, внутри которого
         располагаются теги <option> объединенные в одну группу. Особенностью
          тега <optgroup> является то, что он не выделяется как обычный элемент
           списка, акцентируется с помощью жирного начертания, а все элементы, 
           входящие в этот контейнер, смещаются вправо от своего исходного положения.`,
        pre: `<!DOCTYPE HTML>
           <html>
            <head>
             <meta charset="utf-8">
             <title>Тег OPTGROUP</title>
            </head>
            <body>
           
             <form action="handler.php">
              <p><select>
              <optgroup label="Цвет">
               <option value="c1">Апельсиновый</option>
               <option value="c2">Лимонный</option>
               <option value="c3">Персиковый</option>
              </optgroup>
              <optgroup label="Тон">
               <option value="s1">Светлый</option>
               <option value="s2">Нормальный</option>
               <option value="s3">Темный</option>
              </optgroup>
              </select></p>
              <p><input type="submit" value="Отправить"></p>
             </form>
           
            </body>
           </html>`,
      },
      {
        id: 28,
        title: 'textarea',
        p: `Поле <textarea> представляет собой элемент формы для создания области,
         в которую можно вводить несколько строк текста. В отличие от тега <input>
          в текстовом поле допустимо делать переносы строк, они сохраняются при
           отправке данных на сервер.

        Между тегами <textarea> и </textarea> можно поместить любой текст,
         который будет отображаться внутри поля`,
        pre: `<!DOCTYPE HTML>
         <html>
          <head>
           <meta charset="utf-8">
           <title>Тег TEXTAREA</title>
          </head>
          <body>
         
           <form action="textarea1.php" method="post">
             <p><b>Введите ваш отзыв:</b></p>
             <p><textarea rows="10" cols="45" name="text"></textarea></p>
             <p><input type="submit" value="Отправить"></p>
           </form>
         
          </body>
         </html>`,
      },
      {
        id: 29,
        title: 'button',
        p: `Тег <button> создает на веб-странице кнопки и по своему
         действию напоминает результат, получаемый с помощью тега 
         <input> (с атрибутом type="button | reset | submit"). В 
         отличие от этого тега, <button> предлагает расширенные возможности 
         по созданию кнопок. Например, на подобной кнопке можно размещать 
         любые элементы HTML, в том числе изображения. Используя стили можно
          определить вид кнопки путем изменения шрифта, цвета фона, размеров 
          и других параметров.
        Теоретически, тег <button> должен располагаться внутри формы, 
        устанавливаемой элементом <form>. Тем не менее, браузеры не выводят 
        сообщение об ошибке и корректно работают с тегом <button>, если он 
        встречается самостоятельно. Однако, если необходимо результат нажатия
         на кнопку отправить на сервер, помещать <button> в контейнер <form>
          обязательно.`,
        pre: `<!DOCTYPE HTML>
          <html>
           <head>
            <meta charset="utf-8">
            <title>Тег BUTTON</title>
           </head>
           <body>
            <p style="text-align: center"><button>Кнопка с текстом</button>
            <button><img src="images/umbrella.gif" alt="Зонтик" 
                    style="vertical-align: middle"> Кнопка с рисунком</button></p>
           </body>
          </html>`,
      },
    ],
  },
  {
    id: 2,
    title: 'Использование CSS, понятие блочных и строчных блоков',
    url: 'lesson2',
    elements: [
      {
        id: 1,
        title: 'Существует 3 способа использование стилей в HTML файле',
        p: `Для подключение стилей существует 3 метода.
        Подключение через тег HTML, напрямую прописать стили и подключать файлы css`,
        pre: '',
      },
      {
        id: 2,
        title: 'style',
        p: `Тег <style> применяется для определения стилей элементов веб-страницы. 
        Тег <style> необходимо использовать внутри контейнера <head>. Можно 
        задавать более чем один тег <style>.`,
        pre: `<!DOCTYPE HTML>
        <html>
         <head>
          <meta charset="utf-8">
          <title>Тег STYLE</title>
          <style type="text/css">
           h1 { 
            font-size: 120%; 
            font-family: Verdana, Arial, Helvetica, sans-serif; 
            color: #333366;
           }
          </style>
         </head> 
         <body>
        
           <H1>Hello, world!</H1>
        
         </body>
        </html>`,
      },
      {
        id: 3,
        title: 'link',
        p: `Устанавливает связь с внешним документом вроде файла со стилями или со 
        шрифтами. В отличие от тега <a>, тег <link> размещается всегда внутри 
        контейнера <head> и не создает ссылку`,
        pre: `<!DOCTYPE HTML>
        <html>
          <head>
           <meta charset="utf-8">
           <title>Тег LINK</title>  
           <link rel="stylesheet" href="ie.css">
           <link rel="alternate" type="application/rss+xml" 
             title="Статьи с сайта htmlbook.ru" href="http://htmlbook.ru/rss.xml"> 
           <link rel="shortcut icon" href="http://htmlbook.ru/favicon.ico">
          </head> 
          <body>
            <p>...</p>
          </body>
        </html>`,
      },
      {
        id: 4,
        title: 'Внутренние стили',
        p: `Внутренний или встроенный стиль является по существу расширением для
         одиночного тега используемого на текущей веб-странице. Для определения
          стиля используется атрибут style, а его значением выступает набор
           стилевых правил `,
        pre: `<!DOCTYPE HTML>
           <html>
            <head>
             <meta charset="utf-8">
             <title>Внутренние стили</title>
            </head>
            <body>
             <p style="font-size: 120%; font-family: monospace; color: 
             #cd66cc">Пример текста</p>
           </body>
           </html>`,
      }, {
        id: 5,
        title: 'Блочные элементы',
        p: `представляют собой большие строительные блоки вашей веб-страницы. 
      При отображении браузер автоматически добавляет разрыв строки до и после 
      блочного элемента, при этом он занимает всю доступную ширину (по умолчанию
         отображается на веб-странице в виде прямоугольника), а высота блочного
          элемента вычисляется браузером автоматически, исходя из объема его
           содержимого. Текст в блочных элементах по умолчанию выравнивается
            по левому краю.
      Обычно блочные элементы используются, чтобы разделить содержимое
       веб-страницы на логические блоки (например: верхний колонтитул
         (шапка сайта), меню, блок с контентом, нижний колонтитул (footer)
          и др.). Блочные элементы нельзя вкладывать в строчные, исключением
           являются только ссылки и ячейки таблиц, внутри которых по
            стандарту HTML5 могут быть расположены блочные элементы.`,
        pre: '',
      },
      {
        id: 6,
        title: 'Строчные элементы',
        p: `Строчные элементы используются для
         разметки частей содержимого элементов.
          Ширина строчного элемента равна объему содержимого.
           В отличии от блочных элементов браузер не добавляет разрыв строки
            до и после строчного элемента, поэтому, если несколько строчных 
            элементов идут подряд друг за другом, они располагаются на одной
             строке и переносятся на другую строку при необходимости. В
              большинстве случаев внутрь строчных элементов допустимо 
              помещать другие строчные элементы, вставлять блочные 
              элементы внутрь строчных запрещено.`,
        pre: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Шрифты',
    url: 'lesson3',
    elements: [
      {
        title: 'Шрифты',
        p: ` 
        После цвета шрифт — возможно, важнейшее 
        свойство страницы. На этой странице я не 
        буду демонстрировать никаких "трюков", но 
        покажу ряд вариаций шрифтов, допустимых в CSS.
        Поскольку не все шрифты доступны на всех компьютерах 
        (существуют тысячи шрифтов и большинство из них не бесплатны),
         CSS предусматривает резервную систему. Первым вы указываете шрифт, 
         который хотели бы использовать. Затем следуют любые шрифты, которые 
         вы могли бы использовать, если первый указанный шрифт не доступен. А 
         закончить список вы должны типовым шрифтом, который имеет 5 видов:
          serif, sans-serif, monospace, cursive и fantasy.`,
        id: 20,
        pre: '',
      },
      {
        title: 'Color',
        p: 'Определяет цвет текста элемента',
        id: 1,
        pre: `        <html>
          <head>
          <meta charset="utf-8">
          <title>color</title>
          <style>
            .letter {
            color: red; /* Цвет символа */
            font-size: 200%; /* Размер шрифта */
            } 
            p {
            color: rgb(49, 151, 116); /* Цвет текста */
            }
          </style>
          </head> 
          <body>
          <p><span class="letter">L</span>orem ipsum dolor 
            sit amet, consectetuer adipiscing elit,
             sed diem nonummy nibh euismod tincidunt 
            ut lacreet dolore magna aliguam erat volutpat.</p>
          <p><span class="letter">U</span>t wisis enim ad 
            minim veniam, quis nostrud exerci tution ullamcorper suscipit lobortis nisl 
            ut aliquip ex ea commodo consequat.</p>
          </body>
       </html>`,
      },
      {
        id: 2,
        title: 'Font-size',
        p: `Определяет размер шрифта 
        элемента. Размер может быть установлен несколькими 
        способами. Набор констант (xx-small, x-small, small, medium,
           large, x-large, xx-large) задает размер, который называется 
           абсолютным. По правде говоря, они не совсем абсолютны,
            поскольку зависят от настроек браузера и операционной системы.
        Другой набор констант (larger, smaller) устанавливает
         относительные размеры шрифта. Поскольку размер унаследован 
         от родительского элемента, эти относительные размеры
          применяются к родительскому элементу, чтобы определить
           размер шрифта текущего элемента.
        В конечном итоге, размер шрифта сильно 
        зависит от значения свойства font-size у родителя элемента.
        Сам размер шрифта определяется как высота от базовой линии 
        до верхней границы кегельной площадки`,
        pre: `        <html>
         <head>
          <meta charset="utf-8">
          <title>font-size</title>
          <style>
           h1 {
            font-family: 'Times New Roman', Times, serif; /* Гарнитура текста */ 
            font-size: 250%; /* Размер шрифта в процентах */ 
           } 
           p {
            font-family: Verdana, Arial, Helvetica, sans-serif; 
            font-size: 11pt; /* Размер шрифта в пунктах */ 
           }
          </style>
         </head> 
         <body> 
          <h1>Duis te feugifacilisi</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
          nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
          Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
          lobortis nisl ut aliquip ex ea commodo consequat.</p>
         </body>
        </html>`,
      },
      {
        id: 3,
        title: 'Font-family',
        p: ` Устанавливает семейство
         шрифта, которое будет использоваться для
          оформления текста содержимого. Список шрифтов 
          может включать одно или несколько названий,
           разделенных запятой. Если в имени шрифта содержатся 
           пробелы, например, Trebuchet MS, оно должно 
           заключаться в одинарные или двойные кавычки.
        Когда браузер встречает первый шрифт в списке,
         он проверяет его наличие на компьютере пользователя.
          Если такого шрифта нет, берется следующее имя из 
          списка и также анализируется на присутствие. Поэтому 
          несколько шрифтов увеличивает вероятность, что хотя бы
           один из них будет обнаружен на клиентском компьютере. 
           Заканчивают список обычно ключевым словом, которое описывает
            тип шрифта — serif, sans-serif, cursive, fantasy или 
            monospace. Таким образом, последовательность шрифтов
             лучше начинать с экзотических типов и заканчивать 
             обобщенным именем, которое задает вид начертания.`,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>font-family</title>
         <style>
          h1 {
           font-family: Geneva, Arial, Helvetica, sans-serif;
          } 
          p {
           font-family: Georgia, 'Times New Roman', Times, serif;
          }
         </style>
        </head> 
        <body> 
         <h1>Duis te feugifacilisi</h1>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
         nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
         Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
         lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </body>
       </html>`,
      },
      {
        id: 4,
        title: 'Font-stlye',
        p: `Определяет начертание шрифта — 
        обычное, курсивное или наклонное. Когда 
        для текста установлено курсивное или наклонное
         начертание, браузер обращается к системе для
          поиска подходящего шрифта. Если заданный шрифт
           не найден, браузер использует специальный алгоритм
            для имитации нужного вида текста. Результат 
            и качество при этом могут получиться 
            неудовлетворительными, особенно при печати документа.`,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>font-style</title>
         <style>
          h1 {
           font-family: Verdana, 
           Arial, Helvetica, sans-serif; /* Рубленый шрифт заголовка */
          } 
          p {
           font-family: 'Times New Roman', Times, serif; /* Шрифт с засечками */
           font-style: italic; /* Курсивное начертание */
          }
         </style>
        </head>
        <body> 
         <h1>Duis te feugifacilisi</h1>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
         nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
         Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
         lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </body>
       </html>`,
      },
      {
        id: 5,
        title: 'Font-weight',
        p: `Устанавливает насыщенность шрифта. Значение
         устанавливается от 100 до 900 с шагом 100. 
         Сверхсветлое начертание, которое может отобразить 
         браузер, имеет значение 100, а сверхжирное — 900. Нормальное
          начертание шрифта (которое установлено по умолчанию) 
          эквивалентно 400, стандартный полужирный текст — значению 700.`,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>font-weight</title>
         <style>
          h1 {
           font-weight: normal; /* Нормальное начертание */
          } 
          .select {
           color: maroon; /* Цвет текста */
           font-weight: 600; /* Жирное начертание */
          }
         </style>
        </head>
        <body>
         <h1>Duis te feugifacilisi</h1>
         <p><span class="select">Lorem ipsum dolor sit amet</span>, 
         consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet 
         dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud 
         exerci tution ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
         consequat.</p>
        </body>
       </html>`,
      },
      {
        id: 6,
        title: 'Letter-spacing',
        p: `Определяет интервал между символами в
         пределах элемента. Браузеры обычно устанавливают
          расстояние между символами, исходя из типа и вида 
          шрифта, его размеров и настроек операционной системы. 
          Чтобы изменить это значение и применяется данное свойство. 
          Допустимо использовать отрицательное значение, но в этом 
          случае надо убедиться, что сохраняется читабельность текста.`,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>letter-spacing</title>
         <style>
          p {
           letter-spacing: 5px;
          }
         </style>
        </head> 
        <body> 
         <h1>Duis te feugifacilisi</h1>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
         nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
         Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
         lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </body>
       </html>`,
      },
      {
        id: 7,
        title: 'line-height',
        p: `Устанавливает интерлиньяж (межстрочный интервал) текста,
         отсчет ведется от базовой линии шрифта. При обычных 
         обстоятельствах расстояние между строками зависит от вида
          и размера шрифта и определяется браузером автоматически.
           Отрицательное значение межстрочного расстояния не допускается.`,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>line-height</title>
         <style>
          h1 {
           line-height: 60%;
          } 
          p {
           line-height: 1.5;
          }
         </style>
        </head> 
        <body> 
         <h1>Duis te feugifacilisi</h1>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
         nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
         Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
         lobortis nisl ut aliquip ex ea commodo consequat.</p> 
        </body>
       </html>`,
      },
      {
        id: 8,
        title: 'Text-align',
        p: 'Определяет горизонтальное выравнивание текста в пределах элемента.',
        pre: ` <head>
        <meta charset="utf-8">
        <title>text-align</title>
        <style>
         div {
          border: 1px solid black; /* Параметры рамки */
          padding: 5px; /* Поля вокруг текста */
          margin-bottom: 5px; /* Отступ снизу */
         }
         #left { text-align: left; }
         #right { text-align: right; }
         #center { text-align: center; }
         .content {
          width: 75%; /* Ширина слоя */
          background: #fc0; /* Цвет фона */
         }
        </style>
       </head>
       <body>
        <div id="left"><div class="content">Выравнивание по левому краю</div></div>
        <div id="center"><div class="content">Выравнивание по центру</div></div>
        <div id="right"><div class="content">Выравнивание по правому краю</div></div>
       </body>
      </html>`,
      },
      {
        id: 9,
        title: 'Text-decoration',
        p: `Добавляет оформление текста в виде 
        его подчеркивания, перечеркивания, линии над 
        текстом и мигания. Одновременно можно применить
         более одного стиля, перечисляя значения через пробел.`,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>text-decoration</title>
         <style>
          a { 
           text-decoration: none; /* Убираем подчеркивание у ссылок */
          }
          a:hover { 
           text-decoration: underline; /* Добавляем подчеркивание 
                                          при наведении курсора мыши на ссылку */
          }
         </style> 
        </head> 
        <body>
         <p><a href="1.html">Стратегическое нападение</a></p>
        </body>
       </html>`,
      },
      {
        id: 10,
        title: 'Text-transform',
        p: `Управляет преобразованием текста элемента в
         заглавные или прописные символы. Когда значение 
         отлично от none, регистр исходного текста будет изменен.`,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>text-transform</title>
         <style>
          h1 { 
           text-transform: uppercase; /* Заглавные буквы */
          }
          p { 
           text-transform: capitalize; /* Каждое слово начинается с заглавной буквы */
          }
         </style>
        </head>
        <body> 
         <h1>Lorem ipsum dolor sit amet</h1>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
         nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
         Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
         lobortis nisl ut aliquip ex ea commodo consequat.</p> 
        </body>
       </html>`,
      },
      {
        id: 11,
        title: 'Text-shadow',
        p: `Добавляет тень к тексту, а также устанавливает 
        её параметры: цвет тени, смещение относительно надписи и 
        радиус размытия. Свойство text-shadow может работать совместно 
        с псевдоэлементами :first-letter и :first-line.`,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>text-shadow</title>
         <style>
          .shadowtext {
           text-shadow: 1px 1px 2px black, 0 0 1em red; /* Параметры тени */
           color: white; /* Белый цвет текста */
           font-size: 2em; /* Размер надписи */
          }
         </style>
        </head>
        <body>
         <p class="shadowtext">В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!</p> 
        </body>
       </html>`,
      },
    ],
  },
  {
    id: 4,
    title: 'Position and display',
    url: 'lesson4',
    elements: [
      {
        title: 'Position',
        p: `Устанавливает способ 
        позиционирования элемента 
        относительно окна браузера или других объектов на веб-странице.`,
        id: 1,
        pre: '',
      },
      {
        title: 'Свойство Position: Absolute',
        p: `Указывает, 
        что элемент абсолютно позиционирован, при 
        этом другие элементы отображаются на веб-странице словно 
        абсолютно позиционированного элемента и нет. Положение элемента задается
         свойствами left, top, right и bottom, также на положение влияет значение 
         свойства position родительского элемента. Так, если у родителя значение position 
         установлено как static или родителя нет, то отсчет координат ведется от
          края окна браузера. Если у 
         родителя значение position задано как fixed, relative или absolute, 
         то отсчет координат ведется от края родительского элемента.`,
        id: 2,
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>position</title>
         <style>
          .layer1 {
           position: relative; /* Относительное позиционирование */
           background: #f0f0f0; /* Цвет фона */
           height: 200px; /* Высота блока */
          }
          .layer2 {
           position: absolute; /* Абсолютное позиционирование */
           bottom: 15px; /* Положение от нижнего края */
           right: 15px; /* Положение от правого края */
           line-height: 1px;
          }
         </style>
        </head>
        <body>
         <div class="layer1">
          <div class="layer2">
            <img src="images/girl.jpg" alt="Девочка" />
          </div>
         </div>
        </body>
       </html>`,
      },
      {
        id: 3,
        title: 'Свойство Position: Fixed',
        p: `По своему действию это значение близко к absolute, но в отличие от него 
        привязывается к указанной свойствами left, top, right и bottom точке 
        на экране и не меняет 
        своего положения при прокрутке веб-страницы. Браузер Firefox 
        вообще не отображает полосы прокрутки
        , если положение элемента задано фиксированным, и оно не 
        помещается целиком в окно браузера.
         В браузере Opera хотя и показываются полосы прокрутки, 
         но они никак не влияют на позицию элемента.`,
        pre: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        
        <body>
          <style>
            .box {
              min-height: 150vh;
              background-color: yellow;
            }
        
            .layout {
              width: 50px;
              height: 50px;
            }
        
            .layout1 {
              background-color: red;
              position: fixed;
              top: 20px;
              left: 20px;
            }
        
            .layout2 {
              background-color: navy;
            }
        
            .layout3 {
              background-color: aqua;
            }
          </style>
          <div class="box"></div>
          <div class="layout layout1"></div>
          <div class="layout layout2"></div>
          <div class="layout layout3"></div>
        </body>
        
        </html>`,
      },
      {
        id: 4,
        title: 'Свойство Position: Relative',
        p: `Положение элемента устанавливается относительно его исходного места. 
        Добавление свойств left, top, right и 
        bottom изменяет позицию элемента и сдвигает его в
         ту или иную сторону от первоначального расположения.`,
        pre: `<!DOCTYPE html>
         <html lang="en">
         
         <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Document</title>
         </head>
         
         <body>
           <style>
             .box {
               min-height: 150vh;
               background-color: yellow;
             }
         
             .layout {
               width: 50px;
               height: 50px;
             }
         
             .layout1 {
               background-color: red;
               position: fixed;
               top: 20px;
               left: 20px;
             }
         
             .layout2 {
               position: relative;
               top: -20px;
               background-color: navy;
             }
         
             .layout3 {
               background-color: aqua;
             }
           </style>
           <div class="box"></div>
           <div class="layout layout1"></div>
           <div class="layout layout2"></div>
           <div class="layout layout3"></div>
         </body>
         
         </html>`,
      },
      {
        id: 5,
        title: 'Свойство Postion: Static',
        p: `Элементы отображаются как обычно. 
        Использование свойств left, top, right и bottom 
        не приводит к каким-либо результатам.`,
        pre: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        
        <body>
          <style>
            .box {
              min-height: 150vh;
              background-color: yellow;
            }
        
            .layout {
              width: 50px;
              height: 50px;
            }
        
            .layout1 {
              background-color: red;
              position: fixed;
              top: 20px;
              left: 20px;
            }
        
            .layout2 {
              position: relative;
              top: -20px;
              background-color: navy;
            }
        
            .layout3 {
              position: static;
              left: 20px;
              background-color: aqua;
            }
          </style>
          <div class="box"></div>
          <div class="layout layout1"></div>
          <div class="layout layout2"></div>
          <div class="layout layout3"></div>
        </body>
        
        </html>`,
      },
      {
        id: 6,
        title: 'display',
        p: `Список возможных значений этого свойства, понимаемый разными
         браузерами очень короткий — block, inline, list-item и none.
          Все остальные допустимые значения поддерживаются браузерами выборочно`,
        pre: '',
      },
      {
        id: 7,
        title: 'Свойство display: block',
        p: `Элемент показывается как блочный. Применение этого 
        значения для встроенных элементов, например
         тега <span>, заставляет его вести подобно блокам — происходит перенос 
         строк в начале и в конце содержимого.`,
        pre: `<!DOCTYPE html>
         <html lang="en">
         
         <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Document</title>
         </head>
         
         <body>
           <style>
             .box {
               display: block;
               min-height: 150vh;
               background-color: yellow;
             }
         
             .layout {
               width: 50px;
               height: 50px;
             }
         
             .layout1 {
               background-color: red;
               position: fixed;
               top: 20px;
               left: 20px;
             }
         
             .layout2 {
               position: relative;
               top: -20px;
               background-color: navy;
             }
         
             .layout3 {
               position: static;
               left: 20px;
               background-color: aqua;
             }
           </style>
           <div class="box"></div>
           <div class="layout layout1"></div>
           <div class="layout layout2"></div>
           <div class="layout layout3"></div>
         </body>
         
         </html>`,
      },
      {
        id: 8,
        title: 'Свойство display: inline',
        p: `Элемент отображается как встроенный. Использование блочных тегов, 
        таких как <div> и <p>, автоматически создает перенос и показывает содержимое
         этих тегов с         новой строки. Значение inline отменяет эту особенность,
          поэтому содержимое блочных элементов начинается с того места, 
          где окончился предыдущий элемент.`,
        pre: `<!DOCTYPE html>
          <html lang="en">
          
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          
          <body>
            <style>
              .box {
                display: inline;
                min-height: 150vh;
                background-color: yellow;
              }
          
              .layout {
                width: 50px;
                height: 50px;
              }
          
              .layout1 {
                background-color: red;
                position: fixed;
                top: 20px;
                left: 20px;
              }
          
              .layout2 {
                position: relative;
                top: -20px;
                background-color: navy;
              }
          
              .layout3 {
                position: static;
                left: 20px;
                background-color: aqua;
              }
            </style>
            <div class="box"></div>
            <div class="layout layout1"></div>
            <div class="layout layout2"></div>
            <div class="layout layout3"></div>
          </body>
          
          </html>`,
      },
      {
        id: 9,
        title: 'Свойстов display: inline-block',
        p: `Это значение генерирует блочный элемент, который 
        обтекается другими элементами веб-страницы подобно встроенному
         элементу. Фактически такой элемент по своему действию похож на 
         встраиваемые элементы (вроде тега <img>). При этом его 
         внутренняя часть форматируется как блочный элемент, а сам 
         элемент — как встроенный.`,
        pre: `<!DOCTYPE html>
         <html lang="en">
         
         <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Document</title>
         </head>
         
         <body>
           <style>
             .box {
               display: inline-block;
               min-height: 150vh;
               background-color: yellow;
             }
         
             .layout {
               width: 50px;
               height: 50px;
             }
         
             .layout1 {
               background-color: red;
               position: fixed;
               top: 20px;
               left: 20px;
             }
         
             .layout2 {
               position: relative;
               top: -20px;
               background-color: navy;
             }
         
             .layout3 {
               position: static;
               left: 20px;
               background-color: aqua;
             }
           </style>
           <div class="box"></div>
           <div class="layout layout1"></div>
           <div class="layout layout2"></div>
           <div class="layout layout3"></div>
         </body>
         
         </html>`,
      },
      {
        id: 10,
        title: 'Свойство display: none',
        p: `Временно удаляет элемент из документа. Занимаемое
         им место не резервируется и веб-страница формируется 
         так, словно элемента и не было. Изменить значение и 
         сделать вновь видимым элемент можно с помощью скриптов,
          обращаясь к свойствам через объектную модель. В этом 
          случае происходит переформатирование данных на странице 
          с учетом вновь добавленного элемента.`,
        pre: `<!DOCTYPE html>
          <html lang="en">
          
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          
          <body>
            <style>
              .box {
                display: none;
                min-height: 150vh;
                background-color: yellow;
              }
          
              .layout {
                width: 50px;
                height: 50px;
              }
          
              .layout1 {
                background-color: red;
                position: fixed;
                top: 20px;
                left: 20px;
              }
          
              .layout2 {
                position: relative;
                top: -20px;
                background-color: navy;
              }
          
              .layout3 {
                position: static;
                left: 20px;
                background-color: aqua;
              }
            </style>
            <div class="box"></div>
            <div class="layout layout1"></div>
            <div class="layout layout2"></div>
            <div class="layout layout3"></div>
          </body>
          
          </html>`,
      },
      {
        id: 11,
        title: 'Свойство display: flex',
        p: `Модуль Flexible Box Layout упрощает разработку
         гибкой адаптивной структуры макета без использования 
         float или позиционирования.`,
        pre: `<!DOCTYPE html>
         <html lang="en">
         
         <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Document</title>
         </head>
         
         <body>
           <style>
             .box {
               display: flex;
               min-height: 150vh;
               background-color: yellow;
             }
         
             .layout {
               width: 50px;
               height: 50px;
             }
         
             .layout1 {
               background-color: red;
               position: fixed;
               top: 20px;
               left: 20px;
             }
         
             .layout2 {
               position: relative;
               top: -20px;
               background-color: navy;
             }
         
             .layout3 {
               position: static;
               left: 20px;
               background-color: aqua;
             }
           </style>
           <div class="box">
             <div class="layout layout1"></div>
             <div class="layout layout2"></div>
             <div class="layout layout3"></div>
           </div>
         </body>
         
         </html>`,

      },
    ],
  },
  {
    id: 5,
    title: 'Методология BEM',
    url: 'lesson5',
    elements: [
      {
        id: 1,
        title: 'BEM',
        p: `БЭМ (Блок, Элемент, Модификатор) — методология разработанная внутри
         Яндекса предлагает следующую концепцию (если описать 1-2 предложениями):
        Любая веб-страница — набор блоков, которые состоят из элементов, причем
         элементом может быть другой блок (таким образом мы получаем вложенность).
          При необходимости мы можем модифицировать «стандартное» отображение 
          блока-элемента,
           путем добавления к нему модификатора.
        `,
        pre: '',
      },
      {
        id: 2,
        title: 'Блок',
        p: `Блок — часть страницы, являющаяся логически независимой от
         остального наполнения. Представляет собой «строительную единицу» 
         для сайта (на примере конструктора лего — это отдельный «кирпичек»)
        Блок не отвечает за свое расположение. Он задает внутренние свойства
         (размеры, шрифты и т.д.)`,
        pre: '',
      },
      {
        id: 3,
        title: ' Элемент',
        p: `Элемент — часть блока, которая отвечает за отдельную задачу 
        (например, это расположение внутри блока). 
        Элемент должен входить в состав блока и не должен иметь какого-либо 
        смысла отдельно от блока.`,
        pre: '',
      },
      {
        id: 4,
        title: 'Стиль описания БЭМ',
        p: `БЭМ не декларирует «особого» стиля описания классов. 
        Однако, де-факто используется следующий стиль:

       1) Несколько слов в одном названии разделяются дефисом 
        (например, блок main-page или my-super-main-list)
        2) Элементы отделяются от блоков с использованием двух 
        символов подчеркивания "__" (например, main-page__header 
          или my-super-main-list__item)
        3) Модификаторы отделяются двумя символом минусoв "--"
         (например, main-page__header--strong или my-super-main-list--blue)`,
        pre: '',
      },
      {
        id: 5,
        title: 'Почему использование каскада — плохо?',
        p: `У людей, впервые для себя открывших БЭМ может возникнуть вопрос
         — почему элементы описываются такими длинными цепочками? не проще ли:
        .main-page
        .main-page .header
        и т.д.
        
        Данный способ проще записывается, но, к сожалению, может 
        нарушить независимость блоков.
        Пример:
        имеем следующую стуктуру:`,
        pre: `.main-page
        .header
        .item
          .article
            .header
            .text
        .item
        ////`,
      },
      {
        id: 6,
        title: 'Использование нормальной структуры с использованием BEM',
        p: `
        В этом случае .main-page .header будет применен не только к нужному .header,
         но и .item .article .header, что является ненужным. БЭМ предполагает уход 
         от каскадных стилей (типа div .someClass li), которые:
        1) повышают специфичность веб-страниц;
        2) нарушают независимость блоков. (в отличие от БЭМ).
        
        Именно поэтому, корректной структурой для БЭМ будет:`,
        pre: `.main-page
        .main-page__header
        .main-page__item
          .article
            .article__header
            .article__text
        .main-page__item
        ////`,
      },
      {
        id: 7,
        title: 'Какие плюсы дает БЭМ?',
        p: `0) Независимость блоков — за счет ухода от каскадности и отказа от 
        описания в блоке «своего позиционирования»;
        1) Повторяемость блоков — любой независимый блок можно повторять на любых 
        страницах проекта. Возможно создать базу блоков, вследствие чего новые страницы 
        будут создаваться подобно конструктору Лего;
        2) Простота поддержки;
        3) Структурированность кода.
        Страница, сверстанная с использованием БЭМ может выглядеть больше,
         чем страницы, сверстанные без использования данной методологии, однако,
          представьте, если вы работаете с сайтом, где >20-30 уникальных страниц? 
          В таком случае возможность повторного использования блоков и 
          единая концепция позволяет:
        1) намного быстрее принимать решения о модернизации страниц-блоков сайта;
        2) уменьшает порог вступления в проект новых разработчиков.`,
        pre: '',
      },
      {
        id: 8,
        title: 'Cтруктуру документа html',
        p: `По порядку:
        1) Верхняя линия
        2) Header
        3) Меню
        4) Слайдер
        5) Main
        6) Footer`,
        pre: `<!DOCTYPE html>
        <html>
        <head>
            <title>BEM-example</title>
            <meta charset="utf-8">
            <link rel="stylesheet" type="text/css" href="styles/style.css">    
        </head>
        <body class="b-page">
            <div class="b-page__head--line">
                
            </div>
            <div class="b-page__line">
                
            </div>
            <div class="b-page__line">
                
            </div>
            <div class="b-page__line">
                
            </div>
            <div class="b-page__line">
              
            </div>
            <div class="b-page__footer">
               
            </div>
        </body>
        </html>`,
      },
      {
        id: 9,
        title: 'Структура документа CSS',
        p: 'Зададим стили для блока и элементов:',
        pre: `
        .b-page
        {
            width:100%;
            margin:0;
            background-color:#f7f7f7;
            background:url("../img/bg.png");
            font-family:Oswald,Tahoma;
            font-size:12px;
        }
        
            
        
        .b-page__head-line
        {
            background-color:#7e7e7e;
            height:5px;
            
            width:100%;
        }
        
        .b-page__line
        {
        
            width: 960px;
            margin: 0 auto;
            margin-top:27px;    
        }`,
      },
      {
        id: 10,
        title: 'Flex',
        p: `Это новая технология, которая уже имеет
         достаточно широкую поддержку браузеров. Flexbox 
         предоставляет инструменты для быстрого создания 
         сложных, гибких макетов, и функции, которые были
          сложны в традиционных методах CSS. В этой статье
           объясняются все основы данной технологии.`,
        pre: '',
      },
      {
        id: 11,
        title: 'flex-direction',
        p: `flex-direction - CSS свойство , 
        указывающее на то,как flex-элементы 
        располагаются во flex-контейнере по главной 
        оси и направлению (normal или reversed).`,
        pre: `/* Направление, в котором блоки будут располагаться в строку */
        flex-direction: row;
        
        /* Как <row>, но наоборот */
        flex-direction: row-reverse;
        
        /* Направление, в котором блоки будут располагаться вертикально */
        flex-direction: column;
        
        /* Как <column>, но наоборот */
        flex-direction: column-reverse;
        
        /* Общие значения */
        flex-direction: inherit;
        flex-direction: initial;
        flex-direction: unset;`,
      },
      {
        id: 12,
        title: 'flex-wrap',
        p: `Свойство CSS flex-wrap задаёт правила вывода flex-элементов —  
        в одну строку или в несколько, с переносом блоков. Если перенос
         разрешён, то возможно задать направление, в котором выводятся блоки`,
        pre: `flex-wrap: nowrap;
         flex-wrap: wrap;
         flex-wrap: wrap-reverse;
         
         /* Global values */
         flex-wrap: inherit;
         flex-wrap: initial;
         flex-wrap: unset;`,
      },
      {
        id: 13,
        title: 'align-items',
        p: `CSS свойство align-items выравнивает flex-элементы текущей flex-
        линии таким же образом, как и justify-content, но в перпендикулярном
         направлении.`,
        pre: `/* Align to cross-start */
        align-items: flex-start;
        
        /* Align to cross-end */
        align-items: flex-end;
        
        /* Центрировать элементы в поперечной оси */
        align-items: center;
        
        /* Выровняйте базовые линии предметов */
        align-items: baseline;
        
        /* Растянуть предметы, чтобы соответствовать */
        align-items: stretch;
        
        /* Глобальные значения */
        align-items: inherit;
        align-items: initial;
        align-items: unset;`,
      },
      {
        id: 14,
        title: 'justify-content',
        p: `Свойство CSS justify-content определяет, как браузер распределяет 
        пространство между элементами контента и вокруг них 
        вдоль основной оси гибкого контейнера и встроенной оси контейнера сетки.`,
        pre: `/* Positional alignment */
        justify-content: center;     /* Pack items around the center */
        justify-content: start;      /* Pack items from the start */
        justify-content: end;        /* Pack items from the end */
        justify-content: flex-start; /* Pack flex items from the start */
        justify-content: flex-end;   /* Pack flex items from the end */
        justify-content: left;       /* Pack items from the left */
        justify-content: right;      /* Pack items from the right */
        
        /* Baseline alignment */
        /* justify-content does not take baseline values */
        
        /* Normal alignment */
        justify-content: normal;
        
        /* Distributed alignment */
        justify-content: space-between; /* Distribute items evenly
                                           The first item is flush with the start,
                                           the last is flush with the end */
        justify-content: space-around;  /* Distribute items evenly
                                           Items have a half-size space
                                           on either end */
        justify-content: space-evenly;  /* Distribute items evenly
                                           Items have equal space around them */
        justify-content: stretch;       /* Distribute items evenly
                                           Stretch 'auto'-sized items to fit
                                           the container */`,
      },
      {
        id: 15,
        title: 'flex-shrink',
        p: `flex-shrink — свойство CSS, которое определяет фактор сжатия 
        flex-элемента. Flex-элементы 
        будут заполнять контейнер в зависимости от значения flex-shrink,
         когда стандартная ширина flex-элементов шире, чем flex-контейнер.`,
        pre: `/* <number> значения */
         flex-shrink: 2;
         flex-shrink: 0.6;
         
         /* Глобальное значение */
         flex-shrink: inherit;
         flex-shrink: initial;
         flex-shrink: unset;`,
      },
      {
        id: 16,
        title: 'flex-basis',
        p: `CSS свойство flex-basis задаёт базовый размер флекс элемента по
         основной оси. Это свойство определяет размер контент-бокса, 
         если не задано иначе через box-sizing.
        `,
        pre: `/* Устанавливает <'ширину'> */
        flex-basis: 10em;
        flex-basis: 3px;
        flex-basis: auto;
        
        /* Intrinsic sizing keywords */
        flex-basis: fill;
        flex-basis: max-content;
        flex-basis: min-content;
        flex-basis: fit-content;
        
        /* Автоматически изменяет размер на основе содержимого элемента */
        flex-basis: content;
        
        /* Глобальное значения */
        flex-basis: inherit;
        flex-basis: initial;
        flex-basis: unset;`,
      },
      {
        id: 17,
        title: 'flex-flow',
        p: `flex-flow
        flex-flow CSS свойство, которое является сокращением 
        для отдельных свойств flex-direction и flex-wrap.`,
        pre: `/* flex-flow: <'flex-direction'> */
        flex-flow: row;
        flex-flow: row-reverse;
        flex-flow: column;
        flex-flow: column-reverse;
        
        /* flex-flow: <'flex-wrap'> */
        flex-flow: nowrap;
        flex-flow: wrap;
        flex-flow: wrap-reverse;
        
        /* flex-flow: <'flex-direction'> and <'flex-wrap'> */
        flex-flow: row nowrap;
        flex-flow: column wrap;
        flex-flow: column-reverse wrap-reverse;
        
        /* Global values */
        flex-flow: inherit;
        flex-flow: initial;
        flex-flow: unset;`,
      },
    ],
  },
];

export { arrLessonsFront, arrLessonFront };
