"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7366],{7366:(O,a,i)=>{i.r(a),i.d(a,{RecentPageModule:()=>M});var g=i(6019),l=i(9010),o=i(4475),d=i(1979),u=i(4762),n=i(9619),m=i(5375),P=i(6689);function Z(t,c){if(1&t){const e=n.EpF();n.TgZ(0,"ion-item-sliding"),n.TgZ(1,"ion-item"),n.TgZ(2,"ion-label"),n._uU(3),n.qZA(),n.qZA(),n.TgZ(4,"ion-item-options",7),n.TgZ(5,"ion-item-option",8),n.NdJ("click",function(){const C=n.CHM(e).$implicit;return n.oxw().removeItem(C)}),n._uU(6,"Remove"),n.qZA(),n.qZA(),n.qZA()}if(2&t){const e=c.$implicit;n.xp6(3),n.Oqu(e.word)}}const f=[{path:"",component:(()=>{class t{constructor(e,r){this.dictionary=e,this.storage=r,this.recentWords=[]}ngOnInit(){this.getRecentWords()}getRecentWords(){return(0,u.mG)(this,void 0,void 0,function*(){const e=yield this.storage.get("recentWords");console.log("recentWords",e),this.recentWords=JSON.parse(e)})}removeItem(e){const r=this.recentWords.filter(s=>s.word!==e.word);this.storage.set("recentWords",JSON.stringify(r)),this.recentWords=r}removeAll(){this.storage.set("recentWords",JSON.stringify([])),this.recentWords=[]}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(m.E),n.Y36(P.V))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-recent"]],decls:15,vars:2,consts:[[3,"translucent"],["slot","start"],["slot","end"],["size","small","fill","clear",3,"click"],[1,"container"],["lines","full"],[4,"ngFor","ngForOf"],["side","end"],["color","danger",3,"click"]],template:function(e,r){1&e&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Recent Words"),n.qZA(),n.TgZ(6,"ion-buttons",2),n.TgZ(7,"ion-button",3),n.NdJ("click",function(){return r.removeAll()}),n._uU(8," Clear "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"ion-content"),n.TgZ(10,"div",4),n.TgZ(11,"ion-card"),n.TgZ(12,"ion-card-content"),n.TgZ(13,"ion-list",5),n.YNc(14,Z,7,1,"ion-item-sliding",6),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.Q6J("translucent",!0),n.xp6(14),n.Q6J("ngForOf",r.recentWords))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.YG,o.W2,o.PM,o.FN,o.q_,g.sg,o.td,o.Ie,o.Q$,o.IK,o.u8],styles:['.container[_ngcontent-%COMP%]{padding:16px}.container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin-bottom:16px}.container[_ngcontent-%COMP%]   ion-card.user-profile-card[_ngcontent-%COMP%]{--background: #003e84}.container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fff}.container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-family:"Roboto Slab"}.container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:24px}.container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] > ion-list[_ngcontent-%COMP%]{margin:0 -16px;padding:0}']}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.Bz.forChild(f)],d.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[g.ez,l.u5,o.Pc,p]]}),t})()}}]);