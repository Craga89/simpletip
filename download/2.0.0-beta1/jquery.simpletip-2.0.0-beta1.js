/**
 * jquery.simpletip 2.0.0-beta1. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under LGPLv3
 * http://www.opensource.org/licenses/lgpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 2.0
 * Released: February 11, 2009 - 03:29am
 */
(function($)
{
   function Simpletip(target, content, conf)
   {
      if(conf.target !== null) target = conf.target;
   
      //Define fundamental attributes
      var self = this;
      var showTimer, hideTimer, tooltip, content, stem;
      
      //Define coordinates of the stems (VML and Canvas)
      var max = conf.stem.size;
      var half = max / 2;
      var stems = {
         bottomRight:   [[0,0],        [max,max],  [max,0]],
         bottomLeft:    [[0,0],        [max,0],    [0,max]],
         topRight:      [[0,max],      [max,0],    [max,max]],
         topLeft:       [[0,0],        [0,max],    [max,max]],
         topMiddle:     [[0,max],      [half,0],   [max,max]],
         bottomMiddle:  [[0,0],        [max,0],    [half,max]],
         rightMiddle:   [[max,half],   [0,max],    [0,0]],
         leftMiddle:    [[max,0],      [max,max],  [0,half]]
      }
      stems.leftTop = stems.bottomRight; stems.rightTop = stems.bottomLeft;
      stems.leftBottom = stems.topRight; stems.rightBottom = stems.topLeft;
      delete max; delete half;
      
      jQuery.extend(self,
      {
         create: function()
         {
            //Create tooltip element
            tooltip = jQuery(document.createElement('div'))
               .addClass('simpletip')
               .addClass(conf.parentClass)
               .appendTo(document.body);
            
            //Create content element
            content = jQuery(document.createElement('div'))
                  .addClass(conf.contentClass)
                  .html(content)
                  .appendTo(tooltip);
            
            //Create stem and assign events
            self.assignEvents();
            self.createStem();
            
            //Hide tooltip if hidden is true and focus
            self.focus();
            if(!conf.hidden) tooltip.show();
            else tooltip.hide();
         },
      
         createStem: function(corner)
         {
            if(!corner) corner = conf.stem.corner;
            
            //Remove previous stems from tooltip
            jQuery(tooltip).find('.'+conf.stemClass).remove();
            
            //Create stem element
            stem = jQuery(document.createElement('div'))
               .addClass(conf.stemClass)
               .attr('rel', corner);
            
            //Use canvas element if supported
            if(document.createElement('canvas').getContext)
            {
               //Create canvas element
               var canvas = jQuery(document.createElement('canvas'))
                  .attr('width', conf.stem.size)
                  .attr('height', conf.stem.size)
                  .appendTo(stem);
               
               //Setup properties
               var context = canvas.get(0).getContext('2d');
               var coordinates = stems[corner];
               context.fillStyle = conf.stem.color;
               
               //Create stem
               context.beginPath();
               context.moveTo(coordinates[0][0], coordinates[0][1]);
               context.lineTo(coordinates[1][0], coordinates[1][1]);
               context.lineTo(coordinates[2][0], coordinates[2][1]);
               context.fill();
            }
            
            //Canvas not supported - Use VML (IE)
            else if(jQuery.browser.msie || document.namespaces)
            {
               //Create XML namespace and vml styles
               if(document.namespaces["v"] == null) 
                  document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
               var stylesheet = document.createStyleSheet().owningElement;
               stylesheet.styleSheet.cssText = "v\\:*{behavior:url(#default#VML); display: inline-block }";
               
               //Create stem path using predefined stem coordinates
               var coordinates = stems[corner];
               var path = 'm' + coordinates[0][0] + ',' + coordinates[0][1];
               path += ' l' + coordinates[1][0] + ',' + coordinates[1][1];
               path += ' ' + coordinates[2][0] + ',' + coordinates[2][1];
               path += ' xe';
               
               //Create VML element
               jQuery(document.createElement('v:shape'))
                  .attr('fillcolor', conf.stem.color)
                  .attr('stroked', 'false')
                  .attr('coordsize', '12,12')
                  .attr('path', path)
                  .css({ width: conf.stem.size, height: conf.stem.size, marginTop: -1 })
                  .appendTo(stem)
            }
            
            //Neither is supported, return
            else return;
            
            //Adjust stems positioning
            if(corner.search(/left|right/) !== -1)
            {
               if(corner.search(/Middle/) !== -1)
                  stem.css({ marginTop: Math.floor((tooltip.outerHeight() / 2) - (conf.stem.size / 2)) });
               else if(corner.search(/Bottom/) !== -1)
                  stem.css({ marginTop: Math.floor(tooltip.outerHeight() - conf.stem.size) });
               
               stem.css('float', 'left');
               content.css('float', 'left');
            }
            else if(corner.search(/top|bottom/) !== -1)
            {
               if(corner.search(/Middle/) !== -1)
                  stem.css({ marginLeft: Math.floor((tooltip.outerWidth() / 2) - (conf.stem.size / 2)) });
               else if(corner.search(/Right/) !== -1)
                  stem.css({ marginLeft: Math.floor(tooltip.outerWidth() - conf.stem.size) });
            }
            
            //Attach new stem to tooltip element
            if(corner.search(/left|top/) !== -1)
               stem.prependTo(tooltip);
            else
               stem.appendTo(tooltip);
         },
         
         assignEvents: function()
         {
            if(!conf.hook.mouse)
            {
               target.unbind(conf.showOn).bind(conf.showOn, function(event)
               { 
                  if(conf.showOn === conf.hideOn)
                  {
                     if(tooltip.css('display') !== 'none')
                     {
                        clearTimeout(showTimer); 
                        self.hide(event);
                        return;
                     }
                  }
                  
                  if(showTimer !== null) clearTimeout(showTimer);
                  
                  showTimer = setTimeout(function()
                  { 
                     self.show(event);
                  }, conf.delay)
                  
                  if(conf.hideAfter !== false)
                  {
                     var resetEvents = [
                        'click', 'dblclick', 'mousedown', 
                        'mouseup', 'mousemove', 'mouseout',
                        'mouseenter', 'mouseleave', 'mouseover'];
                  
                     function hideCallback()
                     {
                        clearTimeout(hideTimer);
                        hideTimer = setTimeout(function()
                        {
                           jQuery(resetEvents).each(function(){
                              target.unbind(this, hideCallback)
                              tooltip.unbind(this, hideCallback)
                           })
                           
                           self.hide();
                        }, conf.hideAfter);
                     }
                     
                     jQuery(resetEvents).each(function(){
                        target.bind(this, hideCallback)
                        tooltip.bind(this, hideCallback)
                     })
                  }
               });
            
               if(typeof conf.hideOn == 'string')
               {
                  var hideOn = conf.hideOn;
                  
                  if(conf.showOn !== hideOn)
                     target.unbind(hideOn).bind(hideOn, function(){ clearTimeout(showTimer); self.hide(); });
               }
               else self.assignCloseEvents();
            }
            
            //Mouse hooking is enabled
            else 
            {
               target.mousemove(function(event){ self.updatePos(event); });
               target.bind(conf.showOn, function(event){ self.show(event); });
               target.mouseout(self.hide);
               
               self.assignCloseEvents();
            }
            
            //Assign focus events
            target.mouseover(self.focus);
            tooltip.mouseover(self.focus);
            
            //Assign resize event
            jQuery(window).resize(self.updatePos);
         },
         
         assignCloseEvents: function()
         {
            if(conf.hideOn.element && conf.hideOn.event)
            {
               var elem = conf.hideOn.element;
               var hideOn = conf.hideOn.event;
               tooltip.find('.'+elem).unbind(hideOn, self.hide).bind(hideOn, self.hide);
            }
         },
      
         set: function(name, value)
         {
            return conf[name] = value;
         },
      
         getVersion: function()
         {
            return [2, 0, 0, 'beta1'];
         },
         
         getTooltip: function()
         {
            return tooltip;
         },
         
         getContent: function()
         {
            return content;
         },
         
         getPos: function()
         {
            return tooltip.offset();
         },
         
         show: function(event)
         {
            conf.onBeforeShow.call(self);
            
            if(conf.hideOthers) self.hideOthers()
            self.updatePos(event);
            
            if(typeof conf.showEffect == 'function')
               conf.showEffect.call(tooltip, conf.showTime);
            else
            {
               switch(conf.showEffect)
               {
                  case 'fade': 
                     tooltip.fadeIn(conf.showTime); break;
                  case 'slide': 
                     tooltip.slideDown(conf.showTime, self.updatePos); break;
                  default:
                  case 'none':
                     tooltip.show(); break;
               }
            }
            
            tooltip.addClass(conf.activeClass);
            
            conf.onShow.call(self);
            
            return self;
         },
         
         hide: function()
         {
            conf.onBeforeHide.call(self);
            
            if(typeof conf.hideEffect == 'function')
               conf.hideEffect.call(tooltip, conf.hideTime);
            else
            {
               switch(conf.hideEffect)
               {
                  case 'fade': 
                     tooltip.fadeOut(conf.hideTime); break;
                  case 'slide': 
                     tooltip.slideUp(conf.hideTime); break;
                  default:
                  case 'none':
                     tooltip.hide(); break;
               }
            }
            
            tooltip.removeClass(conf.activeClass);
            
            conf.onHide.call(self);
            
            return self;
         },
         
         hideOthers: function()
         {
            jQuery('div.simpletip').not(tooltip).hide();
         },
         
         focus: function()
         {
            jQuery('div.simpletip').not(tooltip).each(function()
            {
               jQuery(this).css('z-index', 6000);
            });
            
            tooltip.css('z-index', 6001);
         },
         
         update: function(content)
         {
            tooltip.html(content);
            
            self.assignEvents();
            
            return self;
         },
         
         load: function(uri, data)
         {
            conf.beforeContentLoad.call(self);
            
            tooltip.load(uri, data, function(){ self.assignCloseEvents(); conf.onContentLoad.call(self); });
            
            return self;
         },
         
         viewportCheck: function(posX, posY)
         {
            var newX = posX + tooltip.outerWidth();
            var newY = posY + tooltip.outerHeight();
            
            var windowWidth = jQuery(window).width() + jQuery(window).scrollLeft();
            var windowHeight = jQuery(window).height() + jQuery(window).scrollTop();
            
            return { leftMin: (posX < 0), 
                     leftMax: (newX >= windowWidth), 
                     topMin: (posY < jQuery(window).scrollTop()), 
                     topMax: (newY >= windowHeight) };
         },
         
         viewportAdjust: function(posX, posY, event)
         {
            var overflow = self.viewportCheck(posX, posY);
            var corner = conf.stem.corner;
            
            if(overflow.leftMin || overflow.leftMax)
            {
               if(overflow.leftMin)
                  posX = (conf.hook.mouse) ? event.pageX : target.offset().left + target.outerWidth();
               else if(overflow.leftMax)
               {
                  if(corner.search(/(top|bottom)Middle/) !== -1)
                     posX = posX - (tooltip.outerWidth() / 2) - (conf.offset[0] * 2);
                  else
                     posX = posX - target.outerWidth() - tooltip.outerWidth() - (conf.offset[0] * 2);
               }
               
               if(corner.search(/(top|bottom)Middle/) !== -1)
               {
                  if(overflow.leftMin)
                     corner = corner.replace('Middle', 'Left');
                  else if(overflow.leftMax)
                     corner = corner.replace('Middle', 'Right');
                     
               }
               else if(corner.search(/right/) !== -1) corner = corner.replace('right', 'left');
               else if(corner.search(/Right/) !== -1) corner = corner.replace('Right', 'Left');
               else if(corner.search(/left/) !== -1) corner = corner.replace('left', 'right');
               else if(corner.search(/Left/) !== -1) corner = corner.replace('Left', 'Right');
            }
            
            if(overflow.topMin || overflow.topMax)
            {
               if(overflow.topMin)
                  posY = (conf.hook.mouse) ? event.pageY : target.offset().top + target.outerHeight();
               else if(overflow.topMax)
               {
                  if(corner.search(/(left|right)Middle/) !== -1)
                     posY = posY - (target.outerHeight() / 2) - (tooltip.outerHeight() / 2) - (conf.offset[1] * 2);
                  else
                     posY = posY - target.outerHeight() - tooltip.outerHeight() - (conf.offset[1] * 2);
               }   
               
               if(corner.search(/(left|right)Middle/) !== -1)
               {
                  if(overflow.topMin) 
                     corner = corner.replace('Middle', 'Top');
                  else if(overflow.topMax)
                     corner = corner.replace('Middle', 'Bottom');
               }
               else if(corner.search(/top/) !== -1) corner = corner.replace('top', 'bottom');
               else if(corner.search(/Top/) !== -1) corner = corner.replace('Top', 'Bottom');
               else if(corner.search(/bottom/) !== -1) corner = corner.replace('bottom', 'top');
               else if(corner.search(/Bottom/) !== -1) corner = corner.replace('Bottom', 'Top');
            }
            
            if(corner != stem.attr('rel')) self.createStem(corner);
            
            return { left: posX, top: posY };
         },
         
         cornerPos: function(elem, corner)
         {
            var elemPos = elem.offset();
            var posX = elemPos.left;
            var posY = elemPos.top;
            
            if(corner.search(/bottom/i) !== -1) posY += elem.outerHeight();
            if(corner.search(/right/i) !== -1) posX += elem.outerWidth();
            
            if(corner.search(/(left|right)Middle/) !== -1) posY += elem.outerHeight() / 2;
            else if(corner.search(/(top|bottom)Middle/) !== -1) posX += elem.outerWidth() / 2;
            
            return { left: posX, top: posY };
         },
         
         updatePos: function(event)
         {
            if(!conf.hook.mouse)
            {
               var rootPos = self.cornerPos(target, conf.hook.target);
               var posX = rootPos.left;
               var posY = rootPos.top;
            }
            else
            {
               var posX = event.pageX;
               var posY = event.pageY;
            }
               
            if(conf.hook.tooltip.search(/bottom/i) !== -1) posY -= tooltip.outerHeight();
            if(conf.hook.tooltip.search(/right/i) !== -1) posX -= tooltip.outerWidth();
               
            if(conf.hook.tooltip.search(/(left|right)Middle/) !== -1) posY -= tooltip.outerHeight() / 2;
            else if(conf.hook.tooltip.search(/(top|bottom)Middle/) !== -1) posX -= tooltip.outerWidth() / 2;
            
            posX += conf.offset[0];
            posY += conf.offset[1];
            
            if(conf.viewport) 
            {
               var newPos = self.viewportAdjust(posX, posY, event);
               posX = newPos.left;
               posY = newPos.top;
            }
            
            if(conf.hook.mouse)
            {
               var adjust = (stem.attr('rel').search(/top/) !== -1) ? 5 : -5;
               posX += adjust;
               posY += adjust;
            }
            
            tooltip.css({ left: posX, top: posY });
            
            return self;
         }
      });
      
      self.create(); //Create tooltip
   };
   
   jQuery.fn.simpletip = function(content, userConf)
   { 
      // Check if a simpletip is already present
      var api = jQuery(this).eq(typeof conf == 'number' ? conf : 0).data("simpletip");
      if(api) return api;
      
      // Check content is provided
      if(content === null) content = '';
      
      // Default configuration
      var defaultConf = {
         // Positioning
         target: null,
         hook: { tooltip: 'bottomRight', target: 'topLeft', mouse: false },
         stem: { corner: 'bottomRight', color: '#EBE4B4', size: 12 },
         offset: [0, 0],
         viewport: false,
         hidden: true,
         
         // Show
         showOn: 'mousemove',
         showEffect: 'fade',
         showTime: 150,
         
         // Hiding
         delay: 140,
         hideAfter: false,
         hideOthers: false,
         hideOn: 'mouseout',
         hideEffect: 'fade',
         hideTime: 150,
         
         // Styles and classes
         parentClass: 'tooltip',
         contentClass: 'content',
         stemClass: 'stem',
         activeClass: 'active',
         
         // Callbacks
         onBeforeShow: function(){},
         onShow: function(){},
         onBeforeHide: function(){},
         onHide: function(){},
         beforeContentLoad: function(){},
         onContentLoad: function(){}
      }
      jQuery.extend(true, defaultConf, userConf);
      
      this.each(function()
      {
         var el = new Simpletip(jQuery(this), content, defaultConf);
         jQuery(this).data("simpletip", el);  
      });
      
      return this; 
   };
})();






