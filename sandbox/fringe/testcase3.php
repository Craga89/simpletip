<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="/simpletip/sandbox/jquery-1.3.1.min.js"></script>
<script type="text/javascript" src="/simpletip/sandbox/jquery.simpletip-2.0.0-beta3.js"></script>
<title>Test case 3 - Container tooltips</title>
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

#trash{
   background-color: gray;
}

.tooltip{ position: absolute; }

   .tooltip .content{
      width: 360px;
      padding: 6px;
      margin: 0 -4px;
      
      -moz-border-radius: 4px;
      -webkit-border-radius: 4px;
      border: 6px solid #ddd;
      
      background-color: white;
      color: #303030;
   }
</style>
</head>
<body>

<div id="master">
   <div id="trash" rel="tooltip" title="Drag friends here to end yourfriendship with them.">
      <div id="trash_inner">
         <h4><img src="/images/icons/user_delete.png" />Trash</h4>
         <ul rel="trash" class="group_ul">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
         </ul>
      </div>
   </div> 
</div>

<script type="text/javascript">
$('*[rel*=tooltip]').each(function()
{
   var el = $(this);
   var title = $(this).attr("title");
   
   $(this).simpletip(title, 
   {
      viewport: true,
      hook: { target: 'topLeft', tooltip: 'bottomLeft' },
      stem: { corner: 'bottomLeft', color: '#dddddd' }
   });
}); 
</script>
</body>
</html>

