import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-DmM0KDA7.js";const b=({initialCount:h=0,maxCount:s=100})=>{const[n,i]=y.useState(h),f=()=>{i(t=>Math.min(t+1,s))},j=()=>{i(t=>Math.max(t-1,0))};return e.jsx("div",{className:"ui",children:e.jsxs("div",{className:"ui-bg-blue-500 ui-p-5 ui-rounded-2xl",children:[e.jsxs("div",{children:["This is a visual change",n]}),e.jsxs("div",{children:[e.jsx("button",{onClick:j,disabled:n<=0,className:"ui-bg-red-700",children:"Decrease"}),e.jsx("button",{onClick:f,disabled:n>=s,children:"Increase"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"number",min:1,max:s-n,defaultValue:1}),e.jsx("button",{onClick:()=>{const t=document.querySelector("input");t&&n+Number(t.value)<=s&&i(v=>v+Number(t.value))},children:"Add Custom Amount"})]})]})})};b.__docgenInfo={description:"",methods:[],displayName:"CustomComponent",props:{initialCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}}}};const N={title:"Hihi/CustomComponent",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{initialCount:{control:{type:"number"}},maxCount:{control:{type:"number"}}}},a={args:{initialCount:0}},r={args:{maxCount:10}},o={args:{maxCount:50,initialCount:30}};var u,c,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    initialCount: 0
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    maxCount: 10
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var x,C,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    maxCount: 50,
    initialCount: 30
  }
}`,...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const A=["From0","MaxCount10","MaxCount50StartingAt30"];export{a as From0,r as MaxCount10,o as MaxCount50StartingAt30,A as __namedExportsOrder,N as default};
