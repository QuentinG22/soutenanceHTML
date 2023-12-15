$("#rouge").click(function () {
    $(".selection").hide();
    $("#articleSelection #rougeSelection").slideToggle(1500);
});

$("#blanc").click(function () {
    $(".selection").hide();
    $("#articleSelection #blancSelection").slideToggle(1500);
});

$("#rose").click(function () {
    $(".selection").hide();
    $("#articleSelection #roseSelection").slideToggle(1500);
});

$("#champagne").click(function () {
    $(".selection").hide();
    $("#articleSelection #champagneSelection").slideToggle(1500);
});

$("#spiritueux").click(function () {
    $(".selection").hide();
    $("#articleSelection #spiritueuxSelection").slideToggle(1500);
});

$("#biere").click(function () {
    $(".selection").hide();
    $("#articleSelection #biereSelection").slideToggle(1500);
});

$("#futs").click(function () {
    $(".selection").hide();
    $("#articleSelection #futsSelection").slideToggle(1500);
});

$("#epicerie").click(function () {
    $(".selection").hide();
    $("#articleSelection #epicerieSelection").slideToggle(1500);
});

$(document).ready(function () {
    // Masquer toutes les sections avec la classe selection
    $(".selection").hide();

    // Ajouter le code pour détecter l'ancre dans l'URL
    let hash = window.location.hash;
    if (hash) {
        // Afficher la section spécifiée dans l'ancre
        $(hash).slideToggle(1500);
    }
});