$("body").on("click",function(){$(".navbar-collapse").collapse("hide")}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href="#carouselExampleCaptions"]').click(function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(a.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},2e3,function(){var a=$(e);if(a.focus(),a.is(":focus"))return!1;a.attr("tabindex","-1"),a.focus()}))}});