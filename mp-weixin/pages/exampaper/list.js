(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exampaper/list"],{"097b":function(e,t,n){},"124b":function(e,t,n){"use strict";n.r(t);var r=n("14fd"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},"14fd":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,i){try{var s=e[u](i),c=s.value}catch(o){return void n(o)}s.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){u(i,r,a,s,c,"next",e)}function c(e){u(i,r,a,s,c,"throw",e)}s(void 0)}))}}var s={data:function(){return{list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",userid:""}},onLoad:function(e){this.userid=e.userid,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return i(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.page("exampaper",{page:e.num,limit:e.size});case 2:a=n.sent,1==e.num&&(t.list=[]),t.list=t.list.concat(a.data.list),0==a.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onDetailTap:function(e){var t=this;return i(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=[{key:"exampaperId",val:e}],n.next=3,t.$api.requestCondition("examrecord","saveExamrecord",a);case 3:u=n.sent,t.$utils.msg("已创建评测记录"),t.$utils.jump("./exam?id="+e+"&examrecordId="+u.id+"&paperUUID="+u.uuid);case 6:case"end":return n.stop()}}),n)})))()},search:function(){var e=this;return i(r.default.mark((function t(){var n,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.mescroll.num=1,n={page:e.mescroll.num,limit:e.mescroll.size},t.next=4,e.$api.page("exampaper",n);case 4:a=t.sent,1==e.mescroll.num&&(e.list=[]),e.list=e.list.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),e.mescroll.endSuccess(e.mescroll.size,e.hasNext);case 9:case"end":return t.stop()}}),t)})))()}}};t.default=s},"23db":function(e,t,n){"use strict";var r=n("097b"),a=n.n(r);a.a},ad34:function(e,t,n){"use strict";(function(e){n("b839");r(n("66fd"));var t=r(n("e846"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},cf74:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"c679"))}},a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},e846:function(e,t,n){"use strict";n.r(t);var r=n("cf74"),a=n("124b");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("23db");var i,s=n("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=c.exports}},[["ad34","common/runtime","common/vendor"]]]);