//     keymaster.js
//     (c) 2011-2012 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.
(function(e){function a(e,t){var n=e.length;while(n--)if(e[n]===t)return n;return-1}function f(e,t){var i,o,f,l,c;i=e.keyCode,a(u,i)==-1&&u.push(i);if(i==93||i==224)i=91;if(i in r){r[i]=!0;for(f in s)s[f]==i&&(h[f]=!0);return}if(!h.filter.call(this,e))return;if(!(i in n))return;for(l=0;l<n[i].length;l++){o=n[i][l];if(o.scope==t||o.scope=="all"){c=o.mods.length>0;for(f in r)if(!r[f]&&a(o.mods,+f)>-1||r[f]&&a(o.mods,+f)==-1)c=!1;(o.mods.length==0&&!r[16]&&!r[18]&&!r[17]&&!r[91]||c)&&o.method(e,o)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function l(e){var t=e.keyCode,n,i=a(u,t);i>=0&&u.splice(i,1);if(t==93||t==224)t=91;if(t in r){r[t]=!1;for(n in s)s[n]==t&&(h[n]=!1)}}function c(){for(t in r)r[t]=!1;for(t in s)h[t]=!1}function h(e,t,r){var i,u,a,f;r===undefined&&(r=t,t="all"),e=e.replace(/\s/g,""),i=e.split(","),i[i.length-1]==""&&(i[i.length-2]+=",");for(a=0;a<i.length;a++){u=[],e=i[a].split("+");if(e.length>1){u=e.slice(0,e.length-1);for(f=0;f<u.length;f++)u[f]=s[u[f]];e=[e[e.length-1]]}e=e[0],e=o[e]||e.toUpperCase().charCodeAt(0),e in n||(n[e]=[]),n[e].push({shortcut:i[a],scope:t,method:r,key:i[a],mods:u})}}function p(e){if(typeof e=="string"){if(e.length!=1)return!1;e=e.toUpperCase().charCodeAt(0)}return a(u,e)!=-1}function d(){return u}function v(e){var t=(e.target||e.srcElement).tagName;return t!="INPUT"&&t!="SELECT"&&t!="TEXTAREA"}function m(e){i=e||"all"}function g(){return i||"all"}function y(e){var t,r,i;for(t in n){r=n[t];for(i=0;i<r.length;)r[i].scope===e?r.splice(i,1):i++}}function b(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,function(){n(window.event)})}function E(){var t=e.key;return e.key=w,t}var t,n={},r={16:!1,18:!1,17:!1,91:!1},i="all",s={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},o={backspace:8,tab:9,clear:12,enter:13,"return":13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,"delete":46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},u=[];for(t=1;t<20;t++)s["f"+t]=111+t;for(t in s)h[t]=!1;b(document,"keydown",function(e){f(e,i)}),b(document,"keyup",l),b(window,"focus",c);var w=e.key;e.key=h,e.key.setScope=m,e.key.getScope=g,e.key.deleteScope=y,e.key.filter=v,e.key.isPressed=p,e.key.getPressedKeyCodes=d,e.key.noConflict=E,typeof module!="undefined"&&(module.exports=key)})(this);

;(function () {
    
    // Wait for xt.options to be set
  ;(function check() {
    // If hotkey is switched on, add the buttons
    if( xt.options && xt.options['buffer.op.key-enable'] === 'key-enable') {
      key(xt.options['buffer.op.key-combo'], function () {
        xt.port.emit("buffer_click", {placement: 'hotkey'});
        return false;
      });
    } else {
      setTimeout(check, 50);
    }
  }());
    
}());
