(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.i6(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.i7(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.e_(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=="string")r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={dH:function dH(){},
eO:function(a,b,c){if(a==null)throw H.d(new H.b2(b,c.i("b2<0>")))
return a},
bS:function bS(a){this.a=a},
b2:function b2(a,b){this.a=a
this.$ti=b},
aR:function aR(){},
a9:function a9(){},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
aw:function aw(a){this.a=a},
eX:function(a){var t,s=H.eW(a)
if(s!=null)return s
t="minified:"+a
return t},
iS:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
e:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bz(a)
if(typeof t!="string")throw H.d(H.dZ(a))
return t},
b4:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cL:function(a){return H.fu(a)},
fu:function(a){var t,s,r,q
if(a instanceof P.h)return H.z(H.ak(a),null)
if(J.ai(a)===C.A||u.cr.b(a)){t=C.l(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.z(H.ak(a),null)},
t:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((C.b.C(t,10)|55296)>>>0,t&1023|56320)}throw H.d(P.dK(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fC:function(a){var t=H.ad(a).getFullYear()+0
return t},
fA:function(a){var t=H.ad(a).getMonth()+1
return t},
fw:function(a){var t=H.ad(a).getDate()+0
return t},
fx:function(a){var t=H.ad(a).getHours()+0
return t},
fz:function(a){var t=H.ad(a).getMinutes()+0
return t},
fB:function(a){var t=H.ad(a).getSeconds()+0
return t},
fy:function(a){var t=H.ad(a).getMilliseconds()+0
return t},
Y:function(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
C.a.a2(t,b)
r.b=""
if(c!=null&&c.a!==0)c.A(0,new H.cK(r,s,t))
""+r.a
return J.fd(a,new H.bN(C.F,0,t,s,0))},
fv:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.ft(a,b,c)},
ft:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b!=null)t=b instanceof Array?b:P.dJ(b,u.z)
else t=[]
s=t.length
r=a.$R
if(s<r)return H.Y(a,t,c)
q=a.$D
p=q==null
o=!p?q():null
n=J.ai(a)
m=n.$C
if(typeof m=="string")m=n[m]
if(p){if(c!=null&&c.a!==0)return H.Y(a,t,c)
if(s===r)return m.apply(a,t)
return H.Y(a,t,c)}if(o instanceof Array){if(c!=null&&c.a!==0)return H.Y(a,t,c)
if(s>r+o.length)return H.Y(a,t,null)
C.a.a2(t,o.slice(s-r))
return m.apply(a,t)}else{if(s>r)return H.Y(a,t,c)
l=Object.keys(o)
if(c==null)for(p=l.length,k=0;k<l.length;l.length===p||(0,H.aH)(l),++k){j=o[H.H(l[k])]
if(C.n===j)return H.Y(a,t,c)
C.a.l(t,j)}else{for(p=l.length,i=0,k=0;k<l.length;l.length===p||(0,H.aH)(l),++k){h=H.H(l[k])
if(c.b1(h)){++i
C.a.l(t,c.k(0,h))}else{j=o[h]
if(C.n===j)return H.Y(a,t,c)
C.a.l(t,j)}}if(i!==c.a)return H.Y(a,t,c)}return m.apply(a,t)}},
B:function(a){throw H.d(H.dZ(a))},
m:function(a,b){if(a==null)J.cu(a)
throw H.d(H.aF(a,b))},
aF:function(a,b){var t,s,r="index"
if(!H.dk(b))return new P.O(!0,b,r,null)
t=H.bq(J.cu(a))
if(!(b<0)){if(typeof t!=="number")return H.B(t)
s=b>=t}else s=!0
if(s)return P.fq(b,a,r,null,t)
return P.dL(b,r)},
dZ:function(a){return new P.O(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.c0()
t=new Error()
t.dartException=a
s=H.i8
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
i8:function(){return J.bz(this.dartException)},
am:function(a){throw H.d(a)},
aH:function(a){throw H.d(P.bG(a))},
S:function(a){var t,s,r,q,p,o
a=H.i3(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.D([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cO(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cP:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
eq:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dI:function(a,b){var t=b==null,s=t?null:b.method
return new H.bP(a,s,t?null:b.receiver)},
U:function(a){if(a==null)return new H.cJ(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.al(a,a.dartException)
return H.hB(a)},
al:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hB:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.C(s,16)&8191)===10)switch(r){case 438:return H.al(a,H.dI(H.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.e(t)+" (Error "+r+")"
return H.al(a,new H.b3(q,f))}}if(a instanceof TypeError){p=$.eY()
o=$.eZ()
n=$.f_()
m=$.f0()
l=$.f3()
k=$.f4()
j=$.f2()
$.f1()
i=$.f6()
h=$.f5()
g=p.v(t)
if(g!=null)return H.al(a,H.dI(H.H(t),g))
else{g=o.v(t)
if(g!=null){g.method="call"
return H.al(a,H.dI(H.H(t),g))}else{g=n.v(t)
if(g==null){g=m.v(t)
if(g==null){g=l.v(t)
if(g==null){g=k.v(t)
if(g==null){g=j.v(t)
if(g==null){g=m.v(t)
if(g==null){g=i.v(t)
if(g==null){g=h.v(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){H.H(t)
return H.al(a,new H.b3(t,g==null?f:g.method))}}}return H.al(a,new H.cb(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.b7()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.al(a,new P.O(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.b7()
return a},
aj:function(a){var t
if(a==null)return new H.bj(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bj(a)},
hL:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
hT:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.bq(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.cZ("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hT)
a.$identity=t
return t},
fm:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.c5().constructor.prototype):Object.create(new H.an(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.P
if(typeof s!=="number")return s.q()
$.P=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.ec(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.fi(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ec(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
fi:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.eR,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.fg:H.ff
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
fj:function(a,b,c,d){var t=H.eb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ec:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.fl(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.fj(s,!q,t,b)
if(s===0){q=$.P
if(typeof q!=="number")return q.q()
$.P=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.aK
return new Function(q+(p==null?$.aK=H.cy("self"):p)+";return "+o+"."+H.e(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.P
if(typeof q!=="number")return q.q()
$.P=q+1
n+=q
q="return function("+n+"){return this."
p=$.aK
return new Function(q+(p==null?$.aK=H.cy("self"):p)+"."+H.e(t)+"("+n+");}")()},
fk:function(a,b,c,d){var t=H.eb,s=H.fh
switch(b?-1:a){case 0:throw H.d(new H.c2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
fl:function(a,b){var t,s,r,q,p,o,n,m=$.aK
if(m==null)m=$.aK=H.cy("self")
t=$.ea
if(t==null)t=$.ea=H.cy("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.fk(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.e(s)+"(this."+t+");"
o=$.P
if(typeof o!=="number")return o.q()
$.P=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.e(s)+"(this."+t+", "+n+");"
o=$.P
if(typeof o!=="number")return o.q()
$.P=o+1
return new Function(p+o+"}")()},
e_:function(a,b,c,d,e,f,g){return H.fm(a,b,c,d,!!e,!!f,g)},
ff:function(a,b){return H.cr(v.typeUniverse,H.ak(a.a),b)},
fg:function(a,b){return H.cr(v.typeUniverse,H.ak(a.c),b)},
eb:function(a){return a.a},
fh:function(a){return a.c},
cy:function(a){var t,s,r,q=new H.an("self","target","receiver","name"),p=J.eh(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.cv("Field name "+a+" not found."))},
eN:function(a){if(a==null)H.hE("boolean expression must not be null")
return a},
hE:function(a){throw H.d(new H.cf(a))},
i6:function(a){throw H.d(new P.bI(a))},
eP:function(a){return v.getIsolateTag(a)},
i7:function(a){return H.am(new H.bS(a))},
iR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hX:function(a){var t,s,r,q,p,o=H.H($.eQ.$1(a)),n=$.dt[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dz[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.h9($.eL.$2(a,o))
if(r!=null){n=$.dt[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dz[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.dB(t)
$.dt[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.dz[o]=t
return t}if(q==="-"){p=H.dB(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.eU(a,t)
if(q==="*")throw H.d(P.er(o))
if(v.leafTags[o]===true){p=H.dB(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.eU(a,t)},
eU:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.e4(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
dB:function(a){return J.e4(a,!1,null,!!a.$iE)},
i1:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.dB(t)
else return J.e4(t,c,null,null)},
hP:function(){if(!0===$.e3)return
$.e3=!0
H.hQ()},
hQ:function(){var t,s,r,q,p,o,n,m
$.dt=Object.create(null)
$.dz=Object.create(null)
H.hO()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.eV.$1(p)
if(o!=null){n=H.i1(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hO:function(){var t,s,r,q,p,o,n=C.t()
n=H.aE(C.u,H.aE(C.v,H.aE(C.m,H.aE(C.m,H.aE(C.w,H.aE(C.x,H.aE(C.y(C.l),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.eQ=new H.dw(q)
$.eL=new H.dx(p)
$.eV=new H.dy(o)},
aE:function(a,b){return a(b)||b},
i3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aM:function aM(a,b){this.a=a
this.$ti=b},
aL:function aL(){},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bN:function bN(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b3:function b3(a,b){this.a=a
this.b=b},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a){this.a=a},
cJ:function cJ(a){this.a=a},
bj:function bj(a){this.a=a
this.b=null},
a4:function a4(){},
c8:function c8(){},
c5:function c5(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c2:function c2(a){this.a=a},
cf:function cf(a){this.a=a},
dc:function dc(){},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a,b){this.a=a
this.b=b
this.c=null},
aY:function aY(a,b){this.a=a
this.$ti=b},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aF(b,a))},
ac:function ac(){},
au:function au(){},
ab:function ab(){},
b0:function b0(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
b1:function b1(){},
bZ:function bZ(){},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
fE:function(a,b){var t=b.c
return t==null?b.c=H.dP(a,b.z,!0):t},
el:function(a,b){var t=b.c
return t==null?b.c=H.bm(a,"aT",[b.z]):t},
em:function(a){var t=a.y
if(t===6||t===7||t===8)return H.em(a.z)
return t===11||t===12},
fD:function(a){return a.cy},
du:function(a){return H.dh(v.typeUniverse,a,!1)},
a1:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.ez(a,s,!0)
case 7:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.dP(a,s,!0)
case 8:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.ey(a,s,!0)
case 9:r=b.Q
q=H.bv(a,r,c,a0)
if(q===r)return b
return H.bm(a,b.z,q)
case 10:p=b.z
o=H.a1(a,p,c,a0)
n=b.Q
m=H.bv(a,n,c,a0)
if(o===p&&m===n)return b
return H.dN(a,o,m)
case 11:l=b.z
k=H.a1(a,l,c,a0)
j=b.Q
i=H.hy(a,j,c,a0)
if(k===l&&i===j)return b
return H.ex(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bv(a,h,c,a0)
p=b.z
o=H.a1(a,p,c,a0)
if(g===h&&o===p)return b
return H.dO(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.cw("Attempted to substitute unexpected RTI kind "+d))}},
bv:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a1(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
hz:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a1(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
hy:function(a,b,c,d){var t,s=b.a,r=H.bv(a,s,c,d),q=b.b,p=H.bv(a,q,c,d),o=b.c,n=H.hz(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.cl()
t.a=r
t.b=p
t.c=n
return t},
D:function(a,b){a[v.arrayRti]=b
return a},
hI:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.eR(t)
return a.$S()}return null},
eS:function(a,b){var t
if(H.em(b))if(a instanceof H.a4){t=H.hI(a)
if(t!=null)return t}return H.ak(a)},
ak:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.dU(a)}if(Array.isArray(a))return H.aC(a)
return H.dU(J.ai(a))},
aC:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bs:function(a){var t=a.$ti
return t!=null?t:H.dU(a)},
dU:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.hk(a,t)},
hk:function(a,b){var t=a instanceof H.a4?a.__proto__.__proto__.constructor:b,s=H.h6(v.typeUniverse,t.name)
b.$ccache=s
return s},
eR:function(a){var t,s,r
H.bq(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.dh(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
hK:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.co(a)
r=H.dh(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.co(r):q},
hj:function(a){var t,s,r=this,q=u.K
if(r===q)return H.br(r,a,H.hn)
if(!H.T(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.br(r,a,H.hq)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.dk
else if(t===u.cb||t===u.cY)s=H.hm
else if(t===u.u)s=H.ho
else s=t===u.y?H.dV:null
if(s!=null)return H.br(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.hU)){r.r="$i"+q
return H.br(r,a,H.hp)}}else if(q===7)return H.br(r,a,H.hh)
return H.br(r,a,H.hf)},
br:function(a,b,c){a.b=c
return a.b(b)},
hi:function(a){var t,s,r=this
if(!H.T(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.ha
else if(r===u.K)s=H.h8
else s=H.hg
r.a=s
return r.a(a)},
dY:function(a){var t,s=a.y
if(!H.T(a))if(!(a===u._))if(!(a===u.G))if(s!==7)t=s===8&&H.dY(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hf:function(a){var t=this
if(a==null)return H.dY(t)
return H.u(v.typeUniverse,H.eS(a,t),null,t,null)},
hh:function(a){if(a==null)return!0
return this.z.b(a)},
hp:function(a){var t,s=this
if(a==null)return H.dY(s)
t=s.r
if(a instanceof P.h)return!!a[t]
return!!J.ai(a)[t]},
iQ:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.eC(a,t)},
hg:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.eC(a,t)},
eC:function(a,b){throw H.d(H.fX(H.et(a,H.eS(a,b),H.z(b,null))))},
et:function(a,b,c){var t=P.W(a),s=H.z(b==null?H.ak(a):b,null)
return t+": type '"+H.e(s)+"' is not a subtype of type '"+H.e(c)+"'"},
fX:function(a){return new H.bl("TypeError: "+a)},
x:function(a,b){return new H.bl("TypeError: "+H.et(a,null,b))},
hn:function(a){return a!=null},
h8:function(a){return a},
hq:function(a){return!0},
ha:function(a){return a},
dV:function(a){return!0===a||!1===a},
iD:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.x(a,"bool"))},
h7:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool"))},
iE:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool?"))},
iF:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"double"))},
iH:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double"))},
iG:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double?"))},
dk:function(a){return typeof a=="number"&&Math.floor(a)===a},
iI:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.x(a,"int"))},
bq:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int"))},
iJ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int?"))},
hm:function(a){return typeof a=="number"},
iK:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"num"))},
iM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num"))},
iL:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num?"))},
ho:function(a){return typeof a=="string"},
iN:function(a){if(typeof a=="string")return a
throw H.d(H.x(a,"String"))},
H:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String"))},
h9:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String?"))},
hv:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.d.q(s,H.z(a[r],b))
return t},
eD:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.D([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.l(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.m(a5,j)
m=C.d.q(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.d.q(" extends ",H.z(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.z(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.d.q(a2,H.z(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.d.q(a2,H.z(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.e8(H.z(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.e(a0)},
z:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.z(a.z,b)
return t}if(m===7){s=a.z
t=H.z(s,b)
r=s.y
return J.e8(r===11||r===12?C.d.q("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.e(H.z(a.z,b))+">"
if(m===9){q=H.hA(a.z)
p=a.Q
return p.length!==0?q+("<"+H.hv(p,b)+">"):q}if(m===11)return H.eD(a,b,null)
if(m===12)return H.eD(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.m(b,o)
return b[o]}return"?"},
hA:function(a){var t,s=H.eW(a)
if(s!=null)return s
t="minified:"+a
return t},
eA:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
h6:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.dh(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bn(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bm(a,b,r)
o[b]=p
return p}else return n},
h4:function(a,b){return H.eB(a.tR,b)},
h3:function(a,b){return H.eB(a.eT,b)},
dh:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.ew(H.eu(a,null,b,c))
s.set(b,t)
return t},
cr:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.ew(H.eu(a,b,c,!0))
r.set(c,s)
return s},
h5:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dN(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a0:function(a,b){b.a=H.hi
b.b=H.hj
return b},
bn:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.F(null,null)
t.y=b
t.cy=c
s=H.a0(a,t)
a.eC.set(c,s)
return s},
ez:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.h1(a,b,s,c)
a.eC.set(s,t)
return t},
h1:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.T(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.F(null,null)
r.y=6
r.z=b
r.cy=c
return H.a0(a,r)},
dP:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.h0(a,b,s,c)
a.eC.set(s,t)
return t},
h0:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.T(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.dA(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.G)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.dA(r.z))return r
else return H.fE(a,b)}}q=new H.F(null,null)
q.y=7
q.z=b
q.cy=c
return H.a0(a,q)},
ey:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.fZ(a,b,s,c)
a.eC.set(s,t)
return t},
fZ:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.T(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bm(a,"aT",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.F(null,null)
r.y=8
r.z=b
r.cy=c
return H.a0(a,r)},
h2:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.F(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a0(a,t)
a.eC.set(r,s)
return s},
cq:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
fY:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bm:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.cq(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.F(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a0(a,s)
a.eC.set(q,r)
return r},
dN:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.cq(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.F(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a0(a,p)
a.eC.set(r,o)
return o},
ex:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.cq(n)
if(k>0){t=m>0?",":""
s=H.cq(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.fY(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.F(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a0(a,p)
a.eC.set(r,s)
return s},
dO:function(a,b,c,d){var t,s=b.cy+("<"+H.cq(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.h_(a,b,c,s,d)
a.eC.set(s,t)
return t},
h_:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a1(a,b,s,0)
n=H.bv(a,c,s,0)
return H.dO(a,o,n,c!==n)}}m=new H.F(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a0(a,m)},
eu:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ew:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.fR(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.ev(a,s,h,g,!1)
else if(r===46)s=H.ev(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.a_(a.u,a.e,g.pop()))
break
case 94:g.push(H.h2(a.u,g.pop()))
break
case 35:g.push(H.bn(a.u,5,"#"))
break
case 64:g.push(H.bn(a.u,2,"@"))
break
case 126:g.push(H.bn(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.dM(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.bm(q,o,p))
else{n=H.a_(q,a.e,o)
switch(n.y){case 11:g.push(H.dO(q,n,p,a.n))
break
default:g.push(H.dN(q,n,p))
break}}break
case 38:H.fS(a,g)
break
case 42:m=a.u
g.push(H.ez(m,H.a_(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.dP(m,H.a_(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.ey(m,H.a_(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.cl()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.dM(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.ex(q,H.a_(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.dM(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.fU(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.a_(a.u,a.e,i)},
fR:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
ev:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.eA(t,p.z)[q]
if(o==null)H.am('No "'+q+'" in "'+H.fD(p)+'"')
d.push(H.cr(t,p,o))}else d.push(q)
return n},
fS:function(a,b){var t=b.pop()
if(0===t){b.push(H.bn(a.u,1,"0&"))
return}if(1===t){b.push(H.bn(a.u,4,"1&"))
return}throw H.d(P.cw("Unexpected extended operation "+H.e(t)))},
a_:function(a,b,c){if(typeof c=="string")return H.bm(a,c,a.sEA)
else if(typeof c=="number")return H.fT(a,b,c)
else return c},
dM:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a_(a,b,c[t])},
fU:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a_(a,b,c[t])},
fT:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.cw("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.cw("Bad index "+c+" for "+b.h(0)))},
u:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.T(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.T(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.u(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.u(a,b.z,c,d,e)
if(q===6){t=d.z
return H.u(a,b,c,t,e)}if(s===8){if(!H.u(a,b.z,c,d,e))return!1
return H.u(a,H.el(a,b),c,d,e)}if(s===7){t=H.u(a,b.z,c,d,e)
return t}if(q===8){if(H.u(a,b,c,d.z,e))return!0
return H.u(a,b,c,H.el(a,d),e)}if(q===7){t=H.u(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.u(a,l,c,k,e)||!H.u(a,k,e,l,c))return!1}return H.eG(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.eG(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.hl(a,b,c,d,e)}return!1},
eG:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.u(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.u(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.u(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.u(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.u(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
hl:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.u(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.eA(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.u(a,H.cr(a,b,m[q]),c,s[q],e))return!1
return!0},
dA:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.T(a))if(s!==7)if(!(s===6&&H.dA(a.z)))t=s===8&&H.dA(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hU:function(a){var t
if(!H.T(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
T:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
eB:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
F:function F(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
cl:function cl(){this.c=this.b=this.a=null},
co:function co(a){this.a=a},
cj:function cj(){},
bl:function bl(a){this.a=a},
eT:function(a){return u.x.b(a)||u.A.b(a)||u.w.b(a)||u.I.b(a)||u.r.b(a)||u.cg.b(a)||u.bj.b(a)},
eW:function(a){return v.mangledGlobalNames[a]},
i2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
e4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cs:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.e3==null){H.hP()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.d(P.er("Return interceptor for "+H.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.d8
if(p==null)p=$.d8=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.hX(a)
if(q!=null)return q
if(typeof a=="function")return C.C
t=Object.getPrototypeOf(a)
if(t==null)return C.r
if(t===Object.prototype)return C.r
if(typeof r=="function"){p=$.d8
if(p==null)p=$.d8=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
eh:function(a,b){a.fixed$length=Array
return a},
ai:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aU.prototype
return J.bO.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.ap.prototype
if(typeof a=="boolean")return J.bM.prototype
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
hM:function(a){if(typeof a=="number")return J.aq.prototype
if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
e1:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
e2:function(a){if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
hN:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.ax.prototype
return a},
dv:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
e8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hM(a).q(a,b)},
f7:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ai(a).w(a,b)},
f8:function(a,b,c,d){return J.dv(a).aR(a,b,c,d)},
f9:function(a,b){return J.e2(a).O(a,b)},
V:function(a){return J.dv(a).gao(a)},
by:function(a){return J.ai(a).gm(a)},
fa:function(a){return J.dv(a).gD(a)},
dF:function(a){return J.e2(a).gE(a)},
cu:function(a){return J.e1(a).gj(a)},
fb:function(a){return J.dv(a).gF(a)},
fc:function(a,b,c){return J.e2(a).aq(a,b,c)},
fd:function(a,b){return J.ai(a).R(a,b)},
bz:function(a){return J.ai(a).h(a)},
w:function w(){},
bM:function bM(){},
ap:function ap(){},
a6:function a6(){},
c1:function c1(){},
ax:function ax(){},
L:function L(){},
o:function o(a){this.$ti=a},
cD:function cD(a){this.$ti=a},
bC:function bC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(){},
aU:function aU(){},
bO:function bO(){},
X:function X(){}},P={
fK:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.hF()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bw(new P.cV(r),1)).observe(t,{childList:true})
return new P.cU(r,t,s)}else if(self.setImmediate!=null)return P.hG()
return P.hH()},
fL:function(a){self.scheduleImmediate(H.bw(new P.cW(u.M.a(a)),0))},
fM:function(a){self.setImmediate(H.bw(new P.cX(u.M.a(a)),0))},
fN:function(a){u.M.a(a)
P.fV(0,a)},
ep:function(a,b){var t=C.b.H(a.a,1000)
return P.fW(t<0?0:t,b)},
fV:function(a,b){var t=new P.bk(!0)
t.aO(a,b)
return t},
fW:function(a,b){var t=new P.bk(!1)
t.aP(a,b)
return t},
cx:function(a,b){var t=H.eO(a,"error",u.K)
return new P.aJ(t,b==null?P.fe(a):b)},
fe:function(a){var t
if(u.C.b(a)){t=a.gU()
if(t!=null)return t}return C.z},
fO:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.L()
b.a=a.a
b.c=a.c
P.az(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.ai(r)}},
az:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.dl(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.az(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.dl(d,d,l.b,k.a,k.b)
return}g=$.n
if(g!==h)$.n=h
else g=d
b=b.c
if((b&15)===8)new P.d6(q,c,p).$0()
else if(j){if((b&1)!==0)new P.d5(q,k).$0()}else if((b&2)!==0)new P.d4(c,q).$0()
if(g!=null)$.n=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.i("aT<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b instanceof P.C)if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.M(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.fO(b,f)
else f.aS(b)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.M(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
ht:function(a,b){var t=u.R
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.d(P.e9(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
hs:function(){var t,s
for(t=$.aD;t!=null;t=$.aD){$.bu=null
s=t.b
$.aD=s
if(s==null)$.bt=null
t.a.$0()}},
hx:function(){$.dW=!0
try{P.hs()}finally{$.bu=null
$.dW=!1
if($.aD!=null)$.e5().$1(P.eM())}},
eJ:function(a){var t=new P.cg(a),s=$.bt
if(s==null){$.aD=$.bt=t
if(!$.dW)$.e5().$1(P.eM())}else $.bt=s.b=t},
hw:function(a){var t,s,r,q=$.aD
if(q==null){P.eJ(a)
$.bu=$.bt
return}t=new P.cg(a)
s=$.bu
if(s==null){t.b=q
$.aD=$.bu=t}else{r=s.b
t.b=r
$.bu=s.b=t
if(r==null)$.bt=t}},
i5:function(a){var t=null,s=$.n
if(C.c===s){P.dn(t,t,C.c,a)
return}P.dn(t,t,s,u.M.a(s.ak(a)))},
eo:function(a,b){var t=$.n
if(t===C.c)return P.ep(a,u.e.a(b))
return P.ep(a,u.e.a(t.al(b,u.ae)))},
dl:function(a,b,c,d,e){P.hw(new P.dm(d,e))},
eH:function(a,b,c,d,e){var t,s=$.n
if(s===c)return d.$0()
$.n=c
t=s
try{s=d.$0()
return s}finally{$.n=t}},
eI:function(a,b,c,d,e,f,g){var t,s=$.n
if(s===c)return d.$1(e)
$.n=c
t=s
try{s=d.$1(e)
return s}finally{$.n=t}},
hu:function(a,b,c,d,e,f,g,h,i){var t,s=$.n
if(s===c)return d.$2(e,f)
$.n=c
t=s
try{s=d.$2(e,f)
return s}finally{$.n=t}},
dn:function(a,b,c,d){u.M.a(d)
if(C.c!==c)d=c.ak(d)
P.eJ(d)},
cV:function cV(a){this.a=a},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
bk:function bk(a){this.a=a
this.b=null
this.c=0},
dg:function dg(a,b){this.a=a
this.b=b},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aJ:function aJ(a,b){this.a=a
this.b=b},
be:function be(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
C:function C(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
d_:function d_(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a){this.a=a},
d5:function d5(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
cg:function cg(a){this.a=a
this.b=null},
b8:function b8(){},
cM:function cM(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
c6:function c6(){},
c7:function c7(){},
bp:function bp(){},
dm:function dm(a,b){this.a=a
this.b=b},
cm:function cm(){},
dd:function dd(a,b){this.a=a
this.b=b},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function(a,b,c){return b.i("@<0>").t(c).i("ej<1,2>").a(H.hL(a,new H.a8(b.i("@<0>").t(c).i("a8<1,2>"))))},
fr:function(a,b,c){var t,s
if(P.dX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.D([],u.s)
C.a.l($.A,a)
try{P.hr(a,t)}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}s=P.en(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
eg:function(a,b,c){var t,s
if(P.dX(a))return b+"..."+c
t=new P.ae(b)
C.a.l($.A,a)
try{s=t
s.a=P.en(s.a,a,", ")}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dX:function(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
hr:function(a,b){var t,s,r,q,p,o,n,m=a.gE(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.p())return
t=H.e(m.gu())
C.a.l(b,t)
l+=t.length+2;++k}if(!m.p()){if(k<=5)return
if(0>=b.length)return H.m(b,-1)
s=b.pop()
if(0>=b.length)return H.m(b,-1)
r=b.pop()}else{q=m.gu();++k
if(!m.p()){if(k<=4){C.a.l(b,H.e(q))
return}s=H.e(q)
if(0>=b.length)return H.m(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gu();++k
for(;m.p();q=p,p=o){o=m.gu();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.m(b,-1)
l-=b.pop().length+2;--k}C.a.l(b,"...")
return}}r=H.e(q)
s=H.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.l(b,n)
C.a.l(b,r)
C.a.l(b,s)},
cG:function(a){var t,s={}
if(P.dX(a))return"{...}"
t=new P.ae("")
try{C.a.l($.A,a)
t.a+="{"
s.a=!0
a.A(0,new P.cH(s,t))
t.a+="}"}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
j:function j(){},
b_:function b_(){},
cH:function cH(a,b){this.a=a
this.b=b},
as:function as(){},
bo:function bo(){},
at:function at(){},
bb:function bb(){},
aB:function aB(){},
ei:function(a,b,c){return new P.aW(a,b)},
he:function(a){return a.bj()},
fP:function(a,b){return new P.d9(a,[],P.hJ())},
fQ:function(a,b,c){var t,s=new P.ae(""),r=P.fP(s,b)
r.S(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
bE:function bE(){},
bH:function bH(){},
aW:function aW(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
cE:function cE(){},
bR:function bR(a){this.b=a},
da:function da(){},
db:function db(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){this.c=a
this.a=b
this.b=c},
ed:function(a,b){return H.fv(a,b,null)},
fp:function(a){if(a instanceof H.a4)return a.h(0)
return"Instance of '"+H.e(H.cL(a))+"'"},
fs:function(a,b,c){var t,s,r
if(a>4294967295)H.am(P.dK(a,0,4294967295,"length",null))
t=J.eh(H.D(new Array(a),c.i("o<0>")),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
dJ:function(a,b){var t,s=H.D([],b.i("o<0>"))
for(t=J.dF(a);t.p();)C.a.l(s,b.a(t.gu()))
return s},
en:function(a,b,c){var t=J.dF(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gu())
while(t.p())}else{a+=H.e(t.gu())
for(;t.p();)a=a+c+H.e(t.gu())}return a},
ek:function(a,b,c,d){return new P.c_(a,b,c,d)},
fn:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
fo:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bJ:function(a){if(a>=10)return""+a
return"0"+a},
W:function(a){if(typeof a=="number"||H.dV(a)||null==a)return J.bz(a)
if(typeof a=="string")return JSON.stringify(a)
return P.fp(a)},
cw:function(a){return new P.aI(a)},
cv:function(a){return new P.O(!1,null,null,a)},
e9:function(a,b,c){return new P.O(!0,a,b,c)},
dL:function(a,b){return new P.b5(null,null,!0,a,b,"Value not in range")},
dK:function(a,b,c,d,e){return new P.b5(b,c,!0,a,d,"Invalid value")},
fq:function(a,b,c,d,e){var t=H.bq(e==null?J.cu(b):e)
return new P.bL(t,!0,a,c,"Index out of range")},
Z:function(a){return new P.cc(a)},
er:function(a){return new P.ca(a)},
fF:function(a){return new P.c4(a)},
bG:function(a){return new P.bF(a)},
bx:function(a){H.i2(a)},
cI:function cI(a,b){this.a=a
this.b=b},
aP:function aP(a,b){this.a=a
this.b=b},
aQ:function aQ(a){this.a=a},
cB:function cB(){},
cC:function cC(){},
i:function i(){},
aI:function aI(a){this.a=a},
c9:function c9(){},
c0:function c0(){},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bL:function bL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a){this.a=a},
ca:function ca(a){this.a=a},
c4:function c4(a){this.a=a},
bF:function bF(a){this.a=a},
b7:function b7(){},
bI:function bI(a){this.a=a},
cZ:function cZ(a){this.a=a},
l:function l(){},
v:function v(){},
h:function h(){},
cn:function cn(){},
ae:function ae(a){this.a=a},
e0:function(a){var t
if(u.I.b(a)){t=J.V(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.cp(a.data,a.height,a.width)},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(){},
hb:function(a,b,c,d){var t,s,r
H.h7(b)
u.j.a(d)
if(H.eN(b)){t=[c]
C.a.a2(t,d)
d=t}s=u.z
r=P.dJ(J.fc(d,P.hV(),s),s)
return P.dR(P.ed(u.Z.a(a),r))},
dS:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.U(t)}return!1},
eF:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
dR:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.dV(a))return a
if(a instanceof P.Q)return a.a
if(H.eT(a))return a
if(u.Q.b(a))return a
if(a instanceof P.aP)return H.ad(a)
if(u.Z.b(a))return P.eE(a,"$dart_jsFunction",new P.di())
return P.eE(a,"_$dart_jsObject",new P.dj($.e7()))},
eE:function(a,b,c){var t=P.eF(a,b)
if(t==null){t=c.$1(a)
P.dS(a,b,t)}return t},
dQ:function(a){var t,s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.eT(a))return a
else if(a instanceof Object&&u.Q.b(a))return a
else if(a instanceof Date){t=H.bq(a.getTime())
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.am(P.cv("DateTime is outside valid range: "+t))
H.eO(!1,"isUtc",u.y)
return new P.aP(t,!1)}else if(a.constructor===$.e7())return a.o
else return P.eK(a)},
eK:function(a){if(typeof a=="function")return P.dT(a,$.ct(),new P.dp())
if(a instanceof Array)return P.dT(a,$.e6(),new P.dq())
return P.dT(a,$.e6(),new P.dr())},
dT:function(a,b,c){var t=P.eF(a,b)
if(t==null||!(a instanceof Object)){t=c.$1(a)
P.dS(a,b,t)}return t},
hd:function(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.hc,a)
t[$.ct()]=a
a.$dart_jsFunction=t
return t},
hc:function(a,b){u.j.a(b)
return P.ed(u.Z.a(a),b)},
hD:function(a,b){if(typeof a=="function")return a
else return b.a(P.hd(a))},
di:function di(){},
dj:function dj(a){this.a=a},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
Q:function Q(a){this.a=a},
aV:function aV(a){this.a=a},
a7:function a7(a,b){this.a=a
this.$ti=b},
aA:function aA(){}},W={
ee:function(a,b,c){var t=document.createElement("img")
C.j.saD(t,b)
if(c!=null)C.j.sF(t,c)
if(a!=null)C.j.sD(t,a)
return t},
ay:function(a,b,c,d,e){var t=W.hC(new W.cY(c),u.A),s=t!=null
if(s&&!0){u.D.a(t)
if(s)J.f8(a,b,t,!1)}return new W.ck(a,b,t,!1,e.i("ck<0>"))},
hC:function(a,b){var t=$.n
if(t===C.c)return a
return t.al(a,b)},
c:function c(){},
bA:function bA(){},
bB:function bB(){},
a2:function a2(){},
a3:function a3(){},
ao:function ao(){},
J:function J(){},
aO:function aO(){},
cz:function cz(){},
cA:function cA(){},
b:function b(){},
a:function a(){},
p:function p(){},
bK:function bK(){},
a5:function a5(){},
K:function K(){},
aa:function aa(){},
k:function k(){},
c3:function c3(){},
bc:function bc(){},
ag:function ag(){},
N:function N(){},
dG:function dG(a,b){this.a=a
this.$ti=b},
bd:function bd(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ck:function ck(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cY:function cY(a){this.a=a},
ch:function ch(){}},X={
i4:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="img/instruction/"
u.bL.a(a)
t=u.B.a(document.getElementById("image-canvas"))
s=a.width
if(typeof s!=="number")return s.a8()
if(s>1500){r=a.height
if(typeof r!=="number")return H.B(r)
r=s>r}else r=!1
q=r?1500/s:1
r=a.height
if(typeof r!=="number")return r.a8()
if(r>1500&&r>s)q=1500/r
p=t.getContext("2d")
s=a.width
r=a.height
if(typeof s!=="number")return s.a8()
if(typeof r!=="number")return H.B(r)
o=r*q
if(s>r){C.f.sD(t,C.e.B(o))
s=a.width
if(typeof s!=="number")return s.aB()
C.f.sF(t,C.e.B(s*q))}else{C.f.sF(t,C.e.B(o))
s=a.width
if(typeof s!=="number")return s.aB()
C.f.sD(t,C.e.B(s*q))}p.drawImage(a,0,0)
p.save()
p.scale(q,q)
s=a.width
r=a.height
if(typeof s!=="number")return s.aA()
if(typeof r!=="number")return H.B(r)
if(s<r){p.translate(r/2,s/2)
p.rotate(-1.5707963267948966)
s=a.width
if(typeof s!=="number")return s.aC()
r=a.height
if(typeof r!=="number")return r.aC()
p.translate(-s/2,-r/2)}p.drawImage(a,0,0)
p.restore()
n=new X.b6().T(P.e0(p.getImageData(0,0,a.width,a.height)),p)
m=[]
for(s=n.length,r=u.z,o=u.L,l=o.i("~(1)?"),k=u.Y,o=o.c,j=0;j<n.length;n.length===s||(0,H.aH)(n),++j){i=n[j]
h=i.a
if(h>=103&&h<=179){a=W.ee(null,e+C.b.h(h)+".png",null)
h=l.a(new X.dC(p,i,a))
k.a(null)
W.ay(a,"load",h,!1,o)}else if(h>=179&&h<=181){g=e+C.b.h(h)+".svg"
h=i.b*8/2
f=C.e.B(h*6)
a=W.ee(C.e.B(h*3),g,f)
f=l.a(new X.dD(p,i,a))
k.a(null)
W.ay(a,"load",f,!1,o)}else i.a3(p)
m.push(P.aZ(["code",i.a,"x",i.d,"y",i.e,"radius",i.b*8/2,"angle",i.c],r,r))}return C.i.a4(P.aZ(["topcodes",m],u.O,u.bl),null)},
hR:function(a){X.fI(H.H(a))},
hS:function(a){X.fJ(H.H(a))},
hY:function(){var t=$.dE()
t.n(0,"topcodes_initVideoScanner",X.hZ())
t.n(0,"topcodes_initVideoScannerM",X.i_())
self.scanCanvas=P.hD(X.i0(),u.bQ)},
fI:function(a){var t=new X.cd(a)
t.aM(a)
return t},
fJ:function(a){var t=new X.ce(a)
t.aN(a)
return t},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(){this.c=this.b=this.a=null},
bD:function bD(a,b){this.a=a
this.b=b},
ba:function ba(a){var _=this
_.a=-1
_.b=9
_.e=_.d=_.c=0
_.f=a},
cd:function cd(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
ce:function ce(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a}}
var w=[C,H,J,P,W,X]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dH.prototype={}
J.w.prototype={
w:function(a,b){return a===b},
gm:function(a){return H.b4(a)},
h:function(a){return"Instance of '"+H.e(H.cL(a))+"'"},
R:function(a,b){u.o.a(b)
throw H.d(P.ek(a,b.gar(),b.gat(),b.gas()))}}
J.bM.prototype={
h:function(a){return String(a)},
gm:function(a){return a?519018:218159},
$ids:1}
J.ap.prototype={
w:function(a,b){return null==b},
h:function(a){return"null"},
gm:function(a){return 0},
R:function(a,b){return this.aE(a,u.o.a(b))},
$iv:1}
J.a6.prototype={
gm:function(a){return 0},
h:function(a){return String(a)}}
J.c1.prototype={}
J.ax.prototype={}
J.L.prototype={
h:function(a){var t=a[$.ct()]
if(t==null)return this.aG(a)
return"JavaScript function for "+H.e(J.bz(t))},
$iaS:1}
J.o.prototype={
l:function(a,b){H.aC(a).c.a(b)
if(!!a.fixed$length)H.am(P.Z("add"))
a.push(b)},
a2:function(a,b){var t
H.aC(a).i("l<1>").a(b)
if(!!a.fixed$length)H.am(P.Z("addAll"))
if(Array.isArray(b)){this.aQ(a,b)
return}for(t=J.dF(b);t.p();)a.push(t.gu())},
aQ:function(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw H.d(P.bG(a))
for(s=0;s<t;++s)a.push(b[s])},
aq:function(a,b,c){var t=H.aC(a)
return new H.R(a,t.t(c).i("1(2)").a(b),t.i("@<1>").t(c).i("R<1,2>"))},
O:function(a,b){if(b>=a.length)return H.m(a,b)
return a[b]},
gap:function(a){return a.length!==0},
h:function(a){return P.eg(a,"[","]")},
gE:function(a){return new J.bC(a,a.length,H.aC(a).i("bC<1>"))},
gm:function(a){return H.b4(a)},
gj:function(a){return a.length},
k:function(a,b){if(b>=a.length||b<0)throw H.d(H.aF(a,b))
return a[b]},
n:function(a,b,c){H.aC(a).c.a(c)
if(!!a.immutable$list)H.am(P.Z("indexed set"))
if(b>=a.length||!1)throw H.d(H.aF(a,b))
a[b]=c},
$il:1,
$iq:1}
J.cD.prototype={}
J.bC.prototype={
gu:function(){return this.d},
p:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.aH(r))
t=s.c
if(t>=q){s.sag(null)
return!1}s.sag(r[t]);++s.c
return!0},
sag:function(a){this.d=this.$ti.i("1?").a(a)}}
J.aq.prototype={
aw:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.d(P.Z(""+a+".toInt()"))},
B:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.Z(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
a9:function(a,b){var t
if(typeof b!="number")throw H.d(H.dZ(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aL:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aj(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.aj(a,b)},
aj:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.Z("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
C:function(a,b){var t
if(a>0)t=this.b_(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
b_:function(a,b){return b>31?0:a>>>b},
$iI:1,
$iaG:1}
J.aU.prototype={$if:1}
J.bO.prototype={}
J.X.prototype={
b0:function(a,b){if(b<0)throw H.d(H.aF(a,b))
if(b>=a.length)H.am(H.aF(a,b))
return a.charCodeAt(b)},
af:function(a,b){if(b>=a.length)throw H.d(H.aF(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!="string")throw H.d(P.e9(b,null,null))
return a+b},
J:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.d(P.dL(b,null))
if(c>a.length)throw H.d(P.dL(c,null))
return a.substring(b,c)},
h:function(a){return a},
gm:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gj:function(a){return a.length},
$ir:1}
H.bS.prototype={
h:function(a){var t=this.a
return t!=null?"LateInitializationError: "+t:"LateInitializationError"}}
H.b2.prototype={
h:function(a){return"Null is not a valid value for the parameter '"+this.a+"' of type '"+H.hK(this.$ti.c).h(0)+"'"}}
H.aR.prototype={}
H.a9.prototype={
gE:function(a){var t=this
return new H.ar(t,t.gj(t),t.$ti.i("ar<a9.E>"))}}
H.ar.prototype={
gu:function(){return this.d},
p:function(){var t,s=this,r=s.a,q=J.e1(r),p=q.gj(r)
if(s.b!==p)throw H.d(P.bG(r))
t=s.c
if(t>=p){s.saa(null)
return!1}s.saa(q.O(r,t));++s.c
return!0},
saa:function(a){this.d=this.$ti.i("1?").a(a)}}
H.R.prototype={
gj:function(a){return J.cu(this.a)},
O:function(a,b){return this.b.$1(J.f9(this.a,b))}}
H.y.prototype={}
H.aw.prototype={
gm:function(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.by(this.a)&536870911
this._hashCode=t
return t},
h:function(a){return'Symbol("'+H.e(this.a)+'")'},
w:function(a,b){if(b==null)return!1
return b instanceof H.aw&&this.a==b.a},
$iaf:1}
H.aM.prototype={}
H.aL.prototype={
gP:function(a){return this.gj(this)===0},
h:function(a){return P.cG(this)},
$iM:1}
H.aN.prototype={
gj:function(a){return this.a},
aV:function(a){return this.b[H.H(a)]},
A:function(a,b){var t,s,r,q,p=H.bs(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.aV(q)))}}}
H.bN.prototype={
gar:function(){var t=this.a
return t},
gat:function(){var t,s,r,q,p=this
if(p.c===1)return C.p
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.p
r=[]
for(q=0;q<s;++q){if(q>=t.length)return H.m(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gas:function(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.q
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return C.q
p=new H.a8(u.W)
for(o=0;o<s;++o){if(o>=t.length)return H.m(t,o)
n=t[o]
m=q+o
if(m<0||m>=r.length)return H.m(r,m)
p.n(0,new H.aw(n),r[m])}return new H.aM(p,u.h)},
$ief:1}
H.cK.prototype={
$2:function(a,b){var t
H.H(a)
t=this.a
t.b=t.b+"$"+H.e(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++t.a},
$S:10}
H.cO.prototype={
v:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.b3.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bP.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.e(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.e(s.a)+")"
return r+q+"' on '"+t+"' ("+H.e(s.a)+")"}}
H.cb.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.cJ.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bj.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iav:1}
H.a4.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.eX(s==null?"unknown":s)+"'"},
$iaS:1,
gbi:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.c8.prototype={}
H.c5.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.eX(t)+"'"}}
H.an.prototype={
w:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.an))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gm:function(a){var t,s=this.c
if(s==null)t=H.b4(this.a)
else t=typeof s!=="object"?J.by(s):H.b4(s)
return(t^H.b4(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cL(t))+"'")}}
H.c2.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.cf.prototype={
h:function(a){return"Assertion failed: "+P.W(this.a)}}
H.dc.prototype={}
H.a8.prototype={
gj:function(a){return this.a},
gP:function(a){return this.a===0},
b1:function(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return this.aT(t,a)}else{s=this.b5(a)
return s}},
b5:function(a){var t=this.d
if(t==null)return!1
return this.a5(this.Z(t,J.by(a)&0x3ffffff),a)>=0},
k:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.K(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.K(q,b)
r=s==null?o:s.b
return r}else return p.b6(b)},
b6:function(a){var t,s,r=this.d
if(r==null)return null
t=this.Z(r,J.by(a)&0x3ffffff)
s=this.a5(t,a)
if(s<0)return null
return t[s].b},
n:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.bs(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.ac(t==null?n.b=n.a_():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.ac(s==null?n.c=n.a_():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.a_()
q=J.by(b)&0x3ffffff
p=n.Z(r,q)
if(p==null)n.a1(r,q,[n.a0(b,c)])
else{o=n.a5(p,b)
if(o>=0)p[o].b=c
else p.push(n.a0(b,c))}}},
A:function(a,b){var t,s,r=this
H.bs(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.d(P.bG(r))
t=t.c}},
ac:function(a,b,c){var t,s=this,r=H.bs(s)
r.c.a(b)
r.Q[1].a(c)
t=s.K(a,b)
if(t==null)s.a1(a,b,s.a0(b,c))
else t.b=c},
a0:function(a,b){var t=this,s=H.bs(t),r=new H.cF(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
a5:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.f7(a[s].a,b))return s
return-1},
h:function(a){return P.cG(this)},
K:function(a,b){return a[b]},
Z:function(a,b){return a[b]},
a1:function(a,b,c){a[b]=c},
aU:function(a,b){delete a[b]},
aT:function(a,b){return this.K(a,b)!=null},
a_:function(){var t="<non-identifier-key>",s=Object.create(null)
this.a1(s,t,s)
this.aU(s,t)
return s},
$iej:1}
H.cF.prototype={}
H.aY.prototype={
gj:function(a){return this.a.a},
gE:function(a){var t=this.a,s=new H.bT(t,t.r,this.$ti.i("bT<1>"))
s.c=t.e
return s}}
H.bT.prototype={
gu:function(){return this.d},
p:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.bG(r))
t=s.c
if(t==null){s.sab(null)
return!1}else{s.sab(t.a)
s.c=t.c
return!0}},
sab:function(a){this.d=this.$ti.i("1?").a(a)}}
H.dw.prototype={
$1:function(a){return this.a(a)},
$S:2}
H.dx.prototype={
$2:function(a,b){return this.a(a,b)},
$S:11}
H.dy.prototype={
$1:function(a){return this.a(H.H(a))},
$S:12}
H.ac.prototype={$iG:1}
H.au.prototype={
gj:function(a){return a.length},
$iE:1}
H.ab.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]},
$il:1,
$iq:1}
H.b0.prototype={$il:1,$iq:1}
H.bU.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bV.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bW.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bX.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bY.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.b1.prototype={
gj:function(a){return a.length},
k:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ifH:1}
H.bZ.prototype={
gj:function(a){return a.length},
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bf.prototype={}
H.bg.prototype={}
H.bh.prototype={}
H.bi.prototype={}
H.F.prototype={
i:function(a){return H.cr(v.typeUniverse,this,a)},
t:function(a){return H.h5(v.typeUniverse,this,a)}}
H.cl.prototype={}
H.co.prototype={
h:function(a){return H.z(this.a,null)}}
H.cj.prototype={
h:function(a){return this.a}}
H.bl.prototype={}
P.cV.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:5}
P.cU.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:13}
P.cW.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:3}
P.cX.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:3}
P.bk.prototype={
aO:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bw(new P.dg(this,b),0),a)
else throw H.d(P.Z("`setTimeout()` not found."))},
aP:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bw(new P.df(this,a,Date.now(),b),0),a)
else throw H.d(P.Z("Periodic timer."))},
an:function(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw H.d(P.Z("Canceling a timer."))},
$ib9:1}
P.dg.prototype={
$0:function(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.df.prototype={
$0:function(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=C.b.aL(t,p)}r.c=q
s.d.$1(r)},
$C:"$0",
$R:0,
$S:3}
P.aJ.prototype={
h:function(a){return H.e(this.a)},
$ii:1,
gU:function(){return this.b}}
P.be.prototype={
b7:function(a){if((this.c&15)!==6)return!0
return this.b.b.a6(u.m.a(this.d),a.a,u.y,u.K)},
b4:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.R.b(t))return q.a(p.bb(t,a.a,a.b,s,r,u.l))
else return q.a(p.a6(u.v.a(t),a.a,s,r))}}
P.C.prototype={
av:function(a,b,c){var t,s,r,q=this.$ti
q.t(c).i("1/(2)").a(a)
t=$.n
if(t!==C.c){c.i("@<0/>").t(q.c).i("1(2)").a(a)
if(b!=null)b=P.ht(b,t)}s=new P.C(t,c.i("C<0>"))
r=b==null?1:3
this.ad(new P.be(s,r,a,b,q.i("@<1>").t(c).i("be<1,2>")))
return s},
be:function(a,b){return this.av(a,null,b)},
ad:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.ad(a)
return}s.a=r
s.c=t.c}P.dn(null,null,s.b,u.M.a(new P.d_(s,a)))}},
ai:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.ai(a)
return}n.a=t
n.c=o.c}m.a=n.M(a)
P.dn(null,null,n.b,u.M.a(new P.d3(m,n)))}},
L:function(){var t=u.F.a(this.c)
this.c=null
return this.M(t)},
M:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aS:function(a){var t,s,r,q=this
q.a=1
try{a.av(new P.d0(q),new P.d1(q),u.P)}catch(r){t=H.U(r)
s=H.aj(r)
P.i5(new P.d2(q,t,s))}},
W:function(a,b){var t,s,r=this
u.l.a(b)
t=r.L()
s=P.cx(a,b)
r.a=8
r.c=s
P.az(r,t)},
$iaT:1}
P.d_.prototype={
$0:function(){P.az(this.a,this.b)},
$S:0}
P.d3.prototype={
$0:function(){P.az(this.b,this.a.a)},
$S:0}
P.d0.prototype={
$1:function(a){var t,s,r,q,p,o=this.a
o.a=0
try{r=o.$ti.c
a=r.a(r.a(a))
q=o.L()
o.a=4
o.c=a
P.az(o,q)}catch(p){t=H.U(p)
s=H.aj(p)
o.W(t,s)}},
$S:5}
P.d1.prototype={
$2:function(a,b){this.a.W(a,u.l.a(b))},
$C:"$2",
$R:2,
$S:14}
P.d2.prototype={
$0:function(){this.a.W(this.b,this.c)},
$S:0}
P.d6.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.ba(u.bd.a(r.d),u.z)}catch(q){t=H.U(q)
s=H.aj(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.cx(t,s)
p.b=!0
return}if(m instanceof P.C&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.be(new P.d7(o),u.z)
r.b=!1}},
$S:0}
P.d7.prototype={
$1:function(a){return this.a},
$S:15}
P.d5.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.a6(p.i("2/(1)").a(q.d),n,p.i("2/"),o)}catch(m){t=H.U(m)
s=H.aj(m)
r=this.a
r.c=P.cx(t,s)
r.b=!0}},
$S:0}
P.d4.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.eN(q.a.b7(t))&&q.a.e!=null){q.c=q.a.b4(t)
q.b=!1}}catch(p){s=H.U(p)
r=H.aj(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.cx(s,r)
m.b=!0}},
$S:0}
P.cg.prototype={}
P.b8.prototype={
gj:function(a){var t,s,r=this,q={},p=new P.C($.n,u.a)
q.a=0
t=r.$ti
s=t.i("~(1)?").a(new P.cM(q,r))
u.Y.a(new P.cN(q,p))
W.ay(r.a,r.b,s,!1,t.c)
return p}}
P.cM.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("~(1)")}}
P.cN.prototype={
$0:function(){var t=this.b,s=t.$ti,r=s.i("1/").a(this.a.a),q=t.L()
s.c.a(r)
t.a=4
t.c=r
P.az(t,q)},
$S:0}
P.c6.prototype={}
P.c7.prototype={}
P.bp.prototype={$ies:1}
P.dm.prototype={
$0:function(){var t=H.d(this.a)
t.stack=J.bz(this.b)
throw t},
$S:0}
P.cm.prototype={
bc:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.c===$.n){a.$0()
return}P.eH(q,q,this,a,u.H)}catch(r){t=H.U(r)
s=H.aj(r)
P.dl(q,q,this,t,u.l.a(s))}},
bd:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.c===$.n){a.$1(b)
return}P.eI(q,q,this,a,b,u.H,c)}catch(r){t=H.U(r)
s=H.aj(r)
P.dl(q,q,this,t,u.l.a(s))}},
ak:function(a){return new P.dd(this,u.M.a(a))},
al:function(a,b){return new P.de(this,b.i("~(0)").a(a),b)},
ba:function(a,b){b.i("0()").a(a)
if($.n===C.c)return a.$0()
return P.eH(null,null,this,a,b)},
a6:function(a,b,c,d){c.i("@<0>").t(d).i("1(2)").a(a)
d.a(b)
if($.n===C.c)return a.$1(b)
return P.eI(null,null,this,a,b,c,d)},
bb:function(a,b,c,d,e,f){d.i("@<0>").t(e).t(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.n===C.c)return a.$2(b,c)
return P.hu(null,null,this,a,b,c,d,e,f)}}
P.dd.prototype={
$0:function(){return this.a.bc(this.b)},
$S:0}
P.de.prototype={
$1:function(a){var t=this.c
return this.a.bd(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.j.prototype={
gE:function(a){return new H.ar(a,this.gj(a),H.ak(a).i("ar<j.E>"))},
O:function(a,b){return this.k(a,b)},
gap:function(a){return this.gj(a)!==0},
aq:function(a,b,c){var t=H.ak(a)
return new H.R(a,t.t(c).i("1(j.E)").a(b),t.i("@<j.E>").t(c).i("R<1,2>"))},
h:function(a){return P.eg(a,"[","]")}}
P.b_.prototype={}
P.cH.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.e(a)
s.a=t+": "
s.a+=H.e(b)},
$S:6}
P.as.prototype={
A:function(a,b){var t,s=H.bs(this)
s.i("~(1,2)").a(b)
for(s=new H.aY(this,s.i("aY<1>")),s=s.gE(s);s.p();){t=s.d
b.$2(t,this.k(0,t))}},
gj:function(a){return this.a},
gP:function(a){return this.a===0},
h:function(a){return P.cG(this)},
$iM:1}
P.bo.prototype={}
P.at.prototype={
A:function(a,b){this.a.A(0,this.$ti.i("~(1,2)").a(b))},
gP:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
h:function(a){return P.cG(this.a)},
$iM:1}
P.bb.prototype={}
P.aB.prototype={}
P.bE.prototype={}
P.bH.prototype={}
P.aW.prototype={
h:function(a){var t=P.W(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.bQ.prototype={
h:function(a){return"Cyclic error in JSON stringify"}}
P.cE.prototype={
a4:function(a,b){var t
u.cZ.a(b)
t=P.fQ(a,this.gb3().b,null)
return t},
gb3:function(){return C.D}}
P.bR.prototype={}
P.da.prototype={
ay:function(a){var t,s,r,q,p,o,n,m=a.length
for(t=J.hN(a),s=this.c,r=0,q=0;q<m;++q){p=t.af(a,q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(C.d.af(a,n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(C.d.b0(a,o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=C.d.J(a,r,q)
r=q+1
s.a+=H.t(92)
s.a+=H.t(117)
s.a+=H.t(100)
o=p>>>8&15
s.a+=H.t(o<10?48+o:87+o)
o=p>>>4&15
s.a+=H.t(o<10?48+o:87+o)
o=p&15
s.a+=H.t(o<10?48+o:87+o)}}continue}if(p<32){if(q>r)s.a+=C.d.J(a,r,q)
r=q+1
s.a+=H.t(92)
switch(p){case 8:s.a+=H.t(98)
break
case 9:s.a+=H.t(116)
break
case 10:s.a+=H.t(110)
break
case 12:s.a+=H.t(102)
break
case 13:s.a+=H.t(114)
break
default:s.a+=H.t(117)
s.a+=H.t(48)
s.a+=H.t(48)
o=p>>>4&15
s.a+=H.t(o<10?48+o:87+o)
o=p&15
s.a+=H.t(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=C.d.J(a,r,q)
r=q+1
s.a+=H.t(92)
s.a+=H.t(p)}}if(r===0)s.a+=H.e(a)
else if(r<m)s.a+=t.J(a,r,m)},
V:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.d(new P.bQ(a,null))}C.a.l(t,a)},
S:function(a){var t,s,r,q,p=this
if(p.ax(a))return
p.V(a)
try{t=p.b.$1(a)
if(!p.ax(t)){r=P.ei(a,null,p.gah())
throw H.d(r)}r=p.a
if(0>=r.length)return H.m(r,-1)
r.pop()}catch(q){s=H.U(q)
r=P.ei(a,s,p.gah())
throw H.d(r)}},
ax:function(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=C.e.h(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.ay(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.V(a)
r.bg(a)
t=r.a
if(0>=t.length)return H.m(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.V(a)
s=r.bh(a)
t=r.a
if(0>=t.length)return H.m(t,-1)
t.pop()
return s}else return!1},
bg:function(a){var t,s,r=this.c
r.a+="["
t=J.e1(a)
if(t.gap(a)){this.S(t.k(a,0))
for(s=1;s<t.gj(a);++s){r.a+=","
this.S(t.k(a,s))}}r.a+="]"},
bh:function(a){var t,s,r,q,p,o,n=this,m={}
if(a.gP(a)){n.c.a+="{}"
return!0}t=a.gj(a)*2
s=P.fs(t,null,u.X)
r=m.a=0
m.b=!0
a.A(0,new P.db(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.ay(H.H(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.m(s,o)
n.S(s[o])}q.a+="}"
return!0}}
P.db.prototype={
$2:function(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
C.a.n(t,s.a++,a)
C.a.n(t,s.a++,b)},
$S:6}
P.d9.prototype={
gah:function(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
P.cI.prototype={
$2:function(a,b){var t,s,r
u.E.a(a)
t=this.b
s=this.a
t.a+=s.a
r=t.a+=H.e(a.a)
t.a=r+": "
t.a+=P.W(b)
s.a=", "},
$S:16}
P.aP.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a&&!0},
gm:function(a){var t=this.a
return(t^C.b.C(t,30))&1073741823},
h:function(a){var t=this,s=P.fn(H.fC(t)),r=P.bJ(H.fA(t)),q=P.bJ(H.fw(t)),p=P.bJ(H.fx(t)),o=P.bJ(H.fz(t)),n=P.bJ(H.fB(t)),m=P.fo(H.fy(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.aQ.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gm:function(a){return C.b.gm(this.a)},
h:function(a){var t,s,r,q=new P.cC(),p=this.a
if(p<0)return"-"+new P.aQ(0-p).h(0)
t=q.$1(C.b.H(p,6e7)%60)
s=q.$1(C.b.H(p,1e6)%60)
r=new P.cB().$1(p%1e6)
return""+C.b.H(p,36e8)+":"+H.e(t)+":"+H.e(s)+"."+H.e(r)}}
P.cB.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:7}
P.cC.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:7}
P.i.prototype={
gU:function(){return H.aj(this.$thrownJsError)}}
P.aI.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.W(t)
return"Assertion failed"}}
P.c9.prototype={}
P.c0.prototype={
h:function(a){return"Throw of null."}}
P.O.prototype={
gY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gX:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+H.e(o),m=r.gY()+p+n
if(!r.a)return m
t=r.gX()
s=P.W(r.b)
return m+t+": "+s}}
P.b5.prototype={
gY:function(){return"RangeError"},
gX:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.e(r):""
else if(r==null)t=": Not greater than or equal to "+H.e(s)
else if(r>s)t=": Not in inclusive range "+H.e(s)+".."+H.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.e(s)
return t}}
P.bL.prototype={
gY:function(){return"RangeError"},
gX:function(){var t,s=H.bq(this.b)
if(typeof s!=="number")return s.aA()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.c_.prototype={
h:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.ae("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.W(o)
k.a=", "}l.d.A(0,new P.cI(k,j))
n=P.W(l.a)
m=j.h(0)
s="NoSuchMethodError: method not found: '"+H.e(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return s}}
P.cc.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ca.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.c4.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bF.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.W(t)+"."}}
P.b7.prototype={
h:function(a){return"Stack Overflow"},
gU:function(){return null},
$ii:1}
P.bI.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.cZ.prototype={
h:function(a){return"Exception: "+this.a}}
P.l.prototype={
gj:function(a){var t,s=this.gE(this)
for(t=0;s.p();)++t
return t},
h:function(a){return P.fr(this,"(",")")}}
P.v.prototype={
gm:function(a){return P.h.prototype.gm.call(C.B,this)},
h:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
w:function(a,b){return this===b},
gm:function(a){return H.b4(this)},
h:function(a){return"Instance of '"+H.e(H.cL(this))+"'"},
R:function(a,b){u.o.a(b)
throw H.d(P.ek(this,b.gar(),b.gat(),b.gas()))},
toString:function(){return this.h(this)}}
P.cn.prototype={
h:function(a){return""},
$iav:1}
P.ae.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$ifG:1}
W.c.prototype={}
W.bA.prototype={
h:function(a){return String(a)}}
W.bB.prototype={
h:function(a){return String(a)}}
W.a2.prototype={$ia2:1}
W.a3.prototype={
sD:function(a,b){a.height=b},
sF:function(a,b){a.width=b},
a7:function(a,b){return a.getContext(b)},
$ia3:1}
W.ao.prototype={
sI:function(a,b){a.fillStyle=b},
$iao:1}
W.J.prototype={
gj:function(a){return a.length}}
W.aO.prototype={
gj:function(a){return a.length}}
W.cz.prototype={}
W.cA.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName},
$ib:1}
W.a.prototype={$ia:1}
W.p.prototype={
aR:function(a,b,c,d){return a.addEventListener(b,H.bw(u.D.a(c),1),!1)},
$ip:1}
W.bK.prototype={
gj:function(a){return a.length}}
W.a5.prototype={
gao:function(a){return a.data},
gD:function(a){return a.height},
gF:function(a){return a.width},
$ia5:1}
W.K.prototype={
sD:function(a,b){a.height=b},
saD:function(a,b){a.src=b},
sF:function(a,b){a.width=b},
$iK:1}
W.aa.prototype={}
W.k.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.aF(a):t},
$ik:1}
W.c3.prototype={
gj:function(a){return a.length}}
W.bc.prototype={$ibc:1}
W.ag.prototype={$iag:1}
W.N.prototype={$iN:1}
W.dG.prototype={}
W.bd.prototype={}
W.ci.prototype={}
W.ck.prototype={}
W.cY.prototype={
$1:function(a){return this.a.$1(u.A.a(a))},
$S:17}
W.ch.prototype={}
P.cp.prototype={$ia5:1,
gao:function(a){return this.a},
gD:function(a){return this.b},
gF:function(a){return this.c}}
P.aX.prototype={$iaX:1}
P.di.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.hb,a,!1)
P.dS(t,$.ct(),a)
return t},
$S:2}
P.dj.prototype={
$1:function(a){return new this.a(a)},
$S:2}
P.dp.prototype={
$1:function(a){return new P.aV(a)},
$S:18}
P.dq.prototype={
$1:function(a){return new P.a7(a,u.U)},
$S:19}
P.dr.prototype={
$1:function(a){return new P.Q(a)},
$S:20}
P.Q.prototype={
k:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.d(P.cv("property is not a String or num"))
return P.dQ(this.a[b])},
n:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.d(P.cv("property is not a String or num"))
this.a[b]=P.dR(c)},
w:function(a,b){if(b==null)return!1
return b instanceof P.Q&&this.a===b.a},
h:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.U(s)
t=this.aJ(0)
return t}},
am:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.aC(b)
t=P.dJ(new H.R(b,t.i("@(1)").a(P.hW()),t.i("R<1,@>")),u.z)}return P.dQ(s[a].apply(s,t))},
gm:function(a){return 0}}
P.aV.prototype={}
P.a7.prototype={
ae:function(a){var t=this,s=a<0||a>=t.gj(t)
if(s)throw H.d(P.dK(a,0,t.gj(t),null,null))},
k:function(a,b){if(H.dk(b))this.ae(b)
return this.$ti.c.a(this.aH(0,b))},
n:function(a,b,c){if(H.dk(b))this.ae(b)
this.aK(0,b,c)},
gj:function(a){var t=this.a.length
if(typeof t==="number"&&t>>>0===t)return t
throw H.d(P.fF("Bad JsArray length"))},
$il:1,
$iq:1}
P.aA.prototype={
n:function(a,b,c){return this.aI(0,b,c)}}
X.dC.prototype={
$1:function(a){var t,s,r,q=this.a
q.save()
t=this.b
s=t.d
r=t.b*8/2*1.5
q.translate(s-r,t.e-r)
r=t.b*8/2/360
q.scale(r,r)
q.drawImage(this.c,0,0)
r=t.d
s=t.b*8/2
q.translate(-r+s,-t.e+s)
q.restore()},
$S:1}
X.dD.prototype={
$1:function(a){var t,s,r,q=this.a
q.save()
t=this.b
s=t.d
r=t.b*8/2
q.translate(s-r*2.8,t.e-r)
r=t.b*8/2/360
q.scale(r,r)
q.drawImage(this.c,0,0)
r=t.d
s=t.b*8/2
q.translate(-r+s*2.8,-t.e+s)
q.restore()},
$S:1}
X.b6.prototype={
T:function(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
j.a=a
j.b=J.fb(a)
j.c=J.fa(j.a)
t=j.bf()
s=H.D([],u.q)
for(r=t.length,q=u.V,p=0;p<t.length;t.length===r||(0,H.aH)(t),++p){o=t[p]
n=o.a
m=o.b
if(!j.b8(s,n,m)){l=new X.ba(H.D([0,0,0,0,0,0,0,0],q))
l.b2(0,j,n,m)
if(l.a>0){n=l.d
m=l.b*8/2
if(n>m){k=j.b
if(typeof k!=="number")return k.G()
if(n<k-m){n=l.e
if(n>m){k=j.c
if(typeof k!=="number")return k.G()
m=n<k-m
n=m}else n=!1}else n=!1}else n=!1
if(n)C.a.l(s,l)}}}return s},
b8:function(a,b,c){var t,s,r,q,p,o
u.b9.a(a)
for(t=a.length,s=0;s<t;++s){r=a[s]
q=r.d-b
p=r.e-c
o=r.b*4
if(q*q+p*p<=o*o)return!0}return!1},
bf:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=H.D([],u.k),g=i,f=g,e=f,d=e,c=d,b=c,a=128,a0=0
while(!0){t=j.c
if(typeof t!=="number")return H.B(t)
if(!(a0<t))break
t=C.b.a9(a0,2)===0
if(t)s=0
else{r=j.b
if(typeof r!=="number")return r.G()
s=r-1}r=j.b
if(typeof r!=="number")return H.B(r)
s+=a0*r
q=0
p=0
o=0
n=0
m=0
while(!0){r=j.b
if(typeof r!=="number")return H.B(r)
if(!(m<r))break
r=J.V(j.a)
l=s*4
if(l<0||l>=r.length)return H.m(r,l)
b=r[l]
r=J.V(j.a)
k=l+1
if(k>=r.length)return H.m(r,k)
c=r[k]
k=J.V(j.a)
r=l+2
if(r>=k.length)return H.m(k,r)
d=k[r]
e=b+c+d
a+=e-C.b.C(a,3)
f=C.b.C(a,3)
b&=254
e=e<f*0.975?0:1
r=J.V(j.a)
if(l>=r.length)return H.m(r,l)
r[l]=b+e
switch(n){case 0:if(e===0){q=1
p=0
o=0
n=1}break
case 1:if(e===0)++q
else{p=1
n=2}break
case 2:if(e===0){o=1
n=3}else ++p
break
case 3:if(e===0)++o
else{if(q>=4)if(o>=4)if(p>=6){r=q+o
l=r-p
r=l<=r&&l<=p&&o-q<=q&&q-o<=o}else r=!1
else r=!1
else r=!1
if(r){g=1+o+(p>>>1)
g=t?s-g:s+g
r=j.b
if(typeof r!=="number")return H.B(r)
C.a.l(h,new X.bD(C.b.a9(g,r),a0))}q=o
p=1
o=0
n=2}break}s+=t?1:-1;++m}++a0}return h},
az:function(a,b){var t,s,r,q,p,o,n,m,l,k=this
if(a>=1){t=k.b
if(typeof t!=="number")return t.G()
if(a<=t-2)if(b>=1){t=k.c
if(typeof t!=="number")return t.G()
t=b>t-2}else t=!0
else t=!0}else t=!0
if(t)return 0
for(s=b-1,t=b+1,r=a-1,q=a+1,p=0,o=null;s<=t;++s)for(n=r;n<=q;++n){m=J.V(k.a)
l=k.b
if(typeof l!=="number")return H.B(l)
l=(s*l+n)*4
if(l<0||l>=m.length)return H.m(m,l)
o=m[l]
p+=(o&1)*255}return C.b.H(p,9)},
N:function(a,b,c,d){var t,s,r,q,p,o=this,n=o.b
if(typeof n!=="number")return H.B(n)
t=b*n+a
n=J.V(o.a)
s=t*4
if(s<0||s>=n.length)return H.m(n,s)
r=n[s]&1
for(q=0,p=!1;!0;){n=o.b
if(typeof n!=="number")return H.B(n)
t+=c+d*n;++q
if(t>0){s=o.c
if(typeof s!=="number")return H.B(s)
s=t>=n*s
n=s}else n=!0
if(n)return q
else{n=J.V(o.a)
s=t*4
if(s<0||s>=n.length)return H.m(n,s)
if((n[s]&1)!==r){if(p)return q
else{n=J.V(o.a)
if(s>=n.length)return H.m(n,s)
r=n[s]&1}p=!0}}}}}
X.bD.prototype={}
X.ba.prototype={
b2:function(a,b,c,d){var t,s,r,q,p,o=this,n=b.N(c,d,0,-1),m=b.N(c,d,0,1),l=b.N(c,d,-1,0),k=b.N(c,d,1,0)
o.d=c
o.e=d
if(typeof k!=="number")return k.G()
if(typeof l!=="number")return H.B(l)
o.d=c+(k-l)/2
if(typeof m!=="number")return m.G()
if(typeof n!=="number")return H.B(n)
o.e=d+(m-n)/2
o.b=(k+l+n+m)/8
o.a=-1
for(t=0,s=0,r=0;r<5;++r){q=r*0.483321946706122/5
p=o.au(b,o.b,q)
if(p>t){s=q
t=p}}if(t>0){o.au(b,o.b,s)
o.a=o.b9(o.a,s)}return o.a},
au:function(a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.a=-1
for(t=a.f,s=null,r=0,q=null,p=null,o=0,n=0,m=0;m<13;++m){l=0.483321946706122*m+a2
k=Math.cos(l)
j=Math.sin(l)
for(i=0;i<8;++i){s=(i-3.5)*a1
q=C.b.aw(C.e.B(a.d+k*s))
p=C.b.aw(C.e.B(a.e+j*s))
C.a.n(t,i,a0.az(q,p))}l=t[1]
if(l<=128||t[3]<=128||t[4]<=128||t[6]<=128)return 0
h=t[2]
if(h>128||t[5]>128)return 0
g=t[3]
f=t[4]
e=t[6]
d=t[5]
c=t[7]
r=r+(l+g+f+e+(255-h)+(255-d))+Math.abs(c*2-255)
b=c>128?1:0
n+=b
o=(o<<1>>>0)+b}if(n===5){a.a=o
return r}else return 0},
b9:function(a,b){var t,s
this.c=0
for(t=a,s=1;s<=13;++s){a=(a<<1&8191|C.b.C(a,12))>>>0
if(a<t){this.c=s*0.483321946706122
t=a}}this.c+=b-0.241660973353061
return t},
a3:function(a){var t,s,r=this,q="white",p=r.a,o=r.b,n=8*o*0.5,m=r.c;(a&&C.h).sI(a,q)
a.beginPath()
a.arc(r.d,r.e,n,0,6.283185307179586,!0)
a.fill()
for(t=0;t<13;++t){s=t*-0.483321946706122+m
C.h.sI(a,(p&1)>0?q:"red")
a.beginPath()
a.moveTo(r.d,r.e)
a.arc(r.d,r.e,n,s,s-0.483321946706122,!0)
a.closePath()
a.fill()
p=C.b.C(p,1)}C.h.sI(a,q)
a.beginPath()
a.arc(r.d,r.e,n-o,0,6.283185307179586,!0)
a.fill()
C.h.sI(a,"red")
a.beginPath()
a.arc(r.d,r.e,n-o*2,0,6.283185307179586,!0)
a.fill()
C.h.sI(a,q)
a.beginPath()
a.arc(r.d,r.e,n-o*3,0,6.283185307179586,!0)
a.fill()}}
X.cd.prototype={
aM:function(a){var t,s,r,q,p,o=this
o.e=new X.b6()
t=o.a
s="#"+H.e(t)
r=document
q=u.B.a(r.querySelector(s))
o.b=u.t.a((q&&C.f).a7(q,"2d"))
s=r.createElement("video")
s.id=H.e(t)+"-video"
o.c=s
s.autoplay=!0
s=o.c.style
s.display="none"
r.body.appendChild(o.c)
t=o.c
s=u.L
r=s.i("~(1)?")
p=r.a(new X.cS(o))
u.Y.a(null)
s=s.c
W.ay(t,"play",p,!1,s)
W.ay(o.c,"pause",r.a(new X.cT(o)),!1,s)},
aX:function(a){var t,s,r,q,p,o,n,m,l=this
u.J.a(a)
l.b.save()
l.b.scale(1,1)
l.b.drawImage(l.c,0,0)
l.b.restore()
t=l.b
s=l.c
r=P.e0(t.getImageData(0,0,s.videoWidth,s.videoHeight))
q=l.e.T(r,l.b)
p=[]
for(t=q.length,s=u.z,o=0;o<q.length;q.length===t||(0,H.aH)(q),++o){n=q[o]
n.a3(l.b)
p.push(P.aZ(["code",n.a,"x",n.d,"y",n.e,"radius",n.b*8/2,"angle",n.c],s,s))}t=l.a
m=P.aZ(["canvasId",t,"topcodes",p],u.O,u._)
$.dE().k(0,"TopCodes").am("_relayFrameData",H.D([t,C.i.a4(m,null)],u.i))}}
X.cS.prototype={
$1:function(a){var t=this.a
P.bx("video width: "+H.e(t.c.videoWidth))
P.bx("video height: "+H.e(t.c.videoHeight))
t.d=P.eo(C.o,t.gaW())},
$S:1}
X.cT.prototype={
$1:function(a){var t,s
P.bx("pause")
t=this.a
s=t.d
if(s!=null)s.an()
t.d=null},
$S:1}
X.ce.prototype={
aN:function(a){var t,s,r,q,p,o=this
o.e=new X.b6()
t=o.a
s="#"+H.e(t)
r=document
q=u.B.a(r.querySelector(s))
o.b=u.t.a((q&&C.f).a7(q,"2d"))
s=r.createElement("video")
s.id=H.e(t)+"-video"
o.c=s
s.autoplay=!0
s=o.c.style
s.display="none"
r.body.appendChild(o.c)
t=o.c
s=u.L
r=s.i("~(1)?")
p=r.a(new X.cQ(o))
u.Y.a(null)
s=s.c
W.ay(t,"play",p,!1,s)
W.ay(o.c,"pause",r.a(new X.cR(o)),!1,s)},
aZ:function(a){var t,s,r,q,p,o,n,m,l=this
u.J.a(a)
l.b.save()
l.b.translate(l.c.videoWidth,0)
l.b.scale(-1,1)
l.b.drawImage(l.c,0,0)
l.b.restore()
t=l.b
s=l.c
r=P.e0(t.getImageData(0,0,s.videoWidth,s.videoHeight))
q=l.e.T(r,l.b)
p=[]
for(t=q.length,s=u.z,o=0;o<q.length;q.length===t||(0,H.aH)(q),++o){n=q[o]
n.a3(l.b)
p.push(P.aZ(["code",n.a,"x",n.d,"y",n.e,"radius",n.b*8/2,"angle",n.c],s,s))}t=l.a
m=P.aZ(["canvasId",t,"topcodes",p],u.O,u._)
$.dE().k(0,"TopCodes").am("_relayFrameData",H.D([t,C.i.a4(m,null)],u.i))}}
X.cQ.prototype={
$1:function(a){var t=this.a
P.bx("video width: "+H.e(t.c.videoWidth))
P.bx("video height: "+H.e(t.c.videoHeight))
t.d=P.eo(C.o,t.gaY())},
$S:1}
X.cR.prototype={
$1:function(a){var t,s
P.bx("pause")
t=this.a
s=t.d
if(s!=null)s.an()
t.d=null},
$S:1};(function aliases(){var t=J.w.prototype
t.aF=t.h
t.aE=t.R
t=J.a6.prototype
t.aG=t.h
t=P.h.prototype
t.aJ=t.h
t=P.Q.prototype
t.aH=t.k
t.aI=t.n
t=P.aA.prototype
t.aK=t.n})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(P,"hF","fL",4)
t(P,"hG","fM",4)
t(P,"hH","fN",4)
s(P,"eM","hx",0)
t(P,"hJ","he",2)
t(P,"hW","dR",21)
t(P,"hV","dQ",22)
t(X,"i0","i4",23)
t(X,"hZ","hR",9)
t(X,"i_","hS",9)
r(X.cd.prototype,"gaW","aX",8)
r(X.ce.prototype,"gaY","aZ",8)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.dH,J.w,J.bC,P.i,P.l,H.ar,H.y,H.aw,P.at,H.aL,H.bN,H.a4,H.cO,H.cJ,H.bj,H.dc,P.as,H.cF,H.bT,H.F,H.cl,H.co,P.bk,P.aJ,P.be,P.C,P.cg,P.b8,P.c6,P.c7,P.bp,P.j,P.bo,P.bE,P.da,P.aP,P.aQ,P.b7,P.cZ,P.v,P.cn,P.ae,W.cz,W.dG,P.cp,P.Q,X.b6,X.bD,X.ba,X.cd,X.ce])
r(J.w,[J.bM,J.ap,J.a6,J.o,J.aq,J.X,H.ac,W.p,W.a2,W.ao,W.ch,W.cA,W.a,W.a5,P.aX])
r(J.a6,[J.c1,J.ax,J.L])
s(J.cD,J.o)
r(J.aq,[J.aU,J.bO])
r(P.i,[H.bS,H.b2,P.c9,H.bP,H.cb,H.c2,P.aI,H.cj,P.aW,P.c0,P.O,P.c_,P.cc,P.ca,P.c4,P.bF,P.bI])
s(H.aR,P.l)
r(H.aR,[H.a9,H.aY])
s(H.R,H.a9)
s(P.aB,P.at)
s(P.bb,P.aB)
s(H.aM,P.bb)
s(H.aN,H.aL)
r(H.a4,[H.cK,H.c8,H.dw,H.dx,H.dy,P.cV,P.cU,P.cW,P.cX,P.dg,P.df,P.d_,P.d3,P.d0,P.d1,P.d2,P.d6,P.d7,P.d5,P.d4,P.cM,P.cN,P.dm,P.dd,P.de,P.cH,P.db,P.cI,P.cB,P.cC,W.cY,P.di,P.dj,P.dp,P.dq,P.dr,X.dC,X.dD,X.cS,X.cT,X.cQ,X.cR])
s(H.b3,P.c9)
r(H.c8,[H.c5,H.an])
s(H.cf,P.aI)
s(P.b_,P.as)
s(H.a8,P.b_)
s(H.au,H.ac)
r(H.au,[H.bf,H.bh])
s(H.bg,H.bf)
s(H.ab,H.bg)
s(H.bi,H.bh)
s(H.b0,H.bi)
r(H.b0,[H.bU,H.bV,H.bW,H.bX,H.bY,H.b1,H.bZ])
s(H.bl,H.cj)
s(P.cm,P.bp)
s(P.bH,P.c7)
s(P.bQ,P.aW)
s(P.cE,P.bE)
s(P.bR,P.bH)
s(P.d9,P.da)
r(P.O,[P.b5,P.bL])
r(W.p,[W.k,W.ag,W.N])
r(W.k,[W.b,W.J])
s(W.c,W.b)
r(W.c,[W.bA,W.bB,W.a3,W.bK,W.K,W.aa,W.c3])
s(W.aO,W.ch)
s(W.bc,W.aa)
s(W.bd,P.b8)
s(W.ci,W.bd)
s(W.ck,P.c6)
r(P.Q,[P.aV,P.aA])
s(P.a7,P.aA)
t(H.bf,P.j)
t(H.bg,H.y)
t(H.bh,P.j)
t(H.bi,H.y)
t(P.aB,P.bo)
t(W.ch,W.cz)
t(P.aA,P.j)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",I:"double",aG:"num",r:"String",ds:"bool",v:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","v(a*)","@(@)","v()","~(~())","v(@)","~(h?,h?)","r(f)","~(b9*)","~(r*)","~(r,@)","@(@,r)","@(r)","v(~())","v(h,av)","C<@>(@)","~(af,@)","~(a)","aV(@)","a7<@>(@)","Q(@)","h?(h?)","h?(@)","r*(K*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.h4(v.typeUniverse,JSON.parse('{"c1":"a6","ax":"a6","L":"a6","ia":"a","ii":"a","i9":"b","ik":"b","ip":"b","ic":"c","il":"k","ih":"k","ig":"N","id":"J","iq":"J","ij":"a2","ib":"aa","io":"ab","im":"ac","bM":{"ds":[]},"ap":{"v":[]},"o":{"q":["1"],"l":["1"]},"cD":{"o":["1"],"q":["1"],"l":["1"]},"aq":{"I":[],"aG":[]},"aU":{"I":[],"f":[],"aG":[]},"bO":{"I":[],"aG":[]},"X":{"r":[]},"bS":{"i":[]},"b2":{"i":[]},"aR":{"l":["1"]},"a9":{"l":["1"]},"R":{"a9":["2"],"l":["2"],"a9.E":"2"},"aw":{"af":[]},"aM":{"bb":["1","2"],"aB":["1","2"],"at":["1","2"],"bo":["1","2"],"M":["1","2"]},"aL":{"M":["1","2"]},"aN":{"aL":["1","2"],"M":["1","2"]},"bN":{"ef":[]},"b3":{"i":[]},"bP":{"i":[]},"cb":{"i":[]},"bj":{"av":[]},"a4":{"aS":[]},"c8":{"aS":[]},"c5":{"aS":[]},"an":{"aS":[]},"c2":{"i":[]},"cf":{"i":[]},"a8":{"as":["1","2"],"ej":["1","2"],"M":["1","2"]},"aY":{"l":["1"]},"ac":{"G":[]},"au":{"E":["1"],"G":[]},"ab":{"j":["I"],"E":["I"],"q":["I"],"G":[],"l":["I"],"y":["I"],"j.E":"I"},"b0":{"j":["f"],"E":["f"],"q":["f"],"G":[],"l":["f"],"y":["f"]},"bU":{"j":["f"],"E":["f"],"q":["f"],"G":[],"l":["f"],"y":["f"],"j.E":"f"},"bV":{"j":["f"],"E":["f"],"q":["f"],"G":[],"l":["f"],"y":["f"],"j.E":"f"},"bW":{"j":["f"],"E":["f"],"q":["f"],"G":[],"l":["f"],"y":["f"],"j.E":"f"},"bX":{"j":["f"],"E":["f"],"q":["f"],"G":[],"l":["f"],"y":["f"],"j.E":"f"},"bY":{"j":["f"],"E":["f"],"q":["f"],"G":[],"l":["f"],"y":["f"],"j.E":"f"},"b1":{"j":["f"],"fH":[],"E":["f"],"q":["f"],"G":[],"l":["f"],"y":["f"],"j.E":"f"},"bZ":{"j":["f"],"E":["f"],"q":["f"],"G":[],"l":["f"],"y":["f"],"j.E":"f"},"cj":{"i":[]},"bl":{"i":[]},"C":{"aT":["1"]},"bk":{"b9":[]},"aJ":{"i":[]},"bp":{"es":[]},"cm":{"bp":[],"es":[]},"b_":{"as":["1","2"],"M":["1","2"]},"as":{"M":["1","2"]},"at":{"M":["1","2"]},"bb":{"aB":["1","2"],"at":["1","2"],"bo":["1","2"],"M":["1","2"]},"aW":{"i":[]},"bQ":{"i":[]},"bR":{"bH":["h?","r"]},"I":{"aG":[]},"f":{"aG":[]},"q":{"l":["1"]},"aI":{"i":[]},"c9":{"i":[]},"c0":{"i":[]},"O":{"i":[]},"b5":{"i":[]},"bL":{"i":[]},"c_":{"i":[]},"cc":{"i":[]},"ca":{"i":[]},"c4":{"i":[]},"bF":{"i":[]},"b7":{"i":[]},"bI":{"i":[]},"cn":{"av":[]},"ae":{"fG":[]},"c":{"b":[],"k":[],"p":[]},"b":{"k":[],"p":[]},"K":{"b":[],"k":[],"p":[]},"k":{"p":[]},"bA":{"b":[],"k":[],"p":[]},"bB":{"b":[],"k":[],"p":[]},"a3":{"b":[],"k":[],"p":[]},"J":{"k":[],"p":[]},"bK":{"b":[],"k":[],"p":[]},"aa":{"b":[],"k":[],"p":[]},"c3":{"b":[],"k":[],"p":[]},"bc":{"b":[],"k":[],"p":[]},"ag":{"p":[]},"N":{"p":[]},"bd":{"b8":["1"]},"ci":{"bd":["1"],"b8":["1"]},"cp":{"a5":[]},"a7":{"j":["1"],"q":["1"],"l":["1"],"j.E":"1"}}'))
H.h3(v.typeUniverse,JSON.parse('{"aR":1,"au":1,"c6":1,"c7":2,"b_":2,"bE":2,"aA":1}'))
0
var u=(function rtii(){var t=H.du
return{n:t("aJ"),x:t("a2"),h:t("aM<af,@>"),C:t("i"),A:t("a"),Z:t("aS"),d:t("aT<@>"),I:t("a5"),o:t("ef"),N:t("l<@>"),s:t("o<r>"),b:t("o<@>"),k:t("o<bD*>"),i:t("o<r*>"),q:t("o<ba*>"),V:t("o<f*>"),T:t("ap"),g:t("L"),p:t("E<@>"),U:t("a7<@>"),W:t("a8<af,@>"),w:t("aX"),j:t("q<@>"),f:t("M<@,@>"),r:t("k"),P:t("v"),K:t("h"),l:t("av"),u:t("r"),E:t("af"),ae:t("b9"),Q:t("G"),cr:t("ax"),cg:t("ag"),bj:t("N"),L:t("ci<a*>"),c:t("C<@>"),a:t("C<f>"),y:t("ds"),m:t("ds(h)"),cb:t("I"),z:t("@"),bd:t("@()"),v:t("@(h)"),R:t("@(h,av)"),S:t("f"),B:t("a3*"),t:t("ao*"),bL:t("K*"),bl:t("q<@>*"),b9:t("q<ba*>*"),G:t("0&*"),_:t("h*"),O:t("r*"),J:t("b9*"),bQ:t("r*(K*)*"),bc:t("aT<v>?"),X:t("h?"),F:t("be<@,@>?"),D:t("@(a)?"),cZ:t("h?(@)?"),Y:t("~()?"),cY:t("aG"),H:t("~"),M:t("~()"),e:t("~(b9)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.f=W.a3.prototype
C.h=W.ao.prototype
C.j=W.K.prototype
C.A=J.w.prototype
C.a=J.o.prototype
C.b=J.aU.prototype
C.B=J.ap.prototype
C.e=J.aq.prototype
C.d=J.X.prototype
C.C=J.L.prototype
C.r=J.c1.prototype
C.k=J.ax.prototype
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.t=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.y=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.x=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.w=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.m=function(hooks) { return hooks; }

C.i=new P.cE()
C.n=new H.dc()
C.c=new P.cm()
C.z=new P.cn()
C.o=new P.aQ(6e4)
C.D=new P.bR(null)
C.p=H.D(t([]),u.b)
C.E=H.D(t([]),H.du("o<af*>"))
C.q=new H.aN(0,{},C.E,H.du("aN<af*,@>"))
C.F=new H.aw("call")})();(function staticFields(){$.d8=null
$.P=0
$.aK=null
$.ea=null
$.eQ=null
$.eL=null
$.eV=null
$.dt=null
$.dz=null
$.e3=null
$.aD=null
$.bt=null
$.bu=null
$.dW=!1
$.n=C.c
$.A=H.D([],H.du("o<h>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"ie","ct",function(){return H.eP("_$dart_dartClosure")})
t($,"ir","eY",function(){return H.S(H.cP({
toString:function(){return"$receiver$"}}))})
t($,"is","eZ",function(){return H.S(H.cP({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"it","f_",function(){return H.S(H.cP(null))})
t($,"iu","f0",function(){return H.S(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"ix","f3",function(){return H.S(H.cP(void 0))})
t($,"iy","f4",function(){return H.S(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"iw","f2",function(){return H.S(H.eq(null))})
t($,"iv","f1",function(){return H.S(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"iA","f6",function(){return H.S(H.eq(void 0))})
t($,"iz","f5",function(){return H.S(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"iB","e5",function(){return P.fK()})
t($,"iO","dE",function(){return P.eK(self)})
t($,"iC","e6",function(){return H.eP("_$dart_dartObject")})
t($,"iP","e7",function(){return function DartObject(a){this.o=a}})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,WebGLRenderingContext:J.w,WebGL2RenderingContext:J.w,SQLError:J.w,DataView:H.ac,ArrayBufferView:H.ac,Float32Array:H.ab,Float64Array:H.ab,Int16Array:H.bU,Int32Array:H.bV,Int8Array:H.bW,Uint16Array:H.bX,Uint32Array:H.bY,Uint8ClampedArray:H.b1,CanvasPixelArray:H.b1,Uint8Array:H.bZ,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bA,HTMLAreaElement:W.bB,Blob:W.a2,File:W.a2,HTMLCanvasElement:W.a3,CanvasRenderingContext2D:W.ao,CDATASection:W.J,CharacterData:W.J,Comment:W.J,ProcessingInstruction:W.J,Text:W.J,CSSStyleDeclaration:W.aO,MSStyleCSSProperties:W.aO,CSS2Properties:W.aO,DOMException:W.cA,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,EventTarget:W.p,HTMLFormElement:W.bK,ImageData:W.a5,HTMLImageElement:W.K,HTMLAudioElement:W.aa,HTMLMediaElement:W.aa,Document:W.k,DocumentFragment:W.k,HTMLDocument:W.k,ShadowRoot:W.k,XMLDocument:W.k,Attr:W.k,DocumentType:W.k,Node:W.k,HTMLSelectElement:W.c3,HTMLVideoElement:W.bc,Window:W.ag,DOMWindow:W.ag,DedicatedWorkerGlobalScope:W.N,ServiceWorkerGlobalScope:W.N,SharedWorkerGlobalScope:W.N,WorkerGlobalScope:W.N,IDBKeyRange:P.aX})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:true,File:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,ImageData:true,HTMLImageElement:true,HTMLAudioElement:true,HTMLMediaElement:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,HTMLVideoElement:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,IDBKeyRange:true})
H.au.$nativeSuperclassTag="ArrayBufferView"
H.bf.$nativeSuperclassTag="ArrayBufferView"
H.bg.$nativeSuperclassTag="ArrayBufferView"
H.ab.$nativeSuperclassTag="ArrayBufferView"
H.bh.$nativeSuperclassTag="ArrayBufferView"
H.bi.$nativeSuperclassTag="ArrayBufferView"
H.b0.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=X.hY
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
