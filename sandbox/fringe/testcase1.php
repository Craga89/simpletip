<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="/simpletip/sandbox/jquery-1.3.1.min.js"></script>
<script type="text/javascript" src="/simpletip/sandbox/jquery.simpletip-sandbox.js"></script>
<link type="text/css" rel="stylesheet" href="sandbox.css" />
<title>Document sans nom</title>
</head>
<body>

<div style="margin:200px 0 0 400px;" class="simple">Consectetur adipiscing elit. Praesent et nisl <a rel="http://www.mywebsite/linktomypost1/" title="News title 1" class="share" href="javascript:;">Share</a> Lorem ipsum dolor sit amet</div>

<div style="margin:0 0 0 400px;">Consectetur adipiscing elit. Praesent et nisl. <a rel="http://www.mywebsite/linktomypost2/" class="share" title="News title 2" href="javascript:;">Share</a> Lorem ipsum dolor sit amet</div>
<div style="margin:0 0 0 400px;">Nunc aliquet est et dolor. Duis ligula. Vivamus sagittis tristique diam. <a rel="http://www.mywebsite/linktomypost3/" class="share" title="News title 3" href="javascript:;">Share</a> Lorem ipsum dolor sit amet</div>

<script>

$('a.share').each(function(){
   var permalink = $(this).attr('rel');
   var titre = $(this).attr('title'); 


   $(this).simpletip('Loading...', {
      width: '180px',
      showOn: 'click',
      hideOn: { element: '.close', event: 'click' },
      delay: 10,
      hook: {
         target: 'bottomMiddle',
         tooltip: 'bottomMiddle'
      },
      offset: [ 0, 30 ],
      parentClass: 'tooltip-light',
      onShow: function(){
         this.load('/simpletip/sandbox/js/democontent.html',  { url : permalink, title : titre });
      }
   })

});


</script>
</body>
</html>
