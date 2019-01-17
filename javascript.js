// rolagem suave da página
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$('#logon').on( 'click', function () {
    $.LoadingOverlay("show");
    //funcao de login vem aqui
    window.location.replace("voto.html");
    $.Loadingoverlay("hide");
});

$('#enviar-voto').on('click', function(){
  $('#modal-voto').modal("show");
  window.location.replace("index.html");
});

// $('#modal-vote').on('hidden.bs.modal', function(){
//   $.LoadingOverlay("hide");
// });
