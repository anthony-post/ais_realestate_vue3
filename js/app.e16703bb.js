(function(){"use strict";var e={5895:function(e,a,t){var l=t(9963),n=t(6252),u=(t(7658),t(2262)),r=t(3577),o=t.p+"img/sprite.ec2e89e4.svg";const s=["width","height"],i=["xlink:href"];var c={__name:"VIcon",props:{iconId:{type:String,required:!0},width:{type:[Number,String],default:32},height:{type:[Number,String],default:32}},setup(e){const a=e,t=(0,n.Fl)((()=>`${o}#${a.iconId}`));return(a,l)=>((0,n.wg)(),(0,n.iD)("svg",{class:"icon",width:e.width,height:e.height},[(0,n._)("use",{"xlink:href":(0,u.SU)(t)},null,8,i)],8,s))}},d=t(3744);const p=(0,d.Z)(c,[["__scopeId","data-v-d1f24710"]]);var v=p;const _={class:"search"},m=["for"],h=["name","placeholder","title","value"];var f={__name:"VSearch",props:{label:{type:String,default:""},type:{type:String,default:""},name:{type:String,default:""},placeholder:{type:String,default:""},title:{type:String,default:""},inputValue:[String,Number]},setup(e){return(a,t)=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("label",{for:e.name},(0,r.zw)(e.label),9,m),(0,n._)("input",{name:e.name,placeholder:e.placeholder,title:e.title,value:e.inputValue,type:"text",autocomplete:"off",class:"input search__input",onInput:t[0]||(t[0]=e=>a.$emit("update:inputValue",e.target.value))},null,40,h),(0,n.Wm)(v,{"icon-id":"icon-search",width:"16",height:"16",class:"search__icon"})]))}};const g=(0,d.Z)(f,[["__scopeId","data-v-55762235"]]);var w=g;const b={class:"card"},y={class:"checkbox-item"},k={class:"card__header"},V={class:"card__price"},C={key:0,class:"card__type tooltip"},I={class:"tooltip-text"},x={key:1,class:"hidden"},S={class:"card__title card__text"},O={class:"card__details card__text"},z={class:"card-wrp"},U={class:"card__details-item"},D={key:0},j={class:"card__details-item"},L={class:"card__img-wrp"},H=["src"],W={class:"card__footer card__text"},$={class:"card__footer-item card__footer-icon"},F={class:"card__footer-item card__date"},q=["value"],B=(0,n._)("span",{class:"checkmark-box"},null,-1),E=(0,n._)("span",{class:"tooltip"},null,-1);var Z={__name:"VCard",props:{modelValue:{type:[Array,Boolean]},value:{type:[Boolean,Object]},label:{type:String}},emits:["update:modelValue","updateCheckall"],setup(e,{emit:a}){const t=e,o=(0,n.Fl)({get(){return t.modelValue},set(e){a("update:modelValue",e)}}),s=()=>{a("updateCheckall")};return(a,t)=>((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("label",y,[(0,n._)("div",null,[(0,n._)("div",k,[(0,n._)("span",V,(0,r.zw)(e.value.price),1),e.value.type?((0,n.wg)(),(0,n.iD)("div",C,[(0,n.Wm)(v,{"icon-id":e.value.icon,width:"21",height:"14",class:"icon"},null,8,["icon-id"]),(0,n._)("span",null,(0,r.zw)(e.value.type),1),(0,n._)("span",I,(0,r.zw)(e.value.tooltip),1)])):((0,n.wg)(),(0,n.iD)("div",x,"Hidden block")),(0,n._)("div",{class:(0,r.C_)(["card__status",{card__status_legal:"Уступка от юр. лица"===e.value.status,card__status_individual:"Уступка от физ. лица"===e.value.status,card__status_booked:"Забронировано"===e.value.status,card__status_sold:"Продано"===e.value.status}])},(0,r.zw)(e.value.status),3)]),(0,n._)("p",S,(0,r.zw)(e.value.name),1),(0,n._)("div",O,[(0,n._)("div",z,[(0,n._)("div",U,[(0,n._)("span",null,(0,r.zw)(e.value.number),1),e.value.rooms?((0,n.wg)(),(0,n.iD)("span",D,(0,r.zw)(e.value.rooms)+" комн.кв.",1)):(0,n.kq)("",!0)]),(0,n._)("div",j,[(0,n._)("span",null,(0,r.zw)(e.value.area),1),(0,n._)("span",null,(0,r.zw)(e.value.floor),1)])]),(0,n._)("div",L,[(0,n._)("img",{class:"card__img",src:e.value.picture,alt:"photo"},null,8,H)])]),(0,n._)("div",W,[(0,n._)("div",$,[(0,n._)("div",null,[(0,n.Wm)(v,{"icon-id":"icon-address",width:"19",height:"13",class:"icon"})]),(0,n._)("span",null,(0,r.zw)(e.value.address),1)]),(0,n._)("span",F,"Добавлено "+(0,r.zw)(e.value.date),1)])]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>(0,u.dq)(o)?o.value=e:null),type:"checkbox",class:"checkbox__input",value:e.value,onChange:s},null,40,q),[[l.e8,(0,u.SU)(o)]]),B]),E]))}};const A=Z;var N=A;const P={class:"checkbox-wrp"},T=["value"];var K={__name:"VCheckbox",props:{modelValue:{type:[Array,Boolean]},value:{type:[Boolean,Object]},label:{type:String}},emits:["update:modelValue","updateCheckall"],setup(e,{emit:a}){const t=e,o=(0,n.Fl)({get(){return t.modelValue},set(e){a("update:modelValue",e)}}),s=()=>{a("updateCheckall")};return(a,t)=>((0,n.wg)(),(0,n.iD)("label",P,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>(0,u.dq)(o)?o.value=e:null),value:e.value,onClick:s},null,8,T),[[l.e8,(0,u.SU)(o)]]),(0,n.Uk)(" "+(0,r.zw)(e.label),1)]))}};const R=(0,d.Z)(K,[["__scopeId","data-v-20beb4eb"]]);var Y=R;const M=e=>((0,n.dD)("data-v-4906225e"),e=e(),(0,n.Cn)(),e),G={class:"realestate"},J={class:"toolbar"},Q=M((()=>(0,n._)("p",{class:"toolbar__title"},"Фильтр по статусам",-1))),X={class:"content-list"};var ee={__name:"RealEstateList",setup(e){const a=(0,u.iH)(""),l=(0,u.iH)([]),r=(0,u.iH)(!1),o=(0,u.iH)([]),s=[{id:1,price:"7 733 300 руб.",type:"Квартира",icon:"icon-floorplan",status:"Уступка от юр. лица",name:"Чистое Небо, корпус 10, III кв. 2022 г.",number:"кв. 62",area:"234.38 м2",rooms:1,address:"Лен. область, Всеволожский район, д.Кудрово, ул.Столичная, д. 5, к. 1",floor:"7 этаж",picture:`${t(6597)}`,date:"21/11/2020",tooltip:"С видом на набережную"},{id:2,price:"7 733 300 руб.",type:"",icon:null,status:"Уступка от физ. лица",name:"Зеленый квартал на Пулковских высотах, корпус 5, III кв. 2022 г.",number:"кв. 111",area:"234.38 м2",rooms:1,address:"Комендантский пр., уч. 1 Каменка",floor:"7 этаж",picture:`${t(6597)}`,date:"21/11/2020",tooltip:null},{id:3,price:"800 300 руб.",type:"Паркинг",icon:"icon-car",status:"Забронировано",name:"Зеленый квартал на Пулковских высотах, корпус 10, III кв. 2022 г.",number:"№ 7-10-2 (ПИБ №68)",area:"15 м2",rooms:null,address:"Ленинградская область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1",floor:"",picture:`${t(6597)}`,date:"21/11/2020",tooltip:"Наземная пристроенная"},{id:4,price:"800 300 руб.",type:"Паркинг",icon:"icon-car",status:"Продано",name:"Зеленый квартал на Пулковских высотах, корпус 3, III кв. 2022 г.",number:"№ 7-3-2 (ПИБ №31)",area:"15 м2",rooms:null,address:"Лен. область, Всеволожский район, д.Кудрово, ул.Столичная, д. 5, к. 1",floor:"",picture:`${t(6597)}`,date:"21/11/2020",tooltip:"Подземная встроенно-пристроенная"}],i=()=>{r.value=!r.value,o.value=[],r.value&&p.value.forEach((e=>{o.value.push(e)}))},c=()=>{p.value.length===o.value.length?r.value=!0:r.value=!1},d=e=>e.filter((e=>{switch(!0){case e.name.toLowerCase().includes(a.value.toLowerCase()):return e;case e.number.toLowerCase().includes(a.value.toLowerCase()):return e;case e.type.toLowerCase().includes(a.value.toLowerCase()):return e}})),p=(0,n.Fl)((()=>{switch(!0){case l.value.length>0&&!!a.value:return d(l.value);case!!a.value:return d(s);case l.value.length>0:return l.value;default:return s}}));return(e,t)=>((0,n.wg)(),(0,n.iD)("div",G,[(0,n.Wm)(w,{inputValue:a.value,"onUpdate:inputValue":t[0]||(t[0]=e=>a.value=e),name:"search",placeholder:"Введите ЖК / тип объекта / корпус / № квартиры / № паркинга",class:"input input__search"},null,8,["inputValue"]),(0,n._)("div",J,[(0,n.Wm)(Y,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),label:"Выделить все",onUpdateCheckall:i},null,8,["modelValue"]),(0,n._)("div",null,[Q,((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(s,(e=>(0,n._)("div",{key:e.id},[(0,n.Wm)(Y,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e),value:e,label:e.status},null,8,["modelValue","value","label"])]))),64))])]),(0,n._)("section",X,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,u.SU)(p),(e=>((0,n.wg)(),(0,n.j4)(N,{key:e.id,modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=e=>o.value=e),value:e,onUpdateCheckall:c},null,8,["modelValue","value"])))),128))])]))}};const ae=(0,d.Z)(ee,[["__scopeId","data-v-4906225e"]]);var te=ae;const le={class:"container"};var ne={__name:"App",setup(e){return(e,a)=>((0,n.wg)(),(0,n.iD)("div",le,[(0,n.Wm)(te)]))}};const ue=ne;var re=ue,oe=t(2201);const se=[{path:"/",name:"RealEstateList",component:te}],ie=(0,oe.p7)({history:(0,oe.PO)("/ais_realestate_vue3/"),routes:se});var ce=ie,de=t(3907),pe=(0,de.MT)({state:{},mutations:{},actions:{},modules:{}});(0,l.ri)(re).use(pe).use(ce).mount("#app")},6597:function(e,a,t){e.exports=t.p+"img/floorplan.7f190c45.png"}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var u=a[l]={exports:{}};return e[l](u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,u){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],u=e[c][2];for(var o=!0,s=0;s<l.length;s++)(!1&u||r>=u)&&Object.keys(t.O).every((function(e){return t.O[e](l[s])}))?l.splice(s--,1):(o=!1,u<r&&(r=u));if(o){e.splice(c--,1);var i=n();void 0!==i&&(a=i)}}return a}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[l,n,u]}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/ais_realestate_vue3/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,u,r=l[0],o=l[1],s=l[2],i=0;if(r.some((function(a){return 0!==e[a]}))){for(n in o)t.o(o,n)&&(t.m[n]=o[n]);if(s)var c=s(t)}for(a&&a(l);i<r.length;i++)u=r[i],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(c)},l=self["webpackChunkais_realestate_vue3"]=self["webpackChunkais_realestate_vue3"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(5895)}));l=t.O(l)})();
//# sourceMappingURL=app.e16703bb.js.map