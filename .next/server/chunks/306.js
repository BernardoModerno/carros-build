"use strict";
exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ Wrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/navsup/index.jsx



function NavSup() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
        bg: "dark",
        expand: "lg",
        variant: "dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
                    as: next_link["default"],
                    href: "/",
                    className: "nav-link text-light",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "text-white-50 px-2 text-decoration-none",
                        children: "Tela Inicial"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav, {
                        className: "me-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                            className: "nav-link",
                            as: next_link["default"],
                            href: "/cars",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                children: "Carros"
                            })
                        })
                    })
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/components/wrapper/index.jsx


function Wrapper(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavSup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "col-md-12 ms-sm-auto col-lg-12 px-md-2",
                        children: props.children
                    })
                })
            })
        ]
    }));
}


/***/ }),

/***/ 8113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ setupAPIClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function setupAPIClient(ctx = undefined) {
    const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: 'http://api-test.bhut.com.br:3000/api/cars'
    });
    return api;
}


/***/ })

};
;