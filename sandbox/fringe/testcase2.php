<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="/simpletip/sandbox/jquery-1.3.1.min.js"></script>
<script type="text/javascript" src="/simpletip/sandbox/jquery.simpletip-2.0.0-beta3.js"></script>
<title>Test case 2 - Help links</title>
<style type="text/css">
body{
   padding: 0;
   margin: 0;
   background-color: #eee;
}

#master{
   margin: 0 auto;
   padding: 150px 30px;
   width: 400px;
   
   background-color: white;
}

#master a.help{
   display: block;
   padding: 3px;
   margin-top: 10px;
   
   border: 1px solid #eee;
   background-color: #f4f4f4;
}

.tooltip{ position: absolute; }

   .tooltip .content{
      width: 360px;
      padding: 6px;
      margin: 0 -4px;
      
      -moz-border-radius: 4px;
      -webkit-border-radius: 4px;
      border: 6px solid #ccc;
      
      background-color: white;
      color: #303030;
   }

   .tooltip .ajaxdemo{
      font-size: 10px;
   }

      .tooltip .ajaxdemo h1{
         margin: 3px 0 5px;
         font-size: 15px;
         font-family: Georgia, serif;
      }
      
      .tooltip .ajaxdemo img{ float: left; padding: 0 7px 7px 0; }

</style>
</head>
<body>

<div id="master">
   <a class="help" href="#" title="Help Number 1">My classes: help</a>
   <a class="help" href="#" title="Help Number 1">My classes: help</a>
</div>

<script type="text/javascript">
$('a.help').each(function()
{
   var self = $(this);
   var title = $(this).attr('title'); 

   $(this).simpletip('Loading...', 
   {
      showOn: 'click',
      hideOn: { element: 'close', event: 'click' },
      hideOthers: true,
      viewport: true,
      hook: {
         target: 'topRight',
         tooltip: 'bottomLeft'
      },
      stem: { corner: 'bottomLeft', color: '#ccc' },
      beforeShow: function(){
         //Set the loading class of the link
         self.addClass('loading');
         self.text('My classes: ' + self.get(0).className);
         
         //Load the content
         this.load('/simpletip/sandbox/js/democontent.html', { title: title });
      },
      onContentLoad: function(){
         //Set the active class of the link
         self.removeClass('loading').addClass('active');
         self.text('My classes: ' + self.get(0).className);
         
         //Update tooltip position with new content
         this.updatePos();
      },
      onHide: function(){
         //Remove the active class
         self.removeClass('active');
         self.text('My classes: ' + self.get(0).className);
      }
   })
});
</script>
</body>
</html>
