/**
 * jquery.simpletip 1.3.0. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.3.0
 */
(function($){

   function Simpletip(elem, conf)
   {
      var self = this;
      
      var tooltip = jQuery(document.createElement('div'))
                     .addClass(conf.baseClass)
                     .addClass( (conf.fixed) ? conf.fixedClass : '' )
                     .addClass( (conf.persistent) ? conf.persistentClass : '' )
                     .html(conf.content)
                     .appendTo(elem);
      
      if(!conf.persistent)
      {
         jQuery(elem).hover(
            function(event){ self.show(event) },
            function(){ self.hide() }
         )
         
         if(!conf.fixed)
         {
            jQuery(elem).mousemove( function(event)
            {
               if(jQuery(tooltip).css('display') !== 'none') self.updatePos(event);
            });
         }
      }
      else
      {

         jQuery(elem).click(function(event)
         {
            if(event.target === elem.get(0))
            {
               if(jQuery(tooltip).css('display') !== 'none')
                  self.hide();
               else
                  self.show();
            }
         });
         
         jQuery(window).mousedown(function(event)
         { 
            if(jQuery(tooltip).css('display') !== 'none')
            {
               var a = tooltip.get(0);
               var b = jQuery(event.target);
               
               //Hide the tooltip wasn't clicked
               if(conf.focus)
                  var check = b.parents('.tooltip').andSelf().filter(function(){ return this === a }).length;
               else
                  var check = 0;
               
               if(check === 0) self.hide();
            }
         })
      }
      
      
      jQuery.extend(self,
      {
         getVersion: function()
         {
            return [1, 2, 0];
         },
         
         getParent: function()
         {
            return jQuery(elem);
         },
         
         getTooltip: function()
         {
            return jQuery(tooltip);
         },
         
         getPos: function()
         {
            return jQuery(tooltip).offset();
         },
         
         setPos: function(posX, posY)
         {
            var elemPos = jQuery(elem).offset();
            
            if(typeof posX == 'string')
               posX = parseInt(posX) + elemPos.left;
            if(typeof posY == 'string')
               posY = parseInt(posY) + elemPos.top;
            
            jQuery(tooltip).css('left', posX + 'px')
                           .css('top', posY + 'px');
            
            return self;
         },
         
         show: function(event)
         {
            conf.onBeforeShow.call(self);
            
            self.updatePos( (conf.fixed) ? null : event );
            
            switch(conf.showEffect)
            {
               case 'fade': 
                  jQuery(tooltip).fadeIn(conf.showTime); break;
               case 'slide': 
                  jQuery(tooltip).slideDown(conf.showTime, self.updatePos); break;
               case 'custom':
                  conf.showCustom.call(tooltip, conf.showTime); break;
               default:
               case 'none':
                  jQuery(tooltip).show(); break;
            }
            
            jQuery(tooltip).addClass(conf.activeClass);
            
            conf.onShow.call(self);
            
            return self;
         },
         
         hide: function()
         {
            conf.onBeforeHide.call(self);
            
            switch(conf.hideEffect)
            {
               case 'fade': 
                  jQuery(tooltip).fadeOut(conf.hideTime); break;
               case 'slide': 
                  jQuery(tooltip).slideUp(conf.hideTime); break;
               case 'custom':
                  conf.hideCustom.call(tooltip, conf.hideTime); break;
               default:
               case 'none':
                  jQuery(tooltip).hide(); break;
            }
            
            jQuery(tooltip).removeClass(conf.activeClass);
            
            conf.onHide.call(self);
            
            return self;
         },
         
         update: function(content)
         {
            jQuery(tooltip).html(content);
            conf.content = content;
            
            return self;
         },
         
         load: function(uri, data)
         {
            conf.beforeContentLoad.call(self);
            
            jQuery(tooltip).load(uri, data, function(){ conf.onContentLoad.call(self); });
            
            return self;
         },
         
         boundryCheck: function(posX, posY)
         {
            var newX = posX + jQuery(tooltip).outerWidth();
            var newY = posY + jQuery(tooltip).outerHeight();
            
            var windowWidth = jQuery(window).width() + jQuery(window).scrollLeft();
            var windowHeight = jQuery(window).height() + jQuery(window).scrollTop();
            
            return [(newX >= windowWidth) , (newY >= windowHeight)];
         },
         
         updatePos: function(event)
         {
            var tooltipWidth = jQuery(tooltip).outerWidth();
            var tooltipHeight = jQuery(tooltip).outerHeight();
            
            if(!event && conf.fixed)
            {
               if(typeof conf.position == 'object')
               {
                  posX = parseInt(conf.position[0]);
                  posY = parseInt(conf.position[1]);
               }
               else
               {
                  var elemPos = jQuery(elem).offset();
                  var elemWidth = jQuery(elem).outerWidth();
                  var elemHeight = jQuery(elem).outerHeight();
                  
                  switch(conf.position)
                  {
                     case 'top':
                        var posX = elemPos.left - (tooltipWidth / 2) + (elemWidth / 2);
                        var posY = elemPos.top - tooltipHeight;
                        break;
                        
                     case 'bottom':
                        var posX = elemPos.left - (tooltipWidth / 2) + (elemWidth / 2);
                        var posY = elemPos.top + elemHeight;
                        break;
                     
                     case 'left':
                        var posX = elemPos.left - tooltipWidth;
                        var posY = elemPos.top - (tooltipHeight / 2) + (elemHeight / 2);
                        break;
                        
                     case 'right':
                        var posX = elemPos.left + elemWidth;
                        var posY = elemPos.top - (tooltipHeight / 2) + (elemHeight / 2);
                        break;
                     
                     default:
                     case 'default':
                        var posX = (elemWidth / 2) + elemPos.left + 20;
                        var posY = elemPos.top;
                        break;
                  }
               }
            }
            else
            {
               var posX = event.pageX;
               var posY = event.pageY;
            }
            
            if(typeof conf.position != 'object')
            {
               posX = posX + conf.offset[0];
               posY = posY + conf.offset[1]; 
               
               if(conf.boundryCheck)
               {
                  var overflow = self.boundryCheck(posX, posY);
                  
                  if(overflow[0])
                     posX = posX - tooltipWidth - (2 * conf.offset[0]);
                  if(overflow[1])
                     posY = posY - tooltipHeight - (2 * conf.offset[1]);
               }
            }
            else
            {
               if(typeof conf.position[0] == "string") posX = String(posX);
               if(typeof conf.position[1] == "string") posY = String(posY);
            }
            
            self.setPos(posX, posY)
            
            return self;
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
         offset: [0, 0],
         boundryCheck: true,
         fixed: true,
         persistent: false,
         focus: false,
         
         // Effects
         showEffect: 'fade',
         showTime: 150,
         showCustom: null,
         hideEffect: 'fade',
         hideTime: 150,
         hideCustom: null,
         
         // Selectors and classes
         baseClass: 'tooltip',
         activeClass: 'active',
         fixedClass: 'fixed',
         persistentClass: 'persistent',
         focusClass: 'focus',
         
         // Callbacks
         onBeforeShow: function(){},
         onShow: function(){},
         onBeforeHide: function(){},
         onHide: function(){},
         beforeContentLoad: function(){},
         onContentLoad: function(){},
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






