"use strict"

function getRec(e) {
  $.ajax({
    url: "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
    success: function(r) {
      r.drinks.forEach(function(e) {
        console.log(e.strIngredinets1)
        $("#drinks").append("<li>" + e.idDrink + "-" + e.strIngredient1 + "</li>");
      });
    },
    error: function(r) {
      console.log(error.jpg); //server response
    }
  })
}



$(document).ready(function() {
  $("button").on("click", function(r) {
    // console.log("hi");

    var dataRequest = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka";

    $.ajax({
      url: dataRequest,
      success: function(response) {
        console.log(response);
        //getRec(response.drinks[0].idDrink)
        response.drinks.forEach(function(e) {
          getRec(e.idDrink)
        })
      },
      error: function(r) {
        console.log(error.jpg); //server response
      }
    });
  });
});


// $(document).ready(function() {
//   $("#getInfo").on("click", function(e) {
//     // console.log("hi");
//
//
//
//     var dataRequest = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka";
//
//     $.ajax({
//       url: dataRequest,
//       success: function(response) {
//         drinks_array = response['drinks']
//         // console.log(d`);
//         for (i = 0; i < drinks_array.length; i++) {
//           console.log(response['drinks'][i]);
//           $("#drinks").append("<li>" + drinks_array[i]['idDrink'] + '-' + drinks_array[i]['strDrink'] + "</li>");
//
//           // a = {strDrink: "Screwdriver", strDrinkThumb: "www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
//           //  idDrink: "12162"}
//           //  console;a['strDrink']
//
//         }
//
//       },
//       error: function(r) {
//         console.log(r); //server response
//       }
//     });
//
//   });
// });