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
    url: 'html',
    elements: [
      {
        pre: '',
        html: '\u003C!doctype html\u003E\r\n\u003Chtml lang=\u0022en\u0022\u003E\r\n  \u003Chead\u003E\r\n    \u003C!-- \u2026 --\u003E\r\n  \u003C/head\u003E\r\n  \u003Cbody\u003E\r\n    \u003C!-- \u2026 --\u003E\r\n  \u003C/body\u003E\r\n\u003C/html\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043A\u043E\u0440\u0435\u043D\u044C (\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F) \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 HTML, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0435\u0433\u043E \u0442\u0430\u043A\u0436\u0435 \u043D\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u043A\u043E\u0440\u043D\u0435\u0432\u044B\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C . \u0412\u0441\u0435 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u043E\u0442\u043E\u043C\u043A\u0430\u043C\u0438 \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430. \u0412 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442.\u003Chtml\u003E \u003Chtml\u003E',
        id: 0,
        title: 'HTML',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0432\u0435\u0440\u0441\u0438\u044E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0442\u0438\u043F\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 HTML , \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C. \u042D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D \u0438\u0437\u0431\u044B\u0442\u043E\u0447\u043D\u044B\u0439 \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043E \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u0442\u0438\u043F\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430.',
            id: 0,
            title: 'version',
          },
          {
            p: '\u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0438\u043C\u0435\u043D XML \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u2014 . \u042D\u0442\u043E \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0445, \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E XML- \u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u043E\u0432 , \u0438 \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445/html-\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0445.\u0022http://www.w3.org/1999/xhtml\u0022',
            id: 1,
            title: 'xmlns',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 1,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 0,
    title: 'HTML',
  },
  {
    url: 'head',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043C\u0430\u0448\u0438\u043D\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E ( \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 ) \u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0433\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A , \u0441\u043A\u0440\u0438\u043F\u0442\u044B \u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0441\u0442\u0438\u043B\u0435\u0439 . \u0412 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435 HTML \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442.\u003Chead\u003E \u003Chead\u003E',
        id: 1,
        title: 'HEAD',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: 'URI \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439 \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445, \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u043C .',
            id: 0,
            title: 'profile',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 2,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 1,
    title: 'HEAD',
  },
  {
    url: 'title',
    elements: [
      {
        pre: '',
        html: '\u003Ctitle\u003EAwesome interesting stuff\u003C/title\u003E',
        attributes: [],
        p: 'The \u003Ctitle\u003E HTML element defines the document\u0027s title that is shown in a browser\u0027s title bar or a page\u0027s tab. It only contains text; tags within the element are ignored.',
        id: 2,
        title: 'TITLE',
      },
      null,
    ],
    id: 2,
    title: 'TITLE',
  },
  {
    url: 'meta',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 , \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 , \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0441 \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u043C\u0438 HTML, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A , , \u0438\u043B\u0438 .\u003Cmeta\u003E \u003Cbase\u003E\u003Clink\u003E\u003Cscript\u003E\u003Cstyle\u003E\u003Ctitle\u003E',
        id: 3,
        title: 'META',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: 'This attribute declares the document\u0027s character encoding. If the attribute is present, its value must be an ASCII case-insensitive match for the string \u0022utf-8\u0022, because UTF-8 is the only valid encoding for HTML5 documents. \u003Cmeta\u003E elements which declare a character encoding must be located entirely within the first 1024 bytes of the document.',
            id: 0,
            title: 'charset',
          },
          {
            p: 'This attribute contains the value for the http-equiv or name attribute, depending on which is used.',
            id: 1,
            title: 'content',
          },
          {
            p: 'Defines a pragma directive. The attribute is named http-equiv(alent) because all the allowed values are names of particular HTTP headers:\r\ncontent-security-policy Allows page authors to define a content policy for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.\r\ncontent-type Declares the MIME type and the document\u0027s character encoding. The content attribute must have the value \u0022text/html; charset=utf-8\u0022 if specified. This is equivalent to a \u003Cmeta\u003E element with the charset attribute specified and carries the same restriction on placement within the document. Note: Can only be used in documents served with a text/html \u2014 not in documents served with an XML MIME type.\r\ndefault-style Sets the name of the default CSS style sheet set.\r\nx-ua-compatible If specified, the content attribute must have the value \u0022IE=edge\u0022. User agents are required to ignore this pragma.\r\nrefresh This instruction specifies:\r\nThe number of seconds until the page should be reloaded - only if the content attribute contains a non-negative integer.\r\nThe number of seconds until the page should redirect to another - only if the content attribute contains a non-negative integer followed by the string \u0027;url=\u0027, and a valid URL.\r\nThe timer starts when the page is completely loaded, which is after the load and pageshow events have both fired.\r\nWarning:\r\nPages set with a refresh value run the risk of having the time interval being too short. People navigating with the aid of assistive technology such as a screen reader may be unable to read through and understand the page\u0027s content before being automatically redirected. The abrupt, unannounced updating of the page content may also be disorienting for people experiencing low vision conditions.\r\nMDN Understanding WCAG, Guideline 2.2 explanations\r\nMDN Understanding WCAG, Guideline 3.2 explanations\r\nUnderstanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0\r\nUnderstanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0\r\nUnderstanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0',
            id: 2,
            title: 'http-equiv',
          },
          {
            p: 'The name and content attributes can be used together to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.\r\nSee standard metadata names for details about the set of standard metadata names defined in the HTML specification.',
            id: 3,
            title: 'name',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 4,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 3,
    title: 'META',
  },
  {
    url: 'style',
    elements: [
      {
        pre: '',
        html: '\u003C!doctype html\u003E\r\n\u003Chtml lang=\u0022en-US\u0022\u003E\r\n  \u003Chead\u003E\r\n    \u003Cmeta charset=\u0022UTF-8\u0022 /\u003E\r\n    \u003Ctitle\u003ETest page\u003C/title\u003E\r\n    \u003Cstyle\u003E\r\n      p {\r\n        color: red;\r\n      }\r\n    \u003C/style\u003E\r\n  \u003C/head\u003E\r\n  \u003Cbody\u003E\r\n    \u003Cp\u003EThis is my paragraph.\u003C/p\u003E\r\n  \u003C/body\u003E\r\n\u003C/html\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u0442\u0438\u043B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u0438. \u041E\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 CSS, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442 .\u003Cstyle\u003E \u003Cstyle\u003E',
        id: 4,
        title: 'STYLE',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: 'This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. @import-ed stylesheets are generally considered as critical subresources, whereas background-image and fonts are not. The operations that are to be blocked must be a space-separated list of blocking tokens listed below.\r\nrender: The rendering of content on the screen is blocked.',
            id: 0,
            title: 'blocking',
          },
          {
            p: 'This attribute defines which media the style should be applied to. Its value is a media query, which defaults to all if the attribute is missing.',
            id: 1,
            title: 'media',
          },
          {
            p: 'A cryptographic nonce (number used once) used to allow inline styles in a style-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource\u0027s policy is otherwise trivial.',
            id: 2,
            title: 'nonce',
          },
          {
            p: 'This attribute specifies alternative style sheet sets.',
            id: 3,
            title: 'title',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 5,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 4,
    title: 'STYLE',
  },
  {
    url: 'link',
    elements: [
      {
        pre: '',
        html: '\u003Clink href=\u0022style.css\u0022 rel=\u0022stylesheet\u0022 /\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u043C \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u043C. \u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0441\u0442\u0438\u043B\u0435\u0439 , \u043D\u043E \u0442\u0430\u043A\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0438\u043A\u043E\u043D\u043E\u043A \u0441\u0430\u0439\u0442\u0430 (\u043A\u0430\u043A \u0438\u043A\u043E\u043D\u043E\u043A \u0432 \u0441\u0442\u0438\u043B\u0435 \u0022favicon\u0022, \u0442\u0430\u043A \u0438 \u0438\u043A\u043E\u043D\u043E\u043A \u0434\u043B\u044F \u0434\u043E\u043C\u0430\u0448\u043D\u0435\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430 \u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445) \u0441\u0440\u0435\u0434\u0438 \u043F\u0440\u043E\u0447\u0435\u0433\u043E. \u003Clink\u003E',
        id: 5,
        title: 'LINK',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: 'This attribute is required when rel=\u0022preload\u0022 has been set on the \u003Clink\u003E element, optional when rel=\u0022modulepreload\u0022 has been set, and otherwise should not be used. It specifies the type of content being loaded by the \u003Clink\u003E, which is necessary for request matching, application of correct content security policy, and setting of correct Accept request header.\r\nFurthermore, rel=\u0022preload\u0022 uses this as a signal for request prioritization. The table below lists the valid values for this attribute and the elements or resources they apply to.\r\nValue Applies To\r\naudio \u003Caudio\u003E elements\r\ndocument \u003Ciframe\u003E and \u003Cframe\u003E elements\r\nembed \u003Cembed\u003E elements\r\nfetch\r\nfetch, XHR\r\nNote: This value also requires \u003Clink\u003E to contain the crossorigin attribute, see CORS-enabled fetches.\r\nfont\r\nCSS @font-face\r\nNote: This value also requires \u003Clink\u003E to contain the crossorigin attribute, see CORS-enabled fetches.\r\nimage \u003Cimg\u003E and \u003Cpicture\u003E elements with srcset or imageset attributes, SVG \u003Cimage\u003E elements, CSS *-image rules\r\nobject \u003Cobject\u003E elements\r\nscript \u003Cscript\u003E elements, Worker importScripts\r\nstyle \u003Clink rel=stylesheet\u003E elements, CSS @import\r\ntrack \u003Ctrack\u003E elements\r\nvideo \u003Cvideo\u003E elements\r\nworker Worker, SharedWorker',
            id: 0,
            title: 'as',
          },
          {
            p: 'This enumerated attribute indicates whether CORS must be used when fetching the resource. CORS-enabled images can be reused in the \u003Ccanvas\u003E element without being tainted. The allowed values are:\r\nanonymous\r\nA cross-origin request (i.e. with an Origin HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin HTTP header) the resource will be tainted and its usage restricted.\r\nuse-credentials\r\nA cross-origin request (i.e. with an Origin HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials HTTP header), the resource will be tainted and its usage restricted.\r\nIf the attribute is not present, the resource is fetched without a CORS request (i.e. without sending the Origin HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information.',
            id: 1,
            title: 'crossorigin',
          },
          {
            p: 'For rel=\u0022stylesheet\u0022 only, the disabled Boolean attribute indicates whether the described stylesheet should be loaded and applied to the document. If disabled is specified in the HTML when it is loaded, the stylesheet will not be loaded during page load. Instead, the stylesheet will be loaded on-demand, if and when the disabled attribute is changed to false or removed.\r\nSetting the disabled property in the DOM causes the stylesheet to be removed from the document\u0027s Document.styleSheets list.',
            id: 2,
            title: 'disabled',
          },
          {
            p: 'Provides a hint of the relative priority to use when fetching a preloaded resource. Allowed values:\r\nhigh\r\nSignals a high-priority fetch relative to other resources of the same type.\r\nlow\r\nSignals a low-priority fetch relative to other resources of the same type.\r\nauto\r\nDefault: Signals automatic determination of fetch priority relative to other resources of the same type.',
            id: 3,
            title: 'fetchpriority',
          },
          {
            p: 'This attribute specifies the URL of the linked resource. A URL can be absolute or relative.',
            id: 4,
            title: 'href',
          },
          {
            p: 'This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are specified by RFC 5646: Tags for Identifying Languages (also known as BCP 47). Use this attribute only if the href attribute is present.',
            id: 5,
            title: 'hreflang',
          },
          {
            p: 'For rel=\u0022preload\u0022 and as=\u0022image\u0022 only, the imagesizes attribute is a sizes attribute that indicates to preload the appropriate resource used by an img element with corresponding values for its srcset and sizes attributes.',
            id: 6,
            title: 'imagesizes',
          },
          {
            p: 'For rel=\u0022preload\u0022 and as=\u0022image\u0022 only, the imagesrcset attribute is a sourceset attribute that indicates to preload the appropriate resource used by an img element with corresponding values for its srcset and sizes attributes.',
            id: 7,
            title: 'imagesrcset',
          },
          {
            p: 'Contains inline metadata \u2014 a base64-encoded cryptographic hash of the resource (file) you\u0027re telling the browser to fetch. The browser can use this to verify that the fetched resource has been delivered without unexpected manipulation. The attribute must only be specified when the rel attribute is specified to stylesheet, preload, or modulepreload. See Subresource Integrity.',
            id: 8,
            title: 'integrity',
          },
          {
            p: 'This attribute specifies the media that the linked resource applies to. Its value must be a media type / media query. This attribute is mainly useful when linking to external stylesheets \u2014 it allows the user agent to pick the best adapted one for the device it runs on.',
            id: 9,
            title: 'media',
          },
          {
            p: 'A string indicating which referrer to use when fetching the resource:\r\nno-referrer means that the Referer header will not be sent.\r\nno-referrer-when-downgrade means that no Referer header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent\u0027s default behavior, if no policy is otherwise specified.\r\norigin means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.\r\norigin-when-cross-origin means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer\u0027s path.\r\nunsafe-url means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.',
            id: 10,
            title: 'referrerpolicy',
          },
          {
            p: 'This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of link type values.',
            id: 11,
            title: 'rel',
          },
          {
            p: 'This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the rel contains a value of icon or a non-standard type such as Apple\u0027s apple-touch-icon. It may have the following values:\r\nany, meaning that the icon can be scaled to any size as it is in a vector format, like image/svg\u002Bxml.\r\na white-space separated list of sizes, each in the format \u003Cwidth in pixels\u003Ex\u003Cheight in pixels\u003E or \u003Cwidth in pixels\u003EX\u003Cheight in pixels\u003E. Each of these sizes must be contained in the resource.\r\nNote: Most icon formats are only able to store one single icon; therefore, most of the time, the sizes attribute contains only one entry. Microsoft\u0027s ICO format and Apple\u0027s ICNS format can store multiple icon sizes in a single file. ICO has better browser support, so you should use this format if cross-browser support is a concern.',
            id: 12,
            title: 'sizes',
          },
          {
            p: 'The title attribute has special semantics on the \u003Clink\u003E element. When used on a \u003Clink rel=\u0022stylesheet\u0022\u003E it defines a default or an alternate stylesheet.',
            id: 13,
            title: 'title',
          },
          {
            p: 'This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as text/css), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the type attribute, but is actually now recommended practice. It is also used on rel=\u0022preload\u0022 link types, to make sure the browser only downloads file types that it supports.',
            id: 14,
            title: 'type',
          },
        ],
        p: 'This element includes the global attributes.',
        id: 6,
        title: 'Attributes',
      },
    ],
    id: 5,
    title: 'LINK',
  },
  {
    url: 'script',
    elements: [
      {
        pre: '',
        html: '\u003Cscript src=\u0022javascript.js\u0022\u003E\u003C/script\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u043A\u043E\u0434\u0430 \u0438\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0445; \u043E\u0431\u044B\u0447\u043D\u043E \u044D\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u043A\u043E\u0434 JavaScript. \u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u044F\u0437\u044B\u043A\u0430\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u044F\u0437\u044B\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0448\u0435\u0439\u0434\u0435\u0440\u043E\u0432 GLSL WebGL \u0438 JSON .\u003Cscript\u003E \u003Cscript\u003E',
        id: 6,
        title: 'SCRIPT',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0414\u043B\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432, \u0435\u0441\u043B\u0438 async\u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442, \u0442\u043E \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043A\u0440\u0438\u043F\u0442 \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0430\u043D\u0430\u043B\u0438\u0437\u0443 \u0438 \u043E\u0446\u0435\u043D\u0435\u043D, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u043D \u0441\u0442\u0430\u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D.\r\n\u0414\u043B\u044F \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 , \u0435\u0441\u043B\u0438 async\u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442, \u0441\u043A\u0440\u0438\u043F\u0442\u044B \u0438 \u0432\u0441\u0435 \u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u044B \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0430\u043D\u0430\u043B\u0438\u0437\u0443 \u0438 \u043E\u0446\u0435\u043D\u0435\u043D\u044B, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u043D\u0438 \u0441\u0442\u0430\u043D\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B.\r\n\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435: \u044D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043D\u0435\u043B\u044C\u0437\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 src\u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0445 \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432) \u0434\u043B\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432, \u0432 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u043D \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0430.\r\n\u042D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0443\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0443 JavaScript-\u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u0430 , \u043A\u043E\u0433\u0434\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u043F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0438 \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u0442\u044C \u0441\u043A\u0440\u0438\u043F\u0442\u044B, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u0430\u043B\u0438\u0437. defer\u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u043C\u0435\u0435\u0442 \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0439 \u044D\u0444\u0444\u0435\u043A\u0442.\r\n\u0415\u0441\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0443\u043A\u0430\u0437\u0430\u043D \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u043C defer, \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0442\u0430\u043A, \u043A\u0430\u043A \u0431\u0443\u0434\u0442\u043E async\u0443\u043A\u0430\u0437\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u0442\u0440\u0438\u0431\u0443\u0442.\r\n\u042D\u0442\u043E \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442: \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0438\u0441\u0442\u0438\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043B\u043E\u0436\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.\r\nSee Browser compatibility for notes on browser support. See also Async scripts for asm.js.',
            id: 0,
            title: 'async',
          },
          {
            p: 'Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments.',
            id: 1,
            title: 'crossorigin',
          },
          {
            p: 'This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded event.\r\nScripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.\r\nWarning: This attribute must not be used if the src attribute is absent (i.e. for inline scripts), in this case it would have no effect.\r\nThe defer attribute has no effect on module scripts \u2014 they defer by default.\r\nScripts with the defer attribute will execute in the order in which they appear in the document.\r\nThis attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. async has a similar effect in this case.\r\nIf the attribute is specified with the async attribute, the element will act as if only the async attribute is specified.',
            id: 2,
            title: 'defer',
          },
          {
            p: 'Provides a hint of the relative priority to use when fetching an external script. Allowed values:\r\nhigh\r\nSignals a high-priority fetch relative to other external scripts.\r\nlow\r\nSignals a low-priority fetch relative to other external scripts.\r\nauto\r\nDefault: Signals automatic determination of fetch priority relative to other external scripts.',
            id: 3,
            title: 'fetchpriority',
          },
          {
            p: 'This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered without unexpected manipulation. The attribute must not specified when the src attribute is not specified. See Subresource Integrity.',
            id: 4,
            title: 'integrity',
          },
          {
            p: 'This Boolean attribute is set to indicate that the script should not be executed in browsers that support ES modules \u2014 in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.',
            id: 5,
            title: 'nomodule',
          },
          {
            p: 'A cryptographic nonce (number used once) to allow scripts in a script-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource\u0027s policy is otherwise trivial.',
            id: 6,
            title: 'nonce',
          },
          {
            p: 'Indicates which referrer to send when fetching the script, or resources fetched by the script:\r\nno-referrer: The Referer header will not be sent.\r\nno-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).\r\norigin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.\r\norigin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\r\nsame-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.\r\nstrict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS\u2192HTTPS), but don\u0027t send it to a less secure destination (HTTPS\u2192HTTP).\r\nstrict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS\u2192HTTPS), and send no header to a less secure destination (HTTPS\u2192HTTP).\r\nunsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.\r\nNote: An empty string value (\u0022\u0022) is both the default value, and a fallback value if referrerpolicy is not supported. If referrerpolicy is not explicitly specified on the \u003Cscript\u003E element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to strict-origin-when-cross-origin.',
            id: 7,
            title: 'referrerpolicy',
          },
          {
            p: 'This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.',
            id: 8,
            title: 'src',
          },
          {
            p: 'This attribute indicates the type of script represented. The value of this attribute will be one of the following:\r\nAttribute is not set (default), an empty string, or a JavaScript MIME type\r\nIndicates that the script is a \u0022classic script\u0022, containing JavaScript code. Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type. JavaScript MIME types are listed in the IANA media types specification.\r\nimportmap\r\nThis value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.\r\nmodule\r\nThis value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect. For information on using module, see our JavaScript modules guide. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.\r\nspeculationrules\r\nExperimental\r\nThis value indicates that the body of the element contains speculation rules. Speculation rules take the form of a JSON object that determine what resources should be prefetched or prerendered by the browser. This is part of the Speculation Rules API.\r\nAny other value\r\nThe embedded content is treated as a data block, and won\u0027t be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. All of the other attributes will be ignored, including the src attribute.',
            id: 9,
            title: 'type',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 7,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 6,
    title: 'SCRIPT',
  },
  {
    url: 'body',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 HTML. \u0412 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442.\u003Cbody\u003E \u003Cbody\u003E',
        id: 7,
        title: 'BODY',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 \u0434\u043B\u044F \u0433\u0438\u043F\u0435\u0440\u0441\u0441\u044B\u043B\u043E\u043A \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435. \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442! \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 color\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E CSS \u0432 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0438 \u0441 :active\u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441\u043E\u043C.',
            id: 0,
            title: 'alink',
          },
          {
            p: 'URI \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u043D\u0430. \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442! background\u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E CSS \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430.',
            id: 1,
            title: 'background',
          },
          {
            p: '\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430. \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442! background-color\u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E CSS \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430.',
            id: 2,
            title: 'bgcolor',
          },
          {
            p: '\u041F\u043E\u043B\u0435 \u043D\u0438\u0436\u043D\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0442\u0435\u043B\u0430. \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442! margin-bottom\u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E CSS \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430.',
            id: 3,
            title: 'bottommargin',
          },
          {
            p: '\u041F\u043E\u043B\u0435 \u0441\u043B\u0435\u0432\u0430 \u043E\u0442 \u0442\u0435\u043B\u0430. \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442! margin-left\u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E CSS \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430.',
            id: 4,
            title: 'leftmargin',
          },
          {
            p: 'Color of text for unvisited hypertext links. Do not use this attribute! Use the CSS color property in conjunction with the :link pseudo-class instead.',
            id: 5,
            title: 'link',
          },
          {
            p: 'Function to call after the user has printed the document.',
            id: 6,
            title: 'onafterprint',
          },
          {
            p: 'Function to call when the user requests printing of the document.',
            id: 7,
            title: 'onbeforeprint',
          },
          {
            p: 'Function to call when the document is about to be unloaded.',
            id: 8,
            title: 'onbeforeunload',
          },
          { p: 'Function to call when the document loses focus.', id: 9, title: 'onblur' },
          {
            p: 'Function to call when the document fails to load properly.',
            id: 10,
            title: 'onerror',
          },
          {
            p: 'Function to call when the document receives focus.',
            id: 11,
            title: 'onfocus',
          },
          {
            p: 'Function to call when the fragment identifier part (starting with the hash (\u0027#\u0027) character) of the document\u0027s current address has changed.',
            id: 12,
            title: 'onhashchange',
          },
          {
            p: 'Function to call when the preferred languages changed.',
            id: 13,
            title: 'onlanguagechange',
          },
          {
            p: 'Function to call when the document has finished loading.',
            id: 14,
            title: 'onload',
          },
          {
            p: 'Function to call when the document has received a message.',
            id: 15,
            title: 'onmessage',
          },
          {
            p: 'Function to call when network communication has failed.',
            id: 16,
            title: 'onoffline',
          },
          {
            p: 'Function to call when network communication has been restored.',
            id: 17,
            title: 'ononline',
          },
          {
            p: 'Function to call when the user has navigated session history.',
            id: 18,
            title: 'onpopstate',
          },
          {
            p: 'Function to call when the document has been resized.',
            id: 19,
            title: 'onresize',
          },
          {
            p: 'Function to call when the storage area has changed.',
            id: 20,
            title: 'onstorage',
          },
          {
            p: 'Function to call when the document is going away.',
            id: 21,
            title: 'onunload',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 8,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 7,
    title: 'BODY',
  },
  {
    url: 'h1',
    elements: [
      {
        pre: '',
        html: '\u003Ch1\u003EHeading level 1\u003C/h1\u003E\r\n\u003Ch2\u003EHeading level 2\u003C/h2\u003E\r\n\u003Ch3\u003EHeading level 3\u003C/h3\u003E\r\n\u003Ch4\u003EHeading level 4\u003C/h4\u003E\r\n\u003Ch5\u003EHeading level 5\u003C/h5\u003E\r\n\u003Ch6\u003EHeading level 6\u003C/h6\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B HTML\u003Ch1\u003E to \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0448\u0435\u0441\u0442\u044C \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432. \u2014 \u0441\u0430\u043C\u044B\u0439 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u0430, \u0430 \u2014 \u0441\u0430\u043C\u044B\u0439 \u043D\u0438\u0437\u043A\u0438\u0439. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u0432 \u043C\u0430\u043A\u0435\u0442\u0435 \u043F\u043E\u043B\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0431\u043B\u043E\u043A\u0430 , \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0435\u0435\u0441\u044F \u0441 \u043D\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438 \u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0449\u0435\u0435 \u0432\u0441\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0443\u044E \u0448\u0438\u0440\u0438\u043D\u0443 \u0432 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u043C \u0438\u0445 \u0431\u043B\u043E\u043A\u0435.\u003Ch6\u003E \u003Ch1\u003E\u003Ch6\u003E',
        id: 8,
        title: 'H1',
      },
      null,
    ],
    id: 8,
    title: 'H1',
  },
  {
    url: 'b',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: 'The \u003Cb\u003E HTML element is used to draw the reader\u0027s attention to the element\u0027s contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use \u003Cb\u003E for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the \u003Cstrong\u003E element.',
        id: 9,
        title: 'B',
      },
      null,
    ],
    id: 9,
    title: 'B',
  },
  {
    url: 'em',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: 'The \u003Cem\u003E HTML element marks text that has stress emphasis. The \u003Cem\u003E element can be nested, with each level of nesting indicating a greater degree of emphasis.',
        id: 10,
        title: 'EM',
      },
      null,
    ],
    id: 10,
    title: 'EM',
  },
  {
    url: 'i',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: 'The \u003Ci\u003E HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the \u003Ci\u003E naming of this element.',
        id: 11,
        title: 'I',
      },
      null,
    ],
    id: 11,
    title: 'I',
  },
  {
    url: 'small',
    elements: [
      {
        pre: '',
        html: '\u003Cp\u003E\r\n  This is the first sentence.\r\n  \u003Csmall\u003EThis whole sentence is in small letters.\u003C/small\u003E\r\n\u003C/p\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043F\u043E\u0431\u043E\u0447\u043D\u044B\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u0438 \u043C\u0435\u043B\u043A\u0438\u0439 \u0448\u0440\u0438\u0444\u0442, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0442\u0435\u043A\u0441\u0442 \u043E\u0431 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0445 \u043F\u0440\u0430\u0432\u0430\u0445 \u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0435\u0433\u043E \u0441\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043E\u043D \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0442\u0435\u043A\u0441\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u0435\u0431\u044F \u043D\u0430 \u043E\u0434\u0438\u043D \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430 \u043C\u0435\u043D\u044C\u0448\u0435, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043E\u0442 \u0434\u043E .\u003Csmall\u003E smallx-small',
        id: 12,
        title: 'SMALL',
      },
      null,
    ],
    id: 12,
    title: 'SMALL',
  },
  {
    url: 'strong',
    elements: [
      {
        pre: '',
        html: '\u003Cp\u003E\r\n  Before proceeding, \u003Cstrong\u003Emake sure you put on your safety goggles\u003C/strong\u003E.\r\n\u003C/p\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0435\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0438\u043C\u0435\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C, \u0441\u0435\u0440\u044C\u0435\u0437\u043D\u043E\u0441\u0442\u044C \u0438\u043B\u0438 \u0441\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C. \u0411\u0440\u0430\u0443\u0437\u0435\u0440\u044B \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0436\u0438\u0440\u043D\u044B\u043C \u0448\u0440\u0438\u0444\u0442\u043E\u043C.\u003Cstrong\u003E',
        id: 13,
        title: 'STRONG',
      },
      null,
    ],
    id: 13,
    title: 'STRONG',
  },
  {
    url: 'sub',
    elements: [
      {
        pre: '',
        html: '\u003Cp\u003E\r\n  According to the computations by Nakamura, Johnson, and Mason\u003Csub\u003E1\u003C/sub\u003E this\r\n  will result in the complete annihilation of both particles.\r\n\u003C/p\u003E',
        attributes: [],
        p: 'The \u003Csub\u003E HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.',
        id: 14,
        title: 'SUB',
      },
      null,
    ],
    id: 14,
    title: 'SUB',
  },
  {
    url: 'mark',
    elements: [
      {
        pre: '',
        html: '\u003Cblockquote\u003E\r\n  It is a period of civil war. Rebel spaceships, striking from a hidden base,\r\n  have won their first victory against the evil Galactic Empire. During the\r\n  battle, \u003Cmark\u003ERebel spies managed to steal secret plans\u003C/mark\u003E to the Empire\u0027s\r\n  ultimate weapon, the DEATH STAR, an armored space station with enough power to\r\n  destroy an entire planet.\r\n\u003C/blockquote\u003E',
        attributes: [],
        p: 'The \u003Cmark\u003E HTML element represents text which is marked or highlighted for reference or notation purposes due to the marked passage\u0027s relevance in the enclosing context.',
        id: 15,
        title: 'MARK',
      },
      null,
    ],
    id: 15,
    title: 'MARK',
  },
  {
    url: 'sup',
    elements: [
      {
        pre: '',
        html: '\u003Cp\u003E\r\n  One of the most common equations in all of physics is \u003Cvar\u003EE\u003C/var\u003E=\u003Cvar\u003Em\u003C/var\r\n  \u003E\u003Cvar\u003Ec\u003C/var\u003E\u003Csup\u003E2\u003C/sup\u003E.\r\n\u003C/p\u003E',
        attributes: [],
        p: 'The \u003Csup\u003E HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.',
        id: 16,
        title: 'SUP',
      },
      null,
    ],
    id: 16,
    title: 'SUP',
  },
  {
    url: 'del',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0442\u0435\u043A\u0441\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u0022\u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439\u0022 \u0438\u043B\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u044F\u0445 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u043E\u0434\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440. \u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u043E\u0439 \u0446\u0435\u043B\u0438: \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442.\u003Cdel\u003E \u003Cins\u003E',
        id: 17,
        title: 'DEL',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: 'URI \u0440\u0435\u0441\u0443\u0440\u0441\u0430, \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u044E\u0449\u0435\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B \u0441\u043E\u0431\u0440\u0430\u043D\u0438\u044F).',
            id: 0,
            title: 'cite',
          },
          {
            p: '\u042D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0432\u0440\u0435\u043C\u044F \u0438 \u0434\u0430\u0442\u0443 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439 \u0434\u0430\u0442\u044B \u0441 \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C. \u0415\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u043A\u0430\u043A \u0434\u0430\u0442\u0430 \u0441 \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439 \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u043E\u0439 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043C\u0435\u0442\u043A\u0438. \u0424\u043E\u0440\u043C\u0430\u0442 \u0441\u0442\u0440\u043E\u043A\u0438 \u0431\u0435\u0437 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0441\u043C. \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0421\u0442\u0440\u043E\u043A\u0438 \u0434\u0430\u0442\u044B . \u0424\u043E\u0440\u043C\u0430\u0442 \u0441\u0442\u0440\u043E\u043A\u0438, \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0438 \u0434\u0430\u0442\u0443, \u0438 \u0432\u0440\u0435\u043C\u044F, \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u043E\u043A\u0438 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 .',
            id: 1,
            title: 'datetime',
          },
        ],
        p: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 18,
        title: 'Attributes',
      },
    ],
    id: 17,
    title: 'DEL',
  },
  {
    url: 'code',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: 'The \u003Ccode\u003E HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent\u0027s default monospace font.',
        id: 18,
        title: 'CODE',
      },
      null,
    ],
    id: 18,
    title: 'CODE',
  },
  {
    url: 'var',
    elements: [
      {
        pre: '',
        html: '\u003Cp\u003EA simple equation: \u003Cvar\u003Ex\u003C/var\u003E = \u003Cvar\u003Ey\u003C/var\u003E \u002B 2\u003C/p\u003E',
        attributes: [],
        p: 'The \u003Cvar\u003E HTML element represents the name of a variable in a mathematical expression or a programming context. It\u0027s typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.',
        id: 19,
        title: 'VAR',
      },
      null,
    ],
    id: 19,
    title: 'VAR',
  },
  {
    url: 'pre',
    elements: [
      {
        pre: '',
        html: '\u003Cfigure\u003E\r\n  \u003Cpre role=\u0022img\u0022 aria-label=\u0022ASCII COW\u0022\u003E\r\n      ___________________________\r\n  \u0026lt; I\u0027m an expert in my field. \u0026gt;\r\n      ---------------------------\r\n          \\   ^__^\r\n           \\  (oo)\\_______\r\n              (__)\\       )\\/\\\r\n                  ||----w |\r\n                  ||     ||\r\n  \u003C/pre\u003E\r\n  \u003Cfigcaption id=\u0022cow-caption\u0022\u003E\r\n    A cow saying, \u0022I\u0027m an expert in my field.\u0022 The cow is illustrated using\r\n    preformatted text characters.\r\n  \u003C/figcaption\u003E\r\n\u003C/figure\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u0442\u043E\u0447\u043D\u043E \u0442\u0430\u043A, \u043A\u0430\u043A \u043E\u043D \u043D\u0430\u043F\u0438\u0441\u0430\u043D \u0432 \u0444\u0430\u0439\u043B\u0435 HTML. \u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043D\u0435\u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043C\u043E\u043D\u043E\u0448\u0438\u0440\u0438\u043D\u043D\u043E\u0433\u043E \u0448\u0440\u0438\u0444\u0442\u0430. \u041F\u0440\u043E\u0431\u0435\u043B\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u0442\u0430\u043A, \u043A\u0430\u043A \u043E\u043D\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u044B.\u003Cpre\u003E',
        id: 20,
        title: 'PRE',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0438\u043C\u0435\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0430. \u0425\u043E\u0442\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u044D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0432\u0441\u0435 \u0435\u0449\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D, \u043E\u043D \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0430; \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 width\u0432\u043C\u0435\u0441\u0442\u043E \u043D\u0435\u0433\u043E CSS.',
            id: 0,
            title: 'width',
          },
          {
            p: 'Is a hint indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS white-space instead.',
            id: 1,
            title: 'wrap',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 21,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 20,
    title: 'PRE',
  },
  {
    url: 'abbr',
    elements: [
      {
        pre: '',
        html: '\u003Cp\u003EUsing \u003Cabbr\u003EHTML\u003C/abbr\u003E is fun and easy!\u003C/p\u003E',
        attributes: [],
        p: 'The \u003Cabbr\u003E HTML element represents an abbreviation or acronym.',
        id: 21,
        title: 'ABBR',
      },
      null,
    ],
    id: 21,
    title: 'ABBR',
  },
  {
    url: 'q',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0439 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u0446\u0438\u0442\u0430\u0442\u043E\u0439. \u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u0432 \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0442 \u044D\u0442\u043E, \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u044F \u0442\u0435\u043A\u0441\u0442 \u0432 \u043A\u0430\u0432\u044B\u0447\u043A\u0438. \u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0446\u0438\u0442\u0430\u0442, \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0449\u0438\u0445 \u0440\u0430\u0437\u0440\u044B\u0432\u043E\u0432 \u0430\u0431\u0437\u0430\u0446\u0435\u0432; \u0434\u043B\u044F \u0434\u043B\u0438\u043D\u043D\u044B\u0445 \u0446\u0438\u0442\u0430\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 .\u003Cq\u003E \u003Cblockquote\u003E',
        id: 22,
        title: 'Q',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u2014 URL, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0438\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0446\u0438\u0442\u0438\u0440\u0443\u0435\u043C\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438. \u042D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043F\u043E\u044F\u0441\u043D\u044F\u044E\u0449\u0443\u044E \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0446\u0438\u0442\u0430\u0442\u0443.',
            id: 0,
            title: 'cite',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 23,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 22,
    title: 'Q',
  },
  {
    url: 'cite',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0446\u0438\u0442\u0438\u0440\u0443\u0435\u043C\u043E\u0439 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B. \u0421\u0441\u044B\u043B\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0443 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F\u043C\u0438, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0441 \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0446\u0438\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.\u003Ccite\u003E',
        id: 23,
        title: 'CITE',
      },
      null,
    ],
    id: 23,
    title: 'CITE',
  },
  {
    url: 'p',
    elements: [
      {
        pre: '',
        html: '\u003Cp\u003E\r\n  This is the first paragraph of text. This is the first paragraph of text. This\r\n  is the first paragraph of text. This is the first paragraph of text.\r\n\u003C/p\u003E\r\n\u003Cp\u003E\r\n  This is the second paragraph. This is the second paragraph. This is the second\r\n  paragraph. This is the second paragraph.\r\n\u003C/p\u003E',
        attributes: [],
        p: 'The \u003Cp\u003E HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
        id: 24,
        title: 'P',
      },
      null,
    ],
    id: 24,
    title: 'P',
  },
  {
    url: 'br',
    elements: [
      {
        pre: '',
        html: 'Mozilla\u003Cbr /\u003E\r\n331 E. Evelyn Avenue\u003Cbr /\u003E\r\nMountain View, CA\u003Cbr /\u003E\r\n94041\u003Cbr /\u003E\r\nUSA\u003Cbr /\u003E',
        attributes: [],
        p: 'The \u003Cbr\u003E HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.',
        id: 25,
        title: 'BR',
      },
      null,
    ],
    id: 25,
    title: 'BR',
  },
  {
    url: 'hr',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0440\u044B\u0432 \u043C\u0435\u0436\u0434\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0443\u0440\u043E\u0432\u043D\u044F \u0430\u0431\u0437\u0430\u0446\u0430: \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0441\u043C\u0435\u043D\u0430 \u0441\u0446\u0435\u043D\u044B \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438\u043B\u0438 \u0441\u043C\u0435\u043D\u0430 \u0442\u0435\u043C\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0430.\u003Chr\u003E',
        id: 26,
        title: 'HR',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0415\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E, \u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u2014 left.',
            id: 0,
            title: 'align',
          },
          {
            p: '\u0417\u0430\u0434\u0430\u0435\u0442 \u0446\u0432\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438\u043B\u0438 \u0448\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.',
            id: 1,
            title: 'color',
          },
          {
            p: '\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0437\u0430\u0442\u0435\u043D\u0435\u043D\u0438\u044F.',
            id: 2,
            title: 'noshade',
          },
          {
            p: '\u0417\u0430\u0434\u0430\u0435\u0442 \u0432\u044B\u0441\u043E\u0442\u0443 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432 \u043F\u0438\u043A\u0441\u0435\u043B\u044F\u0445.',
            id: 3,
            title: 'size',
          },
          {
            p: '\u0417\u0430\u0434\u0430\u0435\u0442 \u0434\u043B\u0438\u043D\u0443 \u043B\u0438\u043D\u0435\u0439\u043A\u0438 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432 \u043F\u0438\u043A\u0441\u0435\u043B\u044F\u0445 \u0438\u043B\u0438 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u0430\u0445.',
            id: 4,
            title: 'width',
          },
        ],
        p: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 27,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 26,
    title: 'HR',
  },
  {
    url: 'a',
    elements: [
      {
        pre: '',
        html: '\u003Ca href=\u0022https://www.mozilla.com\u0022\u003EMozilla\u003C/a\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML (\u0438\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 ) \u0441 \u0435\u0433\u043E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0433\u0438\u043F\u0435\u0440\u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0444\u0430\u0439\u043B\u044B, \u0430\u0434\u0440\u0435\u0441\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B, \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0438\u043B\u0438 \u0447\u0442\u043E-\u043B\u0438\u0431\u043E \u0435\u0449\u0435, \u043A \u0447\u0435\u043C\u0443 \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F URL.\u003Ca\u003E href',
        id: 27,
        title: 'A',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B Attribution-Reporting-Eligible\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A. \u041D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u044D\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 Attribution-Reporting-Register-Source\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0432 \u043E\u0442\u0432\u0435\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0430\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 .\r\n\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u043C \u0430\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 (\u043A\u0430\u043A \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0432 Attribution-Reporting-Register-Source\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435 \u043E\u0442\u0432\u0435\u0442\u0430), \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0430\u0436\u0438\u043C\u0430\u0435\u0442 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0443. \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u0441\u043C. \u0432 API \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u043E\u0431 \u0430\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438 .\r\n\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0432\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C:\r\nBoolean, i.e. just the attributionsrc name. This specifies that you want the Attribution-Reporting-Eligible header sent to the same server as the href attribute points to. This is fine when you are handling the attribution source registration on the same server.\r\nValue containing one or more URLs, for example:\r\nHTML\r\nCopy to Clipboard\r\nattributionsrc=\u0022https://a.example/register-source\r\nhttps://b.example/register-source\u0022\r\nThis is useful in cases where the requested resource is not on a server you control, or you just want to handle registering the attribution source on a different server. In this case, you can specify one or more URLs as the value of attributionsrc. When the resource request occurs, the Attribution-Reporting-Eligible header will be sent to the URL(s) specified in attributionsrc in addition to the resource origin. These URLs can then respond with the Attribution-Reporting-Register-Source to complete registration.\r\nNote: Specifying multiple URLs means that multiple attribution sources can be registered on the same feature. You might for example have different campaigns that you are trying to measure the success of, which involve generating different reports on different data.\r\n\u003Ca\u003E elements cannot be used as attribution triggers, only sources.',
            id: 0,
            title: 'attributionsrc',
          },
          {
            p: 'Causes the browser to treat the linked URL as a download. Can be used with or without a filename value:\r\nWithout a value, the browser will suggest a filename/extension, generated from various sources:\r\nThe Content-Disposition HTTP header\r\nThe final segment in the URL path\r\nThe media type (from the Content-Type header, the start of a data: URL, or Blob.type for a blob: URL)\r\nfilename: defining a value suggests it as the filename. / and \\ characters are converted to underscores (_). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.\r\nNote:\r\ndownload only works for same-origin URLs, or the blob: and data: schemes.\r\nHow browsers treat downloads varies by browser, user settings, and other factors. The user may be prompted before a download starts, or the file may be saved automatically, or it may open automatically, either in an external application or in the browser itself.\r\nIf the Content-Disposition header has different information from the download attribute, resulting behavior may differ:\r\nIf the header specifies a filename, it takes priority over a filename specified in the download attribute.\r\nIf the header specifies a disposition of inline, Chrome and Firefox prioritize the attribute and treat it as a download. Old Firefox versions (before 82) prioritize the header and will display the content inline.',
            id: 1,
            title: 'download',
          },
          {
            p: 'The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs \u2014 they can use any URL scheme supported by browsers:\r\nSections of a page with document fragments\r\nSpecific text portions with text fragments\r\nPieces of media files with media fragments\r\nTelephone numbers with tel: URLs\r\nEmail addresses with mailto: URLs\r\nSMS text messages with sms: URLs\r\nWhile web browsers may not support other URL schemes, websites can with registerProtocolHandler()',
            id: 2,
            title: 'href',
          },
          {
            p: 'Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as the global lang attribute.',
            id: 3,
            title: 'hreflang',
          },
          {
            p: 'A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs. Typically for tracking.',
            id: 4,
            title: 'ping',
          },
          {
            p: 'How much of the referrer to send when following the link.\r\nno-referrer: The Referer header will not be sent.\r\nno-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).\r\norigin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.\r\norigin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\r\nsame-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.\r\nstrict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS\u2192HTTPS), but don\u0027t send it to a less secure destination (HTTPS\u2192HTTP).\r\nstrict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS\u2192HTTPS), and send no header to a less secure destination (HTTPS\u2192HTTP).\r\nunsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.',
            id: 5,
            title: 'referrerpolicy',
          },
          {
            p: 'The relationship of the linked URL as space-separated link types.',
            id: 6,
            title: 'rel',
          },
          {
            p: 'Where to display the linked URL, as the name for a browsing context (a tab, window, or \u003Ciframe\u003E). The following keywords have special meanings for where to load the URL:\r\n_self: The current browsing context. (Default)\r\n_blank: Usually a new tab, but users can configure browsers to open a new window instead.\r\n_parent: The parent browsing context of the current one. If no parent, behaves as _self.\r\n_top: The topmost browsing context. To be specific, this means the \u0022highest\u0022 context that\u0027s an ancestor of the current one. If no ancestors, behaves as _self.\r\n_unfencedTop: Allows embedded fenced frames to navigate the top-level frame (i.e. traversing beyond the root of the fenced frame, unlike other reserved destinations). Note that the navigation will still succeed if this is used outside of a fenced frame context, but it will not act like a reserved keyword.\r\nNote: Setting target=\u0022_blank\u0022 on \u003Ca\u003E elements implicitly provides the same rel behavior as setting rel=\u0022noopener\u0022 which does not set window.opener.',
            id: 7,
            title: 'target',
          },
          {
            p: 'Hints at the linked URL\u0027s format with a MIME type. No built-in functionality.',
            id: 8,
            title: 'type',
          },
        ],
        p: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 28,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 27,
    title: 'A',
  },
  {
    url: 'img',
    elements: [
      {
        pre: '',
        html: '\u003Cimg src=\u0022favicon144.png\u0022 alt=\u0022MDN\u0022 /\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442.\u003Cimg\u003E',
        id: 28,
        title: 'IMG',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: 'Defines text that can replace the image in the page.\r\nNote: Browsers do not always display images. There are a number of situations in which a browser might not display images, such as:\r\nNon-visual browsers (such as those used by people with visual impairments)\r\nThe user chooses not to display images (saving bandwidth, privacy reasons)\r\nThe image is invalid or an unsupported type\r\nIn these cases, the browser may replace the image with the text in the element\u0027s alt attribute. For these reasons and others, provide a useful value for alt whenever possible.\r\nSetting this attribute to an empty string (alt=\u0022\u0022) indicates that this image is not a key part of the content (it\u0027s decoration or a tracking pixel), and that non-visual browsers may omit it from rendering. Visual browsers will also hide the broken image icon if the alt attribute is empty and the image failed to display.\r\nThis attribute is also used when copying and pasting the image to text, or saving a linked image to a bookmark.',
            id: 0,
            title: 'alt',
          },
          {
            p: 'Indicates if the fetching of the image must be done using a CORS request. Image data from a CORS-enabled image returned from a CORS request can be reused in the \u003Ccanvas\u003E element without being marked \u0022tainted\u0022.\r\nIf the crossorigin attribute is not specified, then a non-CORS request is sent (without the Origin request header), and the browser marks the image as tainted and restricts access to its image data, preventing its usage in \u003Ccanvas\u003E elements.\r\nIf the crossorigin attribute is specified, then a CORS request is sent (with the Origin request header); but if the server does not opt into allowing cross-origin access to the image data by the origin site (by not sending any Access-Control-Allow-Origin response header, or by not including the site\u0027s origin in any Access-Control-Allow-Origin response header it does send), then the browser blocks the image from loading, and logs a CORS error to the devtools console.\r\nAllowed values:\r\nanonymous\r\nA CORS request is sent with credentials omitted (that is, no cookies, X.509 certificates, or Authorization request header).\r\nuse-credentials\r\nThe CORS request is sent with any credentials included (that is, cookies, X.509 certificates, and the Authorization request header). If the server does not opt into sharing credentials with the origin site (by sending back the Access-Control-Allow-Credentials: true response header), then the browser marks the image as tainted and restricts access to its image data.\r\nIf the attribute has an invalid value, browsers handle it as if the anonymous value was used. See CORS settings attributes for additional information.',
            id: 1,
            title: 'crossorigin',
          },
          {
            p: 'This attribute provides a hint to the browser as to whether it should perform image decoding along with rendering the other DOM content in a single presentation step that looks more \u0022correct\u0022 (sync), or render and present the other DOM content first and then decode the image and present it later (async). In practice, async means that the next paint does not wait for the image to decode.\r\nIt is often difficult to perceive any noticeable effect when using decoding on static \u003Cimg\u003E elements. They\u0027ll likely be initially rendered as empty images while the image files are fetched (either from the network or from the cache) and then handled independently anyway, so the \u0022syncing\u0022 of content updates is less apparent. However, the blocking of rendering while decoding happens, while often quite small, can be measured \u2014 even if it is difficult to observe with the human eye. See What does the image decoding attribute actually do? for a more detailed analysis (tunetheweb.com, 2023).\r\nUsing different decoding types can result in more noticeable differences when dynamically inserting \u003Cimg\u003E elements into the DOM via JavaScript \u2014 see HTMLImageElement.decoding for more details.\r\nAllowed values:\r\nsync\r\nDecode the image synchronously along with rendering the other DOM content, and present everything together.\r\nasync\r\nDecode the image asynchronously, after rendering and presenting the other DOM content.\r\nauto\r\nNo preference for the decoding mode; the browser decides what is best for the user. This is the default value.',
            id: 2,
            title: 'decoding',
          },
          {
            p: 'Marks the image for observation by the PerformanceElementTiming API. The value given becomes an identifier for the observed image element. See also the elementtiming attribute page.',
            id: 3,
            title: 'elementtiming',
          },
          {
            p: 'Provides a hint of the relative priority to use when fetching the image. Allowed values:\r\nhigh\r\nSignals a high-priority fetch relative to other images.\r\nlow\r\nSignals a low-priority fetch relative to other images.\r\nauto\r\nDefault: Signals automatic determination of fetch priority relative to other images.',
            id: 4,
            title: 'fetchpriority',
          },
          {
            p: 'The intrinsic height of the image, in pixels. Must be an integer without a unit.\r\nNote: Including height and width enables the aspect ratio of the image to be calculated by the browser prior to the image being loaded. This aspect ratio is used to reserve the space needed to display the image, reducing or even preventing a layout shift when the image is downloaded and painted to the screen. Reducing layout shift is a major component of good user experience and web performance.',
            id: 5,
            title: 'height',
          },
          {
            p: 'This Boolean attribute indicates that the image is part of a server-side map. If so, the coordinates where the user clicked on the image are sent to the server.\r\nNote: This attribute is allowed only if the \u003Cimg\u003E element is a descendant of an \u003Ca\u003E element with a valid href attribute. This gives users without pointing devices a fallback destination.',
            id: 6,
            title: 'ismap',
          },
          {
            p: 'Indicates how the browser should load the image:\r\neager\r\nLoads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value).\r\nlazy\r\nDefers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it\u0027s reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases.\r\nNote: Loading is only deferred when JavaScript is enabled. This is an anti-tracking measure, because if a user agent supported lazy loading when scripting is disabled, it would still be possible for a site to track a user\u0027s approximate scroll position throughout a session, by strategically placing images in a page\u0027s markup such that a server can track how many images are requested and when.\r\nNote: Images with loading set to lazy will never be loaded if they do not intersect a visible part of an element, even if loading them would change that as unloaded images have a width and height of 0. Putting width and height on lazyloaded images fixes this issue and is a best practice, recommended by the specification. Doing so also helps prevent layout shifts.',
            id: 7,
            title: 'loading',
          },
          {
            p: 'A string indicating which referrer to use when fetching the resource:\r\nno-referrer: The Referer header will not be sent.\r\nno-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).\r\norigin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.\r\norigin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\r\nsame-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.\r\nstrict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS\u2192HTTPS), but don\u0027t send it to a less secure destination (HTTPS\u2192HTTP).\r\nstrict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS\u2192HTTPS), and send no header to a less secure destination (HTTPS\u2192HTTP).\r\nunsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.',
            id: 8,
            title: 'referrerpolicy',
          },
          {
            p: 'One or more strings separated by commas, indicating a set of source sizes. Each source size consists of:\r\nA media condition. This must be omitted for the last item in the list.\r\nA source size value.\r\nMedia Conditions describe properties of the viewport, not of the image. For example, (max-height: 500px) 1000px proposes to use a source of 1000px width, if the viewport is not higher than 500px.\r\nSource size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the srcset attribute, when those sources are described using width (w) descriptors. The selected source size affects the intrinsic size of the image (the image\u0027s display size if no CSS styling is applied). If the srcset attribute is absent, or contains no values with a width descriptor, then the sizes attribute has no effect.',
            id: 9,
            title: 'sizes',
          },
          {
            p: 'The image URL. Mandatory for the \u003Cimg\u003E element. On browsers supporting srcset, src is treated like a candidate image with a pixel density descriptor 1x, unless an image with this pixel density descriptor is already defined in srcset, or unless srcset contains w descriptors.',
            id: 10,
            title: 'src',
          },
          {
            p: 'One or more strings separated by commas, indicating possible image sources for the user agent to use. Each string is composed of:\r\nA URL to an image\r\nOptionally, whitespace followed by one of:\r\nA width descriptor (a positive integer directly followed by w). The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density.\r\nA pixel density descriptor (a positive floating point number directly followed by x).\r\nIf no descriptor is specified, the source is assigned the default descriptor of 1x.\r\nIt is incorrect to mix width descriptors and pixel density descriptors in the same srcset attribute. Duplicate descriptors (for instance, two sources in the same srcset which are both described with 2x) are also invalid.\r\nIf the srcset attribute uses width descriptors, the sizes attribute must also be present, or the srcset itself will be ignored.\r\nThe user agent selects any of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our Responsive images tutorial for an example.',
            id: 11,
            title: 'srcset',
          },
          {
            p: 'The intrinsic width of the image in pixels. Must be an integer without a unit.',
            id: 12,
            title: 'width',
          },
          {
            p: 'The partial URL (starting with #) of an image map associated with the element.\r\nNote: You cannot use this attribute if the \u003Cimg\u003E element is inside an \u003Ca\u003E or \u003Cbutton\u003E element.',
            id: 13,
            title: 'usemap',
          },
        ],
        p: 'This element includes the global attributes.',
        id: 29,
        title: 'Attributes',
      },
    ],
    id: 28,
    title: 'IMG',
  },
  {
    url: 'map',
    elements: [
      {
        pre: '',
        html: '\u003C!-- Photo by Juliana e Mariana Amorim on Unsplash --\u003E\r\n\u003Cmap name=\u0022primary\u0022\u003E\r\n  \u003Carea\r\n    shape=\u0022circle\u0022\r\n    coords=\u002275,75,75\u0022\r\n    href=\u0022https://developer.mozilla.org/docs/Web/JavaScript\u0022\r\n    target=\u0022_blank\u0022\r\n    alt=\u0022JavaScript\u0022 /\u003E\r\n  \u003Carea\r\n    shape=\u0022circle\u0022\r\n    coords=\u0022275,75,75\u0022\r\n    href=\u0022https://developer.mozilla.org/docs/Web/CSS\u0022\r\n    target=\u0022_blank\u0022\r\n    alt=\u0022CSS\u0022 /\u003E\r\n\u003C/map\u003E\r\n\u003Cimg\r\n  usemap=\u0022#primary\u0022\r\n  src=\u0022parrots.jpg\u0022\r\n  alt=\u0022350 x 150 picture of two parrots\u0022 /\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0441 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0440\u0442\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F (\u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0441\u0441\u044B\u043B\u043E\u043A, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0438\u043C\u0430\u0442\u044C).\u003Cmap\u003E \u003Carea\u003E',
        id: 29,
        title: 'MAP',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442 name\u0434\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u0435 \u0438\u043C\u044F, \u0447\u0442\u043E\u0431\u044B \u043D\u0430 \u043D\u0435\u0435 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0441\u0441\u044B\u043B\u0430\u0442\u044C\u0441\u044F. \u0410\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0438 \u0438\u043C\u0435\u0442\u044C \u043D\u0435\u043F\u0443\u0441\u0442\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 name\u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 name\u0434\u0440\u0443\u0433\u043E\u0433\u043E \u003Cmap\u003E\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0442\u043E\u043C \u0436\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435. \u0415\u0441\u043B\u0438 id\u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0442\u0430\u043A\u0436\u0435 \u0443\u043A\u0430\u0437\u0430\u043D, \u043E\u0431\u0430 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0438\u043C\u0435\u0442\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.',
            id: 0,
            title: 'name',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 30,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 29,
    title: 'MAP',
  },
  {
    url: 'area',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u0430\u0440\u0442\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438. \u041A\u0430\u0440\u0442\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u0442\u044C \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u0441 \u0433\u0438\u043F\u0435\u0440\u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u043C\u0438 \u0441\u0441\u044B\u043B\u043A\u0430\u043C\u0438 .\u003Carea\u003E',
        id: 30,
        title: 'AREA',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445, \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0449\u0438\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u0422\u0435\u043A\u0441\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0442\u043E\u0442 \u0436\u0435 \u0432\u044B\u0431\u043E\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u043B\u043E \u0431\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u0431\u0435\u0437 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430. \u042D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 href\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F.',
            id: 0,
            title: 'alt',
          },
          {
            p: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442 coords\u0434\u0435\u0442\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 shape\u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443, \u0444\u043E\u0440\u043C\u0435 \u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044E \u003Carea\u003E. \u042D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F, \u0435\u0441\u043B\u0438 shape\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0432 default.\r\nrect: the value is x1,y1,x2,y2. The value specifies the coordinates of the top-left and bottom-right corner of the rectangle. For example, in \u003Carea shape=\u0022rect\u0022 coords=\u00220,0,253,27\u0022 href=\u0022#\u0022 target=\u0022_blank\u0022 alt=\u0022Mozilla\u0022\u003E the coordinates are 0,0 and 253,27, indicating the top-left and bottom-right corners of the rectangle, respectively.\r\ncircle: the value is x,y,radius. Value specifies the coordinates of the circle center and the radius. For example: \u003Carea shape=\u0022circle\u0022 coords=\u0022130,136,60\u0022 href=\u0022#\u0022 target=\u0022_blank\u0022 alt=\u0022MDN\u0022\u003E\r\npoly: the value is x1,y1,x2,y2,..,xn,yn. Value specifies the coordinates of the edges of the polygon. If the first and last coordinate pairs are not the same, the browser will add the last coordinate pair to close the polygon\r\nThe values are numbers of CSS pixels.',
            id: 1,
            title: 'coords',
          },
          {
            p: 'This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource. See \u003Ca\u003E for a full description of the download attribute.',
            id: 2,
            title: 'download',
          },
          {
            p: 'The hyperlink target for the area. Its value is a valid URL. This attribute may be omitted; if so, the \u003Carea\u003E element does not represent a hyperlink.',
            id: 3,
            title: 'href',
          },
          {
            p: 'Contains a space-separated list of URLs to which, when the hyperlink is followed, POST requests with the body PING will be sent by the browser (in the background). Typically used for tracking.',
            id: 4,
            title: 'ping',
          },
          {
            p: 'A string indicating which referrer to use when fetching the resource:\r\nno-referrer: The Referer header will not be sent.\r\nno-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).\r\norigin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.\r\norigin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\r\nsame-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.\r\nstrict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS\u2192HTTPS), but don\u0027t send it to a less secure destination (HTTPS\u2192HTTP).\r\nstrict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS\u2192HTTPS), and send no header to a less secure destination (HTTPS\u2192HTTP).\r\nunsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.',
            id: 5,
            title: 'referrerpolicy',
          },
          {
            p: 'For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of link types. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present.',
            id: 6,
            title: 'rel',
          },
          {
            p: 'The shape of the associated hot spot. The specifications for HTML defines the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes.',
            id: 7,
            title: 'shape',
          },
          {
            p: 'A keyword or author-defined name of the browsing context to display the linked resource. The following keywords have special meanings:\r\n_self (default): Show the resource in the current browsing context.\r\n_blank: Show the resource in a new, unnamed browsing context.\r\n_parent: Show the resource in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as _self.\r\n_top: Show the resource in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as _self.\r\nUse this attribute only if the href attribute is present.\r\nNote: Setting target=\u0022_blank\u0022 on \u003Carea\u003E elements implicitly provides the same rel behavior as setting rel=\u0022noopener\u0022 which does not set window.opener. See browser compatibility for support status.',
            id: 8,
            title: 'target',
          },
        ],
        p: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 31,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 30,
    title: 'AREA',
  },
  {
    url: 'table',
    elements: [
      {
        pre: '',
        html: '\u003Ctable\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth\u003EName\u003C/th\u003E\r\n    \u003Cth\u003EAge\u003C/th\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Ctd\u003EMaria Sanchez\u003C/td\u003E\r\n    \u003Ctd\u003E28\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Ctd\u003EMichael Johnson\u003C/td\u003E\r\n    \u003Ctd\u003E34\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n\u003C/table\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0442\u0430\u0431\u043B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0442\u043E \u0435\u0441\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u0432 \u0434\u0432\u0443\u043C\u0435\u0440\u043D\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u0435, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u0438\u0437 \u0441\u0442\u0440\u043E\u043A \u0438 \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432 \u044F\u0447\u0435\u0435\u043A, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0435.\u003Ctable\u003E',
        id: 31,
        title: 'TABLE',
      },
      null,
    ],
    id: 31,
    title: 'TABLE',
  },
  {
    url: 'caption',
    elements: [
      {
        pre: '',
        html: '\u003Ctable\u003E\r\n  \u003Ccaption\u003E\r\n    User login email addresses\r\n  \u003C/caption\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth\u003ELogin\u003C/th\u003E\r\n    \u003Cth\u003EEmail\u003C/th\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Ctd\u003Euser1\u003C/td\u003E\r\n    \u003Ctd\u003Euser1@example.com\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Ctd\u003Euser2\u003C/td\u003E\r\n    \u003Ctd\u003Euser2@example.com\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n\u003C/table\u003E',
        attributes: [],
        p: 'The \u003Ccaption\u003E HTML element specifies the caption (or title) of a table, providing the table an accessible description.',
        id: 32,
        title: 'CAPTION',
      },
      null,
    ],
    id: 32,
    title: 'CAPTION',
  },
  {
    url: 'tr',
    elements: [
      {
        pre: '',
        html: '\u003Ctable\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022row\u0022\u003EA\u003C/th\u003E\r\n    \u003Ctd\u003EAlfa\u003C/td\u003E\r\n    \u003Ctd\u003EAL fah\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022row\u0022\u003EB\u003C/th\u003E\r\n    \u003Ctd\u003EBravo\u003C/td\u003E\r\n    \u003Ctd\u003EBRAH voh\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022row\u0022\u003EC\u003C/th\u003E\r\n    \u003Ctd\u003ECharlie\u003C/td\u003E\r\n    \u003Ctd\u003ECHAR lee\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022row\u0022\u003ED\u003C/th\u003E\r\n    \u003Ctd\u003EDelta\u003C/td\u003E\r\n    \u003Ctd\u003EDELL tah\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n\u003C/table\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0441\u0442\u0440\u043E\u043A\u0443 \u044F\u0447\u0435\u0435\u043A \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435. \u042F\u0447\u0435\u0439\u043A\u0438 \u0441\u0442\u0440\u043E\u043A\u0438 \u0437\u0430\u0442\u0435\u043C \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (\u044F\u0447\u0435\u0439\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445) \u0438 (\u044F\u0447\u0435\u0439\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430).\u003Ctr\u003E \u003Ctd\u003E\u003Cth\u003E',
        id: 33,
        title: 'TR',
      },
      null,
    ],
    id: 33,
    title: 'TR',
  },
  {
    url: 'th',
    elements: [
      {
        pre: '',
        html: '\u003Ctable\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022col\u0022\u003ESymbol\u003C/th\u003E\r\n    \u003Cth scope=\u0022col\u0022\u003ECode word\u003C/th\u003E\r\n    \u003Cth scope=\u0022col\u0022\u003EPronunciation\u003C/th\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022row\u0022\u003EA\u003C/th\u003E\r\n    \u003Ctd\u003EAlfa\u003C/td\u003E\r\n    \u003Ctd\u003EAL fah\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022row\u0022\u003EB\u003C/th\u003E\r\n    \u003Ctd\u003EBravo\u003C/td\u003E\r\n    \u003Ctd\u003EBRAH voh\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022row\u0022\u003EC\u003C/th\u003E\r\n    \u003Ctd\u003ECharlie\u003C/td\u003E\r\n    \u003Ctd\u003ECHAR lee\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Cth scope=\u0022row\u0022\u003ED\u003C/th\u003E\r\n    \u003Ctd\u003EDelta\u003C/td\u003E\r\n    \u003Ctd\u003EDELL tah\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n\u003C/table\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u044F\u0447\u0435\u0439\u043A\u0443 \u043A\u0430\u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u044B \u044F\u0447\u0435\u0435\u043A \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0438 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 . \u0422\u043E\u0447\u043D\u0430\u044F \u043F\u0440\u0438\u0440\u043E\u0434\u0430 \u044D\u0442\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043C\u0438 \u0438 .\u003Cth\u003E \u003Ctr\u003Escopeheaders',
        id: 34,
        title: 'TH',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u041A\u0440\u0430\u0442\u043A\u043E\u0435, \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0433\u043E \u044F\u0447\u0435\u0439\u043A\u0438 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0435 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043C\u0435\u0442\u043A\u0438 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u044F\u0447\u0435\u0439\u043A\u0438 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u043F\u0440\u0438 \u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0430 \u044F\u0447\u0435\u0439\u043A\u0443 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430\u0445. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0430\u0433\u0435\u043D\u0442\u044B, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0447\u0442\u0435\u043D\u0438\u044F \u0440\u0435\u0447\u0438, \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u044D\u0442\u043E \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0434 \u0441\u0430\u043C\u0438\u043C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u043C.',
            id: 0,
            title: 'abbr',
          },
          {
            p: '\u041D\u0435\u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E, \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0435\u0435, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432 \u043E\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0438\u043B\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u0442 \u044F\u0447\u0435\u0439\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u2014 1. \u0410\u0433\u0435\u043D\u0442\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043E\u0442\u043A\u043B\u043E\u043D\u044F\u044E\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432\u044B\u0448\u0435 1000 \u043A\u0430\u043A \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0435, \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044F \u0442\u0430\u043A\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0440\u0430\u0432\u043D\u044B\u043C\u0438 1.',
            id: 1,
            title: 'colspan',
          },
          {
            p: '\u0421\u043F\u0438\u0441\u043E\u043A \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0431\u0435\u043B\u0430\u043C\u0438 \u0441\u0442\u0440\u043E\u043A, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 id\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u003Cth\u003E, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u0438 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430.',
            id: 2,
            title: 'headers',
          },
          {
            p: 'A non-negative integer value indicating how many rows the header cell spans or extends. The default value is 1; if its value is set to 0, the header cell will extends to the end of the table grouping section (\u003Cthead\u003E, \u003Ctbody\u003E, \u003Ctfoot\u003E, even if implicitly defined), that the \u003Cth\u003E belongs to. Values higher than 65534 are clipped at 65534.',
            id: 3,
            title: 'rowspan',
          },
          {
            p: 'Defines the cells that the header (defined in the \u003Cth\u003E) element relates to. Possible enumerated values are:\r\nrow: the header relates to all cells of the row it belongs to;\r\ncol: the header relates to all cells of the column it belongs to;\r\nrowgroup: the header belongs to a rowgroup and relates to all of its cells;\r\ncolgroup: the header belongs to a colgroup and relates to all of its cells.\r\nIf the scope attribute is not specified, or its value is not row, col, rowgroup, or colgroup, then browsers automatically select the set of cells to which the header cell applies.',
            id: 4,
            title: 'scope',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 35,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 34,
    title: 'TH',
  },
  {
    url: 'tbody',
    elements: [
      {
        pre: '',
        html: '\u003Ctable\u003E\r\n  \u003Ctr\u003E\r\n    \u003Ctd\u003E3741255\u003C/td\u003E\r\n    \u003Ctd\u003EJones, Martha\u003C/td\u003E\r\n    \u003Ctd\u003EComputer Science\u003C/td\u003E\r\n    \u003Ctd\u003E240\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Ctd\u003E3971244\u003C/td\u003E\r\n    \u003Ctd\u003ENim, Victor\u003C/td\u003E\r\n    \u003Ctd\u003ERussian Literature\u003C/td\u003E\r\n    \u003Ctd\u003E220\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n  \u003Ctr\u003E\r\n    \u003Ctd\u003E4100332\u003C/td\u003E\r\n    \u003Ctd\u003EPetrov, Alexandra\u003C/td\u003E\r\n    \u003Ctd\u003EAstrophysics\u003C/td\u003E\r\n    \u003Ctd\u003E260\u003C/td\u003E\r\n  \u003C/tr\u003E\r\n\u003C/table\u003E',
        attributes: [],
        p: 'The \u003Ctbody\u003E HTML element encapsulates a set of table rows (\u003Ctr\u003E elements), indicating that they comprise the body of a table\u0027s (main) data.',
        id: 35,
        title: 'TBODY',
      },
      null,
    ],
    id: 35,
    title: 'TBODY',
  },
  {
    url: 'col',
    elements: [
      {
        pre: '',
        html: '',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432 \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0435\u0433\u043E \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043A \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 , \u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D \u0430\u0442\u0440\u0438\u0431\u0443\u0442.\u003Ccol\u003E \u003Ccolgroup\u003E\u003Ccol\u003E\u003Ccolgroup\u003Espan',
        id: 36,
        title: 'COL',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432, \u003Ccol\u003E\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0446\u0435\u043B\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0443\u043B\u044F. \u0415\u0441\u043B\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442, \u0435\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u2014 1.',
            id: 0,
            title: 'span',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 37,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 36,
    title: 'COL',
  },
  {
    url: 'ul',
    elements: [
      {
        pre: '',
        html: '\u003Cul\u003E\r\n  \u003Cli\u003Efirst item\u003C/li\u003E\r\n  \u003Cli\u003Esecond item\u003C/li\u003E\r\n  \u003Cli\u003Ethird item\u003C/li\u003E\r\n\u003C/ul\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435\u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 \u0432 \u0432\u0438\u0434\u0435 \u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.\u003Cul\u003E',
        id: 37,
        title: 'UL',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u042D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0437\u0430\u0434\u0430\u0435\u0442 \u0441\u0442\u0438\u043B\u044C \u043C\u0430\u0440\u043A\u0435\u0440\u0430 \u0434\u043B\u044F \u0441\u043F\u0438\u0441\u043A\u0430. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0432 HTML3.2 \u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 HTML 4.0/4.01, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435:\r\ncircle\r\ndisc\r\nsquare\r\n\u0412 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 WebTV \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044B\u0439 \u0442\u0438\u043F \u043C\u0430\u0440\u043A\u0435\u0440\u0430, \u043D\u043E \u043D\u0435 \u0432\u0441\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044B \u0435\u0433\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442: triangle.\r\n\u0415\u0441\u043B\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438 \u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043D\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u043E \u043D\u0438 \u043E\u0434\u043D\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E CSS list-style-type , \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0430\u0433\u0435\u043D\u0442 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u0442\u0438\u043F \u043C\u0430\u0440\u043A\u0435\u0440\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0443\u0440\u043E\u0432\u043D\u044F \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u043F\u0438\u0441\u043A\u0430.\r\nWarning: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead.',
            id: 0,
            title: 'type',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 38,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 37,
    title: 'UL',
  },
  {
    url: 'ol',
    elements: [
      {
        pre: '',
        html: '\u003Col\u003E\r\n  \u003Cli\u003EFee\u003C/li\u003E\r\n  \u003Cli\u003EFi\u003C/li\u003E\r\n  \u003Cli\u003EFo\u003C/li\u003E\r\n  \u003Cli\u003EFum\u003C/li\u003E\r\n\u003C/ol\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u2014 \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 \u043A\u0430\u043A \u043D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A.\u003Col\u003E',
        id: 38,
        title: 'OL',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u042D\u0442\u043E\u0442 \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u043F\u0438\u0441\u043A\u0430 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044B \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435. \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u043D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u044B \u043E\u0442 \u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E \u043A \u043C\u0435\u043D\u044C\u0448\u0435\u043C\u0443.',
            id: 0,
            title: 'reversed',
          },
          {
            p: '\u0426\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0441\u0447\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441\u043F\u0438\u0441\u043A\u0430. \u0412\u0441\u0435\u0433\u0434\u0430 \u0430\u0440\u0430\u0431\u0441\u043A\u0430\u044F \u0446\u0438\u0444\u0440\u0430 (1, 2, 3 \u0438 \u0442. \u0434.), \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u043D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u044F type\u2014 \u044D\u0442\u043E \u0431\u0443\u043A\u0432\u044B \u0438\u043B\u0438 \u0440\u0438\u043C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u043D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u044E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u0431\u0443\u043A\u0432\u044B \u00ABd\u00BB \u0438\u043B\u0438 \u0440\u0438\u043C\u0441\u043A\u043E\u0439 \u0446\u0438\u0444\u0440\u044B \u00ABiv\u00BB, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 start=\u00224\u0022.',
            id: 1,
            title: 'start',
          },
          {
            p: '\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0442\u0438\u043F \u043D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u0438:\r\na\u0434\u043B\u044F \u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0445 \u0431\u0443\u043A\u0432\r\nA\u0434\u043B\u044F \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0445 \u0431\u0443\u043A\u0432\r\ni\u0434\u043B\u044F \u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0445 \u0440\u0438\u043C\u0441\u043A\u0438\u0445 \u0446\u0438\u0444\u0440\r\nI\u0434\u043B\u044F \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0445 \u0440\u0438\u043C\u0441\u043A\u0438\u0445 \u0446\u0438\u0444\u0440\r\n1\u0434\u043B\u044F \u0447\u0438\u0441\u0435\u043B (\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E)\r\n\u0423\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0442\u0438\u043F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430, \u0435\u0441\u043B\u0438 type\u0434\u043B\u044F \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u003Cli\u003E.\r\n\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435: \u0415\u0441\u043B\u0438 \u0442\u0438\u043F \u043D\u043E\u043C\u0435\u0440\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u043B\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0445, \u0433\u0434\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443/\u0431\u0443\u043A\u0432\u0435), \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 list-style-type\u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E CSS.',
            id: 2,
            title: 'type',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 39,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 38,
    title: 'OL',
  },
  {
    url: 'li',
    elements: [
      {
        pre: '',
        html: '\u003Col\u003E\r\n  \u003Cli\u003Efirst item\u003C/li\u003E\r\n  \u003Cli\u003Esecond item\u003C/li\u003E\r\n  \u003Cli\u003Ethird item\u003C/li\u003E\r\n\u003C/ol\u003E',
        attributes: [],
        p: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 HTML \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435. \u041E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0435: \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 ( ), \u043D\u0435\u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 ( ) \u0438\u043B\u0438 \u043C\u0435\u043D\u044E ( ). \u0412 \u043C\u0435\u043D\u044E \u0438 \u043D\u0435\u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043F\u0438\u0441\u043A\u0430\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u043F\u0438\u0441\u043A\u0430 \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0430\u0440\u043A\u0435\u0440\u043E\u0432. \u0412 \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043F\u0438\u0441\u043A\u0430\u0445 \u043E\u043D\u0438 \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u0441 \u0432\u043E\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u043C \u0441\u0447\u0435\u0442\u0447\u0438\u043A\u043E\u043C \u0441\u043B\u0435\u0432\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0447\u0438\u0441\u043B\u043E\u043C \u0438\u043B\u0438 \u0431\u0443\u043A\u0432\u043E\u0439.\u003Cli\u003E \u003Col\u003E\u003Cul\u003E\u003Cmenu\u003E',
        id: 39,
        title: 'LI',
      },
      {
        pre: '',
        html: '',
        attributes: [
          {
            p: '\u042D\u0442\u043E\u0442 \u0446\u0435\u043B\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441\u043F\u0438\u0441\u043A\u0430, \u043A\u0430\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C \u003Col\u003E. \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0438\u0441\u043B\u043E, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0440\u0438\u043C\u0441\u043A\u0438\u043C\u0438 \u0446\u0438\u0444\u0440\u0430\u043C\u0438 \u0438\u043B\u0438 \u0431\u0443\u043A\u0432\u0430\u043C\u0438. \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u043F\u0438\u0441\u043A\u0430, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0437\u0430 \u044D\u0442\u0438\u043C, \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E\u0442 \u043D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u044E \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439. \u0410\u0442\u0440\u0438\u0431\u0443\u0442 value \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043D\u0435\u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043F\u0438\u0441\u043A\u043E\u0432 ( \u003Cul\u003E) \u0438\u043B\u0438 \u0434\u043B\u044F \u043C\u0435\u043D\u044E ( \u003Cmenu\u003E).',
            id: 0,
            title: 'value',
          },
          {
            p: '\u042D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u0438\u043F \u043D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u0438:\r\na: \u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0435 \u0431\u0443\u043A\u0432\u044B\r\nA: \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u0431\u0443\u043A\u0432\u044B\r\ni: \u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0435 \u0440\u0438\u043C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B\r\nI: \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u0440\u0438\u043C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B\r\n1: \u0447\u0438\u0441\u043B\u0430\r\n\u042D\u0442\u043E\u0442 \u0442\u0438\u043F \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0442\u0438\u043F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u003Col\u003E\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C, \u0435\u0441\u043B\u0438 \u0442\u0430\u043A\u043E\u0432\u043E\u0439 \u0438\u043C\u0435\u0435\u0442\u0441\u044F.\r\n\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435: \u044D\u0442\u043E\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0443\u0441\u0442\u0430\u0440\u0435\u043B; list-style-type\u0432\u043C\u0435\u0441\u0442\u043E \u043D\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E CSS.',
            id: 1,
            title: 'type',
          },
        ],
        p: '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B .',
        id: 40,
        title: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
      },
    ],
    id: 39,
    title: 'LI',
  },
];

export { arrHTML, arrHTMLFront };
