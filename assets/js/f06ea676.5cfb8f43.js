"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[7807],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return d}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?t.createElement(g,o(o({ref:a},u),{},{components:n})):t.createElement(g,o({ref:a},u))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4353:function(e,a,n){n.r(a),n.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var t=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"rabin-karb"},p="Rabin Karb",s={unversionedId:"metode/rabin-karb",id:"metode/rabin-karb",title:"rabin-karb",description:"In computer science, the Rabin\u2013Karp algorithm or Karp\u2013Rabin algorithm is a string-searching algorithm created by Richard M. Karp and Michael O. Rabin (1987) that uses hashing to find an exact match of a pattern string in a text. It uses a rolling hash to quickly filter out positions of the text that cannot match the pattern, and then checks for a match at the remaining positions. Generalizations of the same idea can be used to find more than one match of a single pattern, or to find matches for more than one pattern.",source:"@site/docs/metode/rabin-karb.md",sourceDirName:"metode",slug:"/metode/rabin-karb",permalink:"/web-metode-skripsi/docs/metode/rabin-karb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/metode/rabin-karb.md",tags:[],version:"current",frontMatter:{title:"rabin-karb"},sidebar:"tutorialSidebar",previous:{title:"oreste",permalink:"/web-metode-skripsi/docs/metode/oreste"},next:{title:"saw",permalink:"/web-metode-skripsi/docs/metode/simple-addive-weight"}},u={},m=[{value:"reference",id:"reference",level:3},{value:"caution",id:"caution",level:3},{value:"Basic usage",id:"basic-usage",level:2},{value:"rabin karb v1",id:"rabin-karb-v1",level:3},{value:"rabin karb v2",id:"rabin-karb-v2",level:3},{value:"how it&#39;s work ?",id:"how-its-work-",level:2},{value:"jurnal reference",id:"jurnal-reference",level:3},{value:"improve \u26a0\ufe0f",id:"improve-\ufe0f",level:2},{value:"Similarity Calculate",id:"similarity-calculate",level:2}],c={toc:m};function d(e){var a=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rabin-karb"},"Rabin Karb"),(0,i.kt)("p",null,"In computer science, the Rabin\u2013Karp algorithm or Karp\u2013Rabin algorithm is a string-searching algorithm created by Richard M. Karp and Michael O. Rabin (1987) that uses hashing to find an exact match of a pattern string in a text. It uses a rolling hash to quickly filter out positions of the text that cannot match the pattern, and then checks for a match at the remaining positions. Generalizations of the same idea can be used to find more than one match of a single pattern, or to find matches for more than one pattern."),(0,i.kt)("h3",{id:"reference"},"reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm"},"https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm"))),(0,i.kt)("h3",{id:"caution"},"caution"),(0,i.kt)("p",null,"this algorithm i'm not write with my self, i'm just re wrting for improve and make stand alone algorithm, for reusabilty use. and can used multiple string."),(0,i.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,i.kt)("h3",{id:"rabin-karb-v1"},"rabin karb v1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'\ninclude "vendor/autoload.php";\n\nuse Nagara\\Src\\Metode\\MetodeRabinKarb;\n\n// example string 1\n$wordtext1 = [\n    0 => "ayah pergi kepasar",\n    1 => "bapak pergi mall",\n];\n\n// example string 2\n$wordtext2 = [\n    0 => "ayah pergi kepasar",\n    1 => "bapak pergi mall",\n    2 => "paman pergi kepasar dengan ayah",\n];\n\n// setting config and run algorithm\n$rabinkarb = new MetodeRabinKarb([\n    "ngram" => 5,\n    "prima" => 2\n]);\n$rabinkarb->process($wordtext1);\n\n// show result (array view);\ndump("case folding");\ndump($rabinkarb->getCaseFolding());\ndump("ngram");\ndump($rabinkarb->getNgram());\ndump("hashing");\ndump($rabinkarb->getHashing());\ndump("matching");\ndump($rabinkarb->getMacthing());\ndump("dice coefficient value");\ndump($rabinkarb->getDiceCoefficientValue());\ndump("dice coefficient message");\ndump($rabinkarb->getDiceCoefficientMessage());\ndump("get result similarity index change to data");\ndump($rabinkarb->getDiceCoefficientSimilarity());\n\n')),(0,i.kt)("h3",{id:"rabin-karb-v2"},"rabin karb v2"),(0,i.kt)("p",null,"in this update i'm remove prime number for make rolling hash and change to key for make secret key for used at decode and encode hash"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'\nuse Nagara\\Src\\Metode\\MetodeRabinKarbv2;\n\n// example string 1\n$wordtext1 = [\n   0 => "ayah pergi kepasar",\n   1 => "bapak pergi mall",\n];\n\n// example string 2\n$wordtext2 = [\n   0 => "ayah pergi kepasar",\n   1 => "bapak pergi mall",\n   2 => "paman pergi kepasar dengan ayah",\n];\n\n// setting config and run algorithm\n$rabinkarb = new MetodeRabinKarbv2([\n   "ngram" => 3,\n   "key" => "secret"\n]);\n$rabinkarb->process($wordtext2);\n\ndump("case folding");\ndump($rabinkarb->getCaseFolding());\ndump("ngram");\ndump($rabinkarb->getNgram());\ndump("hashing");\ndump($rabinkarb->getHashing());\ndump("matching");\ndump($rabinkarb->getMacthing());\ndump("dice coefficient value");\ndump($rabinkarb->getDiceCoefficientValue());\ndump("word decrypt");\ndump($rabinkarb->get_word_similarity());\n\n')),(0,i.kt)("h2",{id:"how-its-work-"},"how it's work ?"),(0,i.kt)("p",null,"document extraction string or only string at index 0 will compare to another index. if you have 2 string."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example 2 string :")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'string A : "ayah pergi kepasar"'),(0,i.kt)("li",{parentName:"ul"},'string B : "ibu pergi kepasar"')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"array format :"),"\nif you write at program like this array format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$wordtext1 = [\n    0 => "ayah pergi kepasar",\n    1 => "ibu pergi kepasar",\n];\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-string(A) index 0 compare to string(B) index 1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example more 2 string")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'string A : "ayah pergi kepasar"'),(0,i.kt)("li",{parentName:"ul"},'string B : "ibu pergi kepasar"'),(0,i.kt)("li",{parentName:"ul"},'string C : "ibu pergi mall"')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"array format :"),"\nif you write at program like this array format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$wordtext1 = [\n    0 => "ayah pergi kepasar",\n    1 => "ibu pergi kepasar",\n    2 => "ibu pergi mall"\n];\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- string(A) index 0 compare to string(B) index 1\n- string(A) index 0 compare to string(C) index 2\n")),(0,i.kt)("h3",{id:"jurnal-reference"},"jurnal reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'jurnal : "Aplikasi Pendeteksi Tingkat Kesamaan Dokumen Teks:\nAlgoritma Rabin Karp Vs. Winnowing"'),(0,i.kt)("li",{parentName:"ul"},'jurnal : "RABIN-CARP IMPLEMENTATION IN MEASURING SIMALIRITY OF\nRESEARCH PROPOSAL OF STUDENTS"')),(0,i.kt)("h2",{id:"improve-\ufe0f"},"improve \u26a0\ufe0f"),(0,i.kt)("p",null,"done can improve multiple string, but now need to find decript hash for find text for make highlight same or similary text"),(0,i.kt)("h2",{id:"similarity-calculate"},"Similarity Calculate"),(0,i.kt)("p",null,"for calculate similarity this algorithm emmbed with Dice Similarity coefficient"),(0,i.kt)("h1",{id:"maintenner"},"Maintenner"),(0,i.kt)("p",null,"this code maintenace by me miyuki nagara"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/naagaraa/"},"miyuki nagara"))))}d.isMDXComponent=!0}}]);