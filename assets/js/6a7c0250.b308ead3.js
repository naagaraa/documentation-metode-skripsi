"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[6146],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},235:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"topsis"},s="TOPSIS",u={unversionedId:"metode/topsis",id:"metode/topsis",title:"topsis",description:"TOPSIS (Technique For Others Reference by Similarity to Ideal Solution) adalah salah satu metode pengambilan keputusan multikriteria yang pertama kali diperkenalkan oleh Yoon dan Hwang (1981). TOPSIS menggunakan prinsip bahwa alternatif yang terpilih harus mempunyai jarak terdekat dari solusi ideal positif dan terjauh dari solusi ideal negatif dari sudut pandang geometris dengan menggunakan jarak Euclidean untuk menentukan kedekatan relatif dari suatu alternatif dengan solusi optimal. referece pembuatan https://tugasakhir.id/contoh-perhitungan-spk-metode-topsis/",source:"@site/docs/metode/topsis.md",sourceDirName:"metode",slug:"/metode/topsis",permalink:"/documentation-metode-skripsi/docs/metode/topsis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/metode/topsis.md",tags:[],version:"current",frontMatter:{title:"topsis"},sidebar:"tutorialSidebar",previous:{title:"sma",permalink:"/documentation-metode-skripsi/docs/metode/single-moving-average"},next:{title:"wma",permalink:"/documentation-metode-skripsi/docs/metode/weight-moving-average"}},p={},d=[{value:"Explain Metode : teori",id:"explain-metode--teori",level:2},{value:"method available",id:"method-available",level:3},{value:"basic to use",id:"basic-to-use",level:3},{value:"keterangan",id:"keterangan",level:3}],m={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"topsis"},"TOPSIS"),(0,i.kt)("p",null,"TOPSIS (Technique For Others Reference by Similarity to Ideal Solution) adalah salah satu metode pengambilan keputusan multikriteria yang pertama kali diperkenalkan oleh Yoon dan Hwang (1981). TOPSIS menggunakan prinsip bahwa alternatif yang terpilih harus mempunyai jarak terdekat dari solusi ideal positif dan terjauh dari solusi ideal negatif dari sudut pandang geometris dengan menggunakan jarak Euclidean untuk menentukan kedekatan relatif dari suatu alternatif dengan solusi optimal. referece pembuatan ",(0,i.kt)("a",{parentName:"p",href:"https://tugasakhir.id/contoh-perhitungan-spk-metode-topsis/"},"https://tugasakhir.id/contoh-perhitungan-spk-metode-topsis/")),(0,i.kt)("h2",{id:"explain-metode--teori"},"Explain Metode : teori"),(0,i.kt)("p",null,"coming soon"),(0,i.kt)("h3",{id:"method-available"},"method available"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\Metode\\MetodeTopsis;\n\n// create object\n$metode = new MetodeTopsis;\n\n// init\n$metode->topsis("matrix","matrix-weight","matrix-keriteria-type");\n\n// method getter\n$metode->getNormalisasi();\n$metode->getNormalisasiTerbobot();\n$metode->getMatrixSolusiIdeal();\n$metode->getTotal();\n\n')),(0,i.kt)("h3",{id:"basic-to-use"},"basic to use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\Metode\\MetodeTopsis; // load libraries\n\n// contoh 3 data\n$c1 = [5,5,5];\n$c2 = [2,1,3];\n$c3 = [1,1,1];\n$c4 = [4,3,4];\n$c5 = [1,1,1];\n\n$matrix_example = [\n    $c1,\n    $c2,\n    $c3,\n    $c4,\n    $c5,\n]; // terdapat totalnya adalah 5 array\n\n$weight = [5,3,4,2,5];  // terdapat totalnya adalah 5 array\n\n$kriteria_weight = [\n    "0" => "biaya",\n    "1" => "keuntungan",\n    "2" => "biaya",\n    "3" => "keuntungan",\n    "4" => "keuntungan",\n]; // type kriteria bobot untuk menetukan pembagian bobot tiap indek melambangkan column\n\n// create object\n$metode = new MetodeTopsis;\n\n// init\n$metode->topsis($matrix_example,$weight,$kriteria_weight);\n\n// get value\n$normalisasi = $metode->getNormalisasi();\n$normalisasiTerbobot = $metode->getNormalisasiTerbobot();\n$matrixSolusiIdeal = $metode->getMatrixSolusiIdeal();\n$total = $metode->getTotal();\n\n\n// debug value\ndump($normalisasi);\ndump($normalisasiTerbobot);\ndump($matrixSolusiIdeal);\ndump($total);\n\n')),(0,i.kt)("h3",{id:"keterangan"},"keterangan"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"matrix adalah data yang berisi nilai kriteria atau akan disebut sebagai c1 - cn"),(0,i.kt)("li",{parentName:"ul"},"weight adalah nilai bobot pada kriteria"),(0,i.kt)("li",{parentName:"ul"},"kriteria weight adalah type kriteria untuk pembagian pembobotan"),(0,i.kt)("li",{parentName:"ul"},"jumlah bobot dan kriteria adalah sama"),(0,i.kt)("li",{parentName:"ul"},"hasil akhir berupa array")),(0,i.kt)("h1",{id:"maintenner"},"Maintenner"),(0,i.kt)("p",null,"this code maintenace by me miyuki nagara"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/naagaraa/"},"miyuki nagara"))))}c.isMDXComponent=!0}}]);