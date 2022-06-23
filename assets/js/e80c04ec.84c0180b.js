"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[7926],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return p}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),u=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=u(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(t),p=r,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||o;return t?n.createElement(m,i(i({ref:a},l),{},{components:t})):n.createElement(m,i({ref:a},l))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9299:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},c=void 0,u={unversionedId:"tools-database/database",id:"tools-database/database",title:"database",description:"DB | Database object class",source:"@site/docs/tools-database/database.md",sourceDirName:"tools-database",slug:"/tools-database/database",permalink:"/docs/tools-database/database",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools-database/database.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"number currency",permalink:"/docs/tools-math/number-currency"}},l={},d=[{value:"DB | Database object class",id:"db--database-object-class",level:2},{value:"basic usage",id:"basic-usage",level:3}],b={toc:d};function p(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"db--database-object-class"},"DB | Database object class"),(0,o.kt)("p",null,"database adalah suatu penyimpanan data, biasanya klo gak pake framework build dari zero itu harus config database dari awal mulai atur config DB_NAME, DB_PASSOWORD DB_USER DB_TYPE wah ribet banget, kebayangkan, nah maka dari itu gue orangnya sedikit males klo harus melakukan hal berulang - ulang kaya gituh. jadi gue buatlah librarynya sekalian dengan kumpulan metode metode yang gue buat sendiri dari baca jurnal jurnal dan referensi di internet."),(0,o.kt)("h3",{id:"basic-usage"},"basic usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\Database\\DB;\n\n// untuk config bisa di pass ke variabel atau langsung ke constructornya\n$type = "mysql";\n$servername = "localhost";\n$database = "karyawan";\n$username = "root";\n$password = "";\n\n// pass ke constructorynya\n$db = new DB($type, $servername, $username, $password, $database);\n\n// SELECT\n$select = $db->select(\'SELECT * FROM tb_tracking\');\n\n// SELECT WHERE\n$where = $db->where(\'SELECT id_tracking, nama_tracking FROM tb_tracking WHERE id_tracking = 1\');\n\n// INSERT\n$db->insert("INSERT INTO tb_tracking VALUES (\'7\',\'test\')");\n\n// UPDATE\n$db->update("UPDATE tb_tracking SET nama_tracking = \'update fiture\' WHERE id_tracking = 7");\n\n// DELETE\n$db->delete("DELETE FROM `tb_tracking` WHERE id_tracking = 7");\n\n\n')),(0,o.kt)("h1",{id:"maintenner"},"Maintenner"),(0,o.kt)("p",null,"this code maintenace by me miyuki nagara"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/naagaraa/"},"miyuki nagara"))))}p.isMDXComponent=!0}}]);