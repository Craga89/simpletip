/**
 * jquery.simpletip 1.2.2. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.2.2
 */
(function($){

   function Simpletip(elem, conf)
   {
      var self = this;
      
      var tooltip = jQuery(document.createElement('div'))
                     .addClass(conf.baseClass)
                     .html(conf.content)
                     .appendTo(elem);
      
      if(conf.hover)
      {
         jQuery(elem).hover(
            function(event){ self.show(event) },
            function(){ self.hide() }
         )
         
         if(!conf.fixed)
         {
            jQuery().mousemove( function(event){
               if(jQuery(tooltip).css('display') !== 'none') 
                  self.updatePos(event) 
            });
         }
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
            return [1, 2, 0];
         },
         
         getTooltip: function()
         {
            return tooltip;
         },
         
         show: function(event)
         {
            conf.onBeforeShow();
            
            self.updatePos( (conf.fixed) ? null : event );
            
            switch(conf.showEffect)
            {
               case 'fade': 
                  jQuery(tooltip).fadeIn(conf.showTime); break;
               case 'slide': 
                  jQuery(tooltip).slideDown(conf.showTime, self.updatePos); break;
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
                  jQuery(tooltip).fadeOut(conf.hideTime); break;
               case 'slide': 
                  jQuery(tooltip).slideUp(conf.hideTime); break;
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
            if(!event && conf.fixed)
            {
               var elemPos = jQuery(elem).offset();
               
               if(typeof conf.position == 'object')
               {
                  var posX = parseInt(conf.position[0]);
                  var posY = parseInt(conf.position[1]);
               
                  if(typeof conf.position[0] == 'string')
                     posX += elemPos.left;
                  if(typeof conf.position[1] == 'string')
                     posY += elemPos.top;
               }
               else
               {
                  switch(conf.position)
                  {
                     case 'top':
                        var posX = elemPos.left - (jQuery(tooltip).outerWidth() / 2) + (jQuery(elem).outerWidth() / 2);
                        var posY = elemPos.top - jQuery(tooltip).outerHeight();
                        break;
                        
                     case 'bottom':
                        var posX = elemPos.left - (jQuery(tooltip).outerWidth() / 2) + (jQuery(elem).outerWidth() / 2);
                        var posY = elemPos.top + jQuery(elem).outerHeight();
                        break;
                     
                     case 'left':
                        var posX = elemPos.left - jQuery(tooltip).outerWidth();
                        var posY = elemPos.top - (jQuery(tooltip).outerHeight() / 2) + (jQuery(elem).outerHeight() / 2);
                        break;
                        
                     case 'right':
                        var posX = elemPos.left + jQuery(elem).outerWidth();
                        var posY = elemPos.top - (jQuery(tooltip).outerHeight() / 2) + (jQuery(elem).outerHeight() / 2);
                        break;
                     
                     default:
                     case 'default':
                        var posX = (jQuery(elem).outerWidth() / 2) + elemPos.left;
                        var posY = (jQuery(elem).outerHeight() / 2) + elemPos.top;
                        break;
                  }
               }
            }
            else
            {
               var posX = event.pageX;
               var posY = event.pageY;
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
      
      // Default configuration
      var defaultConf = {
         // Basics
         content: 'A simple tooltip',
         
         // Positioning
         position: 'default',
         offset: [20, 0],
         fixed: true,
         hover: true,
         
         // Effects
         showEffect: 'fade',
         showTime: 150,
         hideEffect: 'fade',
         hideTime: 150,
         
         // Selectors and classes
         baseClass: 'tooltip',
         activeClass: 'active',
         
         // Callbacks
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






