(this["webpackJsonpartseyio-tester"]=this["webpackJsonpartseyio-tester"]||[]).push([[0],{32:function(e,n,t){"use strict";t.r(n);var o,r=t(13),a=t(3),i=t(1),s=t.n(i),l=t(17),c=t.n(l),d=t(4),m=t.p+"static/media/logo.ba7ca334.png",y=t(10),u=t.n(y),p=t(19),g=t(18),h=t(0);const b=a.d.button(o||(o=Object(d.a)(["\n    margin: 0;\n    padding: 2px;\n    border: none;\n    background: none;\n    color: ",";\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 1.2rem;\n\n    svg {\n        flex: 1;\n    }\n\n    :active:enabled {\n        color: black!important;\n        transform: scale(0.85);\n    }\n\n    :hover:enabled {\n        cursor: pointer;\n        color: ",";\n    }\n"])),(e=>e.theme.textColorFaded),(e=>e.theme.textColorFaded));var j=function(e){return Object(h.jsx)(b,{className:e.active?"active":"",disabled:e.disabled,title:e.tooltip,onClick:e.onClick,children:null!=e.icon&&Object(h.jsx)(g.a,{icon:e.icon})})};const f={KeyE_KeyO:"b",KeyE_KeyY:"c",KeyA_KeyR_KeyT:"d",KeyA_KeyR:"f",KeyR_KeyT:"g",KeyE_KeyI:"h",KeyS_KeyT:"j",KeyO_KeyY:"k",KeyE_KeyI_KeyY:"l",KeyI_KeyO_KeyY:"m",KeyI_KeyO:"n",KeyE_KeyI_KeyO:"p",KeyA_KeyS_KeyT:"q",KeyI_KeyY:"u",KeyR_KeyS:"v",KeyA_KeyS:"w",KeyR_KeyS_KeyT:"x",KeyA_KeyR_KeyS_KeyT:"z",KeyE_KeyI_KeyO_KeyY:"Space",KeyE_KeyR:"Backspace"};var x;const O=a.d.div(x||(x=Object(d.a)(["{}\n    display:flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    align-content: stretch;\n    align-items: stretch;\n    margin: 100px 0;\n\n    #logo {\n        width: 150px;\n    }\n\n    #word-list {\n        position: relative;\n        font-size: 1.5rem;\n        display: flex;\n        flex-wrap: wrap;\n        outline: 0;\n        -webkit-user-select: none; /* Safari */        \n        -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* IE10+/Edge */\n        user-select: none; /* Standard */\n    }\n\n    #monitor {\n        display: flex;\n        gap: 35px;\n    }\n\n    #keycode-monitor, #wpm-monitor {\n        text-align: left;\n        font-weight: bold;\n        margin: 10px 0;\n        color: ",";\n    }\n\n    #caret {\n        display: block;\n        width: 0px;\n        border: 1px solid ",";\n        animation: blinker 2s linear infinite;\n        margin-top: 5px;\n    }\n\n    @keyframes blinker {\n        50% {\n            opacity: 0;\n        }\n    }\n\n    #focus-message {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        text-align: center;\n        background: rgba(255, 255, 255, 0.75);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        p { font-weight: bold; }\n    }\n\n    .word {\n        display: flex;\n        margin-right: 10px;\n        color: ",";\n    }\n\n    .correct { color: ","; }\n    .wrong { color: ","; }\n"])),(e=>e.theme.textColorFaded),(e=>e.theme.cursorColor),(e=>e.theme.textColorFaded),(e=>e.theme.textColor),(e=>e.theme.colorRed));var K=e=>{const n=Object(i.useRef)(null),[t,o]=Object(i.useState)(!1),[r,a]=Object(i.useState)([]),[s,l]=Object(i.useState)(0),[c,d]=Object(i.useState)(u()(25)),[m,y]=Object(i.useState)([]),[g,b]=Object(i.useState)(0),[x,K]=Object(i.useState)(null),v=(k=e.keymap,e=>{let n=[];for(let o=0;o<e.length;o++){let t=Object.keys(k.keys).find((n=>k.keys[n].fromKey===e[o].key));void 0!==t&&n.push(k.keys[t])}let t=n.map((e=>e.toCode)).sort().reduce(((e,n)=>e+(""!==e?"_":"")+n),"");return 1===n.length?n[0].toKey:f.hasOwnProperty(t)?f[t]:void 0});var k;Object(i.useEffect)((()=>C()),[]),Object(i.useEffect)((()=>{const n=setInterval((()=>{if(0!==r.length){const e=v(r);w(e),S(e),a([])}}),e.keyTimeout);return()=>clearInterval(n)}),[r,m,s,v,c]);const C=()=>{var e;y([]),a([]),l(0),b(0),K(null),d(u()(25)),null===(e=n.current)||void 0===e||e.focus()},S=e=>{void 0!==e&&(0===g&&b((new Date).getTime()),K(Math.round(m.length/5/(((new Date).getTime()-g)/6e4))))},w=e=>{const n=c.join(" ");"Backspace"===e&&m.length>0?(y((e=>[...e.slice(0,e.length-1)])),l(s-1)):void 0!==e&&"Backspace"!==e&&(" "===n.split("")[s]&&"Space"===e||" "!==n.split("")[s])&&(y((n=>[...n,e])),l(s+1))};return Object(h.jsxs)(O,{children:[Object(h.jsxs)("div",{id:"word-list",tabIndex:0,onFocus:()=>o(!0),onBlur:()=>o(!1),onKeyUp:e=>{a((n=>[...n,e])),e.preventDefault()},ref:n,children:[!t&&Object(h.jsx)("div",{id:"focus-message",children:Object(h.jsx)("p",{children:"Focus Please"})}),(()=>{let e=0,n=Object(h.jsx)("div",{id:"caret"},"caret");return c.map(((t,o)=>{let r=Object(h.jsxs)("div",{className:"word",children:[t.split("").map(((t,o)=>{let r=e===s?n:void 0,a=m.length-1>=e?Object(h.jsx)("div",{className:m[e]===t?"letter correct":"letter wrong",children:t},o):Object(h.jsx)("div",{className:"letter",children:t},o);return e++,void 0!==r?[r,a]:[a]})),e===s&&n,Object(h.jsx)("div",{className:"space"})]},o);return e++,r}))})()]}),Object(h.jsxs)("div",{id:"monitor",children:[Object(h.jsxs)("small",{id:"keycode-monitor",children:["Last Registered: ",0!==m.length?m[m.length-1]:"NONE"]}),Object(h.jsxs)("small",{id:"wpm-monitor",children:["WPM: ",null!==x?x:"NONE"]})]}),Object(h.jsx)(j,{icon:p.a,onClick:C})]})};let v,k;!function(e){e.A="KeyA",e.R="KeyR",e.T="KeyT",e.S="KeyS",e.E="KeyE",e.Y="KeyY",e.I="KeyI",e.O="KeyO"}(v||(v={})),function(e){e.A="a",e.R="r",e.T="t",e.S="s",e.E="e",e.Y="y",e.I="i",e.O="o"}(k||(k={}));const C=[{name:"Left Hand",keys:{[v.A]:{fromKey:"t",toCode:v.A,toKey:k.A},[v.R]:{fromKey:"r",toCode:v.R,toKey:k.R},[v.T]:{fromKey:"e",toCode:v.T,toKey:k.T},[v.S]:{fromKey:"w",toCode:v.S,toKey:k.S},[v.E]:{fromKey:"g",toCode:v.E,toKey:k.E},[v.Y]:{fromKey:"f",toCode:v.Y,toKey:k.Y},[v.I]:{fromKey:"d",toCode:v.I,toKey:k.I},[v.O]:{fromKey:"s",toCode:v.O,toKey:k.O}}},{name:"Right Hand",keys:{[v.A]:{fromKey:"y",toCode:v.A,toKey:k.A},[v.R]:{fromKey:"u",toCode:v.R,toKey:k.R},[v.T]:{fromKey:"i",toCode:v.T,toKey:k.T},[v.S]:{fromKey:"o",toCode:v.S,toKey:k.S},[v.E]:{fromKey:"h",toCode:v.E,toKey:k.E},[v.Y]:{fromKey:"j",toCode:v.Y,toKey:k.Y},[v.I]:{fromKey:"k",toCode:v.I,toKey:k.I},[v.O]:{fromKey:"l",toCode:v.O,toKey:k.O}}}];var S;const w=a.d.div(S||(S=Object(d.a)(["{}\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    select {\n        display: block;\n        margin-bottom: 20px;\n        border: 1px solid ",";\n        border-radius: 5px;\n        padding: 10px;\n        background: white;\n        color: ",";\n        font-size: 1rem;\n    }\n\n    #artsey-timeout {\n        margin-top: 15px;        \n        margin-bottom: 15px;\n        display: flex;\n        align-items: center;\n\n        input {\n            max-width: 75px;\n            margin-left: 15px;\n            margin-right: 5px;\n            border: 1px solid ",";\n            border-radius: 5px;\n            padding: 10px;\n            background: white;\n            color: ",";\n            font-size: 1rem;\n        }\n    }\n\n    #key-map {\n        display: inline-grid;\n        gap: 10px;        \n        margin-bottom: 25px;\n    }\n\n    .key {\n        border: 1px solid ",";\n        border-radius: 5px;\n        width: 50px;\n        height: 50px;\n        padding: 10px 5px;\n        font-weight: bold;\n        text-align: center;\n\n        input {\n            width: 100%;\n            box-sizing: border-box;\n            border: 1px solid ",";\n            text-align: center;\n            font-size: 0.8rem;\n            padding: 5px;\n        }\n    }\n\n    #artsey-map-a {\n        grid-row: 1;\n        grid-column: 1;\n    }\n\n    #artsey-map-r {\n        grid-row: 1;\n        grid-column: 2;\n    }\n\n    #artsey-map-t {\n        grid-row: 1;\n        grid-column: 3;\n    }\n\n    #artsey-map-s {\n        grid-row: 1;\n        grid-column: 4;\n    }\n\n    #artsey-map-e {\n        grid-row: 2;\n        grid-column: 1;\n    }\n\n    #artsey-map-y {\n        grid-row: 2;\n        grid-column: 2;\n    }\n\n    #artsey-map-i {\n        grid-row: 2;\n        grid-column: 3;\n    }\n\n    #artsey-map-o {\n        grid-row: 2;\n        grid-column: 4;\n    }\n"])),(e=>e.theme.borderColor),(e=>e.theme.textColor),(e=>e.theme.borderColor),(e=>e.theme.textColor),(e=>e.theme.borderColor),(e=>e.theme.borderColor));var T,E=e=>{const[n,t]=Object(i.useState)(C),[o,r]=Object(i.useState)(25),[a,s]=Object(i.useState)(C[0]),l=e.onMappingChanged,c=e.onKeyTimeoutChanged;Object(i.useEffect)((()=>{let e=localStorage.getItem("keymap"),n=e?JSON.parse(e):void 0;n&&t((e=>[...e,n]));let o=localStorage.getItem("selectedMap");if(o&&"Custom"!==o){let e=C.find((e=>e.name===o));e&&s(e)}else o&&"Custom"===o&&n&&s(n);let a=localStorage.getItem("keyTimeout");a&&r(parseInt(a))}),[]),Object(i.useEffect)((()=>{l(a)}),[a,l]),Object(i.useEffect)((()=>{c(o)}),[o,c]);const d=(e,o,r)=>{let i={name:"Custom",keys:{...a.keys}};i.keys[e]={fromKey:r,toCode:e,toKey:o};let l=n.filter((e=>"Custom"!==e.name));l.push(i),t(l),s(i),localStorage.setItem("selectedMap","Custom"),localStorage.setItem("keymap",JSON.stringify(i))};return Object(h.jsxs)(w,{children:[Object(h.jsx)("p",{children:"This is the key mapper. It maps the keys of your keyboard to the indicated keys of artsey. The default mapping is for a left handed usage. If you are already using combos or mod taps on your keyboard, make sure, that you are not using the regarding keys in the mapping. This can cause problems."}),Object(h.jsx)("p",{children:"Please select a predefined mapping or define one yourself. The mapping will be saved between sessions."}),Object(h.jsx)("select",{value:null===a||void 0===a?void 0:a.name,onChange:e=>{let t=n.find((n=>n.name===e.target.value));t&&(s(t),localStorage.setItem("selectedMap",e.target.value))},children:n.map((e=>Object(h.jsx)("option",{value:e.name,children:e.name},e.name)))}),Object(h.jsxs)("div",{id:"key-map",children:[Object(h.jsxs)("div",{id:"artsey-map-a",className:"key",children:["A ",Object(h.jsx)("input",{value:null===a||void 0===a?void 0:a.keys[v.A].fromKey,onChange:e=>d(v.A,k.A,e.target.value)})]}),Object(h.jsxs)("div",{id:"artsey-map-r",className:"key",children:["R ",Object(h.jsx)("input",{value:null===a||void 0===a?void 0:a.keys[v.R].fromKey,onChange:e=>d(v.R,k.R,e.target.value)})]}),Object(h.jsxs)("div",{id:"artsey-map-t",className:"key",children:["T ",Object(h.jsx)("input",{value:null===a||void 0===a?void 0:a.keys[v.T].fromKey,onChange:e=>d(v.T,k.T,e.target.value)})]}),Object(h.jsxs)("div",{id:"artsey-map-s",className:"key",children:["S ",Object(h.jsx)("input",{value:null===a||void 0===a?void 0:a.keys[v.S].fromKey,onChange:e=>d(v.S,k.S,e.target.value)})]}),Object(h.jsxs)("div",{id:"artsey-map-e",className:"key",children:["E ",Object(h.jsx)("input",{value:null===a||void 0===a?void 0:a.keys[v.E].fromKey,onChange:e=>d(v.E,k.E,e.target.value)})]}),Object(h.jsxs)("div",{id:"artsey-map-y",className:"key",children:["Y ",Object(h.jsx)("input",{value:null===a||void 0===a?void 0:a.keys[v.Y].fromKey,onChange:e=>d(v.Y,k.Y,e.target.value)})]}),Object(h.jsxs)("div",{id:"artsey-map-i",className:"key",children:["I ",Object(h.jsx)("input",{value:null===a||void 0===a?void 0:a.keys[v.I].fromKey,onChange:e=>d(v.I,k.I,e.target.value)})]}),Object(h.jsxs)("div",{id:"artsey-map-o",className:"key",children:["O ",Object(h.jsx)("input",{value:null===a||void 0===a?void 0:a.keys[v.O].fromKey,onChange:e=>d(v.O,k.O,e.target.value)})]})]}),Object(h.jsx)("p",{children:"The combo registration works with a predefined timer. All buttons pressed during the defined timeout will be registered as one combo. If you are struggeling to get four button combos to work, it might help to increase the timeout."}),Object(h.jsxs)("div",{id:"artsey-timeout",children:[Object(h.jsx)("span",{children:"Combo Timeout"}),Object(h.jsx)("input",{value:o,onChange:e=>{r(parseInt(e.target.value)),localStorage.setItem("keyTimeout",e.target.value)}}),Object(h.jsx)("span",{children:"ms"})]})]})};const I=a.d.div(T||(T=Object(d.a)(["\n    display:flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    \n    max-width: 700px;\n    margin: 25px auto;\n\n    #logo {\n        width: 150px;S\n    }\n\n    .no-margin {\n        margin: 0;\n    }\n"])));var R,_=function(){const[e,n]=Object(i.useState)(C[0]),[t,o]=Object(i.useState)(25);return Object(h.jsxs)(I,{children:[Object(h.jsx)("img",{src:m,alt:"logo",id:"logo"}),Object(h.jsx)("h1",{children:"ARTSEY Tester"}),Object(h.jsxs)("p",{children:["On this site you're able to test the great ARTSEY layout. Without the need of a dedicated keyboard. The tester supports all alpha key combos, space and backspace. To learn more about ARTSEY visit the ",Object(h.jsx)("a",{href:"https://artsey.io",title:"ARTSEY Website",target:"_blank",rel:"noreferrer",children:"website"}),".",Object(h.jsx)("br",{})]}),Object(h.jsxs)("p",{className:"no-margin",children:[Object(h.jsx)("a",{href:"https://raw.githubusercontent.com/artseyio/artsey/main/layout%20diagrams/current.jpg",title:"ARTSEY Cheatsheet",children:"Cheatsheet"})," - ",Object(h.jsx)("a",{href:"Learning_Artsey.pdf",title:"Learn ARTSEY Book",children:"Learn ARTSEY Book"})]}),Object(h.jsx)(K,{keymap:e,keyTimeout:t}),Object(h.jsx)(E,{onMappingChanged:n,onKeyTimeoutChanged:o})]})};const A=Object(a.b)(R||(R=Object(d.a)(["\n    html, body, #root {\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n    }\n\n    body {\n        background: ",";\n        color: ",";\n        line-height: 1.65;\n        font-weight: 400;\n        font-family: Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue,sans-serif;\n        overflow:hidden;\n    }\n\n    p { margin-bottom: 1.15rem; text-align: justify; }\n\n    h1, h2, h3, h4, h5 {\n        margin: 0 0 2rem 0;\n        line-height: 1.15;\n        font-weight: 100;\n    }\n    \n    h1 {\n        margin-top: 0;\n        font-size: 2.488em;\n    }\n\n    h2 { font-size: 2.074em; }\n    h3 { font-size: 1.728em; }\n    h4 { font-size: 1.44em; }\n    h5 { font-size: 1.2em; }\n    small, .text-small { font-size: 0.833em; color: #777777; }\n\n    a {\n        text-decoration: none;\n        color: ",";\n        &:hover {\n            font-weight: bold;\n        }\n        i {\n            vertical-align: middle;\n            color: ",";\n            &:hover { color: ","; }\n        }\n    }\n"])),(e=>e.theme.backgroundColor),(e=>e.theme.textColor),(e=>e.theme.primaryColor),(e=>e.theme.textColorFaded),(e=>e.theme.primaryColor));var Y=function(){return Object(h.jsx)(A,{})};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsxs)(a.a,{theme:{textColor:"#525252",textColorFaded:"#bebebe",primaryColor:"#0068b4",secondaryColor:"#0098ff",backgroundColor:"#FFFFFF",borderColor:"rgba(0, 0, 0, 0.1)",colorRed:"#ff4a4a",colorBlue:"#4c5fff",colorGreen:"#2ea169",cursorColor:"#1E1E1E"},children:[Object(h.jsx)(r.a,{}),Object(h.jsx)(Y,{}),Object(h.jsx)(_,{})]})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8f7d2b2f.chunk.js.map