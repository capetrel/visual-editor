"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27],{9979:function(e,t,i){i.d(t,{n:function(){return a}});var n=i(8385),l=i(9231),o=i(5775),r={Text:n.xv,HTMLText:n.Jv,Number:n.Mr,Checkbox:n.XZ,Color:n.Il,ImageUrl:n.ef,Range:n.e6,Select:n.Ph,Alignment:n.v2,TextAlign:n.PH};function a(e){var t=e.type,i=e.args,n=e.defaultValue,a=void 0===n?"":n,s=(0,l.useState)(a),d=s[0],u=s[1],c=r[t](i).render;return l.createElement(o.T,null,c&&l.createElement(c,{value:d,onChange:u,options:i}))}},734:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=i(5086),l=i(9126),o=(i(9231),i(4852)),r=i(9979),a=["components"],s={sidebar_position:101},d="TextAlign",u={unversionedId:"Fields/TextAlign",id:"Fields/TextAlign",title:"TextAlign",description:"Generate a radio field to select multiple text alignments",source:"@site/docs/Fields/TextAlign.mdx",sourceDirName:"Fields",slug:"/Fields/TextAlign",permalink:"/visual-editor/docs/Fields/TextAlign",editUrl:"https://github.com/boxraiser/visual-editor/tree/main/docs/docs/Fields/TextAlign.mdx",tags:[],version:"current",sidebarPosition:101,frontMatter:{sidebar_position:101},sidebar:"tutorialSidebar",previous:{title:"Alignement",permalink:"/visual-editor/docs/Fields/Alignment"},next:{title:"Custom Field",permalink:"/visual-editor/docs/Fields/CustomField"}},c={},p=[{value:"Options",id:"options",level:2},{value:"Preview",id:"preview",level:2}],m={toc:p};function g(e){var t=e.components,i=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"textalign"},"TextAlign"),(0,o.kt)("p",null,"Generate a radio field to select multiple text alignments"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"TextAlign('fieldName', {\n  label: 'Label of the field',          // (optional)\n  help: 'Some additional informations', // (optional)\n  default: 'Default value',             // default to '' (optional)\n})\n")),(0,o.kt)("h2",{id:"preview"},"Preview"),(0,o.kt)(r.n,{type:"TextAlign",args:{label:"Single line of text",help:"With some help"},mdxType:"FieldPreview"}))}g.isMDXComponent=!0}}]);