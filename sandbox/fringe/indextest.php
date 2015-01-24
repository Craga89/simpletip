<?php 
   $version = "2.0.0-beta5"; 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Simpletip2 Sandbox - Current beta: <?=$version?></title>
<!--Stylesheets-->
<link rel="stylesheet" type="text/css" href="/simpletip/sandbox/sandbox.css"  />
<link rel="stylesheet" type="text/css" href="/simpletip/sandbox/prettify.css" />
<!--Meta-->
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="description" content="Simpletip jQuery plugin. Making tooltips simple!" />
<meta name="keywords" content="simpletip, jquery, javascript, plugin, tooltip, tooltips, craigsworks, craig thompson" />
<meta name="author" content="Craig Thompson" />
</head>
<body>
<div id="master">

   <div id="content">
      
      <div id="demonstrations" class="section">
         <h2>Demonstrations</h2>
         
         <ul class="rooms">
            <li class="room simple">
               <div class="pad1 pad-simple"><img src="/simpletip/sandbox/images/demo/simple.jpg" alt="" height="22" width="95" /></div>
               Simple
            </li>
            
            <li class="room style">
               <div class="pad2 pad-style1"><img src="/simpletip/sandbox/images/demo/style1.jpg" alt="" height="22" width="45" /></div>
               <div class="pad2 pad-style2"><img src="/simpletip/sandbox/images/demo/style2.jpg" alt="" height="22" width="45" /></div>
               <div class="clear">&nbsp;</div>
               Styles
            </li>
            
            <li class="room border">
               <div class="pad3 pad-border1"><img src="/simpletip/sandbox/images/demo/border1.jpg" alt="" height="22" width="28" /></div>
               <div class="pad3 pad-border2"><img src="/simpletip/sandbox/images/demo/border2.jpg" alt="" height="22" width="28" /></div>
               <div class="pad3 pad-border3"><img src="/simpletip/sandbox/images/demo/border3.jpg" alt="" height="22" width="28" /></div>
               <div class="clear">&nbsp;</div>
               Round
            </li>
            
            <li class="room stems">
               <div class="pad3 pad-stem-lm"><img src="/simpletip/sandbox/images/demo/stem1.jpg" alt="" height="22" width="28" /></div>
               <div class="pad3 pad-stem-tm"><img src="/simpletip/sandbox/images/demo/stem2.jpg" alt="" height="22" width="28" /></div>
               <div class="pad3 pad-stem-br"><img src="/simpletip/sandbox/images/demo/stem3.jpg" alt="" height="22" width="28" /></div>
               <div class="clear">&nbsp;</div>
               Stems
            </li>
            
            <li class="room hooks">
               <div class="pad3 pad-hook"><img src="/simpletip/sandbox/images/demo/hook.jpg" alt="" height="22" width="28" /></div>
               <div class="pad3 pad-hook-stem"><img src="/simpletip/sandbox/images/demo/hookstem.jpg" alt="" height="22" width="28" /></div>
               <div class="pad3 pad-hook-mouse"><img src="/simpletip/sandbox/images/demo/mouse.jpg" alt="" height="22" width="28" /></div>
               <div class="clear">&nbsp;</div>
               Hooking
            </li>
            
            <li class="room target">
               <div class="pad1 pad-target"><img src="/simpletip/sandbox/images/demo/target.jpg" alt="" height="22" width="95" /></div>
               <div class="clear">&nbsp;</div>
               Target
            </li>
            
            <li class="room title">
               <div class="pad1 pad-title"><img src="/simpletip/sandbox/images/demo/title.jpg" alt="" height="22" width="95" /></div>
               <div class="clear">&nbsp;</div>
               Titles
            </li>
            
            <li class="room buttons">
               <div class="pad2 pad-buttons-text"><img src="/simpletip/sandbox/images/demo/buttontext.jpg" alt="" height="22" width="45" /></div>
               <div class="pad2 pad-buttons-image"><img src="/simpletip/sandbox/images/demo/buttonimage.jpg" alt="" height="22" width="45" /></div>
               <div class="clear">&nbsp;</div>
               Buttons
            </li>
            
            <li class="room events">
               <div class="pad2 pad-events1"><img src="/simpletip/sandbox/images/demo/eventpreset.jpg" alt="" height="22" width="45" /></div>
               <div class="pad2 pad-events2"><img src="/simpletip/sandbox/images/demo/eventcustom.jpg" alt="" height="22" width="45" /></div>
               <div class="clear">&nbsp;</div>
               Events
            </li>
            
            <li class="room click">
               <div class="pad1 pad-click"><img src="/simpletip/sandbox/images/demo/click.jpg" alt="" height="22" width="95" /></div>
               <div class="clear">&nbsp;</div>
               Click
            </li>
            
            <li class="room delay">
               <div class="pad1 pad-delay"><img src="/simpletip/sandbox/images/demo/delay.jpg" alt="" height="22" width="95" /></div>
               <div class="clear">&nbsp;</div>
               Delay
            </li>
            
            <li class="room hideafter">
               <div class="pad1 pad-hideafter"><img src="/simpletip/sandbox/images/demo/hideafter.jpg" alt="" height="22" width="95" /></div>
               <div class="clear">&nbsp;</div>
               Hide after
            </li>
            
            <li class="room offset">
               <div class="pad1 pad-offset"><img src="/simpletip/sandbox/images/demo/offset.jpg" alt="" height="22" width="95" /></div>
               <div class="clear">&nbsp;</div>
               Offset
            </li>
            
            <li class="room viewport">
               <div class="pad1 pad-viewport"><img src="/simpletip/sandbox/images/demo/viewport.jpg" alt="" height="22" width="95" /></div>
               <div class="clear">&nbsp;</div>
               Viewport
            </li>
            
            <li class="room ajax">
               <div class="pad1 pad-ajax"><img src="/simpletip/sandbox/images/demo/ajax.jpg" alt="" height="22" width="95" /></div>
               <div class="clear">&nbsp;</div>
               Ajax
            </li>
         </ul>
         
         <p class="note"><b>Note:</b> the custom show and hide effects above utilise the <a href="http://ui.jquery.com">jQuery UI</a> library.</p>
         <div class="clear">&nbsp;</div>
      </div>
      
      <div class="clear">&nbsp;</div>
   </div>
   <div class="clear">&nbsp;</div>
</div>

<!--Scripts-->
<script type="text/javascript" src="/simpletip/sandbox/jquery-1.3.1.min.js"></script>
<script type="text/javascript" src="/simpletip/sandbox/jquery-ui-personalized-1.6rc6.min.js"></script>
<script type="text/javascript" src="/simpletip/download/<?=$version?>/jquery.simpletip-<?=$version?>.js"></script>

<script type="text/javascript" src="/simpletip/sandbox/js/prettify.js"></script>
<script type="text/javascript" src="/simpletip/sandbox/js/index.js"></script>
</body>
</html>