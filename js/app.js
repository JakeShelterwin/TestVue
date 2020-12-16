

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue2!'
    }
  });

  var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'ciaociao',
    colore: "verde"
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

$( "button" ).on( "click", function() {
        var valoreInserito = $("input").val();
        app4.todos.push({ text: valoreInserito })
        var valoreInserito = $("input").val("");
      });
$( "ol" ).on( "click", "li span", function() {

        $(this).parent().remove();
      });

// function cambioColoreaRisoluzione(){
//   if (screen.width < 768) {
//     return "rosso"
//   } else {
//     return "verde"
//   }
// }

// $( document ).ready(function() {
//
// });
