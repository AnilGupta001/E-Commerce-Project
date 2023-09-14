(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 6441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7170)), "C:\\Users\\Anil Gupta\\Desktop\\React New\\my-app\\src\\app\\page.js"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2070)), "C:\\Users\\Anil Gupta\\Desktop\\React New\\my-app\\src\\app\\layout.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["C:\\Users\\Anil Gupta\\Desktop\\React New\\my-app\\src\\app\\page.js"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 2637:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23))

/***/ }),

/***/ 4442:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1638))

/***/ }),

/***/ 140:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9421))

/***/ }),

/***/ 1638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Header() {
    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " overflow-hidden h-5 text-center bg-black text-white animate-pulse",
                children: "World Book of Star Records - India is an organization that catalogs and verifies number of world reco"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex items-center justify-between pl-5 pr-5 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            width: 100,
                            className: "rounded-full border-2 p-2 bg-orange-400",
                            src: "https://scontent.fbho1-3.fna.fbcdn.net/v/t1.6435-9/84569225_112930370268131_7015051100524904448_n.png?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=cEIKf3vXjSAAX_4WbpN&_nc_ht=scontent.fbho1-3.fna&oh=00_AfD_3jlZzdJdBfsbA3B7OLbAv-TAXkCiTiQozrVL4-I5MQ&oe=6528EE1C",
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-300 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "how bg-orange-400 p-4 rounded-xl font-bold hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase text-2xl mt-4 md:text-xl sm:text-x",
                                children: "Call For the Nomination \uD83D\uDC47"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "8602189351",
                                className: "flex",
                                type: "call",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        width: 40,
                                        className: " animate-bounce",
                                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXA5qz9Bk9CZTHo8OJuD9c3yVo2d1NDXPrL8-gEaLWHVX-ogXULwCKWTC4ibbmkSFMoA&usqp=CAU",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        class: "relative flex h-4 w-4 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "relative inline-flex rounded-full h-3 w-3 bg-green-500"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: " text-3xl pt-2 pl-3 font-bold  md:text-xl sm:text-xl",
                                        children: "+91 8602189351"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "8602189351",
                                className: "flex",
                                type: "call",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        width: 40,
                                        className: " animate-bounce",
                                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAaVBMVEX///8AAAADBwhHR0daWlv29vZPT091dXX8/PwAAAO6urr5+fmUlJQAAwXg4OCKiora2tolJSXs7OycnZzLy8utra1hYmLAwMCztLQ7PDwfHx+Dg4M2NzdCQkNUVFSkpqYVFxdqa2sqLCsX6GtVAAAFE0lEQVR4nO1a2bKiMBBNokhERUDEBfWq//+Rk6UbcCSQsNypqcp5U5A+pk8v6UCIh4eHh4eHh4eHh4cHgnPjFUKSQ7GYF8Uh6SC32TI6P9h2Y1yBpbg8PygtlLUWlL9hX3Eo2xchpjvFcG4nMLam7VrYyos0Xc6LVFnZtuqgUNfyDqVOgVxZWbaJMVipa5euYBkFJb7koqysAiMDRq+RuNeYM8YwEJkoumojXQyEFA8zmNc4QLh3M5DB0nZ9PDalijYLBowusqmtCw/EDQMdDCiIIZlYCpwkIIEeJdLLU9/HoknNExLBf3veaDeDMmd0cj0KF2yBAMvLHgYhie+g12I6P/AlXatn3mMS9jIgm7C+fQrrQoML9afWNBSp0IKBLJJ6yW5TpGhO8hs4tpSprp+B7KGOQIGeJ6BwxocdVVq0WgNRqZ9Ie5x1Xi/oE3xqxUD8Llvp/EVf45JT9lL2d3SVQW2yWwOxWMELQmIxRo+gQfHcjHPuwEBhC6vApB7dI1MazFECjY7EgQE5oRh+BjEg5AclcGp878KAJJic9ob+uhPBHhbx/lFknBiQ7AGpZJm5LYO4N1gCgcenkNwYcI758e2mR5EH0yoPfu7S3BiQ2pcuxVJYjFitoU84MyCna61nOzlwUpXC6+nrqjsDEt9gPUtbPYp2TPvuEn/Lx5mBzI+oqcIiP8r7CwihVv0OWAPxjD0uqk2xzNFt+9bLQxg0i2W/HqO6FLYG8AAGCnlDj51ADT5zQwIZyIBj87amry49bl5A4GJstocxkI4IMDldzHqML5iGAm4aFw31ggQu8LtNj7IBy98WrhrDoNIja2/ezqzW4DwMxL6HYbFsubwHL7Hu/daoNRA3Yc8jkk3DjHA5pK0dXfRse0cykHrU+XHx+U+TBfSDYd++eyyDWo9pc9iSp5bpYgoG5IRJ74CZgR/wq+9SOAMDXjdv6TaPszjfpvD5brPnn4KBSP1Mm6Q0facUJ7GyaPwCAy6nQTCMkcqjzQ82O/7xayCqv477yrIyrrOxRQcxmsHpDWF3q/6+XIgbSqNXi6MYNBpAsQ3Lw7eeQrP3K89CoCDjsVMM47JyUEA+0i1wlkeHwyHKVTP2g7PCIpgnK8taC20zo7dEM2pcFUGKnlANspHEcAZ1tyg80HqL8ETdIU7PgMSVB47tc2fxLZRvERPmLdZgBhAD6AEDKk+8jTExlAF4QNU+s8543csZevWhDOIHxtq5N/Gekeuj3RND9kwkQg/cbY4/Euxi3lHb6eYQBnvUl/SAxRQhCJvDm9H7xnrKK0of7z994bp44qJ9e8JxgiH64ysswMplhhHjMPD6tXdzZLCpYqB0mytmJWaPv/f8jnOk1cDxLq9iYq1mmQMYqE3XuTqYGjJYzVaNEB7CgARllea7q50JQV1IGg+wZ4AHU3qGNey044x7rIaM7SbbTTdeRs2V7w1POM2VP9K7TRZqhfxd7QmICTsGCYazbvvGMCAn3E2sElsGnByf4AFDcXFDlZ2eR0sG1TSQ7qc5beNVYSmtTrr0+TyzHN3ZIccG85L0MwAPMLqc5KwPEC8rT/Qw2KVVYd1Md/Is01u10Uh3nQzYGsI3h19OxYDgiY+y0M6AwzRY3tA7CBmCIKwNtJ8ob6sb2KOY4S2c4lE93zBqSXQQai/M9SoSPN6g8n/9TtYvvpe2NLab//jdPK2F33k/0fyK5BwvQnl4eHh4eHh4eHh4/K/4A7hmROdUIN8lAAAAAElFTkSuQmCC",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        class: "relative flex h-4 w-4 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "relative inline-flex rounded-full h-3 w-3 bg-green-500"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: " text-3xl pt-2 pl-3 font-bold  md:text-xl sm:text-xl",
                                        children: "worldbookofstarrecord@gmail.com"
                                    })
                                ]
                            })
                        ]
                    }),
                    "  ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "MOBILE-MENU flex lg:hidden",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "HAMBURGER-ICON space-y-2",
                                        onClick: ()=>setIsNavOpen((prev)=>!prev),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block h-0.5 w-8 animate-pulse bg-gray-600"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block h-0.5 w-8 animate-pulse bg-gray-600"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block h-0.5 w-8 animate-pulse bg-gray-600"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: isNavOpen ? "showMenuNav" : "hideMenuNav",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute top-0 right-0 px-8 py-8",
                                                onClick: ()=>setIsNavOpen(false),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    className: "h-8 w-8 text-gray-600",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                            x1: "18",
                                                            y1: "6",
                                                            x2: "6",
                                                            y2: "18"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                            x1: "6",
                                                            y1: "6",
                                                            x2: "18",
                                                            y2: "18"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "flex flex-col items-center justify-between min-h-[250px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#about",
                                                            children: "Social Media & Projects"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#about",
                                                            children: "Location"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "/about",
                                                            children: "Enquiry"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "/portfolio",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "/contact",
                                                            children: "Contect"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "DESKTOP-MENU hidden space-x-8 lg:flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600",
                                            href: "/about",
                                            children: "Social Media & Projects"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600",
                                            href: "https://www.google.com/maps/dir/?api=1&destination=22.747372244926%2C75.895856022835&fbclid=IwAR0ouITW_PY6lVtnv9jhXpppsZgIho027dfbg5Kqb0JaK5PpP6N0szQFxxE",
                                            children: "Our Address"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600",
                                            href: "/about",
                                            children: "Enquiry"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600",
                                            href: "/portfolio",
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600",
                                            href: "/contact",
                                            children: "Contact"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        children: `
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/Header.js
var Header = __webpack_require__(1638);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/app/ImageSlider.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

const ImageSlider = ({ images })=>{
    const [currentIndex, setCurrentIndex] = (0,react_.useState)(0);
    (0,react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % images.length);
        }, 2000); // Adjust the interval time (in milliseconds) as needed
        return ()=>clearInterval(interval);
    }, [
        images
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "image-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "image-list",
                children: images.map((imageUrl, index)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: imageUrl,
                        alt: ""
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "image-list1",
                children: images.map((imageUrl, index)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: imageUrl,
                        alt: ""
                    }, index + 1))
            })
        ]
    });
};
/* harmony default export */ const app_ImageSlider = (ImageSlider);

;// CONCATENATED MODULE: ./src/app/BottomPart.js


function BottomPart() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "how text-center bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase",
                children: "More about US"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "",
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: " text-center bg-gray-900 text-white p-5 border-spacing-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: " ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: " ",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                class: " gap-4 grid grid-cols-3  flex-wrap align-middle m-auto content-center justify-center ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#about",
                                            class: "hover:text-blue-500",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#career",
                                            class: "hover:text-blue-500",
                                            children: "Career"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#Product",
                                            class: "hover:text-blue-500",
                                            children: "Products"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500",
                                            children: "Parent Company"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500",
                                            children: "Policy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500",
                                            children: "Terms and Conditions"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500",
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500",
                                            children: "Help & Support"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500",
                                            children: "Useful Links"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500",
                                            children: "Download Our Mobile App"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    class: "text-center md:text-left animate-ping",
                                    children: "Follow us On Our Soocial Media"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "text-2xl flex space-x-4 mt-2 justify-around",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500 transform hover:scale-110 transition duration-300",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                class: "fab fa-twitter",
                                                children: "Twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500 transform hover:scale-110 transition duration-300",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                class: "fab fa-facebook",
                                                children: "Facebook"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500 transform hover:scale-110 transition duration-300",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                class: "fab fa-youtube",
                                                children: "YouTube"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500 transform hover:scale-110 transition duration-300",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                class: "fab fa-instagram",
                                                children: "intagram"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500 transform hover:scale-110 transition duration-300",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                class: "fab fa-facebook-messenger",
                                                children: "Messanger"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500 transform hover:scale-110 transition duration-300",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                class: "fab fa-whatsapp",
                                                children: "WhatsApp"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            class: "hover:text-blue-500 transform hover:scale-110 transition duration-300",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                class: "fab fa-linkedin",
                                                children: "Linked-In"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Home() {
    const arr = [
        "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/370011363_779009090896533_827709121359574602_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=075rhFEng1wAX_hsmW5&_nc_ht=scontent.fbho1-1.fna&oh=00_AfBuRxft5s_D_fHwSw8s_3btTczRerkIcC0fstBEHcjpNw&oe=6505D3D8",
        "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/369874704_779009010896541_9122823887049554687_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=rZWdEUrShJcAX_wETDn&_nc_ht=scontent.fbho1-2.fna&oh=00_AfDISrGl49hw7osYk76ISTfB99xsqltxxhtXK-da5dVG2A&oe=6506B541",
        "https://scontent.fbho1-1.fna.fbcdn.net/v/t45.1600-4/374423247_6444542923818_3326103238248657892_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=102&ccb=1-7&_nc_sid=67cdda&_nc_ohc=BECa5REOWGsAX-rg6_m&_nc_ht=scontent.fbho1-1.fna&oh=00_AfAievpaz0VPwKLRezciD-VFIgQfeDJxEXMWqVMn-Ro8uA&oe=650687C0",
        "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/378283663_792044016259707_589417676546419127_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1o_rexM4chwAX8Ky1NS&_nc_ht=scontent.fbho1-2.fna&oh=00_AfD9g9j4vIw7swjwchiewRuKCLNQTOM-6F2QCPsoVzHI-A&oe=65068580",
        "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/370011363_779009090896533_827709121359574602_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=075rhFEng1wAX_hsmW5&_nc_ht=scontent.fbho1-1.fna&oh=00_AfBuRxft5s_D_fHwSw8s_3btTczRerkIcC0fstBEHcjpNw&oe=6505D3D8",
        "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/369874704_779009010896541_9122823887049554687_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=rZWdEUrShJcAX_wETDn&_nc_ht=scontent.fbho1-2.fna&oh=00_AfDISrGl49hw7osYk76ISTfB99xsqltxxhtXK-da5dVG2A&oe=6506B541",
        "https://scontent.fbho1-1.fna.fbcdn.net/v/t45.1600-4/374423247_6444542923818_3326103238248657892_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=102&ccb=1-7&_nc_sid=67cdda&_nc_ohc=BECa5REOWGsAX-rg6_m&_nc_ht=scontent.fbho1-1.fna&oh=00_AfAievpaz0VPwKLRezciD-VFIgQfeDJxEXMWqVMn-Ro8uA&oe=650687C0",
        "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/378283663_792044016259707_589417676546419127_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1o_rexM4chwAX8Ky1NS&_nc_ht=scontent.fbho1-2.fna&oh=00_AfD9g9j4vIw7swjwchiewRuKCLNQTOM-6F2QCPsoVzHI-A&oe=65068580"
    ];
    const images = [
        "https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/358552977_813932906834537_4571279197432570435_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=eV3L4-Qv0oUAX9_H0xt&_nc_ht=scontent.fbho1-4.fna&oh=00_AfAdBN0SZxV8RA6s-OkvA2z2uSbkgXHg_HsVL8o-RI9mjQ&oe=65075CD0",
        "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/358645503_813551836872644_6751871621137109162_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=crDp5RXnqqEAX9-GKdQ&_nc_ht=scontent.fbho1-1.fna&oh=00_AfDd95pBIsgLct316sXrDTcFoIQF6-r_ODkJauCWJPwXtw&oe=65064FBD",
        ,
        "https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/358146313_811307533763741_5103644562873139733_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=exNQl26g_fwAX9BxraC&_nc_ht=scontent.fbho1-4.fna&oh=00_AfDiEbaKDLaZTdQ-Q8JMc6Q3hgiqgwisitQoFMMjwaf8iw&oe=65077720",
        "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/358599293_810723767155451_2681347762955934183_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=DX4ADCOkwqAAX_zm-em&_nc_ht=scontent.fbho1-2.fna&oh=00_AfBTNdWKR9cS5QTyem3zBnasmcNk6m6D2E485r08xKQVKg&oe=65062903",
        "https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/357580549_809012370659924_4838056660164185068_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=FRcN3yTNMRQAX91MRaS&_nc_ht=scontent.fbho1-4.fna&oh=00_AfCvaVp2scI0LoZPSUXIUWgJ4ukR3WHnvCCRDJsv_7GVfg&oe=65061045",
        "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/357375806_807860534108441_6888423668152432171_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=GSx-RgnulWIAX85x1m_&_nc_ht=scontent.fbho1-1.fna&oh=00_AfC86TZzABv0wlYee2FY9zEAUK4HS8kJJ-ZBMxV00hSdHQ&oe=650623FC"
    ];
    const [currentIndex, setCurrentIndex] = (0,react_.useState)(0);
    (0,react_.useEffect)(()=>{
        setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % arr.length - 1);
        }, 1000);
    // Change interval duration as needed
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full h-200",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "mb-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Header["default"], {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: 'bg-[url("https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/377880272_204259189323669_3425504590854691836_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=pNSMapUERRYAX-4IQNG&_nc_ht=scontent.fbho1-4.fna&oh=00_AfCaHFnTHmSBDjrfH-eMCVYX_irVFITTcUFDxoir_Ni5_w&oe=65063ED5")]',
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center p-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            width: 100,
                            className: "rounded-full",
                            src: "https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/250924339_424464512448047_8930160149564044045_n.png?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=YOQSBqJ4b78AX-zGJZP&_nc_ht=scontent.fbho1-3.fna&oh=00_AfCIU8LfLmLXNTagwJzkVmviqWqHvlmNkLaqxOZCjqJ0rA&oe=6505C539",
                            alt: ""
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "bg-gradient-to-r from-purple-600 to-pink-500 text-white pt-2 px-8 py-4 mt-8 font-extrabold text-2xl md:text-xl sm:text-xl rounded-full shadow-2xl flex items-center justify-center",
                            children: [
                                "Welcome to  ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-yellow-400 ",
                                    children: "World Book of Star Records"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-2 bg-white "
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center justify-center w-auto h-300px text-center m-auto bg-black",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg shadow-lg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-3xl font-bold",
                            children: "⭐ Our ONGOING Programs ⭐"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(app_ImageSlider, {
                            images: arr
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg shadow-lg",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "animate-pulse pl-3 pr-3 mt-1 font-bold text-black bg-slate-50 sm:h-20 rounded-3xl text-2xl flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-red-500 mr-2",
                                    children: "\uD83D\uDD34"
                                }),
                                " Our Completed Events and Awards ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-red-500 ml-2",
                                    children: "\uD83D\uDD34"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-black p-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(app_ImageSlider, {
                            images: images
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "item-center m-auto clear-right pt-5 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "p-2 font-bold text-2xl flex flex-col items-center justify-center w-auto h-300px text-center m-auto",
                        children: "Owr Motive"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: " justify-stretch start-0 overflow-auto text-2xl text-justify",
                        children: 'The "World Book of Star Records - India" sounds like an organization dedicated to cataloging and verifying world records, particularly those achieved in India. Similar to the Guinness World Records, which is a well-known international organization that recognizes and records various achievements and feats worldwide, it seems that the "World Book of Star Records - India" focuses on Indian achievements and records. These types of organizations play an important role in recognizing and celebrating exceptional achievements and talents, whether they are related to sports, entertainment, science, or any other field. They often maintain a record book or database of these accomplishments and may provide certificates or awards to record holders.'
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("about", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(BottomPart, {})
            })
        ]
    });
}


/***/ }),

/***/ 2070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(7155);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/Header.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Anil Gupta\Desktop\React New\my-app\src\app\Header.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = ((/* unused pure expression or super */ null && (__default__)));
;// CONCATENATED MODULE: ./src/app/layout.js




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: children
        })
    });
}


/***/ }),

/***/ 7170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Anil Gupta\Desktop\React New\my-app\src\app\page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,309], () => (__webpack_exec__(6441)));
module.exports = __webpack_exports__;

})();