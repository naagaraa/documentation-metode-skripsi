"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[8302],{3905:function(e,a,t){t.d(a,{Zo:function(){return g},kt:function(){return s}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},l=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,g=m(e,["components","mdxType","originalType","parentName"]),l=c(t),s=r,d=l["".concat(u,".").concat(s)]||l[s]||p[s]||i;return t?n.createElement(d,o(o({ref:a},g),{},{components:t})):n.createElement(d,o({ref:a},g))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=l;var m={};for(var u in a)hasOwnProperty.call(a,u)&&(m[u]=a[u]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3222:function(e,a,t){t.r(a),t.d(a,{assets:function(){return g},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return p}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],m={title:"image magic"},u="Image Magic",c={unversionedId:"image-processing/image-magic",id:"image-processing/image-magic",title:"image magic",description:"untuk mempermudah process image processing gue update class baru dan method untuk tambahan yaitu image magic, untuk dasar PHP kalian harus >= 7.4 dan telah menginstall module imagick php dan pastikan sudah ready GD image. karena syarat adalh itu.",source:"@site/docs/image-processing/image-magic.md",sourceDirName:"image-processing",slug:"/image-processing/image-magic",permalink:"/documentation-metode-skripsi/docs/image-processing/image-magic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/image-processing/image-magic.md",tags:[],version:"current",frontMatter:{title:"image magic"},sidebar:"tutorialSidebar",previous:{title:"image processing",permalink:"/documentation-metode-skripsi/docs/image-processing/"},next:{title:"image parser",permalink:"/documentation-metode-skripsi/docs/image-processing/image-parser"}},g={},p=[{value:"MakeThumbnail",id:"makethumbnail",level:4},{value:"Convert Image jpg or png to PNG, GIF or BMP",id:"convert-image-jpg-or-png-to-png-gif-or-bmp",level:4},{value:"Image Filter",id:"image-filter",level:4}],l={toc:p};function s(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-magic"},"Image Magic"),(0,i.kt)("p",null,"untuk mempermudah process image processing gue update class baru dan method untuk tambahan yaitu image magic, untuk dasar PHP kalian harus >= 7.4 dan telah menginstall module imagick php dan pastikan sudah ready GD image. karena syarat adalh itu."),(0,i.kt)("h4",{id:"makethumbnail"},"MakeThumbnail"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'\nuse Nagara\\Src\\Img\\ImgMagic;\n\n$image = new ImgMagic;\n\n$path =  "naruto.jpg";\n$image->MakeThumbnail($path); // return thumbnail\n\n\n')),(0,i.kt)("h4",{id:"convert-image-jpg-or-png-to-png-gif-or-bmp"},"Convert Image jpg or png to PNG, GIF or BMP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\Img\\ImgMagic;\n\n$image = new ImgMagic;\n\n$path =  "naruto.jpg";\n$image->convert($path, "png"); // baut file baru dengan extension png\n\n')),(0,i.kt)("h4",{id:"image-filter"},"Image Filter"),(0,i.kt)("p",null,"filter yang tersedia"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"grayscale"),(0,i.kt)("li",{parentName:"ul"},"gaussian_blur"),(0,i.kt)("li",{parentName:"ul"},"selective_blur"),(0,i.kt)("li",{parentName:"ul"},"emboss"),(0,i.kt)("li",{parentName:"ul"},"negatif")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\Img\\ImgMagic;\n\n$image = new ImgMagic;\n\n$path =  "naruto.jpg";\n$image->filter($path, "grayscale");\n\n')))}s.isMDXComponent=!0}}]);