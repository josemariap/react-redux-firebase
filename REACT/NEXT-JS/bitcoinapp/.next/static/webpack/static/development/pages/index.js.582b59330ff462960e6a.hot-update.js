webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _componentes_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/Master */ "./componentes/Master.js");
/* harmony import */ var _componentes_Precio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/Precio */ "./componentes/Precio.js");
/* harmony import */ var _componentes_Noticias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/Noticias */ "./componentes/Noticias.js");
/* harmony import */ var _componentes_Eventos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/Eventos */ "./componentes/Eventos.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/josepico/Desktop/REACT/NEXT-JS/bitcoinapp/pages/index.js";





 //Temas: https://bootswatch.com/
//usamos en esta app:Yety template  https://bootswatch.com/4/yeti/bootstrap.min.css
//Hay que crear un master page para el uso de estos estilos, lo llamamos Master.js
//Pegarle a la api del lado del servidor debemos instalar: npm install --save-dev isomorphic-unfetch  ya que el fetch es solo del lado del cliente

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Precio del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Precio__WEBPACK_IMPORTED_MODULE_4__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Noticias Sobre Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Noticias__WEBPACK_IMPORTED_MODULE_5__["default"], {
    noticias: props.noticiasBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Pr\xF3ximos Eventos Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Eventos__WEBPACK_IMPORTED_MODULE_6__["default"], {
    eventos: props.eventosBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
}; //Solo en SSR cuando este primer componente Index cargue, se ejecuta este metodo autom. y lo que retorna esta disponible en la props del index


Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var precio, resPrecio, noticias, resNoticias, eventos, resEventos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("https://api.coinmarketcap.com/v2/ticker/1/");

        case 2:
          precio = _context.sent;
          _context.next = 5;
          return precio.json();

        case 5:
          resPrecio = _context.sent;
          _context.next = 8;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=2910dd47c07c4e048cad8ff2bb431e55&language=es");

        case 8:
          noticias = _context.sent;
          _context.next = 11;
          return noticias.json();

        case 11:
          resNoticias = _context.sent;
          _context.next = 14;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Argentina&token=EVF2SH7TLJ7FVS4MZRYE");

        case 14:
          eventos = _context.sent;
          _context.next = 17;
          return eventos.json();

        case 17:
          resEventos = _context.sent;
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.data.quotes.USD,
            noticiasBitcoin: resNoticias.articles,
            eventosBitcoin: resEventos.events //esto return se carga en las props del index

          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.582b59330ff462960e6a.hot-update.js.map