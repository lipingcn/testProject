import{g as t,s as a,c as s,a as e,o as n,b as i,w as o,i as c,d as l,e as d,n as r,f as h,h as f,j as u}from"./index-cc5ee12a.js";const m=((t,a)=>{const s=t.__vccOpts||t;for(const[e,n]of a)s[e]=n;return s})({data:()=>({canW:0,canH:0,rate:1}),onLoad(){},mounted(){t({success:t=>{console.log("info.windowWidth;",t.windowWidth),this.rate=t.windowWidth/375,console.log(this.rate)}}),this.$nextTick((()=>{console.log(this.$el)}))},methods:{saveBtn(){a({title:"支付成功"})},initCanvas(){s().in(this).select("#canvasbox").boundingClientRect((t=>{if(t){this.canH=t.height,this.canW=t.width;const a=e("firstCanvas",this);let s=" 'PingFang SC',tahoma,arial,'helvetica neue','hiragino sans gb','microsoft yahei',sans-serif",n="真爱婚礼策划";this.drawText(s,a,n,this.canW,52*this.rate),a.draw()}})).exec()},drawText(t,a,s,e,n){a.setFillStyle("#111111"),a.font="20px"+t;let i=this.mathCenter(a,s);a.fillText(s,i,n)},mathCenter(t,a){let s=t.measureText(a).width;return(this.canW-s)/2}}},[["render",function(t,a,s,e,m,x){const g=c,v=h,w=f,b=u;return n(),i(g,{class:"content"},{default:o((()=>[l(g,{ref:"canvasboxs",id:"canvasbox"},{default:o((()=>[l(g,{class:"title"},{default:o((()=>[d("农贸市场支付系统")])),_:1}),l(g,{class:"subtitle"},{default:o((()=>[d("Farmers Market Payment System")])),_:1}),l(g,{class:"imgbox"},{default:o((()=>[l(v,{src:"https://xqimg.imedao.com/169eba43622951d3fe1ddf22.jpeg!800.jpg"})])),_:1})])),_:1},512),l(g,{class:"btnbox"},{default:o((()=>[l(w,{type:"primary",onClick:x.saveBtn},{default:o((()=>[d("支付")])),_:1},8,["onClick"])])),_:1}),l(b,{style:r({width:m.canW+"px",height:m.canH+"px"}),"canvas-id":"firstCanvas",id:"firstCanvas"},null,8,["style"])])),_:1})}],["__scopeId","data-v-12c9b5dd"]]);export{m as default};
