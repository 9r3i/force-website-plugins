/**
 * slider.js
 * ~ a Force plugin for sliding images
 * started at november 10th 2022
 * @requires tiny.slider.js, ForceWebsite
 */
;function slider(param){
this.images=param.hasOwnProperty('images')?param.images:[];
this.bodyID=param.hasOwnProperty('id')?param.id:'body';
this.init=function(plug){
  var root=plug.hosts.hasOwnProperty('slider')
    ?plug.hosts.slider:plug.root,
  css=root+'/slider/tiny.slider.min.css',
  js=root+'/slider/tiny.slider.min.js';
  ForceWebsite.loadFile(css,r=>{
    plug.Force.loadStyle(r,css);
  });
  if(ForceWebsite.query.hasOwnProperty('home')
    ||window.location.search==''){
    var sd=this.build(this.convert(this.images)),
    body=document.getElementById(this.bodyID),
    bulk=body.firstChild;
    body.insertBefore(sd.element,bulk);
    ForceWebsite.loadFile(js,r=>{
      plug.Force.loadScript(r,js);
      plug.Force.onFunctionReady('tns',r=>{
        sd.start();
      });
    });
  }
};
this.convert=function(images){
  images=Array.isArray(images)?images:[];
  var res=[];
  for(var p of images){
    var image=p.toString();
    if(image.match(/^\d+$/)){
      image=ForceWebsite.imageURL(p);
    }res.push(image);
  }return res;
};
this.build=function(images){
  images=Array.isArray(images)?images:[];
  var imgs=[],
  cname='slider',
  config={
    container:'.'+cname,
    items:1,
    slideBy:"page",
    mouseDrag:false,
    swipeAngle:false,
    controls:false,
    nav:false,
    speed:400,
    startIndex:0,
    rewind:false,
    center:false,
    autoWidth:false,
    loop:true,
    autoplay:true,
    autoplayHoverPause:false,
    autoplayTimeout:2500,
    autoplayText:[
      "▶",
      "❚❚",
    ],
    autoplayButton:false,
    autoplayButtonOutput:false,
    autoplayResetOnVisibility:false,
  },
  div=document.createElement('div');
  div.classList.add(cname);
  for(var i in images){
    var di=document.createElement('div');
    var img=document.createElement('img');
    img.src=''+images[i];
    di.appendChild(img);
    div.appendChild(di);
    imgs.push(img);
  }
  return {
    config:config,
    start:function(){
      if(typeof window.tns==='function'){
        return window.tns(this.config);
      }alert('Error: Slider is not loaded.');
    },
    element:div,
    images:imgs,
  };
};
};
