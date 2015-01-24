/**
 * jquery.simpletip 1.1.0. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.1.0
 */
(function($){

   function Simpletip(elem, conf)
   {
      var self = this;
      
      var tooltip = jQuery(document.createElement('div'))
                     .addClass(conf.class)
                     .html(conf.contents)
                     .appendTo('body');
      
      if(conf.hover)
      {
         jQuery(elem).hover(
            function(){ self.show() },
            function(){ self.hide() }
         )
         
         jQuery().mousemove( function(e){
            if(jQuery(tooltip).css('display') !== 'none') 
               self.updatePos(e) 
         });
      }
      else
      {
         jQuery(tooltip).click( function(){ self.hide() } )
         
         jQuery(elem).click( function(){
            if(jQuery(tooltip).css('display') !== 'none')
               self.hide() ;
            else
               self.show();
         });
      }
      
      
      jQuery.extend(self,
      {
         getVersion: function()
         {
            return [1, 1, 0];
         },
         
         show: function()
         {
            conf.onBeforeShow();
            
            self.updatePos();
            
            switch(conf.showEffect)
            {
               case 'fade': 
                  jQuery(tooltip).fadeIn(conf.effectTime); break;
               case 'slide': 
                  jQuery(tooltip).slideDown(conf.effectTime, self.updatePos); break;
               case 'none':
                  jQuery(tooltip).show(); break;
            }
            
            jQuery(tooltip).addClass(conf.activeClass);
            
            conf.onShow();
         },
         
         hide: function()
         {
            conf.onBeforeHide();
            
            switch(conf.hideEffect)
            {
               case 'fade': 
                  jQuery(tooltip).fadeOut(conf.effectTime); break;
               case 'slide': 
                  jQuery(tooltip).slideUp(conf.effectTime); break;
               case 'none':
                  jQuery(tooltip).hide(); break;
            }
            
            jQuery(tooltip).removeClass(conf.activeClass);
            
            conf.onHide();
         },
         
         setPos: function(posX, posY)
         {
            jQuery(tooltip).css('left', posX + 'px')
                           .css('top', posY + 'px');
         },
         
         updatePos: function(event)
         {
            if(event && !conf.fixed)
            {
               var posX = event.pageX;
               var posY = event.pageY;
            }
            else
            {
               var pos = jQuery(elem).offset();
               var posX = (jQuery(elem).width() / 2) + pos.left;
               var posY = (jQuery(elem).height() / 2) + pos.top ;
            }
               
            var check = self.boundryCheck(posX, posY);
            
            if(check[0])
               posX = posX - jQuery(tooltip).width() - (3 * conf.offset[0]);
            if(check[1])
               posY = posY - jQuery(tooltip).height() - (3 * conf.offset[1]);

            posX += conf.offset[0];
            posY += conf.offset[1];
            
            self.setPos(posX, posY)
         },
         
         boundryCheck: function(posX, posY)
         {
            var posWidthX = jQuery(tooltip).width() + posX
            var posHeightY = jQuery(tooltip).height() + posY
            
            var windowWidth = jQuery(window).width() + jQuery(window).scrollLeft()
            var windowHeight = jQuery(window).height() + jQuery(window).scrollTop()
            
            var result = [false, false]
            if(posWidthX >= windowWidth) result[0] = true;
            if(posHeightY >= windowHeight) result[1] = true;
            
            return result;
         },
         
         update: function(text)
         {
            jQuery(tooltip).html(text);
            conf.contents = text;
         }
         
      })
   };
   
   jQuery.fn.simpletip = function(conf)
   { 
      // Check if a simpletip is already present
      var api = jQuery(this).eq(typeof conf == 'number' ? conf : 0).data("simpletip");
      if(api) return api;
      
      /* Default configuration */
      var defaultConf = {
         // Basics
         contents: 'A simple tooltip',
         fixed: true,
         hover: true,
         offset: [20, 0],
         
         // Effects
         showEffect: 'slide',
         hideEffect: 'slide',
         effectTime: 150,
         
         // Selectors and classes
         class: 'tooltip',
         activeClass: 'active',
         
         // callbacks
         onBeforeShow: function(){},
         onShow: function(){},
         onBeforeHide: function(){},
         onHide: function(){}
      }
      jQuery.extend(defaultConf, conf);
      
      this.each(function()
      {
         var el = new Simpletip(jQuery(this), defaultConf);
         jQuery(this).data("simpletip", el);  
      });
      
      return this; 
   };
})();






