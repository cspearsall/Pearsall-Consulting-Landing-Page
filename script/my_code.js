causeRepaintsOn = $("h1, h2, h3, p, img");
causeRepaintsOnn = $("img");
causeRepaintsOnnn = $("#Cad1, #Cad2, #Cad3, #Cad4, #Cad5, #Cad6, #Cad7, #Cad8, #Cad9");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 2);
  causeRepaintsOnn.css("z-index", 1);
  causeRepaintsOnnn.css("z-index", 5);
});