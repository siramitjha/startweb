function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-120396928-1"); function openNav(){document.getElementById("mySidenav").style.width="100%",document.getElementById("openNav").style.display="none"}function closeNav(){document.getElementById("mySidenav").style.width="0",document.getElementById("openNav").style.display="block"}$(document).ready(function(){$("a.target").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},1e3),!1})}); $(function(){ $("#mainheader").load("header.html"); $("#mainfooter").load("footer.html");});

function setHeight() {
windowHeight = $(window).innerHeight();
$('#iframeload').css('min-height', windowHeight - 195);
};
setHeight();  
$(window).resize(function() {
  setHeight();
});  