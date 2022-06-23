"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[5710],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return c}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),s=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),c=r,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||i;return a?t.createElement(g,l(l({ref:n},d),{},{components:a})):t.createElement(g,l({ref:n},d))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3808:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={title:"linear regresion"},u="Simple Regresi Linear",s={unversionedId:"metode/linear-regression",id:"metode/linear-regression",title:"linear regresion",description:"regresi linear adalah sebuah pendekatan untuk memodelkan hubungan antara variable terikat Y dan satu atau lebih variable bebas yang disebut X. Salah satu kegunaan dari regresi linear adalah untuk melakukan prediksi berdasarkan data-data yang telah dimiliki sebelumnya. Hubungan di antara variable-variabel tersebut disebut sebagai model regresi linear.",source:"@site/docs/metode/linear-regression.md",sourceDirName:"metode",slug:"/metode/linear-regression",permalink:"/documentation-metode-skripsi/docs/metode/linear-regression",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/metode/linear-regression.md",tags:[],version:"current",frontMatter:{title:"linear regresion"},sidebar:"tutorialSidebar",previous:{title:"k-means",permalink:"/documentation-metode-skripsi/docs/metode/k-means"},next:{title:"naive bayes",permalink:"/documentation-metode-skripsi/docs/metode/naive-bayes"}},d={},m=[{value:"Explain Metode : teori",id:"explain-metode--teori",level:2},{value:"method available",id:"method-available",level:3},{value:"how to use",id:"how-to-use",level:3},{value:"keterangan",id:"keterangan",level:3}],p={toc:m};function c(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simple-regresi-linear"},"Simple Regresi Linear"),(0,i.kt)("p",null,"regresi linear adalah sebuah pendekatan untuk memodelkan hubungan antara variable terikat Y dan satu atau lebih variable bebas yang disebut X. Salah satu kegunaan dari regresi linear adalah untuk melakukan prediksi berdasarkan data-data yang telah dimiliki sebelumnya. Hubungan di antara variable-variabel tersebut disebut sebagai model regresi linear.\nreferensi dalam pembuatan ",(0,i.kt)("a",{parentName:"p",href:"https://teknikelektronika.com/analisis-regresi-linear-sederhana-simple-linear-regression/"},"https://teknikelektronika.com/analisis-regresi-linear-sederhana-simple-linear-regression/")),(0,i.kt)("h2",{id:"explain-metode--teori"},"Explain Metode : teori"),(0,i.kt)("p",null,"coming soon"),(0,i.kt)("h3",{id:"method-available"},"method available"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'// basic usage\nuse Nagara\\Src\\Metode\\MetodeLinearRegresion;\n\n// create new object\n$metode = new MetodeLinearRegresion;\n\n// init\n$metode->MultipleLinearRegresion($x, $y , $z, "x");\n\n// getter\n$metode->LinearRegresion_x("x", "y", "predictor_X");\n$metode->LinearRegresion_y("x", "y", "predictor_Y");\n$metode->getConstA();\n$metode->getConstB();\n$metode->getValueX2();\n$metode->getValueY2();\n$metode->getValueXY();\n\n')),(0,i.kt)("h3",{id:"how-to-use"},"how to use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\Metode\\MetodeLinearRegresion; // load libraries\n\n// nilai x dan y total jumlahnya harus sama\n\n// varaibel x adalah rata rata suhu\n$x = [24,22,21,20,22,19,20,23,24,25,21,20,20,19,25,27,28,25,26,24,27,23,24,23,22,21,26,25,26,27];\n\n// variabel y adalah jumlah cacat\n$y = [10,5,6,3,6,4,5,9,11,13,7,4,6,3,12,13,16,12,14,12,16,9,13,11,7,5,12,11,13,14];\n\n\n// example another data\n$x = [1,2,3,4,5,6,7,8,9,10,11,12];\n$y = [71,70,69,68,64,65,72,78,75,75,75,70];\n$z = [13,14,15,16,17,18,19,20,21,22,23,24];\n\n\n// Object Oriented style\n// linerar regresion\n$metode = new MetodeLinearRegresion;\n\n\n// single prediction\n$prediction_single_x = $metode->LinearRegresion_x($x, $y, 30);   // return 19.12 prediksi cacat\n$prediction_single_y = $metode->LinearRegresion_y($x, $y, 4);  // return 19.57 prediksi suhu\n\n// multiple linear regresion y\n$multiple_y = $metode->MultipleLinearRegresion($x, $y , $z, "y");\n\n// multiple linear regresion\n$multiple_x = $metode->MultipleLinearRegresion($x, $y , $z, "x");\n\n// combinasi atau gabungkan dan buat field baru\n$hasil = $metode->Combine_LinearRegresion($data_siswa, $x, $y ,$z, "x", "result_akhir");\n\n// debug hasil menggunakan dump\ndump($prediction_single_y);\ndump($prediction_single_x);\ndump($multiple_x );\ndump($multiple_y );\ndump($hasil);\n\n\n\n')),(0,i.kt)("h3",{id:"keterangan"},"keterangan"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"data dari database adalah berupa array assosiative yang dibutuhkan hanya valuenya saja"),(0,i.kt)("li",{parentName:"ul"},"jumlah column x dan y harus sama"),(0,i.kt)("li",{parentName:"ul"},"by default untuk single akan me return float atau integer"),(0,i.kt)("li",{parentName:"ul"},"untuk multiple linear regresion harus dilalukan loop")),(0,i.kt)("h1",{id:"maintenner"},"Maintenner"),(0,i.kt)("p",null,"this code maintenace by me miyuki nagara"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/naagaraa/"},"miyuki nagara"))))}c.isMDXComponent=!0}}]);