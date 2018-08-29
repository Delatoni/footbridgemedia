// Custom JS Here
jQuery(document).ready(function($) {

////// START AUTOMAGIC FORM - THIS REPLACES THE <p id="sidebar-contact-button" class="sidebar-button"> WITH THE FORM on TABLET AND LARGER
$replacement_form_head = "<div id=\"form\" class=\"clearfix\"> <img src=\"images/form-top.png\" alt=\"form-top\" width=\"320\" height=\"50\"><div class=\"form-body\">";
// THIS IS THE GENERIC FORM - TO ADD YOUR OWN FORM, REPLACE THE CONTENT OF $replacement_form_body with YOUR ACTUAL FORM EMBED
$replacement_form_body = "<!--START GENERIC FORM CODE - TO BE REPLACED ---><div id=\"wufoo-zy56p8s15gaj7l\"> Fill out my <a href=\"https://adminfoot.wufoo.com/forms/zy56p8s15gaj7l\">online form</a>. </div><script type=\"text/javascript\">var zy56p8s15gaj7l;(function(d, t) { var s = d.createElement(t), options = {'userName':'adminfoot', 'formHash':'zy56p8s15gaj7l', 'autoResize':true, 'height':'483','async':true, 'host':'wufoo.com', 'header':'hide', 'ssl':true}; s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js'; s.onload = s.onreadystatechange = function() { var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return; try { zy56p8s15gaj7l = new WufooForm();zy56p8s15gaj7l.initialize(options);zy56p8s15gaj7l.display(); } catch (e) {}}; var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr); })(document, 'script');</script><!--END GENERIC FORM CODE - TO BE REPLACED --->";
$replacement_form_bottom = "</div><img src=\"images/form-bottom.png\" alt=\"form-bottom\" width=\"320\" height=\"50\"> </div>";
//TO ENABLE AUTOMAGIC REPLACE, UNCOMMENT THE FOLLOWING LINE
 if (document.documentElement.clientWidth > 699) { $("#sidebar-contact-button").replaceWith($replacement_form_head + $replacement_form_body + $replacement_form_bottom) };
////// END AUTOMAGIC FORM 
//// Hidden Services
     $('#smoke2').hide(); 
    $('#smoke3').hide(); 
    $('#smoke1-but').css('border-bottom','solid 3px #01528a' );
   
$('#smoke1-but').click(function(){
    $('#smoke1-but').css('border-bottom','solid 3px #01528a' );
    $('#smoke2-but').css('border-bottom','none' );
    $('#smoke3-but').css('border-bottom','none' );
    $('#smoke1').fadeIn();
    $('#smoke2').fadeOut(); 
    $('#smoke3').fadeOut();
    
});
$('#smoke2-but').click(function(){
    $('#smoke1-but').css('border-bottom','none' );
    $('#smoke2-but').css('border-bottom','solid 3px #01528a' );
    $('#smoke3-but').css('border-bottom','none' );
    $('#smoke1').fadeOut();
    $('#smoke2').fadeIn(); 
    $('#smoke3').fadeOut();
   
});
$('#smoke3-but').click(function(){
    $('#smoke1-but').css('border-bottom','none' );
    $('#smoke2-but').css('border-bottom','none' );
    $('#smoke3-but').css('border-bottom','solid 3px #01528a' );
    $('#smoke1').fadeOut();
    $('#smoke2').fadeOut(); 
    $('#smoke3').fadeIn();
   
});
    //end hidden services

});

// Pagination Script
$(window).load(function() {
    var items = $(".paginate"); var numItems = items.length;
    var perPage = 5; //number of items to show per page
    items.slice(perPage).hide();
    $(".pagination-page").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "light-theme",
        onPageClick: function(pageNumber) { var showFrom = perPage * (pageNumber - 1); var showTo = showFrom + perPage; items.hide().slice(showFrom, showTo).show();}
    });
});

//Ralph's Hidden Box
function moveDot(event) {
   var x = event.clientX;
   document.getElementById('menu-circle').style.left = (x-25) + "px";
   document.getElementById('menu-circle').style.display = "block";
   console.log(x);
   };
var userWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
function displayForm() {
   document.getElementById('hide-form').style.display = "block";
   document.getElementById('hide-form').style.width = (userWidth*0.5) + "px";
   document.getElementById('hide-form').style.height = (userHeight*0.75) + "px";
   };
function closeForm() {  document.getElementById('hide-form').style.display = "none";  };
