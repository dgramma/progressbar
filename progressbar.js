$(document).on("scroll",function(){var o=parseInt($(document).outerWidth()),t=$(window).height(),e=parseInt($(document).outerHeight()-t),r=parseInt($(document).scrollTop()),n=o/e,s=Math.floor(r*n);$("#progressbar").css("width",s+"px")});
