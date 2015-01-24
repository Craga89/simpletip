<?php 
$version = (isset($_GET['version'])) ? $_GET['version'] : "2.0.0-beta5"; 
$section = explode("/", $_GET['section']);
$section = $section[0];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Simpletip - A simple jQuery tooltip plugin</title>
<!--Stylesheets-->
<link rel="stylesheet" type="text/css" href="/simpletip/project/prettify.css"  />
<link rel="stylesheet" type="text/css" href="/simpletip/project/simpletip.css"  />
<style type="text/css">
#apology{
   border: 1px solid gray;
   padding: 5px 10px;
   margin: 5px auto 5px auto;
   width: 600px;
   
   background-color: #fafafa;
}

#apology{
   padding: 0 10px 15px;
}

   #apology h1{
      text-align: center;
   }
</style>
<!--Meta-->
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="description" content="Simpletip jQuery plugin. Making tooltips simple!" />
<meta name="keywords" content="simpletip, jquery, javascript, plugin, tooltip, tooltips, craigsworks, craig thompson" />
<meta name="author" content="Craig Thompson" />
</head>
<body>
<div id="master">
   <div class="caption right">
      A simple jQuery tooltip plugin by <a href="/"><img src="/images/logo.png" alt="Craig Thompson" /></a> 
   </div>
   <div class="clear">&nbsp;</div>
   
   <div class="body">
      <div class="header">
         <img class="logo left" src="/fight/images/logo_small.png" alt="Simpletip" />
         
         <a rel="docs" class="docs right" href="#docs">Read the documentation</a>
         <a rel="demo" class="demo right" href="#demo">View some demos!</a>
         <a rel="downloads" class="downloads right" href="#downloads">Download <b><?=$version;?></b></a>
         <div class="clear">&nbsp;</div>
      </div>
      
      <div class="content">
      
         <div id="overview" class="section">
            <h2>Overview</h2>
            Simpletip is a plugin for the popular <a href="http://jquery.com">jQuery</a> JavaScript library. It allows you to create tooltips with ease using any element on the page. 
            <ul>
               <li><b>Style</b>: Easy to customize.</li>
               <li><b>Round</b>: Cross-browser rounded corners!</li>
               <li><b>Position</b>: Total control over positioning.</li>
               <li><b>Stems</b>: Cross-browser tooltip stems!</li>
               <li><b>AJAX</b>: Load tooltip content remotely!</li>
               <li>Works on all modern browsers.</li>
            </ul>
         </div>
         
         <div id="demonstrations" class="section">
            <h2>Demonstrations</h2>
            
            <ul class="rooms">
               <li class="room simple">
                  <div class="pad1 pad-simple"><img src="/simpletip/project/images/demo/simple.jpg" alt="" height="22" width="95" /></div>
                  Simple
               </li>
               
               <li class="room style">
                  <div class="pad2 pad-style1"><img src="/simpletip/project/images/demo/style1.jpg" alt="" height="22" width="45" /></div>
                  <div class="pad2 pad-style2"><img src="/simpletip/project/images/demo/style2.jpg" alt="" height="22" width="45" /></div>
                  <div class="clear">&nbsp;</div>
                  Styles
               </li>
               
               <li class="room border">
                  <div class="pad3 pad-border1"><img src="/simpletip/project/images/demo/border1.jpg" alt="" height="22" width="28" /></div>
                  <div class="pad3 pad-border2"><img src="/simpletip/project/images/demo/border2.jpg" alt="" height="22" width="28" /></div>
                  <div class="pad3 pad-border3"><img src="/simpletip/project/images/demo/border3.jpg" alt="" height="22" width="28" /></div>
                  <div class="clear">&nbsp;</div>
                  Round
               </li>
               
               <li class="room stems">
                  <div class="pad3 pad-stem-lm"><img src="/simpletip/project/images/demo/stem1.jpg" alt="" height="22" width="28" /></div>
                  <div class="pad3 pad-stem-tm"><img src="/simpletip/project/images/demo/stem2.jpg" alt="" height="22" width="28" /></div>
                  <div class="pad3 pad-stem-br"><img src="/simpletip/project/images/demo/stem3.jpg" alt="" height="22" width="28" /></div>
                  <div class="clear">&nbsp;</div>
                  Stems
               </li>
               
               <li class="room hooks">
                  <div class="pad3 pad-hook"><img src="/simpletip/project/images/demo/hook.jpg" alt="" height="22" width="28" /></div>
                  <div class="pad3 pad-hook-stem"><img src="/simpletip/project/images/demo/hookstem.jpg" alt="" height="22" width="28" /></div>
                  <div class="pad3 pad-hook-mouse"><img src="/simpletip/project/images/demo/mouse.jpg" alt="" height="22" width="28" /></div>
                  <div class="clear">&nbsp;</div>
                  Hooking
               </li>
               
               <li class="room target">
                  <div class="pad1 pad-target"><img src="/simpletip/project/images/demo/target.jpg" alt="" height="22" width="95" /></div>
                  <div class="clear">&nbsp;</div>
                  Target
               </li>
               
               <li class="room title">
                  <div class="pad1 pad-title"><img src="/simpletip/project/images/demo/title.jpg" alt="" height="22" width="95" /></div>
                  <div class="clear">&nbsp;</div>
                  Titles
               </li>
               
               <li class="room buttons">
                  <div class="pad2 pad-buttons-text"><img src="/simpletip/project/images/demo/buttontext.jpg" alt="" height="22" width="45" /></div>
                  <div class="pad2 pad-buttons-image"><img src="/simpletip/project/images/demo/buttonimage.jpg" alt="" height="22" width="45" /></div>
                  <div class="clear">&nbsp;</div>
                  Buttons
               </li>
               
               <li class="room events">
                  <div class="pad2 pad-events1"><img src="/simpletip/project/images/demo/eventpreset.jpg" alt="" height="22" width="45" /></div>
                  <div class="pad2 pad-events2"><img src="/simpletip/project/images/demo/eventcustom.jpg" alt="" height="22" width="45" /></div>
                  <div class="clear">&nbsp;</div>
                  Events
               </li>
               
               <li class="room click">
                  <div class="pad1 pad-click"><img src="/simpletip/project/images/demo/click.jpg" alt="" height="22" width="95" /></div>
                  <div class="clear">&nbsp;</div>
                  Click
               </li>
               
               <li class="room delay">
                  <div class="pad1 pad-delay"><img src="/simpletip/project/images/demo/delay.jpg" alt="" height="22" width="95" /></div>
                  <div class="clear">&nbsp;</div>
                  Delay
               </li>
               
               <li class="room hideafter">
                  <div class="pad1 pad-hideafter"><img src="/simpletip/project/images/demo/hideafter.jpg" alt="" height="22" width="95" /></div>
                  <div class="clear">&nbsp;</div>
                  Hide after
               </li>
               
               <li class="room offset">
                  <div class="pad1 pad-offset"><img src="/simpletip/project/images/demo/offset.jpg" alt="" height="22" width="95" /></div>
                  <div class="clear">&nbsp;</div>
                  Offset
               </li>
               
               <li class="room viewport">
                  <div class="pad1 pad-viewport"><img src="/simpletip/project/images/demo/viewport.jpg" alt="" height="22" width="95" /></div>
                  <div class="clear">&nbsp;</div>
                  Viewport
               </li>
               
               <li class="room ajax">
                  <div class="pad1 pad-ajax"><img src="/simpletip/project/images/demo/ajax.jpg" alt="" height="22" width="95" /></div>
                  <div class="clear">&nbsp;</div>
                  Ajax
               </li>
            </ul>
            
            <p class="note"><b>Note:</b> the custom show and hide effects above utilise the <a href="http://ui.jquery.com">jQuery UI</a> library.</p>
            <div class="clear">&nbsp;</div>
         </div>
         
         <div id="configuration" class="section">
            <h2>Configuration</h2>
            <p>
               First, you'll need to upload the Simpletip JavaScript file somewhere on your server with global read permissions. I recommend you put the file, along with your other scripts, in their own folder named <b>js/</b> like so:
            </p>
            <code class="prettyprint lang-html">/serverroot/js/jquery.simpletip-x.x.x-type.js</code>
            <p>
               Simpletip requires <a href="http://jquery.com">jQuery</a> 1.2 or greater to function correctly, but <a href="http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.1.min.js">1.3</a> onwards is recommended. Once you've obtained the jQuery library, place the JavaScript file on your server as above. 
            </p>
            <p>Once it's uploaded, you'll need to include the file on the page you wish to use the library on, like so:</p>
            <code class="prettyprint lang-html">&lt;script type='text/javascript' src='js/prototip.js'&gt;&lt;/script&gt;</code>
            <p>At the moment it is <b>required</b> that you absolute position all tooltip elements using CSS rules, as below. This may change in later versions so stay tuned!</p>
            <code class="prettyprint lang-css">.tooltip{ position: absolute; top: 0; left: 0; }</code>
         </div>
         
         <div id="tutorials" class="section">
            <h2>Tutorials</h2>
            <p>Creating a new Simpletip is as simple as:</p>
            <code class="prettyprint lang-js">$("JQUERY SELECTOR").simpletip('content');</code>
            <p>Customizing the tooltip is done by supplying an optional third parameter containing your configuration options:</p>
            <code class="prettyprint lang-js">$("JQUERY SELECTOR").simpletip('content', {
   stem: 'topLeft',
   hook: { top: 'topLeft', mouse: true },
   offset: [20, 0]
});</code>
            <p>Checkout the <a rel="documentation" href="#">documentation</a> for a full list of available configuration options.</p>
         
            <div id="borders" class="subsection">
               <h3>Borders</h3>
               <p>As of 2.0 <b>beta4</b> Simpletip has a powerful inbuilt cross-browser rounded corner engine. You can utilise this new engine by simply declaring a border radius:</p>
               <code class="prettyprint lang-js">border: { size: 2, radius: 5 } //Size attribute is also known as the border-width</code>
               <p>To define the colour of your border, pass the color attribute along with the object as so:</p>
               <code class="prettyprint lang-js">border: { size: 2, radius: 5, color: '#303030' } // Notice the color attribute</code>
               <p>Try out different combinations to achieve just about every effect you can think of!</p>
            </div>
            
            <div id="hooks" class="subsection">
               <img class="right hooks" src="/simpletip/sandbox/images/hooks.jpg" alt="" />
               <h3>Hooks</h3>
               <p>Hooks are used to define how your tooltips appear in relation to the target element. You define two corners you wish to 'hook' together, one on the tooltip and one on the target element.</p>
               <code class="prettyprint lang-js">hook: { target: 'topLeft', tooltip: 'bottomRight' }</code>
               <p>You can also hook your tooltip to the mouse pointer, utilising an offset to prevent it appearing directly under the mouse pointer:</p>
               <code class="prettyprint lang-js">hook: { tooltip: 'topLeft', mouse: true },
   offset: [0, 10]</code>
               <p>If you wish you contain the tooltip within the viewport, so they are visible at all times, you can specify the viewport parameter:</p>
               <code class="prettyprint lang-js">viewport: true</code>
            </div>
            
            <div id="stems" class="subsection">
               <img class="right stems" src="/simpletip/sandbox/images/stems.jpg" alt="" />
               <h3>Stems</h3>
               <p>Stems are a great way to indicate where abouts your tooltips are coming from. As with hooks, you simply define a corner you wish to display the stem on, and optionally specify its colour and size:</p>
               <code class="prettyprint lang-js">stem: 'bottomRight', 
   stem: { corner: 'leftMiddle', color: '#EBE4B4' },
   stem: { corner: 'topLeft', color: 'black', size: 12 }</code>
               <p class="note"><b>Note: </b> the same corner values can be used for both <a href="#" rel="hooks">hooks</a> <i>and</i> stems!</p>
            </div>
            
            <div id="customevents" class="subsection">
               <h3>Custom events</h3>
               <p>There are currently only three predefined hide and show effects in the jQuery library, <i>fade</i>, <i>slide</i> and <i>none</i>. You can set your choice of effect like this:</p>
               <code class="prettyprint lang-js">showEffect: 'fade', hideEffect: 'slide'</code>
               <p>To combat this, Simpletip allows you to define custom hide and show events, making customizing your tooltips appearance (and disappearance!) a breeze.</p>
               <p>You simply pass a method reference along on the hideEffect and/or showEffect configuration options as shown:</p>
               <code class="prettyprint lang-js">showEffect: function(){ $(this).show("slide"); },
   hideEffect: function(){ $(this).hide("slide"); }</code>
               <p>Notice that <b><i>this</i></b> within the functions scope refers to the tooltip itself and not the Simpletip object!</p>
               <p class="note"><b>Note:</b> the custom show and hide effects above utilise the <a href="http://ui.jquery.com">jQuery UI</a> library.</p>
            </div>
         </div>
         
         <div id="styling" class="section">
            <h2>Styling</h2>
            <p>By default, tooltips take the general HTML form of:</p>
            <code class="prettyprint lang-html">&lt;div class="simpletip tooltip"&gt;
   &lt;div class="stem" rel="corner"&gt;&lt;/div&gt;
   &lt;div class="content"&gt;
      &lt;div class="title"&gt;
         &lt;div class="close"&gt;&lt;/div&gt;
      &lt;/div&gt;
   &lt;/div&gt;
&lt;/div&gt;</code>
            <p>As you might guess, the content div is where your tooltip contents are stored, and the stem div encapsulates the stem element.</p>
            <p>Although preset, each tooltip's classes can be customized as needed in your configuration options:</p>
            <code class="prettyprint lang-js">parentClass: 'tooltip',
stemClass: 'stem',
titleClass: 'title',
buttonClass: 'button',
contentClass: 'content'</code>
            <p>One other class is also provided, the <i>active</i> class. This class is applied to all tooltips which are currently 'active' e.g. on show.</p>
            <code class="prettyprint lang-js">activeClass: 'active'</code>
         </div>
         
         <div id="troubleshooting" class="section">
            <h2>Troubleshooting</h2>
            <p>
               <b>I'm trying to use both 2.x and 1.3.x libraries together and it won't work</b><br />
               Version 2.0 of Simpletip is incompatible with older versions &lt;1.3.x. We recommend the use of the new 2.0 library.
            </p>
            <p>
               <b>Some of my target elements aren't being selected</b><br />
               As of <b>beta4</b>, all target selectors in the configuration options must be <i>full jQuery selector strings</i>. This change was made to allow you to make more customized selections of elements and remove the single class limitation. This change effects these configuration options:
               <code class="prettyprint lang-js">hideOn: { element: '.close', event: 'mouseout' }, //Notice the full selector string in place of the old 'close' class name.
title: { content: 'Tooltip title', button: '.mybutton' } //Again, note the full selector string</code>
            </p>
            <p>
               <b>Tooltips aren't showing up</b><br />
               Make sure you've absolutely positioned your tooltip elements, and check your jquery.simpletip-2.x.x-type.js is included.
            </p>
            <p>
               <b>I'm getting JavaScript errors</b><br />
               Check your page has a DOCTYPE specified and passes validation at <a href="http://validator.w3.org/">validator.w3.org</a>.
            </p>
            <p>
               <b>Still having problems?</b><br />
               Log your issue at the google code project <a href="http://code.google.com/p/jquery-simpletip/issues/list">issue tracker</a> and/or <a rel="contact" href="#">contact me</a> to see if we can resolve the problem.
            </p>
         </div>
         
         <div id="documentation" class="section">
            <h2>Documentation</h2>
            <h3>Simpletip</h3>
            <code class="prettyprint lang-js">$("JQUERY SELECTOR").simpletip('content'[, configuration]);</code>
            <table cellpadding="0" cellspacing="0">
               <tr>
                  <td class="name">content</td>
                  <td class="desc">A string. <code class="prettyprint lang-js">$("JQUERY SELECTOR").simpletip('text to put in this tooltip (Can be HTML)');</code></td>
               </tr>
               <tr>
                  <td class="name">configuration</td>
                  <td class="desc">Optional object of configuration options, see the documentation on Simpletip.configuration.</td>
               </tr>
            </table>
            
            <h3>configuration</h3>
            <table cellpadding="0" cellspacing="0">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Description</th>
                     <th>Default</th>
                  </tr>
               </thead>
               <tr>
                  <td class="name">ajax</td>
                  <td class="desc">
                     Retrieve content remotely from the supplied url using the library's API load() method. Only the <b>url</b> parameter is needed, others are optional.
                     <code class="prettyprint lang-js">ajax: {
   url: 'page.php', // url of the content you wish to load
   data: { id: 1 }, // POST parameters to send with the request
   method: 'get' // Explicit method type. If 'get', data object is ignored.
});</code>
                  </td>
                  <td class="default">false</td>
               </tr>
               <tr>
                  <td class="name">activeClass</td>
                  <td class="desc">Class name to apply to active (currently shown) tooltip elements.</td>
                  <td class="default">active</td>
               </tr>
               <tr>
                  <td class="name">beforeContentLoad</td>
                  <td class="desc">Callback method to execute before content is loaded using the <span class="prop">load</span> method.</td>
                  <td class="default">null</td>
               </tr>
               <tr>
                  <td class="name">beforeHide</td>
                  <td class="desc">Callback method to execute before tooltip is hidden.</td>
                  <td class="default">null</td>
               </tr>
               <tr>
                  <td class="name">beforeShow</td>
                  <td class="desc">Callback method to execute before tooltip is shown.</td>
                  <td class="default">null</td>
               </tr>
               <tr>
                  <td class="name">border</td>
                  <td class="desc">
                     An integer with the border size, an object with border size, radius and/or color, or false.
                     <code class="prettyprint lang-js">border: 3,
border: { size: 3, radius: 5 },
border: { size: 3, radius: 5, color: '#303030' },
border: false</code>
                  </td>
                  <td class="default">false</td>
               </tr>
               <tr>
                  <td class="name">buttonClass</td>
                  <td class="desc">Class name to apply to button elements.</td>
                  <td class="default">button</td>
               </tr>
               <tr>
                  <td class="name">contentClass</td>
                  <td class="desc">Class name to apply to generated tooltip content elements.</td>
                  <td class="default">content</td>
               </tr>
               <tr>
                  <td class="name">delay</td>
                  <td class="desc">Delay in milliseconds before the tooltip appears.</td>
                  <td class="default">140</td>
               </tr>
               <tr>
                  <td class="name">hidden</td>
                  <td class="desc">Set to false to show the tooltip will immediately when created.</td>
                  <td class="default">true</td>
               </tr>
               <tr>
                  <td class="name">hideAfter</td>
                  <td class="desc">Hide the tooltip after a time of inactivity in milliseconds. This means your tooltip will hide after the element or the tooltip is not hovered/clicked for this duration.</td>
                  <td class="default">false</td>
               </tr>
               <tr>
                  <td class="name">hideEffect</td>
                  <td class="desc">Type of hide effect to use (fade, slide or none).</td>
                  <td class="default">fade</td>
               </tr>
               <tr>
                  <td class="name">hideOn</td>
                  <td class="desc">
                     A string with the event to use, or an object allowing more control, or false.
                     <code class="prettyprint lang-js">hideOn: 'mouseout',
hideOn: { element: '.close', event: 'mouseout' },
hideOn: { element: '.mybutton', event: 'click' },
hideOn: false // useful in combination with hideAfter</code>
                  </td>
                  <td class="default">mouseout</td>
               </tr>
               <tr>
                  <td class="name">hideOthers</td>
                  <td class="desc">When true, other tooltips will be hidden before showing the tooltip.</td>
                  <td class="default">false</td>
               </tr>
               <tr>
                  <td class="name">hideTime</td>
                  <td class="desc">Time in milliseconds for <span class="prop">hideEffect</span> effect.</td>
                  <td class="default">150</td>
               </tr>
               <tr>
                  <td class="name">hook</td>
                  <td class="desc">
                     An object hooking tooltip and element corners together. See <a rel="hooks" href="#">hooking</a> for more details and demonstrations.
                     <code class="prettyprint lang-js">hook: { target: 'topRight', tooltip: 'bottomLeft' },
hook: { target: 'rightMiddle', tooltip: 'leftMiddle' },
hook: { tooltip: 'bottomRight', mouse: true }</code>
                  </td>
                  <td class="default">-</td>
               </tr>
               <tr>
                  <td class="name">offset</td>
                  <td class="desc">Array of <b>x, y</b> by which to offset the tooltips position. <code class="prettyprint lang-js">offset: [ 20, 0 ]</code></td>
                  <td class="default">[0,0]</td>
               </tr>
               <tr>
                  <td class="name">onContentLoad</td>
                  <td class="desc">Callback method to execute after content is loaded using the <span class="prop">load</span> method.</td>
                  <td class="default">null</td>
               </tr>
               <tr>
                  <td class="name">onHide</td>
                  <td class="desc">Callback method to execute after tooltip is hidden.</td>
                  <td class="default">null</td>
               </tr>
               <tr>
                  <td class="name">onShow</td>
                  <td class="desc">Callback method to execute after tooltip is shown.</td>
                  <td class="default">null</td>
               </tr>
               <tr>
                  <td class="name">parentClass</td>
                  <td class="desc">Class name to apply to generated tooltip elements.</td>
                  <td class="default">tooltip</td>
               </tr>
               <tr>
                  <td class="name">showEffect</td>
                  <td class="desc">Type of show effect to use (fade, slide or none).</td>
                  <td class="default">fade</td>
               </tr>
               <tr>
                  <td class="name">showOn</td>
                  <td class="desc">The event that shows the tooltip. <code class="prettyprint lang-js">showOn: 'click'</code> </td>
                  <td class="default">mousemove</td>
               </tr>
               <tr>
                  <td class="name">showTime</td>
                  <td class="desc">Time in milliseconds for <span class="prop">showEffect</span> effect.</td>
                  <td class="default">150</td>
               </tr>
               <tr>
                  <td class="name">stem</td>
                  <td class="desc">
                     A string with the stem position, an object giving more control, or false. See <a rel="stems" href="#">stems</a> for more details on stem positions.
                     <code class="prettyprint lang-js">stem: 'leftMiddle',
stem: { corner: 'topLeft', color: 'black' }, 
stem: { corner: 'bottomRight', color: '#FF9900', size: 12 }, 
stem: false</code>
                  </td>
                  <td class="default">topLeft</td>
               </tr>
               <tr>
                  <td class="name">stemClass</td>
                  <td class="desc">Class name to apply to generated stem elements.</td>
                  <td class="default">stem</td>
               </tr>
               <tr>
                  <td class="name">target</td>
                  <td class="desc">
                     An element that will function as the target for your tooltip. Default: the element which simpletip() was called on.
                     <code class="prettyprint lang-js">target: $('#myId').down('.row:first')</code>
                  </td>
                  <td class="default">-</td>
               </tr>
               <tr>
                  <td class="name">title</td>
                  <td class="desc">
                  A string with the title contents, or an object with title contents and optional button class, or false.
                  <code class="prettyprint lang-js">title: 'Tooltip title', 
title: { content: 'Tooltip title', button: '.mybutton' }, 
title: false</code>
                  </td>
                  <td class="default">false</td>
               </tr>
               <tr>
                  <td class="name">titleClass</td>
                  <td class="desc">Class name to apply to title elements.</td>
                  <td class="default">title</td>
               </tr>
               <tr>
                  <td class="name">viewport</td>
                  <td class="desc">Keep the tooltip within the viewport at all times. true or false.</td>
                  <td class="default">false</td>
               </tr>
               <tr>
                  <td class="name">width</td>
                  <td class="desc">Sets the width of the tooltip.</td>
                  <td class="default">false</td>
               </tr>
            </table>
            
            <h3>Simpletip.API</h3>
            <p>The Simpletip comes with a great scripting API for users. A lot of effort has been made to make sure you have the necessary functionality to enrich the library with as little effort as possible.</p>
            <p>Once you've setup tooltips on your element(s), the API can be accessed via the simpletip() call. An example of this is below:</p>
            <code class="prettyprint lang-js">$('JQUERY SELECTOR').simpletip(); // Create your tooltips
var api = $('JQUERY SELECTOR').eq(0).simpletip(); // Access the API of a previously initatied simpletip
api.update('New tooltip content!'); // Perform a simple API call to update tooltip contents</code>
            <p>Here's a list of all API methods available to you in the library:</p>
            <table cellpadding="0" cellspacing="0">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Description</th>
                  </tr>
               </thead>
               <tr>
                  <td class="name">focus()</td>
                  <td class="description">Focuses the tooltip, bringing it in front of all others.</td>
               </tr>
               <tr>
                  <td class="name">getContent()</td>
                  <td class="description">Returns the content element of the generated tooltip.</td>
               </tr>
               <tr>
                  <td class="name">getVersion()</td>
                  <td class="description">Returns the version number of the Simpletip library currently in use.</td>
               </tr>
               <tr>
                  <td class="name">getTooltip()</td>
                  <td class="description">Returns the tooltip element.</td>
               </tr>
               <tr>
                  <td class="name">getPos()</td>
                  <td class="description">Returns the <b>absolute</b> current position of the tooltip element.</td>
               </tr>
               <tr>
                  <td class="name">hide()</td>
                  <td class="description">Hides the tooltip element.</td>
               </tr>
               <tr>
                  <td class="name">load(url,data,method)</td>
                  <td class="description">Updates the contents of the tooltip element with the contents of a remote file <b>url</b> using AJAX. Use the data array to pass <i>POST</i> data on the AJAX call. If <b>method</b> is set to 'get' and post data is supplied, it is ignored.</td>
               </tr>
               <tr>
                  <td class="name">set(name,value)</td>
                  <td class="description">Sets a configuration option called <i>name</i> to value <i>value</i>.</td>
               </tr>
               <tr>
                  <td class="name">show()</td>
                  <td class="description">Displays the tooltip element.</td>
               </tr>
               <tr>
                  <td class="name">update(content)</td>
                  <td class="description">Updates the contents of the tooltip element with the supplied argument, usually a string or integer.</td>
               </tr>
            </table>
            <p>As of beta3, there are also 4 API attributes that are available in all API calls:</p>
            <table cellpadding="0" cellspacing="0">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Description</th>
                  </tr>
               </thead>
               <tr>
                  <td class="name">this.content</td>
                  <td class="description">Refers to the content element of the tooltip.</td>
               </tr>
               <tr>
                  <td class="name">this.root</td>
                  <td class="description">Refers to the root element e.g. the element the simpletip() call was used on.</td>
               </tr>
               <tr>
                  <td class="name">this.stem</td>
                  <td class="description">Refers to the stem element of the tooltip.</td>
               </tr>
               <tr>
                  <td class="name">this.tooltip</td>
                  <td class="description">Refers to the tooltip element.</td>
               </tr>
               <tr>
                  <td class="name">this.title</td>
                  <td class="description">Refers to the title element of the tooltip.</td>
               </tr>
            </table>
         </div>
         
         <div id="license" class="section">
            <h2>License</h2>
            <p>Simpletip version <b>2.0.x</b> and upwards is freely distributed under the <a href="http://www.opensource.org/licenses/lgpl-3.0.html">GNU Lesser General Public License (LGPLv3)</a>. You can modify, distribute and copy all code freely for both non-commercial and commercial purposes.</p>
            <p class="note"><b>Note:</b> Simpletip version 1.x is distributed under the GPLv3 license, which disallows its use in closed source projects.</p>
         </div>
         
         <div id="download" class="section">
            <h2>Download</h2>
            
            <h2 class="link">&raquo; <a href="http://jquery-simpletip.googlecode.com/files/jquery.simpletip-<?=$version?>.js">Simpletip <?=$version?></a></h2>
            <p class="note">
               <b>Note:</b> When upgrading make sure to replace all files.<br />
               <b>Note:</b> Simpletip 2 is not backwards compatible with Simpletip 1!
            </p>
            
            <div id="changelog" class="subsection last">
               <h3>Changelog</h3>
               <h4><b>Simpletip</b> 2.0.0-beta5</h4>
               <h5 class="level"><b>level:</b> Beta</h5>
               <h5 class="released"><b>released:</b> February 18, 2009 - 5:47pm</h5>
               <h5 class="changes"><b>changelog:</b></h5>
               <ul>
                  <li><b>Core:</b> Exposed default configuration options as simpletip object. <a rel="ovveride" href="#">default overrides</a> for details.</li>
                  <li><b>Fixed:</b> <a href="http://code.google.com/p/jquery-simpletip/issues/detail?id=5">Issue #5</a> - Compatability with jQuery 1.2.6 broken in Internet Explorer</li>
               </ul>
               
               <h4><b>Simpletip</b> 2.0.0-beta4</h4>
               <h5 class="level"><b>level:</b> Beta</h5>
               <h5 class="released"><b>released:</b> February 17, 2009 - 01:29am</h5>
               <h5 class="changes"><b>changelog:</b></h5>
               <ul>
                  <li><b>Core:</b> Added new title API attribute for new title functionality</li>
                  <li><b>New:</b> Added brand new <b>cross-browser</b> rounded corner engine. See the <a rel="borders" href="#">borders tutorial</a> for details.</li>
                  <li><b>New:</b> Added new title and button functionality</li>
                  <li><b>New:</b> Added titleClass and buttonClass attributes</li>
                  <li><b>New:</b> Require full jQuery selector use on all element targets. See <a rel="troubleshooting" href="#">troubleshooting</a> for details.</li>
               </ul>
               
               <h4><b>Simpletip</b> 2.0.0-beta3</h4>
               <h5 class="level"><b>level:</b> Beta</h5>
               <h5 class="released"><b>released:</b> February 12, 2009 - 23:17pm</h5>
               <h5 class="changes"><b>changelog:</b></h5>
               <ul>
                  <li><b>Core:</b> Converted root, tooltip, content and stem variables into API attributes</li>
                  <li><b>New:</b> Added new ajax configuration option to allow instant loading of remote content. See <a rel="documentation" href="#">documentation</a></li>
                  <li><b>New:</b> Added new 'method' attribute to API load() method to allow explicit method type (GET or POST)</li>
                  <li><b>New:</b> Can now access simpletip API via the tooltip itself with a simpletip() call</li>
                  <li><b>New:</b> Each tooltips beforeHide and onHide callbacks are called when hidden by other tooltips (hideOthers)</li>
                  <li><b>Fixed:</b> <a href="http://code.google.com/p/jquery-simpletip/issues/detail?id=4">Issue #4</a> - Error when providing a string for stem attribute</li>
                  <li><b>Removed:</b> Window resize event due to cross-browser positioning issues. See <a href="http://code.google.com/p/jquery-simpletip/issues/detail?id=2">Issue #2</a></li>
               </ul>
               
               <h4><b>Simpletip</b> 2.0.0-beta2</h4>
               <h5 class="level"><b>level:</b> Beta</h5>
               <h5 class="released"><b>released:</b> February 11, 2009 - 20:37pm</h5>
               <h5 class="changes"><b>changelog:</b></h5>
               <ul>
                  <li><b>Core:</b> Renamed all onBefore* methods to before* for consistency</li>
                  <li><b>New:</b> Allow stems to be disabled using stem: false</li>
                  <li><b>Fix:</b> Corrected rendering bugs in IE</li>
                  <li><b>Fix:</b> Corrected offset bug in webkit browsers</li>
               </ul>
               
               <h4><b>Simpletip</b> 2.0.0-beta1</h4>
               <h5 class="level"><b>level:</b> Major / Beta</h5>
               <h5 class="released"><b>released:</b> February 11, 2009 - 03:29am</h5>
               <h5 class="changes"><b>changelog:</b></h5>
               <ul class="last">
                  <li><i>Major restructuring of entire library and accompanying API methods</i></li>
                  <li><b>Core:</b>Optimized library methods deliver a nice speed increase on certain show/hide and mouse events</li>
                  <li><b>Core:</b> Many library attributes renamed / integrated into new features</li>
                  <li><b>Core:</b> customShow and customHide callbacks integrated into hideEffect and showEffect respectively</li>
                  <li><b>License:</b> Changed to <a href="http://www.opensource.org/licenses/lgpl-3.0.html">LGPLv3</a> to allow non-commerical projects to use code freely</li>
                  <li><b>New:</b> Added new hooks functionality for positioning tooltips</li>
                  <li><b>New:</b> Added cross-browser compatible stems or 'tips' support</li>
                  <li><b>New:</b> New hideOn and showOn configuration options allow total customisation of when tooltips are hidden/shown.</li>
                  <li><b>New:</b> hideOthers attribute to hide all other tooltips upon show</li>
                  <li><b>New:</b> focus() functionality brings tooltip to forefront of all others (z-index) when moused over or called via API</li>
                  <li><b>New:</b> delay attribute available to delay showing of tooltips</li>
                  <li><b>New:</b> hideAfter attribute hides tooltip after a set period of inactivity (mouseover/click/hover etc.)</li>
                  <li><b>New:</b> Dramatically improved viewport / boundry checking</li>
               </ul>
            </div>
         </div>
         
         <div id="contact" class="section last">
            <h2>Contact</h2>
            <p>Use the <a href="http://code.google.com/p/jquery-simpletip/issues/list">issue tracker</a> for support related questions.</p>
            <p>For anything else you can contact me at <a href="mailto:craig@craigsworks.com">craig[at]craigsworks.com</a></p>
         </div>
         
         <div class="clear">&nbsp;</div>
      </div>
   </div>
   
   <div class="footer">
      <a href="http://code.google.com/p/jquery-simpletip/"><b>google code project</b></a> - 
      <a href="http://groups.google.com/group/jquery-simpletip/"><b>discussion group</b></a> - 
      <a href="http://plugins.jquery.com/project/simpletip">jQuery plugin project</a> - 
      <a href="http://craigsworks.com">my portfolio</a> - 
      <a href="mailto:craig@craigsworks.com">contact me</a>
   </div>
</div>

<!--Scripts-->
<script type="text/javascript">var section = (location.hash.length) ? location.hash.replace('#','') : '<?=$section?>';</script>
<script type="text/javascript" src="/simpletip/project/jquery-1.3.1.min.js"></script>
<script type="text/javascript" src="/simpletip/project/jquery-ui-personalized-1.6rc6.min.js"></script>
<?php if($version == 'sandbox'){ ?><script type="text/javascript" src="/simpletip/project/jquery.simpletip-sandbox.js"></script>
<?php } ?>
<script type="text/javascript" src="/simpletip/project/js/prettify.js"></script>
<script type="text/javascript" src="/simpletip/project/js/index.js"></script>

<!--Google Analytics-->
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-5228245-1");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
</html>