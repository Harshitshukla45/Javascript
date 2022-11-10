$("h1").click(function(){
  $("h1").css("color","red");
})

$("button").click(function(){
  $("h1").css("color","red");
})

$(document).keypress(function(event){
  $("h1").text(event.key);
})

$("h1").before("<button>new</button>");
$("h1").after("<button>new1</button>");
$("h1").append("<button>new</button>");
$("h1").prepend("<button>new1</button>");
