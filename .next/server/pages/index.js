"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\eriso\\OneDrive\\Documentos\\portifolio\\pages\\index.js";






function Home() {
  const [modalOpen, setModalOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "Portifolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "home.thm",
            children: "Trendy Man"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "menu",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              href: "home.html",
              className: "menu-btn",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              className: "menu-btn",
              onClick: () => setModalOpen(!modalOpen),
              children: "Cadastre-se"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              href: "#",
              className: "menu-btn",
              children: "Contatos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
            className: "modal",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Modal, {
              toggle: () => setModalOpen(!modalOpen),
              isOpen: modalOpen,
              className: "max-width",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: " modal-header",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
                  className: " modal-title",
                  id: "exampleModalLabel",
                  children: "Cadastrar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  "aria-label": "Close",
                  className: "close",
                  type: "button",
                  onClick: () => setModalOpen(!modalOpen)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 11
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "modal-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                      children: "Nome: "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                      type: "text",
                      className: "form",
                      placeholder: "Digite seu nome"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                      children: "Sobrenome: "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                      type: "text",
                      className: "form",
                      placeholder: "Digite seu sobrenome"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 13
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 13
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                      children: "Data de Anivers\xE1rio: "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                      type: "date",
                      className: "form",
                      placeholder: "Digite sua data de nascimento"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                      children: "Telefone: "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                      type: "tel",
                      className: "form",
                      placeholder: "Ex: 00 12345678",
                      pattern: "[0-9]{2}-[0-9]{8}"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 13
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 13
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                      children: "Email: "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                      type: "email",
                      className: "form",
                      placeholder: "Digite um email v\xE1lido"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                      children: "Senha: "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                      type: "password",
                      className: "form",
                      placeholder: "Crie uma senha"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 13
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 13
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                      children: "Escolha um estado:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 13
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
                      className: "form",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "ac",
                        children: "AC"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "al",
                        children: "AL"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "ap",
                        children: "AP"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "am",
                        children: "AM"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "ba",
                        children: "BA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "ce",
                        children: "CE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "df",
                        children: "DF"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "es",
                        children: "ES"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "go",
                        children: "GO"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "MA",
                        children: "MA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "MT",
                        children: "MT"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "ms",
                        children: "MS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "mg",
                        children: "MG"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "pa",
                        children: "PA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "pb",
                        children: "PB"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "pr",
                        children: "PR"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "pe",
                        children: "PE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "pi",
                        children: "PI"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "RJ",
                        children: "RJ"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "RN",
                        children: "RN"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "rs",
                        children: "RS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "ro",
                        children: "RO"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "rr",
                        children: "RR"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "sc",
                        children: "SC"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "sp",
                        children: "SP"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "se",
                        children: "SE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 15
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                        value: "to",
                        children: "TO"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 15
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 13
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 13
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "modal-footer",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                      className: "button",
                      color: "secondary",
                      type: "button",
                      onClick: () => setModalOpen(!modalOpen),
                      children: "Fechar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                      className: "button",
                      color: "primary",
                      type: "submit",
                      children: "Enviar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "menu-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "max-width",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "top-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "texto1",
            children: "Temos a solu\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "texto2",
            children: "que voc\xEA est\xE1 buscando"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "texto3",
            children: "para o seu visual!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "#",
            children: "Entrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: "services",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          className: "title",
          children: "Servi\xE7os"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "serv-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                className: "fas fa-code"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "text",
                children: "Cortes de Cabelo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 24
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                children: ["Quais s\xE3o os cortes de cabelo masculino mais estilosos, modernos e atemporais? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 104
                }, this), "Se voc\xEA est\xE1 buscando inspira\xE7\xE3o para a sua pr\xF3xima visita ao barbeiro? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 97
                }, this), "Aqui encontrar\xE1 cortes vers\xE1teis, sem sugest\xF5es exc\xEAntricas como detalhes ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 99
                }, this), "coloridos ou fios assim\xE9tricos, porque esse tipo de penteado \xE9 muito passageiro. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 74
                }, this), "Ou seja, vai de \u201Ctend\xEAncia\u201D para \u201Ccafona\u201D em quest\xE3o de meses (\xE0s vezes, semanas).", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 107
                }, this), "Com os cortes da nossa p\xE1gina, voc\xEA vai achar sempre o melhor corte para o seu estilo. Pode confiar!"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 24
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                className: "fas fa-laptop-code"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "text",
                children: "Dicas de Roupas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 24
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                children: "Aprender como se vestir bem \xE9, sem d\xFAvida, um grande desafio para qualquer homem. O problema \xE9 que este pode ser um conceito muito relativo e, com tantas refer\xEAncias diferentes, ele vai variar de acordo com cada personalidade, tipo f\xEDsico e outros fatores. Afinal, ainda n\xE3o inventaram um estilo que agrade e sirva para todos, n\xE3o \xE9?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 24
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                className: "fas fa-mobile-alt"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "text",
                children: "Outras Dicas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 24
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                children: "Encontre algumas outras dicas para completar seu visual!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 24
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        children: ["Create By - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          href: "",
          children: "Erison Felipe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      strategy: "beforeInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "cunstom.js",
      strategy: "afterInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUEsOEJBREYsZUFFRTtBQUFRLDZCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRixlQUdFO0FBQVEsNkJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhGLGVBSUU7QUFBUSw2QkFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSkYsZUFLRTtBQUFRLDZCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFMRixlQU1FO0FBQVEsNkJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQU5GLGVBT0U7QUFBUSw2QkFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBUEYsZUFRRTtBQUFRLDZCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFSRixlQVNFO0FBQVEsNkJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVRGLGVBVUU7QUFBUSw2QkFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBVkYsZUFXRTtBQUFRLDZCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFYRixlQVlFO0FBQVEsNkJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVpGLGVBYUU7QUFBUSw2QkFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBYkYsZUFjRTtBQUFRLDZCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFkRixlQWVFO0FBQVEsNkJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWZGLGVBZ0JFO0FBQVEsNkJBQUss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Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0aWZvbGlvLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGlmb2xpby9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3BvcnRpZm9saW8vZXh0ZXJuYWwgXCJuZXh0L3NjcmlwdFwiIiwid2VicGFjazovL3BvcnRpZm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRpZm9saW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wb3J0aWZvbGlvL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuNC9jc3MvYWxsLm1pbi5jc3NcIiAvPiAgICAgICAgXHJcbiAgICAgICAgPHRpdGxlPlBvcnRpZm9saW88L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaG9tZS50aG1cIj5UcmVuZHkgTWFuPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaG9tZS5odG1sXCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibWVudS1idG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9PkNhZGFzdHJlLXNlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtZW51LWJ0blwiPkNvbnRhdG9zPC9hPjwvbGk+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgIDxNb2RhbCB0b2dnbGU9eygpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKX0gaXNPcGVuPXttb2RhbE9wZW59IGNsYXNzTmFtZT1cIm1heC13aWR0aFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIiBtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgQ2FkYXN0cmFyXHJcbiAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9XHJcbiAgICAgICAgICA+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCA+Tm9tZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHNldSBub21lXCIvPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGFiZWwgPlNvYnJlbm9tZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHNldSBzb2JyZW5vbWVcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgPkRhdGEgZGUgQW5pdmVyc8OhcmlvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzc05hbWU9XCJmb3JtXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc3VhIGRhdGEgZGUgbmFzY2ltZW50b1wiLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxhYmVsID5UZWxlZm9uZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzc05hbWU9XCJmb3JtXCIgcGxhY2Vob2xkZXI9XCJFeDogMDAgMTIzNDU2NzhcIiBwYXR0ZXJuPVwiWzAtOV17Mn0tWzAtOV17OH1cIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+RW1haWw6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgdW0gZW1haWwgdsOhbGlkb1wiLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxhYmVsPlNlbmhhOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybVwiIHBsYWNlaG9sZGVyPVwiQ3JpZSB1bWEgc2VuaGFcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+RXNjb2xoYSB1bSBlc3RhZG86PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFjXCI+QUM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxcIj5BTDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhcFwiPkFQPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFtXCI+QU08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFcIj5CQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZVwiPkNFPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRmXCI+REY8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZXNcIj5FUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnb1wiPkdPPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1BXCI+TUE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVRcIj5NVDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtc1wiPk1TPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1nXCI+TUc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGFcIj5QQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwYlwiPlBCPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByXCI+UFI8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVcIj5QRTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaVwiPlBJPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJKXCI+Uko8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk5cIj5STjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyc1wiPlJTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJvXCI+Uk88L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicnJcIj5SUjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzY1wiPlNDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNwXCI+U1A8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VcIj5TRTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0b1wiPlRPPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnV0dG9uXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfT5cclxuICAgICAgICAgICAgRmVjaGFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC91bD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRvMVwiPlRlbW9zIGEgc29sdcOnw6NvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRvMlwiPnF1ZSB2b2PDqiBlc3TDoSBidXNjYW5kbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0bzNcIj5wYXJhIG8gc2V1IHZpc3VhbCE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RW50cmFyPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VydmnDp29zPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2RlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3J0ZXMgZGUgQ2FiZWxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1YWlzIHPDo28gb3MgY29ydGVzIGRlIGNhYmVsbyBtYXNjdWxpbm8gbWFpcyBlc3RpbG9zb3MsIG1vZGVybm9zIGUgYXRlbXBvcmFpcz8gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2Ugdm9jw6ogZXN0w6EgYnVzY2FuZG8gaW5zcGlyYcOnw6NvIHBhcmEgYSBzdWEgcHLDs3hpbWEgdmlzaXRhIGFvIGJhcmJlaXJvPyA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcXVpIGVuY29udHJhcsOhIGNvcnRlcyB2ZXJzw6F0ZWlzLCBzZW0gc3VnZXN0w7VlcyBleGPDqm50cmljYXMgY29tbyBkZXRhbGhlcyA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcmlkb3Mgb3UgZmlvcyBhc3NpbcOpdHJpY29zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3JxdWUgZXNzZSB0aXBvIGRlIHBlbnRlYWRvIMOpIG11aXRvIHBhc3NhZ2Vpcm8uIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE91IHNlamEsIHZhaSBkZSDigJx0ZW5kw6puY2lh4oCdIHBhcmEg4oCcY2Fmb25h4oCdIGVtIHF1ZXN0w6NvIGRlIG1lc2VzICjDoHMgdmV6ZXMsIHNlbWFuYXMpLjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbSBvcyBjb3J0ZXMgZGEgbm9zc2EgcMOhZ2luYSwgdm9jw6ogdmFpIGFjaGFyIHNlbXByZSBvIG1lbGhvciBjb3J0ZSBwYXJhIG8gc2V1IGVzdGlsby4gUG9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWFyIVxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxhcHRvcC1jb2RlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGljYXMgZGUgUm91cGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcmVuZGVyIGNvbW8gc2UgdmVzdGlyIGJlbSDDqSwgc2VtIGTDunZpZGEsIHVtIGdyYW5kZSBkZXNhZmlvIHBhcmEgcXVhbHF1ZXIgaG9tZW0uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPIHByb2JsZW1hIMOpIHF1ZSBlc3RlIHBvZGUgc2VyIHVtIGNvbmNlaXRvIG11aXRvIHJlbGF0aXZvIGUsIGNvbSB0YW50YXMgcmVmZXLDqm5jaWFzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZlcmVudGVzLCBlbGUgdmFpIHZhcmlhciBkZSBhY29yZG8gY29tIGNhZGEgcGVyc29uYWxpZGFkZSwgdGlwbyBmw61zaWNvIGUgb3V0cm9zIGZhdG9yZXMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZmluYWwsIGFpbmRhIG7Do28gaW52ZW50YXJhbSB1bSBlc3RpbG8gcXVlIGFncmFkZSBlIHNpcnZhIHBhcmEgdG9kb3MsIG7Do28gw6k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb2JpbGUtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3V0cmFzIERpY2FzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuY29udHJlIGFsZ3VtYXMgb3V0cmFzIGRpY2FzIHBhcmEgY29tcGxldGFyIHNldSB2aXN1YWwhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgPHNwYW4+Q3JlYXRlIEJ5IC0gPGEgaHJlZj1cIlwiPkVyaXNvbiBGZWxpcGU8L2E+PC9zcGFuPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNi4wL2pxdWVyeS5taW4uanNcIiBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIvPiAgIFxyXG4gICAgPFNjcmlwdCBzcmM9XCJjdW5zdG9tLmpzXCIgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCIvPiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJuYW1lcyI6WyJIZWFkIiwiU2NyaXB0IiwiUmVhY3QiLCJCdXR0b24iLCJNb2RhbCIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwiSG9tZSIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsInVzZVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==