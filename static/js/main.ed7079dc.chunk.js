(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,function(e,t,a){e.exports={wrapper:"checklist_wrapper__2r5J-",table:"checklist_table__2B9Dl",tr:"checklist_tr__3QxYy",yes:"checklist_yes__2I-TL",no:"checklist_no__1yAzG",right:"checklist_right__3yCu5"}},,,,,,,function(e,t,a){e.exports={wrapper:"current_wrapper__2SSbE",label:"current_label__pftsV",labels:"current_labels__1rTSd",texts:"current_texts__DRd7J",url:"current_url__UhTOu",text:"current_text__3yqig",errorText:"current_errorText__1asPS",current:"current_current__3oXia",buttons:"current_buttons__1KuQj",button:"current_button__2jl6b",buttonInactive:"current_buttonInactive__2vS0N",a:"current_a__27eMo",loader:"current_loader__1f9mS"}},function(e,t,a){e.exports={wrapper:"input_wrapper__3EBGB",input:"input_input__cMBI-",group:"input_group__o2jGU",left:"input_left__2A2ml",right:"input_right__2nJGG",button:"input_button__1Y_Ue",buttonInactive:"input_buttonInactive__3VvCz"}},function(e,t,a){e.exports={wrapper:"rankNew_wrapper__3nG5a",top:"rankNew_top__t5Ftf",bottom:"rankNew_bottom__I_oVk",rankWrapper:"rankNew_rankWrapper__1jPvT",rank:"rankNew_rank__1Ro7-",labelWrapper:"rankNew_labelWrapper__2v-CI",loaderWrapper:"rankNew_loaderWrapper__2Zf3R",loader:"rankNew_loader__2yvs5",spin:"rankNew_spin__1_ttB"}},function(e,t,a){"use strict";a.r(t),a.d(t,"get",(function(){return c})),a.d(t,"post",(function(){return l})),a.d(t,"fullUrl",(function(){return i})),a.d(t,"error",(function(){return o}));var n=a(7),r=a.n(n),s="ec2-18-144-9-25.us-west-1.compute.amazonaws.com";function c(e){return new Promise((function(t,a){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=fetch,n.next=3,r.a.awrap(i(e));case 3:n.t1=n.sent,n.t2=function(e){return e.json()},n.t3=function(e){t(e)},n.t4=function(e){return a(e)},(0,n.t0)(n.t1).then(n.t2).then(n.t3).catch(n.t4);case 8:case"end":return n.stop()}}))}))}function l(e,t){return new Promise((function(a,n){return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.t0=fetch,s.next=3,r.a.awrap(i(e));case 3:s.t1=s.sent,s.t2={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},s.t3=function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(e.json());case 2:t=n.sent,a(t);case 4:case"end":return n.stop()}}))},s.t4=function(e){return n(e)},(0,s.t0)(s.t1,s.t2).then(s.t3).catch(s.t4);case 8:case"end":return s.stop()}}))}))}function i(e){return new Promise((function(t,a){t("http://"+s+":9000"+e)}))}function o(e){console.log("request failed: "+e)}},,function(e,t,a){e.exports={wrapper:"rank_wrapper__xEmS5",top:"rank_top__1n9OC",bottom:"rank_bottom__10YV8",label:"rank_label__wtZzZ",rank:"rank_rank__1IY-c",rankAboveLimit:"rank_rankAboveLimit__2EdWt",loaderLabel:"rank_loaderLabel__2MbeA",labelWrapper:"rank_labelWrapper__1_5he",loaderWrapper:"rank_loaderWrapper__1M81k",loader:"rank_loader__XPYPp",spin:"rank_spin__2eElI"}},function(e,t,a){e.exports={tr:"elementTable_tr__vSGjo",tdLeft:"elementTable_tdLeft__2X0Dw",tdRight:"elementTable_tdRight__37Aza",input:"elementTable_input__37uEX"}},function(e,t,a){"use strict";a.r(t),a.d(t,"pushElements",(function(){return l})),a.d(t,"updateElement",(function(){return i})),a.d(t,"createSheet",(function(){return o}));var n=a(7),r=a.n(n),s=a(11),c=[];function l(e){e.forEach((function(e){c.push(e)}))}function i(e,t){c.forEach((function(a){a.type===e.type&&a.text===e.text&&(a.newText=t)}))}function o(e){var t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={header:e,content:c},a.next=3,r.a.awrap(s.post("/sendsheetdata",t));case 3:return a.t0=window,a.next=6,r.a.awrap(s.fullUrl("/getsheet"));case 6:a.t1=a.sent,a.t0.open.call(a.t0,a.t1);case 8:case"end":return a.stop()}}))}},,function(e,t,a){e.exports={wrapper:"bar_wrapper__1Q5Tq",authentication:"bar_authentication__25OGB"}},function(e,t,a){e.exports={input:"topSection_input__YGNBm",current:"topSection_current__10GBa"}},function(e,t,a){e.exports={table:"editorTable_table__38Zug",loader:"editorTable_loader__3QcVE"}},,,function(e,t,a){e.exports={loader:"loader_loader__teU5F",spin:"loader_spin__3q4UF"}},,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s);a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30),a(31);var l=a(7),i=a.n(l),o=a(2),u=a(3),p=a(5),m=a(4),d=a(6),h=a(12),f=a(9),_=a.n(f),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:"",keyword:"",country:"United States",city:"",submitted:!1,inputClass:"form-control"},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.url&&""!==a.state.keyword&&a.sendInput()},a.handleInputChange=function(e){e.preventDefault(),a.setState(Object(h.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"sendInput",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(this.setState({submitted:!0}));case 2:return e.next=4,i.a.awrap(this.props.input(this.state));case 4:this.setState({url:"",keyword:""});case 5:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:_.a.left},r.a.createElement("div",{className:_.a.group},r.a.createElement("label",{className:_.a.label},"URL:"),r.a.createElement("input",{className:_.a.input,name:"url",value:this.state.url,onChange:this.handleInputChange})),r.a.createElement("div",{className:_.a.group},r.a.createElement("label",{className:_.a.label},"Target:"),r.a.createElement("input",{className:_.a.input,name:"keyword",value:this.state.keyword,onChange:this.handleInputChange}))),r.a.createElement("div",{className:_.a.right},this.state.submitted?r.a.createElement("button",{disabled:!0,className:_.a.buttonInactive},"Tweakk It"):r.a.createElement("button",{type:"submit",className:_.a.button},"Tweakk It"))))}}]),t}(n.Component),E=a(17),v=a.n(E),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:v.a.wrapper},r.a.createElement("span",null,r.a.createElement("strong",null,"Tweakkt.com")),r.a.createElement("span",{className:v.a.authentication},r.a.createElement("strong",null,"Login | Logout")))}}]),t}(n.Component),y=a(8),N=a.n(y),w=a(22),g=a.n(w),O=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:g.a.loader})}}]),t}(n.Component),j=a(11),x=a(15),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1,date:{isLoaded:!1,date:{}},valid:{},isLoaded:!1,time:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(Object(j.post)("/",this.props.input));case 2:return e=a.sent,this.setState({valid:{loaded:!0,siteIsValid:e.siteIsValid,locationIsValid:e.locationIsValid}}),this.props.valid(this.state.valid),a.next=7,i.a.awrap(Object(j.get)("/getdate"));case 7:t=a.sent,this.setState({date:{isLoaded:!0,date:t},isLoaded:!0,time:this.getTime()});case 9:case"end":return a.stop()}}),null,this)}},{key:"createSheet",value:function(){var e={url:this.props.input.url,keyword:this.props.input.keyword,country:this.props.input.country,city:"",time:this.getTime()};x.createSheet(e)}},{key:"getTime",value:function(){var e=new Date,t={hours:e.getHours(),minutes:e.getMinutes()},a={};return(a=t.hours>12?{hours:t.hours-12,minutes:t.minutes,modifier:"pm"}:0===t.hours?{hours:12,minutes:t.minutes,modifier:"am"}:{hours:t.hours,minutes:t.minutes,modifier:"am"}).minutes/10<1&&(a.minutes="0"+a.minutes),a}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:N.a.wrapper},this.state.valid.loaded?r.a.createElement("div",null,r.a.createElement("div",{className:N.a.current},r.a.createElement("div",{className:N.a.labels},r.a.createElement("label",{className:N.a.label},"URL:"),r.a.createElement("label",{className:N.a.label},"target:"),r.a.createElement("label",{className:N.a.label},"date:")),r.a.createElement("div",{className:N.a.texts},this.state.valid.siteIsValid?r.a.createElement("label",{className:N.a.url},r.a.createElement("a",{className:N.a.a,href:this.props.input.url,target:"_blank",rel:"noopener noreferrer"},this.props.input.url)):r.a.createElement("label",{className:N.a.errorText},"NOT VALID"),r.a.createElement("label",{className:N.a.text},this.props.input.keyword),this.state.date.isLoaded?r.a.createElement("label",{className:N.a.text},this.state.date.date.month," ",this.state.date.date.day,","," ",this.state.date.date.year," -"," ",this.state.time.hours,":",this.state.time.minutes," ",this.state.time.modifier):r.a.createElement("label",null,r.a.createElement(O,null)))),r.a.createElement("div",{className:N.a.buttons},r.a.createElement("button",{className:N.a.button,onClick:function(){return e.createSheet()}},"Save"),r.a.createElement("button",{disabled:!0,className:N.a.buttonInactive},"Send"))):r.a.createElement("div",{className:N.a.loader},r.a.createElement(O,null)))}}]),t}(n.Component),T=a(18),I=a.n(T),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:"",keyword:"",country:"",city:"",submitted:!1,valid:!0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"changeInput",value:function(e){this.setState({url:e.url,keyword:e.keyword,country:e.country,city:e.city,submitted:e.submitted}),this.props.overallInput(e)}},{key:"changeValid",value:function(e){var t=!1;e.siteIsValid&&e.locationIsValid&&(t=!0),this.setState({valid:t}),this.props.valid(this.state.valid)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(k,null),r.a.createElement("div",{className:I.a.input},r.a.createElement(b,{input:this.changeInput.bind(this)})),this.state.submitted?r.a.createElement("div",{className:I.a.current},r.a.createElement(L,{input:this.state,valid:this.changeValid.bind(this)})):r.a.createElement("div",null))}}]),t}(n.Component),C=a(1),R=a.n(C),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:R.a.wrapper},this.props.data.isLoaded?r.a.createElement("table",{className:R.a.table},r.a.createElement("tbody",null,r.a.createElement("tr",{className:R.a.tr},this.props.data.checklist.title.valid?r.a.createElement("td",{className:R.a.yes},r.a.createElement("span",{className:"fa fa-check"})):r.a.createElement("td",{className:R.a.no},r.a.createElement("span",{className:"fa fa-times"})),r.a.createElement("td",{className:R.a.right},"Title exists")),r.a.createElement("tr",{className:R.a.tr},this.props.data.checklist.desc.valid?r.a.createElement("td",{className:R.a.yes},r.a.createElement("span",{className:"fa fa-check"})):r.a.createElement("td",{className:R.a.no},r.a.createElement("span",{className:"fa fa-times"})),r.a.createElement("td",{className:R.a.right},"Description exists")),r.a.createElement("tr",{className:R.a.tr},this.props.data.checklist.h1.valid?r.a.createElement("td",{className:R.a.yes},r.a.createElement("span",{className:"fa fa-check"})):r.a.createElement("td",{className:R.a.no},r.a.createElement("span",{className:"fa fa-times"})),r.a.createElement("td",{className:R.a.right},"H1 (exactly one) exists")),r.a.createElement("tr",{className:R.a.tr},this.props.data.checklist.title.targetExists?r.a.createElement("td",{className:R.a.yes},r.a.createElement("span",{className:"fa fa-check"})):r.a.createElement("td",{className:R.a.no},r.a.createElement("span",{className:"fa fa-times"})),r.a.createElement("td",{className:R.a.right},"Target appears in Title")),r.a.createElement("tr",{className:R.a.tr},this.props.data.checklist.desc.targetExists?r.a.createElement("td",{className:R.a.yes},r.a.createElement("span",{className:"fa fa-check"})):r.a.createElement("td",{className:R.a.no},r.a.createElement("span",{className:"fa fa-times"})),r.a.createElement("td",{className:R.a.right},"Target appears in Description")),r.a.createElement("tr",{className:R.a.tr},this.props.data.checklist.h1.targetExists?r.a.createElement("td",{className:R.a.yes},r.a.createElement("span",{className:"fa fa-check"})):r.a.createElement("td",{className:R.a.no},r.a.createElement("span",{className:"fa fa-times"})),r.a.createElement("td",{className:R.a.right},"Target appears in H1")),r.a.createElement("tr",{className:R.a.tr},this.props.data.checklist.h2.targetExists?r.a.createElement("td",{className:R.a.yes},r.a.createElement("span",{className:"fa fa-check"})):r.a.createElement("td",{className:R.a.no},r.a.createElement("span",{className:"fa fa-times"})),r.a.createElement("td",{className:R.a.right},"Target appears in H2")))):r.a.createElement(O,null))}}]),t}(n.Component),V=a(13),M=a.n(V),W=(n.Component,a(10)),D=a.n(W),B=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){console.log(this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:D.a.wrapper},this.props.data.error||"ERROR"===this.props.data.keywordRank.keywordRank?r.a.createElement("div",{className:"error"},this.props.error()):r.a.createElement("div",null,r.a.createElement("div",{className:D.a.top},r.a.createElement("div",{className:D.a.labelWrapper},r.a.createElement("span",{className:D.a.label},"Google Rank:"," ")),this.props.data.isLoaded?r.a.createElement("div",{className:D.a.rankWrapper},r.a.createElement("span",{className:D.a.rank},this.props.data.keywordRank.keywordRank.rank)):r.a.createElement("div",{className:D.a.loaderWrapper},r.a.createElement("span",{className:D.a.loader}))),r.a.createElement("div",{className:D.a.bottom},r.a.createElement("span",null,"* Avg rank in USA"))))}}]),t}(n.Component),U=a(19),G=a.n(U),P=a(14),J=a.n(P),Y=a(23),z=a(15),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={type:"<"+a.props.data.type+">",text:a.props.data.text,target:a.props.target,edit:!1,edited:!1,newText:a.props.data.newText},a.handleInputChange=function(e){e.preventDefault(),a.setState(Object(h.a)({},e.target.name,e.target.value),(function(){Object(z.updateElement)(a.props.data,a.state.newText)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"highlight",value:function(e){var t=!1,a="",n=new RegExp(this.state.target,"gi"),s=e.split(n);return 1===s.length?t=!1:(t=!0,a=(a=e.replace(s[0],"")).replace(s[1],"")),r.a.createElement("span",null,t?r.a.createElement("span",null,s[0],r.a.createElement("strong",null,a),s[1]):r.a.createElement("span",null,s[0]))}},{key:"render",value:function(){return r.a.createElement("tr",{className:J.a.tr},r.a.createElement("td",{className:J.a.tdLeft},this.state.type," ",this.highlight(this.state.text)," "),r.a.createElement("td",{className:J.a.tdRight},r.a.createElement(Y.a,{placeholder:this.state.type,className:J.a.input,name:"newText",value:this.state.newText,onChange:this.handleInputChange})))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={elements:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.props.data.isLoaded&&this.props.input.isLoaded?r.a.createElement("table",{className:G.a.table},r.a.createElement("tbody",null,this.props.data.tree.tree.map((function(t){return r.a.createElement(q,{key:t.text,data:t,target:e.props.input.input.keyword})})))):r.a.createElement("div",{className:G.a.loader},r.a.createElement(O,null)))}}]),t}(n.Component),Q=(a(11),a(15)),X=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={basicMeta:{isLoaded:!1,basicMeta:{},error:!1},socialMeta:{isLoaded:!1,socialMeta:{},error:!1},keywordRank:{isLoaded:!1,keywordRank:{},error:!1},checklist:{isLoaded:!1,checklist:{},error:!1},tree:{isLoaded:!1,tree:{},error:!1},date:{isLoaded:!1,date:{},error:!1},input:{isLoaded:!1,input:{},error:!1}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"resetState",value:function(){this.setState({basicMeta:{isLoaded:!1,basicMeta:{},error:!1},socialMeta:{isLoaded:!1,socialMeta:{},error:!1},keywordRank:{isLoaded:!1,keywordRank:{},error:!1},checklist:{isLoaded:!1,checklist:{},error:!1},tree:{isLoaded:!1,tree:{},error:!1},date:{isLoaded:!1,date:{},error:!1},input:{isLoaded:!1,input:{},error:!1}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(H,{data:this.state.tree,input:this.state.input,error:this.componentError}),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-4"},r.a.createElement(B,{data:this.state.keywordRank,error:this.componentError}),r.a.createElement("br",null),r.a.createElement(A,{data:this.state.checklist,error:this.componentError}),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"}))}},{key:"getLocal",value:function(e,t){var a=this;return new Promise((function(n,r){Object(j.get)(e).then((function(e){var r;a.setState(Object(h.a)({},t,(r={isLoaded:!0},Object(h.a)(r,t,e),Object(h.a)(r,"error",!1),r))),n(e)})).catch((function(e){a.setState(Object(h.a)({},t,{isLoaded:!0,error:!0})),r(e)}))}))}},{key:"componentError",value:function(){return r.a.createElement("p",{className:"text-danger"},r.a.createElement("strong",null,"ERROR: COULD NOT RETRIEVE"))}},{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.getLocal("/getbasicmeta","basicMeta"),this.getLocal("/getsocialmeta","socialMeta"),this.getLocal("/getchecklist","checklist"),this.getLocal("/getheadertree","tree").then((function(e){return Q.pushElements(e.tree)})),this.getLocal("/getdate","data"),this.getLocal("/getinput","input"),this.getLocal("/getkeywordranking","keywordRank");case 7:case"end":return e.stop()}}),null,this)}}]),t}(n.Component),Z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={input:{url:"",keyword:"",country:"",city:""},showBottom:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"modifyInput",value:function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({input:{url:e.url,keyword:e.keyword,country:e.country,city:e.city}});case 1:case"end":return t.stop()}}),null,this)}},{key:"changeValid",value:function(e){e&&this.setState({showBottom:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(S,{overallInput:this.modifyInput.bind(this),valid:this.changeValid.bind(this)}),this.state.showBottom?r.a.createElement(X,{input:this.state.input}):null)}}]),t}(n.Component);c.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.ed7079dc.chunk.js.map