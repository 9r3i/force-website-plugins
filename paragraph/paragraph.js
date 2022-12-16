/**
 * paragraph.js
 * ~ a Force plugin for replace \n to br
 * started at december 3rd 2022
 * @requires ForceWebsite
 * @note: please place this plugin after locode
 */
function paragraph(param){
this.init=function(plug){
  var _paragraph=this;
  if(ForceWebsite.query.hasOwnProperty('p')){
    ForceWebsite.onContentReady(r=>{
      var pc=_paragraph.convert(r.innerHTML);
      r.innerHTML=pc;
    });
  }
};
this.convert=function(s){
  var _paragraph=this,
  r=[],
  u=s.split(/\n\n/),
  l=document.getElementsByClassName('locode-section');
  for(var n of u){
    if(n.trim()==''){
      r.push(n+'\n');
      continue;
    }
    var h=false;
    for(var i of l){
      if(n.indexOf(i)>=0||i.innerHTML.indexOf(n)>=0){
        h=true;
        break;
      }
    }
    if(h){
      r.push(n+'\n');
      continue;
    }
    if(n.trim().match(/^<(p|h\d|div)[^>]*>/i)){
      r.push(n+'\n');
      continue;
    }
    var c=n.replace('\n','<br />');
    r.push('<p>'+c+'</p>\n');
  }return r.join('');
};
}
