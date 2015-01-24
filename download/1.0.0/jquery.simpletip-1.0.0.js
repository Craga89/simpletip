/**
 * jquery.simpletip 1.0.0. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.0.0
 */
(function($){

   function Simpletip(elem, conf)
   {
      var self = this;
      
      var tooltip = jQuery(document.createElement('div'))
                     .addClass(conf.class)
                     .text(conf.text)
                     .appendTo('body');
      
      if(conf.hover)
      {
         jQuery(elem).hover(
            function(){ self.show() },
            function(){ self.hide() }
         )
         
         jQuery().mousemove( function(e){ self.updatePos(e) } )
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
      
      
      jQuery.extend(self, {
      
         getVersion: function(){
            return [1, 0, 0];
         },
         
         getRoot: function(){
            return elem;
         },
         
         show: function(){
            conf.onBeforeShow();
            
            switch(conf.showEffect)
            {
               case 'fade': 
                  jQuery(tooltip).fadeIn(conf.effectTime); break;
               case 'slide': 
                  jQuery(tooltip).slideDown(conf.effectTime); break;
               case 'none':
                  jQuery(tooltip).show(); break;
            }
            
            jQuery(tooltip).addClass(conf.activeClass);
            self.updatePos();
            
            conf.onShow();
         },
         
         hide: function(){
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
            self.updatePos();
            
            conf.onHide();
         },
         
         setPos: function(posX, posY)
         {
            jQuery(tooltip).css('left', posX + 'px')
                           .css('top', posY + 'px');
         },
         
         updatePos: function(event){
            if(event && !conf.fixed)
            {
               jQuery(tooltip).css('left', event.pageX + conf.offset[0] + 'px')
                              .css('top', event.pageY + conf.offset[1] + 'px');
            }
            else
            {
               var pos = jQuery(elem).offset();
               var posX = (jQuery(elem).width() / 2) + pos.left + conf.offset[0];
               var posY = (jQuery(elem).height() / 2) + pos.top + conf.offset[1];

               jQuery(tooltip).css('left', posX + 'px')
                              .css('top', posY + 'px');
            }
         },
         
         updateText: function(text){
            jQuery(tooltip).text(text);
         },
         
         updateHTML: function(html){
            jQuery(tooltip).html(html);
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
         text: 'A simple tooltip',
         fixed: false,
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






