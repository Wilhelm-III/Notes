"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[929],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>u});var s=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},m=Object.keys(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=s.createContext({}),l=function(e){var a=s.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=l(e.components);return s.createElement(i.Provider,{value:a},e.children)},N="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},k=s.forwardRef((function(e,a){var t=e.components,n=e.mdxType,m=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),N=l(t),k=n,u=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return t?s.createElement(u,r(r({ref:a},o),{},{components:t})):s.createElement(u,r({ref:a},o))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[N]="string"==typeof e?e:n,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5498:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var s=t(7462),n=(t(7294),t(3905));const m={title:"Writing Notes",sidebar_position:2},r="Writing notes with Jotter",p={unversionedId:"writing-notes",id:"writing-notes",title:"Writing Notes",description:"Useful links and a reference to using markdown in general.",source:"@site/docs/meta/writing-notes.md",sourceDirName:".",slug:"/writing-notes",permalink:"/Notes/meta/writing-notes",draft:!1,editUrl:"https://github.com/The-Jotter/Notes/tree/main/docs/meta/writing-notes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Writing Notes",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Notes/meta/intro"},next:{title:"Submitting Notes",permalink:"/Notes/meta/submitting"}},i={},l=[{value:"Docusaurus",id:"docusaurus",level:2},{value:"Markdown (and MDX)",id:"markdown-and-mdx",level:2},{value:"Quick Reference",id:"quick-reference",level:2},{value:"Ordering Items",id:"ordering-items",level:3},{value:"Embedded LaTeX Equations",id:"embedded-latex-equations",level:3},{value:"Example:",id:"example",level:4}],o={toc:l},N="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(N,(0,s.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"writing-notes-with-jotter"},"Writing notes with Jotter"),(0,n.kt)("p",null,"Useful links and a reference to using markdown in general."),(0,n.kt)("h2",{id:"docusaurus"},"Docusaurus"),(0,n.kt)("p",null,"Jotter is based off ",(0,n.kt)("del",{parentName:"p"},"Facebook")," Meta's ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," documentation framework. "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Their documentation")," is a good place to start."),(0,n.kt)("h2",{id:"markdown-and-mdx"},"Markdown (and MDX)"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/cheat-sheet/"},"Markdown Cheatsheet"),"."),(0,n.kt)("h2",{id:"quick-reference"},"Quick Reference"),(0,n.kt)("h3",{id:"ordering-items"},"Ordering Items"),(0,n.kt)("p",null,"At the top of your markdown file (in the ",(0,n.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"front matter"),"), use the ",(0,n.kt)("inlineCode",{parentName:"p"},"sidebar_position")," key to tell Docusaurus to position a page at a particular index."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="my-example.mdx"',title:'"my-example.mdx"'},"---\ntitle: My Example\nsidebar_position: 2\n---\n\n\x3c!-- page contents here --\x3e\n")),(0,n.kt)("h3",{id:"embedded-latex-equations"},"Embedded LaTeX Equations"),(0,n.kt)("p",null,"Jotter uses the KaTeX engine which allows for the code to be rendered into HTML elements."),(0,n.kt)("p",null,"To embed LaTeX into a page, suround the LaTeX with ",(0,n.kt)("inlineCode",{parentName:"p"},"$"),"'s."),(0,n.kt)("h4",{id:"example"},"Example:"),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"sin"),(0,n.kt)("mo",{parentName:"mrow"},"\u2061"),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("msup",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"msup"},"x"),(0,n.kt)("mn",{parentName:"msup"},"3")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"3"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"))),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("msup",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"msup"},"x"),(0,n.kt)("mn",{parentName:"msup"},"5")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"5"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"))),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mo",{parentName:"mrow"},"\u2026")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sin x = x - \\frac{x^3}{3!}+\\frac{x^5}{5!} + \\dots")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6679em"}}),(0,n.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.3629em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.0179em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"3"),(0,n.kt)("span",{parentName:"span",className:"mclose mtight"},"!")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8913em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.931em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.3629em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.0179em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"5"),(0,n.kt)("span",{parentName:"span",className:"mclose mtight"},"!")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8913em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.931em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"5")))))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.123em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},"\u2026")))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="Taylor series for sine of x"',title:'"Taylor',series:!0,for:!0,sine:!0,of:!0,'x"':!0},"#### Example:\n\n$\\sin x = x - \\frac{x^3}{3!}+\\frac{x^5}{5!} + \\dots$\n")))}c.isMDXComponent=!0}}]);