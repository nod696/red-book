(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40b1e3b1"],{"057f":function(t,e,r){var n=r("c6b6"),o=r("fc6a"),i=r("241c").f,a=r("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(e){return a(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?u(t):i(o(t))}},"0865":function(t,e,r){"use strict";r.r(e);r("b0c0"),r("a4d3"),r("e01a");var n=r("7a23"),o={class:"aside"},i={class:"main__name"},a=["href"],c={class:"descr"},u=["src"],f=Object(n["i"])("Обратно");function s(t,e,r,s,d,b){var m=Object(n["B"])("router-link");return Object(n["u"])(),Object(n["g"])("div",o,[Object(n["h"])("h3",i,[Object(n["h"])("a",{href:t.$route.params.itemRef?t.$route.params.itemRef:d.foundItem.ref,target:"_blank"},Object(n["E"])(t.$route.params.itemName?t.$route.params.itemName:d.foundItem.name),9,a)]),Object(n["h"])("p",c,Object(n["E"])(t.$route.params.itemDescription?t.$route.params.itemDescription:d.foundItem.description),1),Object(n["h"])("img",{class:"img__species",src:t.$route.params.itemImg?t.$route.params.itemImg:d.foundItem.img,alt:""},null,8,u),Object(n["j"])(m,{class:"back",to:"".concat(t.$route.params.itemPrevious?t.$route.params.itemPrevious:d.foundItem.previous)},{default:Object(n["I"])((function(){return[f]})),_:1},8,["to"])])}r("7db0"),r("d3b7");var d={name:"SpeciesPage",data:function(){return{publicPath:"/red-book/",dataSpecies:this.$route.params,itemRout:this.$route.params.itemRout,foundItem:null}},beforeMount:function(){this.getFromLocalStorage(),this.paramsHoisting()},methods:{paramsHoisting:function(){this.$emit("clicked",this.foundItem)},getFromLocalStorage:function(){var t=this,e=JSON.parse(localStorage.data),r=localStorage.previous;return this.foundItem=e.find((function(e){return e.routing==t.itemRout})),this.foundItem.previous=r,this.foundItem}},emits:{clicked:null,destroy:null},created:function(){},beforeUnmount:function(){this.$emit("destroy")}},b=(r("77ca"),r("6b0d")),m=r.n(b);const l=m()(d,[["render",s]]);e["default"]=l},"0b42":function(t,e,r){var n=r("da84"),o=r("e8b5"),i=r("68ee"),a=r("861d"),c=r("b622"),u=c("species"),f=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,i(e)&&(e===f||o(e.prototype))?e=void 0:a(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?f:e}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4dae":function(t,e,r){var n=r("da84"),o=r("23cb"),i=r("07fa"),a=r("8418"),c=n.Array,u=Math.max;t.exports=function(t,e,r){for(var n=i(t),f=o(e,n),s=o(void 0===r?n:r,n),d=c(u(s-f,0)),b=0;f<s;f++,b++)a(d,b,t[f]);return d.length=b,d}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("1a2d"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},"77ca":function(t,e,r){"use strict";r("b154")},"7db0":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").find,i=r("44d2"),a="find",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},8418:function(t,e,r){"use strict";var n=r("a04b"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("2ba4"),c=r("c65b"),u=r("e330"),f=r("c430"),s=r("83ab"),d=r("4930"),b=r("d039"),m=r("1a2d"),l=r("e8b5"),p=r("1626"),v=r("861d"),h=r("3a9b"),g=r("d9b5"),y=r("825a"),O=r("7b0b"),w=r("fc6a"),S=r("a04b"),j=r("577e"),$=r("5c6c"),I=r("7c73"),P=r("df75"),k=r("241c"),x=r("057f"),N=r("7418"),A=r("06cf"),E=r("9bf2"),R=r("37e8"),_=r("d1e7"),J=r("f36a"),F=r("6eeb"),D=r("5692"),H=r("f772"),L=r("d012"),M=r("90e3"),B=r("b622"),C=r("e538"),Q=r("746f"),T=r("d44e"),U=r("69f3"),W=r("b727").forEach,q=H("hidden"),z="Symbol",G="prototype",K=B("toPrimitive"),V=U.set,X=U.getterFor(z),Y=Object[G],Z=o.Symbol,tt=Z&&Z[G],et=o.TypeError,rt=o.QObject,nt=i("JSON","stringify"),ot=A.f,it=E.f,at=x.f,ct=_.f,ut=u([].push),ft=D("symbols"),st=D("op-symbols"),dt=D("string-to-symbol-registry"),bt=D("symbol-to-string-registry"),mt=D("wks"),lt=!rt||!rt[G]||!rt[G].findChild,pt=s&&b((function(){return 7!=I(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=ot(Y,e);n&&delete Y[e],it(t,e,r),n&&t!==Y&&it(Y,e,n)}:it,vt=function(t,e){var r=ft[t]=I(tt);return V(r,{type:z,tag:t,description:e}),s||(r.description=e),r},ht=function(t,e,r){t===Y&&ht(st,e,r),y(t);var n=S(e);return y(r),m(ft,n)?(r.enumerable?(m(t,q)&&t[q][n]&&(t[q][n]=!1),r=I(r,{enumerable:$(0,!1)})):(m(t,q)||it(t,q,$(1,{})),t[q][n]=!0),pt(t,n,r)):it(t,n,r)},gt=function(t,e){y(t);var r=w(e),n=P(r).concat(jt(r));return W(n,(function(e){s&&!c(Ot,r,e)||ht(t,e,r[e])})),t},yt=function(t,e){return void 0===e?I(t):gt(I(t),e)},Ot=function(t){var e=S(t),r=c(ct,this,e);return!(this===Y&&m(ft,e)&&!m(st,e))&&(!(r||!m(this,e)||!m(ft,e)||m(this,q)&&this[q][e])||r)},wt=function(t,e){var r=w(t),n=S(e);if(r!==Y||!m(ft,n)||m(st,n)){var o=ot(r,n);return!o||!m(ft,n)||m(r,q)&&r[q][n]||(o.enumerable=!0),o}},St=function(t){var e=at(w(t)),r=[];return W(e,(function(t){m(ft,t)||m(L,t)||ut(r,t)})),r},jt=function(t){var e=t===Y,r=at(e?st:w(t)),n=[];return W(r,(function(t){!m(ft,t)||e&&!m(Y,t)||ut(n,ft[t])})),n};if(d||(Z=function(){if(h(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,e=M(t),r=function(t){this===Y&&c(r,st,t),m(this,q)&&m(this[q],e)&&(this[q][e]=!1),pt(this,e,$(1,t))};return s&&lt&&pt(Y,e,{configurable:!0,set:r}),vt(e,t)},tt=Z[G],F(tt,"toString",(function(){return X(this).tag})),F(Z,"withoutSetter",(function(t){return vt(M(t),t)})),_.f=Ot,E.f=ht,R.f=gt,A.f=wt,k.f=x.f=St,N.f=jt,C.f=function(t){return vt(B(t),t)},s&&(it(tt,"description",{configurable:!0,get:function(){return X(this).description}}),f||F(Y,"propertyIsEnumerable",Ot,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),W(P(mt),(function(t){Q(t)})),n({target:z,stat:!0,forced:!d},{for:function(t){var e=j(t);if(m(dt,e))return dt[e];var r=Z(e);return dt[e]=r,bt[r]=e,r},keyFor:function(t){if(!g(t))throw et(t+" is not a symbol");if(m(bt,t))return bt[t]},useSetter:function(){lt=!0},useSimple:function(){lt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!s},{create:yt,defineProperty:ht,defineProperties:gt,getOwnPropertyDescriptor:wt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:St,getOwnPropertySymbols:jt}),n({target:"Object",stat:!0,forced:b((function(){N.f(1)}))},{getOwnPropertySymbols:function(t){return N.f(O(t))}}),nt){var $t=!d||b((function(){var t=Z();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:$t},{stringify:function(t,e,r){var n=J(arguments),o=e;if((v(e)||void 0!==t)&&!g(t))return l(e)||(e=function(t,e){if(p(o)&&(e=c(o,this,t,e)),!g(e))return e}),n[1]=e,a(nt,null,n)}})}if(!tt[K]){var It=tt.valueOf;F(tt,K,(function(t){return c(It,this)}))}T(Z,z),L[q]=!0},b154:function(t,e,r){},b727:function(t,e,r){var n=r("0366"),o=r("e330"),i=r("44ad"),a=r("7b0b"),c=r("07fa"),u=r("65f0"),f=o([].push),s=function(t){var e=1==t,r=2==t,o=3==t,s=4==t,d=6==t,b=7==t,m=5==t||d;return function(l,p,v,h){for(var g,y,O=a(l),w=i(O),S=n(p,v),j=c(w),$=0,I=h||u,P=e?I(l,j):r||b?I(l,0):void 0;j>$;$++)if((m||$ in w)&&(g=w[$],y=S(g,$,O),t))if(e)P[$]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return $;case 2:f(P,g)}else switch(t){case 4:return!1;case 7:f(P,g)}return d?-1:o||s?s:P}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("e330"),c=r("1a2d"),u=r("1626"),f=r("3a9b"),s=r("577e"),d=r("9bf2").f,b=r("e893"),m=i.Symbol,l=m&&m.prototype;if(o&&u(m)&&(!("description"in l)||void 0!==m().description)){var p={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),e=f(l,this)?new m(t):void 0===t?m():m(t);return""===t&&(p[e]=!0),e};b(v,m),v.prototype=l,l.constructor=v;var h="Symbol(test)"==String(m("test")),g=a(l.toString),y=a(l.valueOf),O=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),S=a("".slice);d(l,"description",{configurable:!0,get:function(){var t=y(this),e=g(t);if(c(p,t))return"";var r=h?S(e,7,-1):w(e,O,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:v})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-40b1e3b1.09db2c07.js.map