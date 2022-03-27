/**
 * Minified by jsDelivr using Terser v5.7.1.
 * Original file: /gh/bhsd-harry/LLWiki@2.17/otherwiki/mediawiki.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 !function(e){"use strict";function t(e,t,n){return(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w.\-:]/)&&e.eat(";"))?n+=" mw-mnemonic":t}e.defineMode("mediawiki",(function(n){var a,i,r,o,m,c,k,s,u=n.mwConfig,l=new RegExp("^(?:"+u.urlProtocols+")","i"),p={b:!0,bdi:!0,del:!0,i:!0,ins:!0,u:!0,font:!0,big:!0,small:!0,sub:!0,sup:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,cite:!0,code:!0,em:!0,s:!0,strike:!0,strong:!0,tt:!0,var:!0,div:!0,center:!0,blockquote:!0,ol:!0,ul:!0,dl:!0,table:!0,caption:!0,pre:!0,ruby:!0,rb:!0,rp:!0,rt:!0,rtc:!0,p:!0,span:!0,abbr:!0,dfn:!0,kbd:!0,samp:!0,data:!0,time:!0,mark:!0,br:!0,wbr:!0,hr:!0,li:!0,dt:!0,dd:!0,td:!0,th:!0,tr:!0,noinclude:!0,includeonly:!0,onlyinclude:!0,translate:!0,img:!0},w={br:!0,hr:!0,wbr:!0,img:!0},f=[];function h(e,t,n){return(a||t.isStrong)&&(e+=" strong"),(i||t.isEm)&&(e+=" em"),g(e,t,n)}function g(e,t,n){var a="";switch(t.nTemplate){case 0:break;case 1:a+="-template";break;case 2:a+="-template2";break;default:a+="-template3"}switch(t.nExt){case 0:break;case 1:a+="-ext";break;case 2:a+="-ext2";break;default:a+="-ext3"}return t.nLink>0&&(a+="-link"),""!==a&&(e="mw"+a+"-ground "+e),n&&t[n]--,t.isStrike&&(e+=" strike"),e}function x(e,t){return function(n,a){return a.tokenize=a.stack.pop(),n.eat(e)?g(t,a):g("error",a)}}function b(e){return function(t,n){return t.match(/^[^&<[{~]+/)?(t.eol()&&(t.backUp(e),n.tokenize=(a="mw-section-header",function(e,t){return e.skipToEnd(),t.tokenize=t.stack.pop(),g(a,t)})),null):q("","")(t,n);var a}}function d(e,t){return e.match(/^[^{}|]+/)?g("mw-templatevariable-name",t):e.eat("|")?(t.tokenize=z,g("mw-templatevariable-delimiter",t)):e.match("}}}")?(t.tokenize=t.stack.pop(),g("mw-templatevariable-bracket",t)):e.match("{{{")?(t.stack.push(t.tokenize),g("mw-templatevariable-bracket",t)):(e.next(),g("mw-templatevariable-name",t))}function z(e,t){return e.match(/^[^{}[<&~]+/)?h("mw-templatevariable",t):e.match("}}}")?(t.tokenize=t.stack.pop(),g("mw-templatevariable-bracket",t)):q("mw-templatevariable","")(e,t)}function v(e,t){return e.match(/^#?[^:}{~|<>[\]]+/)?g("mw-parserfunction-name",t):e.eat(":")?(t.tokenize=S,g("mw-parserfunction-delimiter",t)):e.match("}}")?(t.tokenize=t.stack.pop(),g("mw-parserfunction-bracket",t,"nExt")):q("error","")(e,t)}function S(e,t){return e.match(/^[^|}{[<&~]+/)?h("mw-parserfunction",t):e.eat("|")?g("mw-parserfunction-delimiter",t):e.match("}}")?(t.tokenize=t.stack.pop(),g("mw-parserfunction-bracket",t,"nExt")):q("mw-parserfunction","")(e,t)}function L(e){return function(t,n){return t.match(/^[\s\u00a0]*\|[\s\u00a0]*/)?(n.expectArgName=!0,n.tokenize=M,g("mw-template-delimiter",n)):t.match(/^[\s\u00a0]*\}\}/)?(n.tokenize=n.stack.pop(),g("mw-template-bracket",n,"nTemplate")):t.match(/^[\s\u00a0]*<!--.*?-->/)?g("mw-comment",n):e&&t.sol()?(n.nTemplate--,void(n.tokenize=n.stack.pop())):t.match(/^[\s\u00a0]*[^\s\u00a0|}<{&~]+/)?(n.tokenize=L(!0),g("mw-template-name mw-pagename",n)):t.eatSpace()?!0===t.eol()?g("mw-template-name",n):g("mw-template-name mw-pagename",n):q("mw-template-name mw-pagename","mw-template-name-mnemonic mw-pagename",!0)(t,n)}}function M(e,t){return t.expectArgName&&e.eatWhile(/[^=|}{[<&~]/)?e.eat("=")?(t.expectArgName=!1,t.tokenize=M,g("mw-template-argument-name",t)):h("mw-template",t):e.eatWhile(/[^|}{[<&~]/)?h("mw-template",t):e.eat("|")?(t.expectArgName=!0,t.tokenize=M,g("mw-template-delimiter",t)):e.match("}}")?(t.tokenize=t.stack.pop(),g("mw-template-bracket",t,"nTemplate")):q("mw-template","")(e,t)}function E(e,t){return e.sol()?(t.nLink--,void(t.tokenize=t.stack.pop())):e.match(/^[\s\u00a0]*\]/)?(t.tokenize=t.stack.pop(),g("mw-extlink-bracket",t,"nLink")):e.eatSpace()?(t.tokenize=N,h("",t)):e.match(/^[^\s\u00a0\]{&~']+/)||e.eatSpace()?("'"===e.peek()&&(e.match("''",!1)?t.tokenize=N:e.next()),g("mw-extlink",t)):q("mw-extlink","",!0)(e,t)}function N(e,t){return e.sol()?(t.nLink--,void(t.tokenize=t.stack.pop())):e.eat("]")?(t.tokenize=t.stack.pop(),g("mw-extlink-bracket",t,"nLink")):q("mw-extlink-text","")(e,t)}function T(e,t){return e.sol()?(t.nLink--,void(t.tokenize=t.stack.pop())):e.match(/^[\s\u00a0]*#[\s\u00a0]*/)?(t.tokenize=U(!0),g("error",t)):e.match(/^[\s\u00a0]*\|[\s\u00a0]*/)?(t.tokenize=A(!0),g("mw-link-delimiter",t)):e.match(/^[\s\u00a0]*\]\]/)?(t.tokenize=t.stack.pop(),g("mw-link-bracket",t,"nLink")):e.match(/^[\s\u00a0]*[^\s\u00a0#|\]&~{]+/)||e.eatSpace()?h("mw-link-pagename mw-pagename",t):q("mw-link-pagename mw-pagename","mw-pagename")(e,t)}function y(e,t){return e.sol()?(t.nLink--,void(t.tokenize=t.stack.pop())):e.match(/^[\s\u00a0]*#[\s\u00a0]*/)?(t.tokenize=U(),g("mw-link",t)):e.match(/^[\s\u00a0]*\|[\s\u00a0]*/)?(t.tokenize=A(),g("mw-link-delimiter",t)):e.match(/^[\s\u00a0]*\]\]/)?(t.tokenize=t.stack.pop(),g("mw-link-bracket",t,"nLink")):e.match(/^[\s\u00a0]*[^\s\u00a0#|\]&~{]+/)||e.eatSpace()?h("mw-link-pagename mw-pagename",t):q("mw-link-pagename mw-pagename","mw-pagename")(e,t)}function U(e){return function(t,n){return t.sol()?(n.nLink--,void(n.tokenize=n.stack.pop())):e&&t.eatWhile(/[^|\]]/)?g("error",n):t.match(/^[^|\]&~{}]+/)?h("mw-link-tosection",n):t.eat("|")?(n.tokenize=A(e),g("mw-link-delimiter",n)):t.match("]]")?(n.tokenize=n.stack.pop(),g("mw-link-bracket",n,"nLink")):e&&t.eat("]")?g("error",n):q("mw-link-tosection","")(t,n)}}function A(e){return function(t,n){return t.match("]]")?(n.tokenize=n.stack.pop(),g("mw-link-bracket",n,"nLink")):e&&t.eat("|")?g("mw-link-delimiter",n):q("mw-link-text","")(t,n)}}function _(t,r,o){return function(m,c){for(var k="";t>0;)t--,k+=m.next();return k=k.toLowerCase(),m.eol()?(c.tokenize=c.stack.pop(),g(o?"mw-htmltag-name mw-htmltag-"+k:"mw-exttag-name",c)):(m.eatSpace(),m.eol()?(c.tokenize=c.stack.pop(),g(o?"mw-htmltag-name mw-htmltag-"+k:"mw-exttag-name",c)):o?(r&&!(k in w)?(c.tokenize=x(">","mw-htmltag-bracket"),["s","del","strike"].includes(k)&&(c.isStrike=!1),["b","strong"].includes(k)&&(c.isStrong=!1),["i","em"].includes(k)&&(c.isEm=!1)):c.tokenize=function(e){return function(t,n){return n.expectArgName&&t.match(/^[^>/<{&~=]+/)||!n.expectArgName&&t.match(/^[^>/<{&~]+/)?g("mw-htmltag-attribute",n):n.expectArgName&&t.eat("=")?(n.expectArgName=!1,g("error",n)):t.eat(">")?(e in w||n.InHtmlTag.push(e),n.tokenize=n.stack.pop(),["s","del","strike"].includes(e)&&(n.isStrike=!0),["b","strong"].includes(e)&&(n.isStrong=!0),["i","em"].includes(e)&&(n.isEm=!0),g("mw-htmltag-bracket",n)):t.match("/>")?(n.tokenize=n.stack.pop(),g(e in w?"mw-htmltag-bracket":"error",n)):q("mw-htmltag-attribute","",!0)(t,n)}}(k),g("mw-htmltag-name mw-htmltag-"+k,c)):(c.tokenize=r?x(">","mw-exttag-bracket mw-ext-"+k):function(t){return function(r,o){return r.match(/^(?:"[^"]*"|'[^']*'|[^>/<{&~])+/)?g("mw-exttag-attribute mw-ext-"+t,o):r.eat(">")?(o.extName=t,t in u.tagModes&&(o.extMode=e.getMode(n,u.tagModes[t]),o.extState=e.startState(o.extMode)),o.tokenize=function(e){return function(t,n){var r,o=!1,m=t.pos,c=new RegExp("</"+e+"\\s*>","i").exec(m?t.string.slice(m):t.string);if(c){if(0===c.index)return n.tokenize=function(e){return function(t,n){return t.next(),t.next(),n.tokenize=_(e.length,!0,!1),g("mw-exttag-bracket mw-ext-"+e,n)}}(e),n.extName=!1,!1!==n.extMode&&(n.extMode=!1,n.extState=!1),n.tokenize(t,n);r=c.index+m,o=t.string,t.string=o.slice(0,r)}return n.stack.push(n.tokenize),n.tokenize=function(e){return function(t,n){var r;return!1===n.extMode?(r=!1===e&&t.sol()?"line-cm-mw-exttag":"mw-exttag",t.skipToEnd()):(r=(!1===e&&t.sol()?"line-cm-mw-tag-":"mw-tag-")+n.extName,["pre","nowiki"].includes(n.extName)&&(r+=(n.isStrike?" strike":"")+(a||n.isStrong?" strong":"")+(i||n.isEm?" em":"")),r+=" "+n.extMode.token(t,n.extState,!1===e)),t.eol()&&(!1!==e&&(t.string=e),n.tokenize=n.stack.pop()),g(r,n)}}(o),n.tokenize(t,n)}}(t),g("mw-exttag-bracket mw-ext-"+t,o)):r.match("/>")?(o.tokenize=o.stack.pop(),g("mw-exttag-bracket mw-ext-"+t,o)):q("mw-exttag-attribute mw-ext-"+t,"",!0)(r,o)}}(k),g("mw-exttag-name mw-ext-"+k,c)))}}function C(e,t){return e.match("{|"),e.eatSpace(),t.tokenize=I,"mw-table-bracket"}function I(e,t){return e.sol()?(t.tokenize=H,H(e,t)):q("mw-table-definition","")(e,t)}function W(e,t){return e.sol()&&e.match(/^[\s\u00a0]*[|!]/,!1)?(t.tokenize=H,H(e,t)):q("mw-table-caption","")(e,t)}function H(e,t){if(e.sol()){if(e.eatSpace(),e.eat("|"))return e.eat("-")?(e.eatSpace(),t.tokenize=I,g("mw-table-delimiter",t)):e.eat("+")?(e.eatSpace(),t.tokenize=W,g("mw-table-delimiter",t)):e.eat("}")?(t.tokenize=t.stack.pop(),g("mw-table-bracket",t)):(e.eatSpace(),t.tokenize=R(!1,!0),g("mw-table-delimiter",t));if(e.eat("!"))return e.eatSpace(),t.tokenize=R(!0,!0),g("mw-table-delimiter",t)}return q("","")(e,t)}function R(e,t){return function(n,r){if(n.sol()){if(n.match(/^[\s\u00a0]*[|!]/,!1))return r.tokenize=H,H(n,r)}else{if(n.match(/^[^'|{[<&~!]+/))return h(e?"strong":"",r);if(n.match("||")||e&&n.match("!!"))return a=!1,i=!1,r.tokenize=R(e,!0),g("mw-table-delimiter",r);if(t&&n.eat("|"))return r.tokenize=R(e,!1),g("mw-table-delimiter2",r)}return q(e?"strong":"",e?"strong":"")(n,r)}}function $(e,t){if(e.eol());else if(e.match(/^[^\s\u00a0{[\]<>~).,']*/))if("~"===e.peek()){if(!e.match(/^~{3,}/,!1))return e.match(/^~*/),h("mw-free-extlink",t)}else if("{"===e.peek()){if(!e.match(/^\{\{/,!1))return e.next(),h("mw-free-extlink",t)}else if("'"===e.peek()){if(!e.match("''",!1))return e.next(),h("mw-free-extlink",t)}else if(e.match(/^[).,]+(?=[^\s\u00a0{[\]<>~).,])/))return h("mw-free-extlink",t);return t.tokenize=t.stack.pop(),h("mw-free-extlink",t)}function q(e,n,s){return function(f,x){var z,S,M,N,U,A,W,H;if(f.sol()){if(!f.match("//",!1)&&f.match(l))return x.stack.push(x.tokenize),x.tokenize=$,(s?g:h)("mw-free-extlink-protocol",x);switch(z=f.next()){case"-":if(f.match(/^----*/))return"mw-hr";break;case"=":if(S=f.match(/^(={0,5})(.+?(=\1\s*))$/))return f.backUp(S[2].length),x.stack.push(x.tokenize),x.tokenize=b(S[3].length),"mw-section-header line-cm-mw-section-"+(S[1].length+1);break;case"*":case"#":if(f.match(/^[*#]*:*/))return"mw-list";break;case":":if(f.match(/^:*{\|/,!1)&&(x.stack.push(x.tokenize),x.tokenize=C),f.match(/^:*[*#]*/))return"mw-indenting";break;case";":return a=!0,"mw-indenting";case" ":if(!f.match(/^[\s\u00a0]*:*{\|/,!1))return"mw-skipformatting";if(f.eatSpace(),f.match(/^:+/))return x.stack.push(x.tokenize),x.tokenize=C,"mw-indenting";f.eat("{");case"{":if(f.eat("|"))return f.eatSpace(),x.stack.push(x.tokenize),x.tokenize=I,"mw-table-bracket"}}else z=f.next();switch(z){case"&":return(s?g:h)(t(f,e,n),x);case"'":if(f.match(/^'*(?=''''')/)||f.match(/^'''(?!')/,!1))break;if(f.match("''"))return r||f.match("''",!1)||function(e){var t=e.pos,n=e.string.substr(0,t-3),s=n.substr(-1,1),u=n.substr(-2,1);if(" "===s){if(o||m)return;m=t}else if(" "===u)r=t;else{if(o)return;o=t}c=a,k=i}(f),a=!a,g("mw-apostrophes-bold",x);if(f.eat("'"))return i=!i,g("mw-apostrophes-italic",x);break;case"[":if(f.eat("[")){if(f.eatSpace(),/[^\]|[]/.test(f.peek()))return x.nLink++,x.stack.push(x.tokenize),x.tokenize=f.match(/^[\s\u00a0]*(file|image|文件|[圖图]像|[档檔]案)[\s\u00a0]*:/i,!1)?T:y,g("mw-link-bracket",x)}else if(M=f.match(l))return x.nLink++,f.backUp(M[0].length),x.stack.push(x.tokenize),x.tokenize=(H=M[0].length,function(e,t){for(;H>0;)H--,e.next();return e.eol()?(t.nLink--,t.tokenize=t.stack.pop()):t.tokenize=E,g("mw-extlink-protocol",t)}),g("mw-extlink-bracket",x);break;case"{":if(!f.match("{{{{",!1)&&f.match("{{"))return f.eatSpace(),x.stack.push(x.tokenize),x.tokenize=d,g("mw-templatevariable-bracket",x);if(f.match(/^\{[\s\u00a0]*/))return"#"===f.peek()?(x.nExt++,x.stack.push(x.tokenize),x.tokenize=v,g("mw-parserfunction-bracket",x)):!(N=f.match(/^([^\s\u00a0}[\]<{'|&:]+)(:|[\s\u00a0]*)(\}\}?)?(.)?/))||(f.backUp(N[0].length),":"!==N[2]&&void 0!==N[4]&&"}}"!==N[3]||!(N[1].toLowerCase()in u.functionSynonyms[0])&&!(N[1]in u.functionSynonyms[1]))?(x.nTemplate++,x.stack.push(x.tokenize),x.tokenize=L(!1),g("mw-template-bracket",x)):(x.nExt++,x.stack.push(x.tokenize),x.tokenize=v,g("mw-parserfunction-bracket",x));break;case"<":if(U=!!f.eat("/"),A=f.match(/^[^>/\s\u00a0.*,[\]{}$^+?|/\\'`~<=!@#%&()-]+/),f.match("!--"))return W=function(e,t){return function(n,a){for(;!n.eol();){if(n.match(t)){a.tokenize=a.stack.pop();break}n.next()}return g(e,a)}}("mw-comment","--\x3e"),x.stack.push(x.tokenize),x.tokenize=W,W(f,x);if(A){if((A=A[0].toLowerCase())in u.tags)return!0===U?"error":(f.backUp(A.length),x.stack.push(x.tokenize),x.tokenize=_(A.length,U,!1),g("mw-exttag-bracket mw-ext-"+A,x));if(A in p)return!0!==U||RegExp(A,"i").test(x.InHtmlTag.pop())?!0===U&&A in w?"error":(f.backUp(A.length),x.stack.push(x.tokenize),x.tokenize=_(A.length,U||A in w,!0),g("mw-htmltag-bracket",x)):"error";f.backUp(A.length)}break;case"~":if(f.match(/^~{2,4}/))return"mw-signature";break;case"_":for(S=1;f.eat("_");)S++;if(S>2)return f.eol()||f.backUp(2),(s?g:h)(e,x);if(2===S&&(N=f.match(/^([^\s\u00a0>}[\]<{'|&:~]+?)__/))&&N[0])return"__"+N[0].toLowerCase()in u.doubleUnderscore[0]||"__"+N[0]in u.doubleUnderscore[1]?"mw-doubleUnderscore":(f.eol()||f.backUp(2),(s?g:h)(e,x));break;default:if(/[\s\u00a0]/.test(z))return f.eatSpace(),(s?g:h)(e,x);if(f.backUp(1),f.match(l,!1)&&!f.match("//"))return x.stack.push(x.tokenize),function(e,t){return e.match(l),t.tokenize=$,h("mw-free-extlink-protocol",t)}(f,x);f.next()}return f.match(/^[^\s\u00a0_>}[\]<{'|&:~]+/),(s?g:h)(e,x)}}return{startState:function(){return{tokenize:q("",""),stack:[],InHtmlTag:[],extName:!1,extMode:!1,extState:!1,nTemplate:0,nLink:0,nExt:0}},copyState:function(t){return{tokenize:t.tokenize,stack:t.stack.concat([]),InHtmlTag:t.InHtmlTag.concat([]),extName:t.extName,extMode:t.extMode,extState:!1!==t.extMode&&e.copyState(t.extMode,t.extState),nTemplate:t.nTemplate,nLink:t.nLink,nExt:t.nExt,isStrike:t.isStrike,isStrong:t.isStrong,isEm:t.isEm}},token:function(t,n){var u,l,p,w,h=[],g=[];if(f.length>0)return p=f.shift(),t.pos=p.pos,n=p.state,p.style;t.sol()&&(a=!1,i=!1,r=void 0,o=void 0,m=void 0);do{if(u=n.tokenize(t,n),!(w=r||o||m))return s=u,u;w!==l&&(l=w,g.length>0&&(h=h.concat(g),g=[])),g.push({pos:t.pos,style:u,state:e.copyState(n.extMode?n.extMode:"mediawiki",n)})}while(!t.eol());if(a&&i){if(i=k,a=c,r=void 0,o=void 0,m=void 0,!(h.length>0))return t.pos=g[0].pos-2,s;h[h.length-1].pos++,f=h}else f=h.concat(g);return p=f.shift(),t.pos=p.pos,n=p.state,p.style},blankLine:function(e){var t;if(e.extName)return e.extMode?(t="",e.extMode.blankLine&&(t=" "+e.extMode.blankLine(e.extState)),"line-cm-mw-tag-"+e.extName+t):"line-cm-mw-exttag"}}})),e.defineMIME("text/mediawiki","mediawiki"),e.defineMode("mw-tag-pre",(function(){return{startState:function(){return{converter:-1,flags:[]}},token:(e="line-cm-mw-tag-pre",function(n,a,i){var r;return i&&n.sol()?a.ownLine=!0:!1===i&&a.ownLine&&(a.ownLine=!1),r=a.ownLine?e:"",n.eat("&")?t(n,r,r):n.eat("<")?!a.nowiki&&n.match("nowiki>")||a.nowiki&&n.match("/nowiki>")?(a.nowiki=!a.nowiki,"mw-comment mw-ext-nowiki"):(n.match(/^[^&<}|-]+/),r):n.match("-{")?(a.converter++,n.match(/^((?!(-{|}-)).)*\|/,!1)?a.flags.push(1):a.flags.push(0),"mw-lang-converter-bracket"):a.converter<0?(n.eat("-"),n.match(/^[^&<-]+/),r):n.match("}-")?(a.converter--,a.flags.pop(),"mw-lang-converter-bracket"):[0,2].includes(a.flags[a.converter])?(n.match(/^[^&<}-]+/)||n.next(),r):n.eat("|")?(a.flags[a.converter]=2,"mw-lang-converter-delimiter"):(n.next(),n.match(/^[^&<|]+/),"mw-lang-converter-flag")})};var e})),e.defineMode("mw-tag-nowiki",(function(){return{startState:function(){return{}},token:(e="line-cm-mw-tag-nowiki",function(n,a,i){var r;return i&&n.sol()?a.ownLine=!0:!1===i&&a.ownLine&&(a.ownLine=!1),r=a.ownLine?e:"",n.match(/^[^&]+/)?r:(n.next(),t(n,r,r))})};var e}))}(CodeMirror);
 //# sourceMappingURL=/sm/9ca2d1eeab3c941b692bcab499fa8caf51c1d653c960da39bafcfa258c931e94.map