"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[9219],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3463:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:1},l=void 0,p={unversionedId:"track/track",id:"track/track",title:"track",description:"Time Track",source:"@site/docs/track/track.md",sourceDirName:"track",slug:"/track/",permalink:"/documentation-metode-skripsi/docs/track/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/track/track.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Personal Tool - Track",permalink:"/documentation-metode-skripsi/docs/category/personal-tool---track"},next:{title:"personal tool - math",permalink:"/documentation-metode-skripsi/docs/category/personal-tool---math"}},u={},s=[{value:"Time Track",id:"time-track",level:2},{value:"Instantiate an object",id:"instantiate-an-object",level:3},{value:"Add more timepoints if necessary",id:"add-more-timepoints-if-necessary",level:3},{value:"Show the Results",id:"show-the-results",level:3}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"time-track"},"Time Track"),(0,o.kt)("p",null,"Simple PHP Helper to Analyze Execution Time of your PHP Scripts. i found source at here\nfrom ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/leo-lobster/php-timetrack"},"https://github.com/leo-lobster/php-timetrack")," and i keep save in my repo."),(0,o.kt)("h3",{id:"instantiate-an-object"},"Instantiate an object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\TimeTracker;\n\n$timer = new TimeTracker("start"); // Example Description\n')),(0,o.kt)("h3",{id:"add-more-timepoints-if-necessary"},"Add more timepoints if necessary"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// Some Code\n$timer->add("All Includes Loaded");\n\n// Some Code\n$timer->add("DB Query finished");\n\n// Some Code\n$timer->add("Echoing Body");\n')),(0,o.kt)("h3",{id:"show-the-results"},"Show the Results"),(0,o.kt)("p",null,"The HTML Output:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$timer->htmlOut();\n"))),(0,o.kt)("p",null,"The Text Output:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$timer->logPeriods();\n"))),(0,o.kt)("p",null,"The Text Output of raw Timestamps:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$timer->logTimestamps();\n"))),(0,o.kt)("p",null,"The Text Output of String Excecution Time:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$timer->calculate();\n"))))}d.isMDXComponent=!0}}]);