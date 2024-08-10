const arrHTML = [
  {
    id: 1,
    title: 'Структура HTML',
    elements: [
      {
        id: 1,
        title: '<html>',
        url: 'html',
      },
      {
        id: 2,
        title: '<head>',
        url: 'head',
      },
      {
        id: 3,
        title: '<title>',
        url: 'title',
      },
      {
        id: 4,
        title: '<meta>',
        url: 'meta',
      },
      {
        id: 5,
        title: '<style>',
        url: 'style',
      },
      {
        id: 6,
        title: '<link>',
        url: 'link',
      },
      {
        id: 7,
        title: '<script>',
        url: 'script',
      },
      {
        id: 8,
        title: '<body>',
        url: 'body',
      },
      {
        id: 9,
        title: '<!DOCTYPE>',
        url: 'doctype',
      },
    ],
  },
  {
    id: 2,
    title: 'Заголовки',
    elements: [
      {
        id: 1,
        title: '<h1>',
        url: 'h1',
      },
      {
        id: 2,
        title: '<h2>',
        url: 'h2',
      },
      {
        id: 3,
        title: '<h3>',
        url: 'h3',
      },
      {
        id: 4,
        title: '<h4>',
        url: 'h4',
      },
      {
        id: 5,
        title: '<h5>',
        url: 'h5',
      },
      {
        id: 6,
        title: '<h6>',
        url: 'h6',
      },
    ],
  },
  {
    id: 3,
    title: 'Форматирования текста',
    elements: [
      {
        id: 1,
        title: '<b>',
        url: 'b',
      },
      {
        id: 2,
        title: '<em>',
        url: 'em',
      },
      {
        id: 3,
        title: '<i>',
        url: 'i',
      },
      {
        id: 4,
        title: '<small>',
        url: 'small',
      },
      {
        id: 5,
        title: '<strong>',
        url: 'strong',
      },
      {
        id: 6,
        title: '<sub>',
        url: 'sub',
      },
      {
        id: 7,
        title: '<mark>',
        url: 'mark',
      },
      {
        id: 8,
        title: '<sup>',
        url: 'sup',
      },
      {
        id: 9,
        title: '<del>',
        url: 'del',
      },
    ],
  },
  {
    id: 4,
    title: 'Отображение "компьютерного" текста',
    elements: [
      {
        id: 1,
        title: '<code>',
        url: 'code',
      },
      {
        id: 2,
        title: '<var>',
        url: 'var',
      },
      {
        id: 3,
        title: '<pre>',
        url: 'pre',
      },
    ],
  },
  {
    id: 5,
    title: 'Оформления цитат и определений',
    elements: [
      {
        id: 1,
        title: '<abbr>',
        url: 'abbr',
      },
      {
        id: 2,
        title: '<q>',
        url: 'q',
      },
      {
        id: 3,
        title: '<cite>',
        url: 'cite',
      },
    ],
  },
  {
    id: 6,
    title: 'Абзацы, средства переноса текста',
    elements: [
      {
        id: 1,
        title: '<p>',
        url: 'p',
      },
      {
        id: 2,
        title: '<br>',
        url: 'br',
      },
      {
        id: 3,
        title: '<hr>',
        url: 'hr',
      },
    ],
  },
  {
    id: 7,
    title: 'Изображения и ссылка',
    elements: [
      {
        id: 1,
        title: '<a>',
        url: 'a',
      },
      {
        id: 2,
        title: '<img>',
        url: 'img',
      },
      {
        id: 3,
        title: '<map>',
        url: 'map',
      },
      {
        id: 4,
        title: '<area>',
        url: 'area',
      },
    ],
  },
  {
    id: 8,
    title: 'Таблицы',
    elements: [
      {
        id: 1,
        title: '<table>',
        url: 'table',
      },
      {
        id: 2,
        title: '<caption>',
        url: 'caption',
      },
      {
        id: 3,
        title: '<tr>',
        url: 'tr',
      },
      {
        id: 4,
        title: '<th>',
        url: 'th',
      },
      {
        id: 5,
        title: '<tbody>',
        url: 'tbody',
      },
      {
        id: 6,
        title: '<col>',
        url: 'col',
      },
    ],
  },
  {
    id: 9,
    title: 'Списки',
    elements: [
      {
        id: 1,
        title: '<ul>',
        url: 'ul',
      },
      {
        id: 2,
        title: '<ol>',
        url: 'ol',
      },
      {
        id: 3,
        title: '<li>',
        url: 'li',
      },
    ],
  },
];

const arrHTMLFront = [
  {
    id: 1,
    title: 'HTML',
    url: 'html',
    elements: [
      {
        id: 1,
        title: 'HTML',
        p: `HTML (язык гипертекстовой разметки) — это самый базовый строительный блок Интернета. Он определяет значение и структуру веб-контента. Другие технологии, помимо HTML, обычно используются для описания внешнего вида/представления веб-страницы (CSS) или функциональности/поведения (JavaScript).

«Гипертекст» относится к ссылкам, которые соединяют веб-страницы друг с другом, как в пределах одного веб-сайта, так и между веб-сайтами. Ссылки являются фундаментальным аспектом Интернета. Загружая контент в Интернет и ссылаясь на страницы, созданные другими людьми, вы становитесь активным участником Всемирной паутины.

HTML использует «разметку» для аннотирования текста, изображений и другого контента для отображения в веб-браузере. HTML-разметка включает в себя специальные «элементы», такие как <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <search>, <output>, <progress>, <video>, <ul>, <ol>, <li> 
и многие другие.`,
        pre: '',
        html: '',
      },
    ],
  },
  {
    id: 2,
    title: 'META',
    url: 'meta',
    elements: [
      {
        id: 1,
        title: 'META',
        p: 'HTML-элемент <meta> представляет метаданные, которые не могут быть представлены другими элементами HTML, связанными с метаданными, такими как <base>, <link>, <script>, <style> или <title>.',
        pre: '',
        html: '',
      },
      {
        id: 2,
        title: 'EXAMPLE',
        p: 'Атрибуты имени и содержимого могут использоваться вместе для предоставления метаданных документа в виде пар «имя-значение», при этом атрибут имени задает имя метаданных, а атрибут содержимого задает значение.',
        pre: `<meta charset="utf-8" />

          < !--Redirect page after 3 seconds-- >
            <meta http - equiv="refresh" content = "3;url=https://www.mozilla.org" />
              `,
        html: '',
      },
    ],
  },
  {
    id: 3,
    title: 'script',
    url: 'script',
    elements: [
      {
        id: 1,
        title: 'SCRIPT',
        p: 'HTML-элемент <script> используется для встраивания исполняемого кода или данных; обычно он используется для встраивания или ссылки на код JavaScript. Элемент <script> также может использоваться с другими языками, такими как язык программирования шейдеров GLSL WebGL и JSON.',
        pre: '',
        html: '',
      },
      {
        id: 2,
        title: 'defer',
        p: `Этот логический атрибут указывает браузеру, что скрипт должен быть выполнен после анализа документа, но до запуска события DOMContentLoaded.

Скрипты с атрибутом defer предотвратят запуск события DOMContentLoaded до тех пор, пока скрипт не загрузится и не завершит оценку.

Скрипты с атрибутом defer будут выполняться в том порядке, в котором они появляются в документе.

Этот атрибут позволяет устранить блокировку JavaScript-анализатора, когда браузеру придется загружать и оценивать скрипты перед продолжением анализа. async имеет аналогичный эффект в этом случае.

Если атрибут указан с атрибутом async, элемент будет действовать так, как будто указан только атрибут async.`,
        pre: '',
        html: '',
      },
      {
        id: 3,
        title: 'src',
        p: 'This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.',
        pre: '',
        html: '',
      },
      {
        id: 4,
        title: 'async',
        p: 'async следует использовать, когда у вас есть куча фоновых скриптов для загрузки, и вы просто хотите как можно скорее разместить их на месте. Например, возможно, у вас есть некоторые файлы данных игры для загрузки, которые понадобятся, когда игра начнется, но сейчас вы просто хотите продолжить показывать вступление к игре, заголовки и лобби, не блокируя их загрузкой скрипта.',
        pre: '',
        html: '',
      },
    ],
  },
  {
    id: 4,
    title: 'HEAD',
    url: 'head',
    elements: [
      {
        id: 1,
        title: 'HEAD',
        p: 'Заголовок HTML-документа — это часть, которая не отображается в веб-браузере при загрузке страницы. Он содержит такую ​​информацию, как <title> страницы, ссылки на CSS (если вы решили оформить свой HTML-контент с помощью CSS), ссылки на пользовательские значки и другие метаданные (данные об HTML, такие как автор и важные ключевые слова, описывающие документ). Веб-браузеры используют информацию, содержащуюся в заголовке, для правильного отображения HTML-документа. В этой статье мы рассмотрим все вышеперечисленное и многое другое, чтобы дать вам хорошую основу для работы с разметкой.',
        pre: '',
        html: '',
      },
      {
        id: 2,
        title: 'EXAMPLE',
        p: 'HTML-заголовок — это содержимое элемента <head>. В отличие от содержимого элемента <body> (которое отображается на странице при загрузке в браузере), содержимое заголовка не отображается на странице. Вместо этого, задача заголовка — содержать метаданные о документе. В приведенном выше примере заголовок довольно маленький:',
        pre: `<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>`,
        html: '',
      }, {
        id: 3,
        title: '',
        p: 'Однако на больших страницах заголовок может быть довольно большим. Попробуйте зайти на некоторые из ваших любимых веб-сайтов и использовать инструменты разработчика, чтобы проверить содержимое их заголовков. Наша цель здесь не в том, чтобы показать вам, как использовать все, что можно поместить в заголовок, а скорее в том, чтобы научить вас, как использовать основные элементы, которые вы захотите включить в заголовок, и дать вам некоторое представление.',
        pre: '',
        html: '',
      },
    ],
  },
  {
    id: 5,
    title: 'style',
    url: 'style',
    elements: [
      {
        id: 1,
        title: 'style',
        p: 'Элемент HTML <style> содержит информацию о стиле для документа или части документа. Он содержит CSS, который применяется к содержимому документа, содержащего элемент <style>.',
        pre: `<style>
  p {
    color: #26b72b;
  }
  code {
    font-weight: bold;
  }
</style>

<p>This text will be green. Inline styles take precedence over CSS included externally.</p>

<p style="color: blue">The <code>style</code> attribute can override it, though.</p>`,
        html: '',
      },
    ],
  },
  {
    id: 6,
    title: 'BODY',
    url: 'body',
    elements: [
      {
        id: 1,
        title: 'BODY',
        p: 'Элемент HTML <body> представляет содержимое документа HTML. В документе может быть только один элемент <body>.',
        pre: '',
        html: '',
      },
    ],
  },
  {
    id: 7,
    title: 'TITLE',
    url: 'title',
    elements: [
      {
        id: 1,
        title: 'TITLE',
        p: 'HTML-элемент <title> определяет заголовок документа, который отображается в строке заголовка браузера или на вкладке страницы. Он содержит только текст; теги внутри элемента игнорируются.',
        pre: '',
        html: '',
      },
    ],
  },
  {
    id: 8,
    title: 'LINK',
    url: 'link',
    elements: [
      {
        id: 1,
        title: 'LINK',
        p: 'HTML-элемент <link> определяет отношения между текущим документом и внешним ресурсом. Этот элемент чаще всего используется для ссылки на таблицы стилей, но также используется для установки иконок сайта (как иконок в стиле "favicon", так и иконок для домашнего экрана и приложений на мобильных устройствах) среди прочего.',
        pre: `<link href="/media/examples/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">The <code>style</code> attribute can override it, though.</p>
`,
        html: '',
      },
    ],
  },
  {
    id: 9,
    title: '!DOCTYPE',
    url: 'doctype',
    elements: [
      {
        id: 1,
        title: '!DOCTYPE',
        p: '<!DOCTYPE> или «доктайп» — это сокращение от «тип документа» (document type). Доктайп говорит браузеру: «работай со страницей в стандартном режиме, пожалуйста». Единственный доктайп, который вам нужно знать — это <!DOCTYPE html>. Поставьте его первой строчкой HTML-документа, и браузер обработает страницу правильно.',
        pre: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Дока</title>
    <link rel="stylesheet" href="/assets/styles/main.css">
  </head>
</html>`,
        html: '',
      },
    ],
  },
];

export { arrHTML, arrHTMLFront };
