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
    elements: [],
  },
  {
    id: 2,
    title: 'Язык разметки HTML',
    url: 'lesson2',
    elements: [],
  },
  {
    id: 3,
    title: 'Шрифты',
    url: 'lesson3',
    elements: [
      {
        title: 'Шрифты',
        p: `        После цвета шрифт — возможно, важнейшее свойство страницы. На этой странице я не буду демонстрировать никаких "трюков", но покажу ряд вариаций шрифтов, допустимых в CSS.
        
        Поскольку не все шрифты доступны на всех компьютерах (существуют тысячи шрифтов и большинство из них не бесплатны), CSS предусматривает резервную систему. Первым вы указываете шрифт, который хотели бы использовать. Затем следуют любые шрифты, которые вы могли бы использовать, если первый указанный шрифт не доступен. А закончить список вы должны типовым шрифтом, который имеет 5 видов: serif, sans-serif, monospace, cursive и fantasy.
        
        Следующая таблица показывает примеры различных шрифтов (ваш браузер может не знать их все) и вы можете увидеть, что ваш браузер делает с каждым из пяти типовых шрифтов:`,
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
            sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt 
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
        p: `Определяет размер шрифта элемента. Размер может быть установлен несколькими способами. Набор констант (xx-small, x-small, small, medium, large, x-large, xx-large) задает размер, который называется абсолютным. По правде говоря, они не совсем абсолютны, поскольку зависят от настроек браузера и операционной системы.

        Другой набор констант (larger, smaller) устанавливает относительные размеры шрифта. Поскольку размер унаследован от родительского элемента, эти относительные размеры применяются к родительскому элементу, чтобы определить размер шрифта текущего элемента.
        
        В конечном итоге, размер шрифта сильно зависит от значения свойства font-size у родителя элемента.
        
        Сам размер шрифта определяется как высота от базовой линии до верхней границы кегельной площадки`,
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
        p: ` Устанавливает семейство шрифта, которое будет использоваться для оформления текста содержимого. Список шрифтов может включать одно или несколько названий, разделенных запятой. Если в имени шрифта содержатся пробелы, например, Trebuchet MS, оно должно заключаться в одинарные или двойные кавычки.

        Когда браузер встречает первый шрифт в списке, он проверяет его наличие на компьютере пользователя. Если такого шрифта нет, берется следующее имя из списка и также анализируется на присутствие. Поэтому несколько шрифтов увеличивает вероятность, что хотя бы один из них будет обнаружен на клиентском компьютере. Заканчивают список обычно ключевым словом, которое описывает тип шрифта — serif, sans-serif, cursive, fantasy или monospace. Таким образом, последовательность шрифтов лучше начинать с экзотических типов и заканчивать обобщенным именем, которое задает вид начертания.`,
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
        p: 'Определяет начертание шрифта — обычное, курсивное или наклонное. Когда для текста установлено курсивное или наклонное начертание, браузер обращается к системе для поиска подходящего шрифта. Если заданный шрифт не найден, браузер использует специальный алгоритм для имитации нужного вида текста. Результат и качество при этом могут получиться неудовлетворительными, особенно при печати документа.',
        pre: `<html>
        <head>
         <meta charset="utf-8">
         <title>font-style</title>
         <style>
          h1 {
           font-family: Verdana, Arial, Helvetica, sans-serif; /* Рубленый шрифт заголовка */
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
        p: 'Устанавливает насыщенность шрифта. Значение устанавливается от 100 до 900 с шагом 100. Сверхсветлое начертание, которое может отобразить браузер, имеет значение 100, а сверхжирное — 900. Нормальное начертание шрифта (которое установлено по умолчанию) эквивалентно 400, стандартный полужирный текст — значению 700.',
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
        p: 'Определяет интервал между символами в пределах элемента. Браузеры обычно устанавливают расстояние между символами, исходя из типа и вида шрифта, его размеров и настроек операционной системы. Чтобы изменить это значение и применяется данное свойство. Допустимо использовать отрицательное значение, но в этом случае надо убедиться, что сохраняется читабельность текста.',
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
        p: 'Устанавливает интерлиньяж (межстрочный интервал) текста, отсчет ведется от базовой линии шрифта. При обычных обстоятельствах расстояние между строками зависит от вида и размера шрифта и определяется браузером автоматически. Отрицательное значение межстрочного расстояния не допускается.',
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
        p: 'Добавляет оформление текста в виде его подчеркивания, перечеркивания, линии над текстом и мигания. Одновременно можно применить более одного стиля, перечисляя значения через пробел.',
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
        p: 'Управляет преобразованием текста элемента в заглавные или прописные символы. Когда значение отлично от none, регистр исходного текста будет изменен.',
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
        p: 'Добавляет тень к тексту, а также устанавливает её параметры: цвет тени, смещение относительно надписи и радиус размытия. Свойство text-shadow может работать совместно с псевдоэлементами :first-letter и :first-line.',
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
];

export { arrLessonsFront, arrLessonFront };
