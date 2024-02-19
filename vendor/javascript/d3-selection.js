var t="http://www.w3.org/1999/xhtml";var e={svg:"http://www.w3.org/2000/svg",xhtml:t,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function namespace(t){var n=t+="",r=n.indexOf(":");r>=0&&"xmlns"!==(n=t.slice(0,r))&&(t=t.slice(r+1));return e.hasOwnProperty(n)?{space:e[n],local:t}:t}function creatorInherit(e){return function(){var n=this.ownerDocument,r=this.namespaceURI;return r===t&&n.documentElement.namespaceURI===t?n.createElement(e):n.createElementNS(r,e)}}function creatorFixed(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function creator(t){var e=namespace(t);return(e.local?creatorFixed:creatorInherit)(e)}function none(){}function selector(t){return null==t?none:function(){return this.querySelector(t)}}function selection_select(t){"function"!==typeof t&&(t=selector(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var o,s,c=e[i],l=c.length,a=r[i]=new Array(l),u=0;u<l;++u)if((o=c[u])&&(s=t.call(o,o.__data__,u,c))){"__data__"in o&&(s.__data__=o.__data__);a[u]=s}return new Selection(r,this._parents)}function array(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function empty(){return[]}function selectorAll(t){return null==t?empty:function(){return this.querySelectorAll(t)}}function arrayAll(t){return function(){return array(t.apply(this,arguments))}}function selection_selectAll(t){t="function"===typeof t?arrayAll(t):selectorAll(t);for(var e=this._groups,n=e.length,r=[],i=[],o=0;o<n;++o)for(var s,c=e[o],l=c.length,a=0;a<l;++a)if(s=c[a]){r.push(t.call(s,s.__data__,a,c));i.push(s)}return new Selection(r,i)}function matcher(t){return function(){return this.matches(t)}}function childMatcher(t){return function(e){return e.matches(t)}}var n=Array.prototype.find;function childFind(t){return function(){return n.call(this.children,t)}}function childFirst(){return this.firstElementChild}function selection_selectChild(t){return this.select(null==t?childFirst:childFind("function"===typeof t?t:childMatcher(t)))}var r=Array.prototype.filter;function children(){return Array.from(this.children)}function childrenFilter(t){return function(){return r.call(this.children,t)}}function selection_selectChildren(t){return this.selectAll(null==t?children:childrenFilter("function"===typeof t?t:childMatcher(t)))}function selection_filter(t){"function"!==typeof t&&(t=matcher(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var o,s=e[i],c=s.length,l=r[i]=[],a=0;a<c;++a)(o=s[a])&&t.call(o,o.__data__,a,s)&&l.push(o);return new Selection(r,this._parents)}function sparse(t){return new Array(t.length)}function selection_enter(){return new Selection(this._enter||this._groups.map(sparse),this._parents)}function EnterNode(t,e){this.ownerDocument=t.ownerDocument;this.namespaceURI=t.namespaceURI;this._next=null;this._parent=t;this.__data__=e}EnterNode.prototype={constructor:EnterNode,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function constant(t){return function(){return t}}function bindIndex(t,e,n,r,i,o){var s,c=0,l=e.length,a=o.length;for(;c<a;++c)if(s=e[c]){s.__data__=o[c];r[c]=s}else n[c]=new EnterNode(t,o[c]);for(;c<l;++c)(s=e[c])&&(i[c]=s)}function bindKey(t,e,n,r,i,o,s){var c,l,a,u=new Map,h=e.length,f=o.length,p=new Array(h);for(c=0;c<h;++c)if(l=e[c]){p[c]=a=s.call(l,l.__data__,c,e)+"";u.has(a)?i[c]=l:u.set(a,l)}for(c=0;c<f;++c){a=s.call(t,o[c],c,o)+"";if(l=u.get(a)){r[c]=l;l.__data__=o[c];u.delete(a)}else n[c]=new EnterNode(t,o[c])}for(c=0;c<h;++c)(l=e[c])&&u.get(p[c])===l&&(i[c]=l)}function datum(t){return t.__data__}function selection_data(t,e){if(!arguments.length)return Array.from(this,datum);var n=e?bindKey:bindIndex,r=this._parents,i=this._groups;"function"!==typeof t&&(t=constant(t));for(var o=i.length,s=new Array(o),c=new Array(o),l=new Array(o),a=0;a<o;++a){var u=r[a],h=i[a],f=h.length,p=arraylike(t.call(u,u&&u.__data__,a,r)),_=p.length,d=c[a]=new Array(_),y=s[a]=new Array(_),m=l[a]=new Array(f);n(u,h,d,y,m,p,e);for(var v,g,w=0,A=0;w<_;++w)if(v=d[w]){w>=A&&(A=w+1);while(!(g=y[A])&&++A<_);v._next=g||null}}s=new Selection(s,r);s._enter=c;s._exit=l;return s}function arraylike(t){return"object"===typeof t&&"length"in t?t:Array.from(t)}function selection_exit(){return new Selection(this._exit||this._groups.map(sparse),this._parents)}function selection_join(t,e,n){var r=this.enter(),i=this,o=this.exit();if("function"===typeof t){r=t(r);r&&(r=r.selection())}else r=r.append(t+"");if(null!=e){i=e(i);i&&(i=i.selection())}null==n?o.remove():n(o);return r&&i?r.merge(i).order():i}function selection_merge(t){var e=t.selection?t.selection():t;for(var n=this._groups,r=e._groups,i=n.length,o=r.length,s=Math.min(i,o),c=new Array(i),l=0;l<s;++l)for(var a,u=n[l],h=r[l],f=u.length,p=c[l]=new Array(f),_=0;_<f;++_)(a=u[_]||h[_])&&(p[_]=a);for(;l<i;++l)c[l]=n[l];return new Selection(c,this._parents)}function selection_order(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],o=i.length-1,s=i[o];--o>=0;)if(r=i[o]){s&&4^r.compareDocumentPosition(s)&&s.parentNode.insertBefore(r,s);s=r}return this}function selection_sort(t){t||(t=ascending);function compareNode(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i){for(var o,s=e[i],c=s.length,l=r[i]=new Array(c),a=0;a<c;++a)(o=s[a])&&(l[a]=o);l.sort(compareNode)}return new Selection(r,this._parents).order()}function ascending(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function selection_call(){var t=arguments[0];arguments[0]=this;t.apply(null,arguments);return this}function selection_nodes(){return Array.from(this)}function selection_node(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function selection_size(){let t=0;for(const e of this)++t;return t}function selection_empty(){return!this.node()}function selection_each(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,o=e[n],s=0,c=o.length;s<c;++s)(i=o[s])&&t.call(i,i.__data__,s,o);return this}function attrRemove(t){return function(){this.removeAttribute(t)}}function attrRemoveNS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant(t,e){return function(){this.setAttribute(t,e)}}function attrConstantNS(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function attrFunction(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function attrFunctionNS(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function selection_attr(t,e){var n=namespace(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?attrRemoveNS:attrRemove:"function"===typeof e?n.local?attrFunctionNS:attrFunction:n.local?attrConstantNS:attrConstant)(n,e))}function defaultView(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function styleRemove(t){return function(){this.style.removeProperty(t)}}function styleConstant(t,e,n){return function(){this.style.setProperty(t,e,n)}}function styleFunction(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function selection_style(t,e,n){return arguments.length>1?this.each((null==e?styleRemove:"function"===typeof e?styleFunction:styleConstant)(t,e,null==n?"":n)):styleValue(this.node(),t)}function styleValue(t,e){return t.style.getPropertyValue(e)||defaultView(t).getComputedStyle(t,null).getPropertyValue(e)}function propertyRemove(t){return function(){delete this[t]}}function propertyConstant(t,e){return function(){this[t]=e}}function propertyFunction(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function selection_property(t,e){return arguments.length>1?this.each((null==e?propertyRemove:"function"===typeof e?propertyFunction:propertyConstant)(t,e)):this.node()[t]}function classArray(t){return t.trim().split(/^|\s+/)}function classList(t){return t.classList||new ClassList(t)}function ClassList(t){this._node=t;this._names=classArray(t.getAttribute("class")||"")}ClassList.prototype={add:function(t){var e=this._names.indexOf(t);if(e<0){this._names.push(t);this._node.setAttribute("class",this._names.join(" "))}},remove:function(t){var e=this._names.indexOf(t);if(e>=0){this._names.splice(e,1);this._node.setAttribute("class",this._names.join(" "))}},contains:function(t){return this._names.indexOf(t)>=0}};function classedAdd(t,e){var n=classList(t),r=-1,i=e.length;while(++r<i)n.add(e[r])}function classedRemove(t,e){var n=classList(t),r=-1,i=e.length;while(++r<i)n.remove(e[r])}function classedTrue(t){return function(){classedAdd(this,t)}}function classedFalse(t){return function(){classedRemove(this,t)}}function classedFunction(t,e){return function(){(e.apply(this,arguments)?classedAdd:classedRemove)(this,t)}}function selection_classed(t,e){var n=classArray(t+"");if(arguments.length<2){var r=classList(this.node()),i=-1,o=n.length;while(++i<o)if(!r.contains(n[i]))return false;return true}return this.each(("function"===typeof e?classedFunction:e?classedTrue:classedFalse)(n,e))}function textRemove(){this.textContent=""}function textConstant(t){return function(){this.textContent=t}}function textFunction(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function selection_text(t){return arguments.length?this.each(null==t?textRemove:("function"===typeof t?textFunction:textConstant)(t)):this.node().textContent}function htmlRemove(){this.innerHTML=""}function htmlConstant(t){return function(){this.innerHTML=t}}function htmlFunction(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function selection_html(t){return arguments.length?this.each(null==t?htmlRemove:("function"===typeof t?htmlFunction:htmlConstant)(t)):this.node().innerHTML}function raise(){this.nextSibling&&this.parentNode.appendChild(this)}function selection_raise(){return this.each(raise)}function lower(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function selection_lower(){return this.each(lower)}function selection_append(t){var e="function"===typeof t?t:creator(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))}function constantNull(){return null}function selection_insert(t,e){var n="function"===typeof t?t:creator(t),r=null==e?constantNull:"function"===typeof e?e:selector(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))}function remove(){var t=this.parentNode;t&&t.removeChild(this)}function selection_remove(){return this.each(remove)}function selection_cloneShallow(){var t=this.cloneNode(false),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_cloneDeep(){var t=this.cloneNode(true),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_clone(t){return this.select(t?selection_cloneDeep:selection_cloneShallow)}function selection_datum(t){return arguments.length?this.property("__data__",t):this.node().__data__}function contextListener(t){return function(e){t.call(this,e,this.__data__)}}function parseTypenames(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");n>=0&&(e=t.slice(n+1),t=t.slice(0,n));return{type:t,name:e}}))}function onRemove(t){return function(){var e=this.__on;if(e){for(var n,r=0,i=-1,o=e.length;r<o;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?e.length=i:delete this.__on}}}function onAdd(t,e,n){return function(){var r,i=this.__on,o=contextListener(e);if(i)for(var s=0,c=i.length;s<c;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options);this.addEventListener(r.type,r.listener=o,r.options=n);r.value=e;return}this.addEventListener(t.type,o,n);r={type:t.type,name:t.name,value:e,listener:o,options:n};i?i.push(r):this.__on=[r]}}function selection_on(t,e,n){var r,i,o=parseTypenames(t+""),s=o.length;if(!(arguments.length<2)){c=e?onAdd:onRemove;for(r=0;r<s;++r)this.each(c(o[r],e,n));return this}var c=this.node().__on;if(c)for(var l,a=0,u=c.length;a<u;++a)for(r=0,l=c[a];r<s;++r)if((i=o[r]).type===l.type&&i.name===l.name)return l.value}function dispatchEvent(t,e,n){var r=defaultView(t),i=r.CustomEvent;if("function"===typeof i)i=new i(e,n);else{i=r.document.createEvent("Event");n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,false,false)}t.dispatchEvent(i)}function dispatchConstant(t,e){return function(){return dispatchEvent(this,t,e)}}function dispatchFunction(t,e){return function(){return dispatchEvent(this,t,e.apply(this,arguments))}}function selection_dispatch(t,e){return this.each(("function"===typeof e?dispatchFunction:dispatchConstant)(t,e))}function*selection_iterator(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r,i=t[e],o=0,s=i.length;o<s;++o)(r=i[o])&&(yield r)}var i=[null];function Selection(t,e){this._groups=t;this._parents=e}function selection(){return new Selection([[document.documentElement]],i)}function selection_selection(){return this}Selection.prototype=selection.prototype={constructor:Selection,select:selection_select,selectAll:selection_selectAll,selectChild:selection_selectChild,selectChildren:selection_selectChildren,filter:selection_filter,data:selection_data,enter:selection_enter,exit:selection_exit,join:selection_join,merge:selection_merge,selection:selection_selection,order:selection_order,sort:selection_sort,call:selection_call,nodes:selection_nodes,node:selection_node,size:selection_size,empty:selection_empty,each:selection_each,attr:selection_attr,style:selection_style,property:selection_property,classed:selection_classed,text:selection_text,html:selection_html,raise:selection_raise,lower:selection_lower,append:selection_append,insert:selection_insert,remove:selection_remove,clone:selection_clone,datum:selection_datum,on:selection_on,dispatch:selection_dispatch,[Symbol.iterator]:selection_iterator};function select(t){return"string"===typeof t?new Selection([[document.querySelector(t)]],[document.documentElement]):new Selection([[t]],i)}function create(t){return select(creator(t).call(document.documentElement))}var o=0;function local(){return new Local}function Local(){this._="@"+(++o).toString(36)}Local.prototype=local.prototype={constructor:Local,get:function(t){var e=this._;while(!(e in t))if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};function sourceEvent(t){let e;while(e=t.sourceEvent)t=e;return t}function pointer(t,e){t=sourceEvent(t);void 0===e&&(e=t.currentTarget);if(e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();r.x=t.clientX,r.y=t.clientY;r=r.matrixTransform(e.getScreenCTM().inverse());return[r.x,r.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}function pointers(t,e){if(t.target){t=sourceEvent(t);void 0===e&&(e=t.currentTarget);t=t.touches||[t]}return Array.from(t,(t=>pointer(t,e)))}function selectAll(t){return"string"===typeof t?new Selection([document.querySelectorAll(t)],[document.documentElement]):new Selection([array(t)],i)}export{create,creator,local,matcher,namespace,e as namespaces,pointer,pointers,select,selectAll,selection,selector,selectorAll,styleValue as style,defaultView as window};
