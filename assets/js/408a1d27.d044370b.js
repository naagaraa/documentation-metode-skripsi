"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[82],{3905:function(a,e,t){t.d(e,{Zo:function(){return m},kt:function(){return p}});var r=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,r,n=function(a,e){if(null==a)return{};var t,r,n={},i=Object.keys(a);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var u=r.createContext({}),o=function(a){var e=r.useContext(u),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},m=function(a){var e=o(a.components);return r.createElement(u.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(a,e){var t=a.components,n=a.mdxType,i=a.originalType,u=a.parentName,m=l(a,["components","mdxType","originalType","parentName"]),d=o(t),p=n,b=d["".concat(u,".").concat(p)]||d[p]||c[p]||i;return t?r.createElement(b,s(s({ref:e},m),{},{components:t})):r.createElement(b,s({ref:e},m))}));function p(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=a,l.mdxType="string"==typeof a?a:n,s[1]=l;for(var o=2;o<i;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8884:function(a,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=t(7462),n=t(3366),i=(t(7294),t(3905)),s=["components"],l={title:"matrix"},u="Matrix Class",o={unversionedId:"tools-math/matrix",id:"tools-math/matrix",title:"matrix",description:"matrix class adalah object base class yang saya buat untuk berinteraksi dengan data pada database seperti",source:"@site/docs/tools-math/matrix.md",sourceDirName:"tools-math",slug:"/tools-math/matrix",permalink:"/docs/tools-math/matrix",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools-math/matrix.md",tags:[],version:"current",frontMatter:{title:"matrix"},sidebar:"tutorialSidebar",previous:{title:"divided by zero",permalink:"/docs/tools-math/divided-by-zero"},next:{title:"number currency",permalink:"/docs/tools-math/number-currency"}},m={},c=[{value:"basic usage",id:"basic-usage",level:4},{value:"more detail",id:"more-detail",level:3},{value:"keterangan",id:"keterangan",level:3}],d={toc:c};function p(a){var e=a.components,t=(0,n.Z)(a,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"matrix-class"},"Matrix Class"),(0,i.kt)("p",null,"matrix class adalah object base class yang saya buat untuk berinteraksi dengan data pada database seperti\nmembuat array baru berdasarkan column yang ingin di ambil datanya atau melakukan flip array merubah row\nmenjadi colum atau sebaliknya."),(0,i.kt)("h4",{id:"basic-usage"},"basic usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\Math\\MatrixClass; // load libraries\n\n// query database\n$normalisasi_query = "SELECT * FROM normalisasi";\n$result_all = query($normalisasi_query);\n$data_siswa = fetch_assoc($result_all);\n\n// Object Oriented\n$matrix = new MatrixClass;\n\n// membuat single matrix\n$x = $matrix->make_field_matrix($data_siswa,"kedisiplinan");\n$y = $matrix->make_field_matrix($data_siswa,"kehadiran");\n\n\n// membuat multiple matrix\n$z = $matrix->make_new_matrix($data_siswa, 2, ["kehadiran","kedisiplinan"]);\n\nvar_dump($x); // return new array hanya nilai kedisiplinan\nvar_dump($y); // return new array hanya nilai kehadiran\nvar_dump($z); // return new array hanya nilai kehadiran dan kedisiplinan\n\n\n')),(0,i.kt)("h3",{id:"more-detail"},"more detail"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'// basic usage\nuse Nagara\\Src\\Math\\MatrixClass;\n\n$matrix = new MatrixClass;\n\n// membuat multiple matrix\n$z = $matrix->make_new_matrix($data_siswa, 2, ["kehadiran","kedisiplinan"]);\n\n// debug\nvar_dump($z); // return new array hanya nilai kehadiran dan kedisiplinan\n\n')),(0,i.kt)("h3",{id:"keterangan"},"keterangan"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"data bisa dari database adalah berupa array assosiative atau basenya array assosiative langsung"),(0,i.kt)("li",{parentName:"ul"},"paramter pertama data original dari database atau array bentuk assosiative"),(0,i.kt)("li",{parentName:"ul"},"paramter kedua itu jumlah column yang akan diambil"),(0,i.kt)("li",{parentName:"ul"},"paramter ketiga itu adalah column (untuk single bentuknya string, untuk multiple itu bentuknya array)")))}p.isMDXComponent=!0}}]);