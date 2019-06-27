$(document).ready(function(){
  $(".owl-carousel").owlCarousel(1);
})




/*
  Hover scale.
  By NeekGerd.
 */

(function(exports,$){
  var self = this;
  self.CSSvendors = ["-webkit-","-moz-", "-o-", "-ms-","-khtml-",""];

  $("#wrapper .hover").on("mouseenter",function(){
    var $el = $(this),
      $im = $el.children("img"),
      elSize = {w:($el.width()+10)*1.2,h:($el.height()+10)*1.2},
      elPos = $el.offset();

    $(this).on("mousemove",function(evt){
      var mousePos = {x:evt.clientX-elPos.left,y:evt.clientY-elPos.top},
        imSize = {w:$im.width(),h:$im.height()},
        translate = "",
        imPos = {x:$im.position().left,y:$im.position().top},
        css = {},
        newPos = {x:0,y:0};

      newPos.x = - (15 + (mousePos.x/elSize.w)*(imSize.w-elSize.w));
      newPos.y = - (15 + (mousePos.y/elSize.h)*(imSize.h-elSize.h));

      translate = "translate("+newPos.x+"px,"+newPos.y+"px)";
      css = self.prefixCSS(css,"transform",translate);
      $im.css(css);
    });
  }).on("mouseleave",function(){
    $(this).off("mousemove");
    var css = {};
    self.prefixCSS(css,"transform","");
    $(this).children("img").css(css);
  });

  self.prefixCSS = function(obj,prop,value){
    var self = this;
    obj = obj||{};
    for (var i = 0, max = self.CSSvendors.length; i < max; i += 1) {
        obj[self.CSSvendors[i] + "" + prop] = value;
    }
    return obj;
  };


})(window,jQuery);