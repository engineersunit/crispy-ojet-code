/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojdnd"],function(a,g){function c(a,d,e,f,g,k){null==c.vQ&&(c.vQ=c.Dsa());this.od=a;this.lh=d;this.Foa=e;f&&f.Ria&&(this.lDa=f.Ria);g&&(g.Uia&&(this.xW=g.Uia),g.Tia&&(this.wW=g.Tia),g.Yia&&(this.DW=g.Yia),g.Xia&&(this.BW=g.Xia),g.Via&&(this.zW=g.Via),g.Wia&&(this.gL=g.Wia),g.$ia&&(this.FW=g.$ia),g.aja&&(this.GW=g.aja),g.Zia&&(this.EW=g.Zia));k&&(k.ME&&(this.yj=k.ME),k.WF&&(this.gg=k.WF),k.Efa&&(this.P7=k.Efa),k.Nfa&&(this.rT=k.Nfa),k.Bia&&(this.Ts=
k.Bia),k.nga&&(this.My=k.nga),k.Oga&&(this.Yy=k.Oga),k.Nga&&(this.Jo=k.Nga),k.Mga&&(this.Ks=k.Mga),k.Eia&&(this.oE=k.Eia),k.Ug&&(this.Hca=k.Ug),k.wi&&(this.Ica=k.wi));d=document.createElement("div");e=d.style;e.display="inline-block";e.overflow="hidden";e.visibility="hidden";f=document.createElement("div");e=f.style;e.display="inline-block";d.appendChild(f);a.insertBefore(d,a.firstChild);this.wca=d;this.aw=f;var l=this;this.Eo=function(a){l.uv(a)};this.W8=function(){l.Nwa()};this.pv=function(a){l.PT(a)};
this.tv=function(a){l.XT(a)}}c.prototype.Nn=function(a,c){var e=!1;a?(e=this.Nj()?!0:!1,this.$aa()):(this.Jo&&this.Jo(),this.HW(c),e=this.AW());return e};c.prototype.destroy=function(){for(var a=this.od,c=this.ov(),e=0;e<c.length;e++){var f=c[e].style;this.lh?f.right="":f.left="";f.top=""}a.removeChild(this.wca);this.Ica=this.Hca=this.oE=this.Ks=this.Jo=this.Yy=this.My=this.Ts=this.rT=this.P7=this.gg=this.yj=this.od=this.Yp=this.jo=this.zl=this.lo=this.Qm=this.tv=this.pv=this.W8=this.Eo=this.aw=this.wca=
null};c.prototype.resizeTile=function(a,c){var e=this.od.querySelector(a);if(e){this.lo||(this.lo=[]);var f=this.lo;f.push(e);f.push(c);this.iba=!0;this.SD()}};c.prototype.MHa=function(a,c){var e=this.ov();this.oE&&this.oE(e);var f=null;0<=c&&c<e.length&&(f=e[c]);this.od.insertBefore(a,f);this.SD()};c.prototype.CJa=function(a){if(a=this.od.querySelector(a))this.zl||(this.zl=[]),this.zl.push(a),this.hW=!0,this.hn!==c.m2&&this.hn!==c.hH?this.SD():this.hW=!1};c.prototype.FHa=function(a){if(a=this.od.querySelector(a))this.jo||
(this.jo=[]),this.jo.push(a),this.X8=!0,this.SD()};c.prototype.gJa=function(){this.iba||this.X8||this.hW||(this.Jo&&this.Jo(),this.HW(!1),this.AW())};c.prototype.$i=function(){if(this.Vca)return!1;this.cpa||(this.woa=this.Foa?!1:c.Nxa(c.vQ[0],c.vQ[1]),this.cpa=!0);return this.woa};c.prototype.DM=function(){return null!=this.hn||null!=this.Qm&&0<this.Qm.length};c.prototype.YL=function(){this.Vca=!0;this.xq(this.DW);this.xq(this.BW);this.xq(this.zW);this.xq(this.gL);this.xq(this.FW);this.xq(this.GW);
this.xq(this.EW);this.gg(this.aw,this.xW);this.gg(this.aw,this.wW);c.fg(this.od,"transitionend",this.Eo);c.fg(this.od,"webkitTransitionEnd",this.Eo);for(var a=this.ov(),d=0;d<a.length;d++){var e=a[d];e.FH&&delete e.FH;c.fg(e,"transitionend",this.pv);c.fg(e,"webkitTransitionEnd",this.pv);c.fg(e,"transitionend",this.tv);c.fg(e,"webkitTransitionEnd",this.tv)}this.Ny?(clearTimeout(this.Ny),this.Ny=null,this.PT(null)):this.sz?(clearTimeout(this.sz),this.sz=null,this.gW()):this.hn===c.hH||null!=this.Qm&&
0<this.Qm.length?this.uv(null):this.hn===c.n2&&this.XT(null);this.Vca=!1};c.kta=function(a){var d=c.LC(a);return{xi:a.offsetWidth+(c.Qi(d.marginLeft)+c.Qi(d.marginRight)),Zj:a.offsetHeight+(c.Qi(d.marginTop)+c.Qi(d.marginBottom))}};c.jta=function(a){a=c.LC(a);return{paddingLeft:c.Qi(a.paddingLeft),paddingRight:c.Qi(a.paddingRight),paddingTop:c.Qi(a.paddingTop),paddingBottom:c.Qi(a.paddingBottom),borderLeftWidth:c.Qi(a.borderLeftWidth),borderRightWidth:c.Qi(a.borderRightWidth),borderTopWidth:c.Qi(a.borderTopWidth),
borderBottomWidth:c.Qi(a.borderBottomWidth)}};c.LC=function(a){var c=a.ownerDocument.defaultView,e=null;return e=c?c.getComputedStyle(a,null):a.currentStyle};c.Qi=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};c.Rh=function(a,c,e){a.addEventListener?a.addEventListener(c,e,!1):a.attachEvent&&a.attachEvent("on"+c,e)};c.fg=function(a,c,e){a.removeEventListener?a.removeEventListener(c,e,!1):a.detachEvent&&a.detachEvent("on"+c,e)};c.D3=function(a,c){if(a)for(var e=0;e<
a.length;e++)if(a[e]==c)return e;return-1};c.Nxa=function(a,c){var e=["gecko",16,"trident",6,"webkit",533.1],f=e.length;if(0==f%2)for(var g=0;g<=f-2;g+=2)if(a==e[g]){if(c>=e[1+g])return!0;break}return!1};c.Dsa=function(){var a=c.Jk,d=null,e=-1,f=navigator.userAgent.toLowerCase();-1!=f.indexOf("msie")||-1!=f.indexOf("trident")?(d="trident",e=a(f,/trident\/(\d+[.]\d+)/),-1==e&&(e=a(f,/msie (\d+\.\d+);/),-1==e&&(e=a(f,/msie (\d+\.\d+)b;/)),e-=4),null!=document.documentMode&&(e=Math.min(e,document.documentMode-
4))):-1!=f.indexOf("applewebkit")?(d="webkit",e=a(f,/applewebkit\/(\d+([.]\d+)*)/)):-1!=f.indexOf("gecko/")&&(d="gecko",e=a(f,/rv:(\d+[.]\d+)/));return[d,e]};c.Jk=function(a,c){var e=a.match(c);return e&&(e=e[1])?parseFloat(e):-1};c.Wpa=function(a,c){return a.HN>c.HN?1:a.HN<c.HN?-1:a.GN>c.GN?1:a.GN<c.GN?-1:0};c.prototype.SD=function(){this.GJ||(this.hn?this.rV||(this.rV=!0):this.GJ=setTimeout(this.W8,0))};c.prototype.ov=function(){for(var a=this.od.querySelectorAll(this.lDa),c=[],e=0;e<a.length;e++){var f=
a[e],g=f.style;0<f.offsetWidth&&0<f.offsetHeight&&"hidden"!=g.visibility&&c.push(f)}return c};c.prototype.AW=function(){var a=this.Qm,d=this.Nj();if(this.lo){var e=this.lo;d||(d=[]);for(var f=0;f<e.length;f+=2){var g=e[f];0>c.D3(d,g)&&d.push(g)}}e=!1;if(!d||1>d.length){if(!a||1>a.length)this.Qm=null,this.uv(null),e=!0}else this.Qm=d;a=null!=d&&0<d.length;this.$i()||e||this.uv(null);return a};c.prototype.Nj=function(){var a=this.od,d=this.ov();this.oE&&this.oE(d);var e=this.$Q=null;this.bs=0;this.ya=
1;this.ez=null;var f=[],g=[],k=[],l=this.lh,m=c.jta(a),r=0,t=[];this.C3=t;for(var s=0;s<d.length;s++){var n=d[s],p=this.rT(n);(e=n.FH)&&delete n.FH;if(!this.$Q){var q=p;e&&(q=document.createElement("div"),q.className=e,q=this.rT(q));this.$Q=this.dpa(n,q)}e=this.$Q;this.ez||(this.bs=Math.max(Math.floor((a.offsetWidth-m.paddingLeft-m.paddingRight-m.borderLeftWidth-m.borderRightWidth)/e.xi),1),this.fxa(this.bs,this.ya),r=this.bs);p.colSpan>r&&(r=p.colSpan);p.colSpan>this.bs&&(p.colSpan=this.bs);for(var u=
!1,q=0;q<this.ya;q++){for(var w=0;w<this.bs;w++)if(this.vsa(w,q,p)){var u=n.style,v={top:u.top};l?v.right=u.right:v.left=u.left;g.push(v);this.jV(n,w,q,p,e,m);l&&k.push(w);u=!0;t.push({GN:w,HN:q,tile:n});break}if(u)break;q===this.ya-1&&this.g3()}}e&&(a=this.aw.style,a.width=r*e.xi+"px",a.height=this.ya*e.Zj+"px");for(s=0;s<d.length;s++)n=d[s],u=n.style,v=g[s],""!=v.top&&(l&&parseInt(u.right,10)!==parseInt(v.right,10)||!l&&parseInt(u.left,10)!==parseInt(v.left,10)||parseInt(u.top,10)!==parseInt(v.top,
10))&&f.push(n);1>f.length&&(f=null);return f};c.prototype.$aa=function(){var a=this.C3;this.C3=null;for(var a=a.sort(c.Wpa),d=this.ov(),e=0;e<d.length;e++){var f=d[e],g=a[e].tile;f!=g&&(this.Ica(g),f.parentNode.insertBefore(g,f),this.Hca(g),f=c.D3(d,g),f>e&&(d.splice(f,1),d.splice(e,0,g)))}};c.prototype.fxa=function(a,c){for(var e=this.ez=[],f=0;f<c;f++){var g=[];e.push(g);for(var k=0;k<a;k++)g[k]=!1}};c.prototype.g3=function(){this.ya++;var a=[];this.ez.push(a);for(var c=0;c<this.bs;c++)a[c]=!1};
c.prototype.vsa=function(a,c,e){var f=e.colSpan;e=e.rowSpan;for(var g=c;g<c+e;g++){g>=this.ya&&this.g3();for(var k=a;k<a+f;k++)if(k>=this.bs||this.ez[g][k])return!1}return!0};c.prototype.jV=function(a,c,e,f,g,k){var l=f.colSpan;f=f.rowSpan;for(var m=this.ez,r=e;r<e+f;r++)for(var t=c;t<c+l;t++)m[r][t]=!0;a=a.style;a.top=k.paddingTop+e*g.Zj+"px";this.lh?a.right=k.paddingRight+c*g.xi+"px":a.left=k.paddingLeft+c*g.xi+"px"};c.prototype.eoa=function(a){for(var c=this.ov(),e=0;e<c.length;e++)this.yj(c[e],
a)};c.prototype.xq=function(a){for(var c=this.ov(),e=0;e<c.length;e++)this.gg(c[e],a)};c.prototype.HW=function(a){this.g$||(this.aba=a,this.$i()&&(this.eoa(a?this.BW:this.DW),this.yj(this.aw,a?this.wW:this.xW),c.Rh(this.od,"transitionend",this.Eo),c.Rh(this.od,"webkitTransitionEnd",this.Eo)),this.g$=!0)};c.prototype.uv=function(a){var d=!0;if(this.Qm){var e=this.Qm;if(a){var f=a.target;for(a=0;a<e.length;a++)if(f===e[a]){e.splice(a,1);break}}else this.$i()||(e=this.Qm=[]);0<e.length&&(d=!1)}if(d){if(this.lo&&
(d=this.lo,this.lo=null,this.$i()))for(a=0;a<d.length;a+=2)this.gg(d[a],this.EW);this.aba?(this.$i()&&(this.xq(this.BW),this.gg(this.aw,this.wW)),this.aba=!1):this.$i()&&(this.xq(this.DW),this.gg(this.aw,this.xW));this.$i()&&(c.fg(this.od,"transitionend",this.Eo),c.fg(this.od,"webkitTransitionEnd",this.Eo));this.hW=this.X8=this.iba=this.g$=!1;this.$aa();this.Yy&&this.Yy();if(this.hn===c.hH)if(this.$i()){var g=this;this.sz=setTimeout(function(){g.gW()},0)}else this.gW();else this.hn||this.Ks&&this.Ks()}};
c.prototype.dpa=function(a,d){var e=c.kta(a);return{xi:e.xi/d.colSpan,Zj:e.Zj/d.rowSpan}};c.prototype.Nwa=function(){this.GJ&&(clearTimeout(this.GJ),this.GJ=null);this.Jo&&this.Jo();this.hn=c.m2;if(this.jo&&this.$i()){for(var a=this.jo,d=0;d<a.length;d++){var e=a[d];c.Rh(e,"transitionend",this.pv);c.Rh(e,"webkitTransitionEnd",this.pv);this.yj(e,this.zW)}var f=this;this.Ny=setTimeout(function(){for(var c=0;c<a.length;c++){var d=a[c];f.gg(d,f.zW);f.yj(d,f.gL)}},0)}else this.PT(null)};c.prototype.PT=
function(a){this.Ny&&(clearTimeout(this.Ny),this.Ny=null);if(a){a.preventDefault();a.stopPropagation();a=a.target;this.gg(a,this.gL);c.fg(a,"transitionend",this.pv);c.fg(a,"webkitTransitionEnd",this.pv);var d=this.jo;if(d){for(var e=0;e<d.length;e++){var f=d[e];if(f===a){d.splice(e,1);this.Yp||(this.Yp=[]);var g=this.Yp;g.push(a);break}}1>d.length&&(this.jo=null)}}else if(!this.$i()&&(d=this.jo)){for(e=0;e<d.length;e++)f=d[e],this.Yp||(this.Yp=[]),g=this.Yp,g.push(f);this.jo=null}if(!this.jo){if(this.Yp){g=
this.Yp;for(e=0;e<g.length;e++)a=g[e],this.$i()&&this.gg(a,this.gL),d=a.style,this.lh?d.right="":d.left="",d.top="",this.My&&this.My(a);this.Yp=null}this.hn=c.hH;this.HW(!1);if(this.lo)for(g=this.lo,e=0;e<g.length;e+=2)a=g[e],d=g[e+1],f=this.P7(a),this.gg(a,f),this.yj(a,d),this.$i()&&(this.yj(a,this.EW),a.FH=f);this.AW()}};c.prototype.gW=function(){this.sz&&(clearTimeout(this.sz),this.sz=null);this.hn=c.n2;if(this.zl&&this.$i())for(var a=this.zl,d=0;d<a.length;d++){var e=a[d];c.Rh(e,"transitionend",
this.tv);c.Rh(e,"webkitTransitionEnd",this.tv);this.yj(e,this.GW);this.gg(e,this.FW)}else{if(this.zl)for(a=this.zl,d=0;d<a.length;d++)e=a[d],this.gg(e,this.FW);this.XT(null)}};c.prototype.XT=function(a){if(a){a.preventDefault();a.stopPropagation();a=a.target;this.gg(a,this.GW);c.fg(a,"transitionend",this.tv);c.fg(a,"webkitTransitionEnd",this.tv);var d=this.zl;if(d){for(var e=0;e<d.length;e++){var f=d[e];if(f===a){d.splice(e,1);this.Ts&&this.Ts(a);break}}1>d.length&&(this.zl=null)}}else if(!this.$i()&&
(d=this.zl)){for(e=0;e<d.length;e++)f=d[e],this.Ts&&this.Ts(f);this.zl=null}this.zl||(this.hn=null,this.Ks&&this.Ks(),this.rV&&(this.rV=!1,this.SD()))};c.m2=1;c.hH=2;c.n2=3;(function(){function b(a){for(;a;){a=a.nextSibling;var b=!0;if(a){var c=a.style;!c||c.visibility!==t&&c.display!==s||(b=!1)}if(a&&1===a.nodeType&&b)return a}return null}function d(a,b){for(var c=a;c;){var d=c.style;if(d&&(d.visibility===t||d.display===s))break;d=c.parentNode;if(d===b)return c;c=d}return null}function e(a,b){return b.Hd<
a.Hd?1:a.Hd<b.Hd?-1:0}function f(a){a&&a.sort(e);return a}function h(a){var b=null;a=g(a);a.hasClass("oj-masonrylayout-tile-1x1")?b={colSpan:1,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-2x1")?b={colSpan:2,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-3x1")?b={colSpan:3,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-1x2")?b={colSpan:1,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-1x3")?b={colSpan:1,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-2x2")?b={colSpan:2,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-2x3")?
b={colSpan:2,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-3x2")&&(b={colSpan:3,rowSpan:2});return b}function k(a){var b=null;a=g(a);a.hasClass("oj-masonrylayout-tile-1x1")?b="oj-masonrylayout-tile-1x1":a.hasClass("oj-masonrylayout-tile-2x1")?b="oj-masonrylayout-tile-2x1":a.hasClass("oj-masonrylayout-tile-3x1")?b="oj-masonrylayout-tile-3x1":a.hasClass("oj-masonrylayout-tile-1x2")?b="oj-masonrylayout-tile-1x2":a.hasClass("oj-masonrylayout-tile-1x3")?b="oj-masonrylayout-tile-1x3":a.hasClass("oj-masonrylayout-tile-2x2")?
b="oj-masonrylayout-tile-2x2":a.hasClass("oj-masonrylayout-tile-2x3")?b="oj-masonrylayout-tile-2x3":a.hasClass("oj-masonrylayout-tile-3x2")&&(b="oj-masonrylayout-tile-3x2");return b}function l(a,b){g(a).removeClass(b)}function m(a,b){g(a).addClass(b)}a.Na("oj.ojMasonryLayout",g.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{reorderHandle:null,beforeInsert:null,insert:null,beforeRemove:null,remove:null,beforeResize:null,resize:null,beforeReorder:null,reorder:null},_ComponentCreate:function(){this._super();
this.element.addClass("oj-masonrylayout oj-component");this.options.disabled&&a.r.warn(v);this.Rw=this.eventNamespace+"ReorderHandle";this.Aa={};this.Aa.Ah=!1;this.Aa.cf=!1;this.Aa.j_=!1;this.Aa.Hp=!1;this.Aa.zr=!1;this.Bs();this.ZB();this.$a(!0)},refresh:function(){this._super();var a="rtl"===this.jd()!==this.Th;a&&this.x5();this.$a(a)},Rp:function(){this._super();this.Fe&&this.$a(this.Fe[0])},Mr:function(){this._super();this.Fe&&this.$a(this.Fe[0])},jh:function(a,b,c){this.Dza(b);(a=this.Aa.cf.children().not(".oj-helper-hidden"))&&
0<a.length&&this.kh(b,c,{launcher:g(b.target).closest(":tabbable")})},$a:function(b){if(this.fC()){this.Fe=null;this.Th="rtl"===this.jd();this.Zr=a.A.Ke();var d=this.element,e=this.options;if(b){var g=this;this.Ts=function(a){g.TCa(a)};this.My=function(a){g.Mwa(a)};this.Yy=function(){g.kya()};this.Jo=function(){g.jya()};this.Ks=function(){g.iya()};if(!this.Zh){var q={};q.Ria=u;var p={Uia:"oj-masonrylayout-transition-resize-to",Tia:"oj-masonrylayout-transition-resize-to-fast",Yia:"oj-masonrylayout-tile-transition-move-to",
Xia:"oj-masonrylayout-tile-transition-move-to-fast",Via:"oj-masonrylayout-tile-transition-hide-from",Wia:"oj-masonrylayout-tile-transition-hide-to"};p.$ia=w;p.aja="oj-masonrylayout-tile-transition-show-to";p.Zia="oj-masonrylayout-tile-transition-resize-to";var n={};n.ME=m;n.WF=l;n.Efa=k;n.Nfa=h;n.Bia=this.Ts;n.nga=this.My;n.Oga=this.Yy;n.Nga=this.Jo;n.Mga=this.Ks;n.Eia=f;n.Ug=a.Components.Ug;n.wi=a.Components.wi;this.wBa();this.Zh=new c(d[0],this.Th,"enabled"===a.ga.QX(),q,p,n)}this.u8=function(a){g.JT(a)};
this.r8=function(a){g.GT(a)};this.t8=function(a){g.IT(a)};this.s8=function(a){g.HT(a)};this.p8=function(a){g.FT(a)};this.v8=function(a){g.KT(a)};e.reorderHandle&&this.lca()}else e=d.children(),this.oW(e),this.cW(e),this.tpa();this.Zh.Nn(b);b&&(this.Jj=function(){g.Gg()},a.A.Pk(d[0],this.Jj))}else d=!1,this.Fe&&(d=this.Fe[0]),this.Fe=[b||d]},_destroy:function(){this.Vu();var b=this.element;a.A.om(b[0],this.Jj);this.Jj=null;this.rBa();for(var c=this.Co(),d=c.length,e=0;e<d;e++)delete c[e].Hd;this.x5();
b.removeClass("oj-masonrylayout oj-component");this.options.reorderHandle&&this.Tca();this.Zx=this.Ks=this.Jo=this.Yy=this.My=this.Ts=this.v8=this.p8=this.s8=this.t8=this.r8=this.u8=null;this._super()},_setOption:function(b,c,d){var e=!1;switch(b){case "reorderHandle":this.Tca();e=!0;break;case "disabled":a.r.warn(v);break;case "contextMenu":a.A.Ke()||(this.Vu(),c&&this.Bs(c))}this._super(b,c,d);e&&c&&this.lca()},resizeTile:function(a,b){var c=this.Zh;c.DM()&&c.YL();var d=g(a),e=d[0],f=k(e);if(b==
f)throw Error("JET MasonryLayout: Unable to resize child "+a+" to style class "+b+" because "+b+" is already applied.");!1!==this._trigger("beforeResize",null,{tile:d,previousSizeStyleClass:f,sizeStyleClass:b})&&(this.aC||(this.aC=[]),this.aC.push(e,f,b),c.resizeTile(a,b))},insertTile:function(b,c){var d=this.Zh;d.DM()&&d.YL();isNaN(c)&&(c=-1);var e=g(b),f=e[0];!1!==this._trigger("beforeInsert",null,{tile:e,index:c})&&(f.c$=c,d.$i()&&e.addClass(w),e=f.style,e.top="-1px",this.Th?e.right="-1px":e.left=
"-1px",this.Cs(f,c),d.MHa(f,c),a.Components.Ug(f),this.Zx||(this.Zx=[]),this.Zx.push(b))},removeTile:function(b){var c=this.Zh;c.DM()&&c.YL();var d=g(b),e=d[0];if(a.le.GL(e)){var f=this.Co(!0),e=f.indexOf(e);0<e&&(this.OR=f[e-1])}!1!==this._trigger("beforeRemove",null,{tile:d})&&c.FHa(b)},Gg:function(){this.mo||this.c9||this.Zh.gJa()},TCa:function(a){var b=g(a),c=a.c$;delete a.c$;this.options.reorderHandle&&this.cW(b);this._trigger("insert",null,{tile:b,index:c})},Mwa:function(b){var c=g(b);this.options.reorderHandle&&
this.oW(c);a.Components.wi(b);b.parentNode.removeChild(b);this.AK(b);this._trigger("remove",null,{tile:c})},kya:function(){if(this.Zx){for(var a=this.Zh,b=this.Zx,c=0;c<b.length;c++)a.CJa(b[c]);this.Zx=null}if(this.aC){a=this.aC;for(c=0;c<a.length;c+=3){var b=a[c+1],d=a[c+2],b={tile:g(a[c]),previousSizeStyleClass:b,sizeStyleClass:d};this._trigger("resize",null,b)}this.aC=null}this.mo&&(this.KH?this.Zua():this.CQ&&this.q8())},jya:function(){this.c9=!0;this.aK=null;var b=document.activeElement;b&&a.A.np(this.element[0],
b)&&(this.aK=b)},iya:function(){this.c9=!1;var b=this.element[0];if(this.aK){var c=this.aK;this.aK=null;if(this.OR){if(c=this.OR,this.OR=null,c&&a.A.np(b,c)){var b=this.Co(b,!0),d=b.indexOf(c);0<=d&&d<b.length-1?a.le.NX(b[d+1]):a.le.NX(c)}}else a.A.np(b,c)?a.le.UE(c):a.le.NX(b)}},x5:function(){var a=this.Zh;a&&a.destroy();this.Zh=null},fC:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);
return c},Co:function(a){for(var b=this.element.children(u),c=b.length,d=[],e=0;e<c;e++){var f=b[e];if(!a||a&&f!==this.kf){var g=f.style;g.visibility!==t&&g.display!==s&&d.push(f)}}return d},wBa:function(){var a=this.Co();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.Hd||(c.Hd=b+1)}},tpa:function(){var a=this.Co();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.Hd||this.Cs(c,b)}},rBa:function(){var b=this.Co(),c=this.Co();f(c);for(var d=0;d<b.length;d++){var e=b[d],g=c[d];e!=g&&(a.Components.wi(g),
e.parentNode.insertBefore(g,e),a.Components.Ug(g),e=b.indexOf(g),e>d&&(b.splice(e,1),b.splice(d,0,g)))}},Cs:function(a,b){var c=this.Co();0>b&&(b=c.length);if(c)for(var d=0;d<c.length;d++){var e=c[d];e.Hd&&e.Hd>=b+1&&e.Hd++}a.Hd=b+1},AK:function(a){if(a.Hd){var b=this.Co();if(b)for(var c=0;c<b.length;c++){var d=b[c];d.Hd&&d.Hd>a.Hd&&d.Hd--}delete a.Hd}},Bs:function(a){var b=null,c=null;a||this.options.contextMenu||(b=this.element.attr("contextmenu"))&&(this.options.contextMenu="#"+b);if(a||this.options.contextMenu){b=
a||this.options.contextMenu;c=g.type(b);if("function"==c){try{b=b()}catch(d){b=null}g.type(b)}if(b){if(b=g(b)){b.css("display",s);c=this.Aa;if(!c)return;c.cf=b;c.Ah=!0}this.Aa.Ah&&a&&this.ZB()}}},ZB:function(){if(this.Aa&&this.Aa.Ah&&this.options.reorderHandle){var a=this.Aa.cf,b=this;a.on("ojselect",g.proxy(this.Gk,this));var c=!1;a.find("[data-oj-command]").each(function(){if(0===g(this).children("a").length){var a=g(this).attr("data-oj-command").slice(17);g(this).replaceWith(b.zj(a));g(this).addClass("oj-menu-item");
c=!0}});c&&a.ojMenu("refresh");this.Aa.j_=a.find("#"+y);this.Aa.Hp=a.find("#"+x);this.Aa.zr=a.find("#"+z)}},Vu:function(){var a=this.Aa;a&&a.Ah&&(a.Ah=!1,a.cf.off("ojselect"),a.cf=null)},Dza:function(a){var c=this.element,e=a.originalEvent.target,f=this.options.reorderHandle;a=!1;f&&(f=g(e).closest(f))&&0<f.length&&(a=!0);c=d(e,c[0]);this.Aa.tile=c;if(this.Aa.Ah){var e=this.Aa.JL,f=!1,h=this.Aa.j_;if(h){var k=h.hasClass("oj-helper-hidden");a||k?a&&k&&(h.removeClass("oj-helper-hidden"),f=!0):(h.addClass("oj-helper-hidden"),
f=!0);var q=h.hasClass(p),k=!1;e&&c===e&&(k=!0);k&&!q?(h.addClass(p),f=!0):!k&&q&&(h.removeClass(p),f=!0)}if(h=this.Aa.Hp)k=h.hasClass("oj-helper-hidden"),a||k?a&&k&&(h.removeClass("oj-helper-hidden"),f=!0):(h.addClass("oj-helper-hidden"),f=!0),q=h.hasClass(p),k=!1,e&&c!==e&&c!==b(e)||(k=!0),k&&!q?(h.addClass(p),f=!0):!k&&q&&(h.removeClass(p),f=!0);if(h=this.Aa.zr)k=h.hasClass("oj-helper-hidden"),a||k?a&&k&&(h.removeClass("oj-helper-hidden"),f=!0):(h.addClass("oj-helper-hidden"),f=!0),a=h.hasClass(p),
k=!1,e&&e!==c&&e!==b(c)||(k=!0),k&&!a?(h.addClass(p),f=!0):!k&&a&&(h.removeClass(p),f=!0);f&&this.Aa.cf.ojMenu("refresh")}},zj:function(a){var b=C[a];a=H[a];var c=g('\x3ca href\x3d"#"\x3e\x3c/a\x3e');c.text(this.F(a));c.wrap("\x3cli id\x3d"+b+"\x3e\x3c/li\x3e");return c.parent()},Aya:function(a){a&&(this.Aa.JL=a)},v$:function(a,b){if(a&&this.Aa.JL){var c=this.Aa.JL;this.Aa.JL=!1;this.Ara(c,a,b)}},Ara:function(a,c,d){var e=a.Hd-1,f=g(a);if(!1!==this._trigger("beforeReorder",null,{tile:f,fromIndex:e})){this.AK(a);
var h=c.Hd-1;d||h++;var k=this.element[0];d||(c=b(c));this.Cs(a,h);k.insertBefore(a,c);this.Zh.Nn(!0);this._trigger("reorder",null,{tile:f,fromIndex:e,toIndex:h})}},Gk:function(a,b){var c=b?b.item.attr("id"):void 0;c===y?this.Aya(this.Aa.tile):c===x?this.v$(this.Aa.tile,!0):c===z&&this.v$(this.Aa.tile,!1)},X7:function(a){var b=this.Co(!0);f(b);for(var c=b.length,d=0;d<c;d++)if(b[d]===a)return d;return-1},lca:function(){var a=this.element,b=a.children();this.cW(b);a.on("dragstart"+this.Rw,this.u8).on("dragenter"+
this.Rw,this.r8).on("dragover"+this.Rw,this.t8).on("dragleave"+this.Rw,this.s8).on("dragend"+this.Rw,this.p8).on("drop"+this.Rw,this.v8)},cW:function(a){var b=this.options;a.filter(b.reorderHandle).attr(n,"true").addClass(q);a.find(b.reorderHandle).attr(n,"true").addClass(q)},Tca:function(){var a=this.element,b=a.children();this.oW(b);a.off(this.Rw)},oW:function(a){var b=this.options;a.filter(b.reorderHandle).removeAttr(n).removeClass(q);a.find(b.reorderHandle).removeAttr(n).removeClass(q)},JT:function(a){var b=
this.options;if(b.reorderHandle){var c=a.originalEvent.target,c=g(c).closest(b.reorderHandle);if(!c||1>c.length)return}b.reorderHandle&&!this.mo&&(c=a.target,b=d(c,this.element[0]))&&(c=this.X7(b),b.GU=c,c={tile:g(b),fromIndex:c},!1!==this._trigger("beforeReorder",null,c)&&(a=a.originalEvent,this.ZR(b,a.pageX,a.pageY,a.dataTransfer)))},GT:function(b){if(this.mo){b=b.originalEvent;var c=b.relatedTarget,d=this.element[0],e=!1;c?e=d!=c&&!a.A.np(d,c):this.L5&&(e=(c=document.elementFromPoint(b.clientX,
b.clientY))&&(c==d||a.A.np(d,c)));e&&((this.L5=!1,this.ks)?this.kf&&(g(this.kf).css("display",""),this.Zh.Nn(!1,!0)):b.dataTransfer.dropEffect="none")}},IT:function(a){if(!this.mo)return!1;var b=a.originalEvent;b.dataTransfer.dropEffect="move";this.Ira(b.pageX,b.clientX,b.clientY);a.preventDefault();return!1},HT:function(b){if(this.mo){var c=b.originalEvent,d=c.relatedTarget;b=this.element[0];var e=!1;e=d?b!=d&&!a.A.np(b,d):(c=document.elementFromPoint(c.clientX,c.clientY))&&c!=b&&!a.A.np(b,c);e&&
(this.L5=!0,this.kf&&(g(this.kf).css("display",s),this.Zh.Nn(!1,!0)))}},u4:function(){if(this.tI){clearTimeout(this.tI);this.tI=null;var a=this.ks;a&&g(a).removeClass("oj-drag")}},FT:function(){this.u4();if(this.mo&&!this.EQ){var b=this.ks;if(b&&this.kf){var c=this.kf;a.A.np(this.element[0],b)&&(g(c).css("display",""),this.AK(c),c.parentNode.removeChild(c),g(b).css("display",""),this.Cs(b,b.Hd-1),this.Zh.Nn(!1,!0));delete b.GU}this.kf=this.ks=null;this.MH=this.KH=!1;this.YR=null;this.mo=this.CQ=!1}},
KT:function(a){if(!this.mo)return!1;var b=this.Zh;b.DM()&&b.YL();this.u4();b=a.originalEvent;this.Sra(this.ks,b.pageX,b.pageY);a.stopPropagation();return!1},ZR:function(b,c,d,e){this.mo=!0;this.DQ=this.MH=this.EQ=!1;this.ks=b;var f=this.element[0],h=k(b),q=this.kf=document.createElement("div");q.Hd=b.Hd;q.className=h+" oj-drop";var h=q.style,l=b.style;h.top=l.top;this.Th?h.right=l.right:h.left=l.left;h=g(b).offset();f.insertBefore(q,b);this.YR=c={left:c-h.left,top:d-h.top};g(b).addClass("oj-drag");
e.effectAllowed="move";e.setData("text/html",b.outerHTML);e.setDragImage(b,c.left,c.top);var u=this;this.tI=setTimeout(function(){u.DQ=!0;l.display=s;g(b).removeClass("oj-drag");u.tI=null;a.Components.Xt(b)},0)},Ira:function(a,c,e){this.MH=!0;if(this.DQ&&!this.KH){var f=this.element[0];c=document.elementFromPoint(c,e);c=d(c,f);e=!1;if(c){var h=g(c),k=this.options.reorderHandle;k&&(e=(e=h.find(k))&&0<e.length)}c&&c!==this.kf&&c!==this.ks&&e&&(h=g(f).offset(),e=b(this.kf),a=a-h.left>=c.offsetLeft+.5*
c.offsetWidth,this.AK(this.kf),a&&!this.Th||!a&&this.Th?(a=b(c))?(this.Cs(this.kf,a.Hd-1),f.insertBefore(this.kf,a)):(this.Cs(this.kf,c.Hd),f.appendChild(this.kf)):(this.Cs(this.kf,c.Hd-1),f.insertBefore(this.kf,c)),e!==b(this.kf)&&(this.KH=this.Zh.Nn(!1,!0)))}},Zua:function(){this.KH=!1},Sra:function(b,c,d){this.EQ=!0;var e=this.element[0],f=this.kf;this.kf=null;a.Components.wi(b);e.replaceChild(b,f);a.Components.Ug(b);b.Hd=f.Hd;f=b.style;f.display="";a.Components.wr(b);var h=g(e).offset(),k=this.YR;
f.top=d-k.top-h.top+r;c=c-k.left-h.left;this.Th?(f.right=e.offsetWidth-(c+g(b).outerWidth(!0))+r,f.left=""):f.left=c+r;this.YR=null;this.MH?this.CQ=this.Zh.Nn(!1,!0):this.q8()},q8:function(){this.DQ=this.MH=this.EQ=this.mo=this.CQ=!1;var a=this.ks;this.ks=null;var b=a.GU;delete a.GU;var c=this.X7(a),a={tile:g(a),fromIndex:b,toIndex:c};this._trigger("reorder",null,a)},getNodeBySubId:function(a){return this._super(a)},getSubIdByNode:function(a){return this._super(a)}});var r="px",t="hidden",s="none",
n="draggable",p="oj-disabled",q="oj-draggable",u=".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2",w="oj-masonrylayout-tile-transition-show-from",v="JET MasonryLayout: 'disabled' option not supported",y="ojmasonrylayoutcut",x="ojmasonrylayoutpastebefore",z="ojmasonrylayoutpasteafter",C={cut:y,"paste-before":x,"paste-after":z},
H={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter"}})();a.Components.Ua("ojMasonryLayout","baseComponent",{properties:{disabled:{type:"boolean"},reorderHandle:{type:"string"}},methods:{insertTile:{},refresh:{},removeTile:{},resizeTile:{}},extension:{_widgetName:"ojMasonryLayout"}});a.Components.register("oj-masonry-layout",a.Components.getMetadata("ojMasonryLayout"))});