(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"8b24":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-page",{staticClass:"flex flex-center"},[t("canvas",{staticStyle:{position:"absolute",width:"100%",height:"100%",background:"transparent"},attrs:{id:"renderCanvas","touch-action":"none"}}),e._v("\n  Our Houses will be housed here... "+e._s(e.currentPlan)+"\n\n  "),t("nav-links",{attrs:{prevPlan:e.prevPlan,nextPlan:e.nextPlan}})],1)},a=[],o=(t("5319"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("q-page-sticky",{attrs:{position:"left",offset:[18,18]}},[t("q-btn",{attrs:{fab:"",icon:"navigate_before",color:"primary",to:e.prevPlan}},[t("q-tooltip",[e._v(" Previous plan ")])],1)],1),t("q-page-sticky",{attrs:{position:"right",offset:[18,18]}},[t("q-btn",{attrs:{fab:"",icon:"navigate_next",color:"primary",to:e.nextPlan}},[t("q-tooltip",[e._v(" Next plan ")])],1)],1)],1)}),s=[],l=t("93c5"),c=t.n(l),i={name:"navLinks",props:{nextPlan:{type:String,required:!0},prevPlan:{type:String,required:!0}},data(){return{plans:c.a.listPlans()}}},u=i,p=t("2877"),h=t("de5e"),v=t("9c40"),f=t("05c0"),d=t("eebe"),g=t.n(d),P=Object(p["a"])(u,o,s,!1,null,null,null),x=P.exports;g()(P,"components",{QPageSticky:h["a"],QBtn:v["a"],QTooltip:f["a"]});var w=t("633b");let m,b;var y={name:"PageIndex",components:{navLinks:x},created(){c.a.setVueObj(this),this.changeRoutes()},mounted(){this.changeRoutes(),m=document.getElementById("renderCanvas"),b=new w["Engine"](m,!0,{preserveDrawingBuffer:!0,stencil:!0});let e=this.houseScene();b.runRenderLoop((function(){e.render()})),window.addEventListener("resize",(function(){b.resize()}))},watch:{$route(e,n){let t=e.path.replace(/\//,"");this.changeRoutes(t)}},methods:{changeRoutes:function(e){this.currentPlan=c.a.nextPlan().current;let{current:n,next:t,prev:r}=c.a.nextPlan(e);this.currentPlan=n,this.nextPlan=t,this.prevPlan=r},houseScene(){var e=new w["Scene"](b),n=new w["ArcRotateCamera"]("Camera",-Math.PI/2,Math.PI/3,25,new w["Vector3"](0,0,4.5),e);n.attachControl(m,!0);new w["HemisphericLight"]("hemiLight",new w["Vector3"](5,10,0),e);var t=function(e,n){return new w["Vector3"](e,0,n)},r=function(e){this.corner=e},a=function(e,n,t,r){var a=[],o=0,s=0,l=w["Vector3"].Zero();e[1].corner.subtractToRef(e[0].corner,l);var c=w["Vector3"].Zero();e[2].corner.subtractToRef(e[1].corner,c);for(var i=e.length,u=0;u<=i;u++){o=Math.acos(w["Vector3"].Dot(l,c)/(l.length()*c.length())),s=w["Vector3"].Cross(c,l).normalize().y;let t=new w["Vector3"](l.z,0,-1*l.x).normalize();l.normalize(),a[(u+1)%i]=e[(u+1)%i].corner.add(t.scale(n)).add(l.scale(s*n/Math.tan(o/2))),l=c.clone(),e[(u+3)%i].corner.subtractToRef(e[(u+2)%i].corner,c)}var p=[],h=[];for(u=0;u<i;u++)p.push(e[u].corner.x,e[u].corner.y,e[u].corner.z);for(u=0;u<i;u++)p.push(a[u].x,a[u].y,a[u].z);for(u=0;u<i;u++)h.push(u,(u+1)%i,i+(u+1)%i,u,i+(u+1)%i,u+i);var v=p.length;for(u=0;u<v/3;u++)p.push(p[3*u]),p.push(t),p.push(p[3*u+2]);v=h.length;for(var f=0;f<v/3;f++)h.push(h[3*f+2]+2*i,h[3*f+1]+2*i,h[3*f]+2*i);for(u=0;u<i;u++)h.push(u,u+2*i,(u+1)%i+2*i,u,(u+1)%i+2*i,(u+1)%i),h.push((u+1)%i+3*i,u+3*i,u+i,(u+1)%i+i,(u+1)%i+3*i,u+i);var d=[],g=[];w["VertexData"].ComputeNormals(p,h,d),w["VertexData"]._ComputeSides(w["Mesh"].FRONTSIDE,p,h,d,g);var P=new w["Mesh"]("custom",r),x=new w["VertexData"];return x.positions=p,x.indices=h,x.normals=d,x.uvs=g,x.applyToMesh(P),P},o=[-5,0,5,0,5,6,2,6,2,9,-5,9],s=[];for(let u=0;u<o.length/2;u++)s.push(new t(o[2*u],o[2*u+1]));var l=[];for(let u=0;u<s.length;u++)l.push(new r(s[u]));var c=.3,i=5;a(l,c,i,e);return e}},data(){return{plans:c.a.listPlans(),currentPlan:c.a.nextPlan().current,nextPlan:c.a.nextPlan().next,prevPlan:c.a.nextPlan().prev}}},V=y,_=t("9989"),k=Object(p["a"])(V,r,a,!1,null,null,null);n["default"]=k.exports;g()(k,"components",{QPage:_["a"],QPageSticky:h["a"],QBtn:v["a"],QTooltip:f["a"]})},"93c5":function(e,n,t){t("5319");const r=["plan1","plan2","plan3","plan4"];class a{constructor(){}setVueObj(e){this.vueObj=e}listPlans(){return r}nextPlan(e){let n,t=window.location.href.match(/\/#.*/)[0].replace(/\/#\//,"");e&&(t=e),n=0===t.length?0:r.indexOf(t);let a=n+1,o=n-1;a>=r.length&&(a=0),o<0&&(o=r.length-1);let s={current:r[n],next:r[a],prev:r[o]};return s}previousPlan(){}}e.exports=new a}}]);