/* 
   Prettify code
*/
$().ready(function()
{
   /* 
      Setup header tooltips
   */
   var tips = {
      demo: 'Check out some live examples!',
      docs: 'Learn about the library and its many options!',
      downloads: 'Compatible with <i>jQuery 1.2.x</i> upwards!'
   } 
   $('.header').find('a').each(function()
   {
      $(this).simpletip(tips[ $(this).attr('rel') ], 
      {
         hook: { target: 'bottomMiddle', tooltip: 'topMiddle' },
         stem: false,
         border: { size: 0, radius: 5, },
         offset: [0, 10],
         parentClass: 'tooltip-header',
         contentClass: $(this).attr('rel') + ' content'
         
      });
   });
   
   /* 
      Pretty print code
   */
   prettyPrint();
   
   /* 
      Setup anchor links
   */
   $('a[href="#"][rel]').each(function()
   {
      var section = '#' + $(this).attr('rel');
      
      $(this).mousedown(function()
      {
         $('html,body').animate({
            scrollTop: $(section).offset().top
         }
         , 750, 'swing');
         return false;
      })
   });

   /* 
      Setup demonstrations 
   */
   // Simple
   $('.pad-simple img').simpletip('Just a simple tooltip', { parentClass: 'tooltip-simple' });

   // Style
   $('.pad-style1 img').simpletip('Simpletip makes styling your tooltips a breeze!', { 
      hook: { tooltip: 'topLeft', mouse: true }, 
      offset: [5, 0], 
      stem: false, 
      border: { color: '#448FD8' },
      parentClass: 'tooltip-blue' 
      
   });
   $('.pad-style2 img').simpletip('You can even style your stem colours to create some neat effects.', { 
      hook: { tooltip: 'leftMiddle', mouse: true }, 
      offset: [15, 0], 
      stem: { corner: 'leftMiddle', color: '#303030' }, 
      border: { color: '#303030' },
      parentClass: 'tooltip-black' 
   });

   // Border
   $('.pad-border1 img').simpletip('Our powerful border engine means no more X-browser-only features.', { 
      title: 'Cross-browser rounded corners',
      hook: { target: 'topMiddle', tooltip: 'bottomMiddle' },
      offset: [0, -8],
      border: { size: 2, radius: 4, color: '#ccc' },
      parentClass: 'tooltip-light', 
      width: 250
   });
   $('.pad-border2 img').simpletip('Get rid of those old PNGs, no need for them here.', { 
      title: 'No images required!',
      hook: { target: 'topMiddle', tooltip: 'bottomMiddle' },
      offset: [0, -8],
      border: { size: 5, radius: 7, color: '#448FD8' },
      parentClass: 'tooltip-blue', 
      width: 250
   });
   $('.pad-border3 img').simpletip('The border width and radius can be specified seperately, giving you ultimate control!', { 
      title: 'Border and radius attributes',
      hook: { target: 'topMiddle', tooltip: 'bottomMiddle' },
      offset: [0, -8],
      border: { size: 4, radius: 11, color: '#303030' },
      parentClass: 'tooltip-black', 
      width: 250
   });

   // Stems
   $('.pad-stem-lm img').simpletip('Stems are a great way to show where your tooltips came from.', { 
      hook: { tooltip: 'rightMiddle', target: 'leftMiddle' }, 
      stem: { corner: 'rightMiddle', color: '#EBE4B4' },
      border: { color: '#EBE4B4' }
   });
   $('.pad-stem-tm img').simpletip('They can be any color or position on your tooltip.', { 
      hook: { tooltip: 'bottomMiddle', target: 'topMiddle' }, 
      stem: { corner: 'bottomMiddle', color: '#303030' }, 
      border: { color: '#303030' },
      parentClass: 'tooltip-black' 
   });
   $('.pad-stem-br img').simpletip('They\'re even cross browser compatible! Great ey?', { 
      hook: { tooltip: 'topLeft', target: 'bottomRight' }, 
      stem: { corner: 'topLeft', color: '#448FD8' }, 
      border: { color: '#448FD8' },
      parentClass: 'tooltip-blue' 
   });

   // Hooks
   $('.pad-hook img').simpletip('Hooking makes positioning your tooltips a breeze', { 
      hook: { tooltip: 'rightMiddle', target: 'leftMiddle' }, 
      offset: [-10, 0], 
      parentClass: 'tooltip-black',
      border: { color: '#303030' }
   });
   $('.pad-hook-stem img').simpletip('You can even combine stems and hooking!', { 
      hook: { tooltip: 'bottomMiddle', target: 'topMiddle' }, 
      stem: { corner: 'bottomMiddle', color: '#ccc' }, 
      parentClass: 'tooltip-light' ,
      border: { color: '#ccc' }
   });
   $('.pad-hook-mouse img').simpletip('This tooltip is hooked to the mouse position with an offset', { 
      hook: { mouse: true }, 
      stem: { corner: 'topLeft', color: '#EBE4B4' }, 
      offset: [8, 0],
      border: { color: '#EBE4B4' }
   });

   // Target
   $('.pad-target img').simpletip('This tooltip is positioned using a different target element.', { 
      target: $('.pad-simple img'),
      border: { color: '#EBE4B4' }
   });

   // Title
   $('.pad-title img').simpletip('Add titles to your tooltips to better indicate their contents.', { 
      title: { content: 'Tooltip titles' },
      hook: { target: 'rightMiddle', tooltip: 'leftMiddle' }, 
      stem: { corner: 'leftMiddle', color: '#303030' }, 
      parentClass: 'tooltip-black',
      border: { size: 3, radius: 7, color: '#303030' }
   });

   // Buttons
   $('.pad-buttons-text img').simpletip('By default all elements with the \'close\' class will close the tooltip when clicked.', { 
      title: { content: 'Link-style close buttons', button: 'Close' },
      hook: { target: 'topRight', tooltip: 'bottomLeft' }, 
      stem: { corner: 'bottomLeft', color: '#303030' }, 
      parentClass: 'tooltip-black',
      border: { size: 4, radius: 7, color: '#303030' },
      showOn: 'click',
      hideOn: 'click',
      width: 210
   });
   $('.pad-buttons-image img').simpletip('Create some cool close buttons using custom images and css.', { 
      title: { content: 'Custom close buttons', button: '' },
      hook: { target: 'topRight', tooltip: 'bottomLeft' }, 
      stem: { corner: 'bottomLeft', color: '#448FD8' }, 
      parentClass: 'tooltip-blue',
      border: { size: 4, radius: 7, color: '#448FD8' },
      showOn: 'click',
      hideOn: 'click',
      width: 210
   });

   // Custom events
   $('.pad-events1 img').simpletip('Choose from the preset show and hide effects.', { 
      title: 'Preset events',
      showEffect: 'slide', 
      hideEffect: 'slide', 
      border: { color: '#EBE4B4' }
   });
   $('.pad-events2 img').simpletip('Use the API\'s custom show and hide callbacks to give your tooltips some funky effects.', {
      title: 'Custom events',
      showEffect: function(){
         $(this).show("fold", 200);
      },
      hideEffect: function(){
         $(this).hide("fold", 200);
      },
      parentClass: 'tooltip-black',
      border: { color: '#303030' }
   });

   // Click
   $('.pad-click img').simpletip('Tooltips can be set to show onclick, rather than onmouseover.', { 
      title: { content: 'Alternative show events', button: 'Close' },
      hook: { target: 'topMiddle', tooltip: 'bottomMiddle' }, 
      stem: { corner: 'bottomMiddle', color: '#ccc' }, 
      parentClass: 'tooltip-light', 
      showOn: 'click', 
      hideOn: 'click',
      border: { size: 3, radius: 3, color: '#ccc' },
      width: 210
   });

   // Delay
   $('.pad-delay img').simpletip('This tooltip has a delay of 400 milliseconds.', { 
      title: { content: 'Event delays' },
      delay: 400, 
      hook: { target: 'bottomMiddle', tooltip: 'topMiddle' }, 
      stem: { corner: 'topMiddle', color: '#303030' }, 
      parentClass: 'tooltip-black',
      border: { size: 3, radius: 7, color: '#303030' }
   });

   // HideAfter
   $('.pad-hideafter img').simpletip('Tooltips can be set to hide after a period of inactivity. This one hides after 2 seconds of inactivity.', { 
      title: { content: 'Hiding inactive tooltips' },
      hideAfter: 2000, 
      hideOn: false, 
      hook: { tooltip: 'topLeft', target: 'bottomRight' }, 
      stem: { corner: 'topLeft', color: '#EBE4B4' },
      border: { size: 4, radius: 6, color: '#EBE4B4' },
      width: 230
   });

   // Offset
   $('.pad-offset img').simpletip('Fine tune your tooltip positions with offsets.', { 
      title: { content: 'Offset positions', button: false },
      hook: { mouse: true }, 
      offset: [15, 5], 
      parentClass: 'tooltip-blue',
      border: { color: '#448FD8' }
   });

   // Viewport
   $('.pad-viewport img').simpletip('Keep tooltips inside the viewport at all times. Resize your browser to test it out.', { 
      title: { content: 'Stay within the viewport' },
      viewport: true, 
      offset: [20, 0], 
      hook: { tooltip: 'leftMiddle', mouse: true }, 
      stem: { corner: 'leftMiddle', color: '#303030' }, 
      parentClass: 'tooltip-black',
      border: { size: 2, radius: 5, color: '#303030' }
   });

   // Ajax
   $('.pad-ajax img').simpletip('Loading...', { 
      ajax: { url: '/simpletip/sandbox/fringe/js/democontent.html' },
      title: { content: 'AJAX was used to create this tooltip', button: 'Close' },
      width: '400px', 
      hideOn: 'click', 
      delay: 300, 
      hook: { tooltip: 'topLeft', target: 'bottomRight' }, 
      stem: { corner: 'topLeft', color: '#ccc' }, 
      border: { size: 4, radius: 6,  color: '#ccc' },
      parentClass: 'tooltip-light'
   })
});






