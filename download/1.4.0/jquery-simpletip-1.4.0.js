/**
 * jquery.simpletip 1.4.0. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.4.0
 * Released: Unreleased
 */
(function($)
{
   // Define configuration defaults
   $.fn.simpletip = function(options) 
   {
      debug( 'Simpletip count: ' + obj.size() );
      
      // Build main options before element iteration
      var opts = $.extend({}, $.fn.simpletip.defaults, options);
      
      // Iterate each matched element
      return this.each(function()
      {
         // Build element specific options
         opts = ($.meta) ? $.extend({}, opts, $(this).data()) : opts;
         
         // Setup tooltip
         var obj = new Simpletip($(this), o)
         $(this).data("simpletip", obj);  
   });   
   
   // Define private variables
   var showTimer, hideTimer;

   var self = function Simpletip(parent, options)
   {
      //Setup public attributes
      this.parent = parent;
      this.options = options;
      this.tooltip = this.title = this.content = this.stem = null;
      
      alert('hello');
   }
   
   

   function calculateStems(width, height)
   {
      var stems = {
         bottomRight:   [[0,0],              [width,height],   [width,0]],
         bottomLeft:    [[0,0],              [width,0],        [0,height]],
         topRight:      [[0,height],         [width,0],        [width,height]],
         topLeft:       [[0,0],              [0,height],       [width,height]],
         topMiddle:     [[0,height],         [width / 2,0],    [width,height]],
         bottomMiddle:  [[0,0],              [width,0],        [width / 2,height]],
         rightMiddle:   [[width,height / 2], [0,width],        [0,0]],
         leftMiddle:    [[width,0],          [width,height],   [0,height / 2]]
      }
      stems.leftTop = stems.bottomRight; stems.rightTop = stems.bottomLeft;
      stems.leftBottom = stems.topRight; stems.rightBottom = stems.topLeft;
      
      return stems;
   }
 
   function debug(text)
   {
      if(window.console && window.console.log)
         window.console.log('Simpletip: ' + text);
   };

   // Default configuration
   $.fn.simpletip.defaults = {
      // Content
      content: { 
         text: '', 
         url: false 
      },
      
      // Position
      position: {
         target: 'bottomRight',
         tooltip: 'topLeft',
         adjust: { x: 0, y :0 },
      }
      
      // Effects
      show: {
         when: {
            target: false,
            event: 'mouseover'
         }
         effect: 'fade',
         time: 150,
         delay: 140,
         solo: false,
      }
      hide: {
         when: {
            target: false,
            event: 'mouseover'
         }
         effect: 'fade',
         time: 150,,
         delay: 0
      }
      
      // Style
      style: {
         border: {
            width: 3,
            radius: 0,
            color: '#ccc'
         }
         tip = {
            corner: 'topLeft',
            color: '#ccc',
            size: { x: 12, y: 12 }
         },
         width: false,
         hidden: true,
         parentClass: 'tooltip',
         stemClass: 'stem',
         titleClass: 'title',
         closeClass: 'button',
         contentClass: 'content',
         activeClass: 'active'
      }
      
      // Callbacks
      api: {
         beforeShow: function(){},
         onShow: function(){},
         beforeHide: function(){},
         onHide: function(){},
         beforeContentLoad: function(){},
         onContentLoad: function(){}
      }
   };
})(jQuery);






