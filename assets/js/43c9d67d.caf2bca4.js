"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[102],{9979:function(e,t,i){i.d(t,{n:function(){return a}});var n=i(8385),r=i(9231),l=i(5775),o={Text:n.xv,HTMLText:n.Jv,Number:n.Mr,Checkbox:n.XZ,Color:n.Il,ImageUrl:n.ef,Range:n.e6,Select:n.Ph,Alignment:n.v2,TextAlign:n.PH};function a(e){var t=e.type,i=e.args,n=e.defaultValue,a=void 0===n?"":n,u=(0,r.useState)(a),s=u[0],d=u[1],m=o[t](i).render;return r.createElement(l.T,null,m&&r.createElement(m,{value:s,onChange:d,options:i}))}},900:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var n=i(5086),r=i(9126),l=(i(9231),i(4852)),o=i(9979),a=["components"],u={sidebar_position:3},s="Number",d={unversionedId:"Fields/Number",id:"Fields/Number",title:"Number",description:"Generate a simple number field",source:"@site/docs/Fields/Number.mdx",sourceDirName:"Fields",slug:"/Fields/Number",permalink:"/visual-editor/docs/Fields/Number",editUrl:"https://github.com/boxraiser/visual-editor/tree/main/docs/docs/Fields/Number.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Repeater",permalink:"/visual-editor/docs/Fields/Repeater"},next:{title:"Checkbox",permalink:"/visual-editor/docs/Fields/Checkbox"}},m={},p=[{value:"Options",id:"options",level:2},{value:"Preview",id:"preview",level:2}],c={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"number"},"Number"),(0,l.kt)("p",null,"Generate a simple number field"),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Number('fieldName', {\n  label: 'Label of the field',          // (optional)\n  multiline: true,                      // Allow multiple line of text (default to false)\n  help: 'Some additional informations', // (optional)\n  default: 'Default value',             // default to ''\n})\n")),(0,l.kt)("h2",{id:"preview"},"Preview"),(0,l.kt)(o.n,{type:"Number",args:{label:"Single line of text",help:"With some help"},mdxType:"FieldPreview"}))}f.isMDXComponent=!0}}]);