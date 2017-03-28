

$(function() {

 
 $('#i17').click(function(){
      $('#ta_1').focus();
 })

 $('#i17').draggable({
                                        cancel: "text",
                                        start: function (){
                                            $('#ta_1').focus();
                                         },
                                        stop: function (){
                                            $('#ta_1').focus();
                                         } 
                                     })
                                    .resizable()

 $( ".resizable" ).resizable();

});