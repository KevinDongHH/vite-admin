import{y as a,a as r,E as l,M as c,I as s,K as u,N as n,as as m,al as d}from"./index-39c3c627.js";const f=["xlink:href","fill"],I=a({__name:"svgIcon",props:{name:{type:String,required:!0},color:{type:String,default:""},size:{type:[Number,String],default:16}},setup(e){const i=e,o=r(()=>`#${i.name}`);return(y,g)=>(l(),c("svg",{"aria-hidden":"true",style:u({width:e.size+"px",height:e.size+"px"})},[s("use",{"xlink:href":o.value,fill:e.color},null,8,f)],4))}}),t="el-icon",_="local-icon",x=a({name:"Icon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:16},color:{type:String,default:"inherit"}},setup(e){if(e.name.indexOf(t)===0)return()=>n(d,{size:e.size,color:e.color},[n(m(e.name.replace(`${t}-`,"")))]);if(e.name.indexOf(_)===0)return()=>n("i",{},[n(I,{...e})])}});export{x as _};