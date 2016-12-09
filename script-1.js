// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Tournament', 'Wins per Tournament'],
//     ['Grand Slam',    22],
//     ['Olympics',      1],
//     ['WTA Champions',  5],
//     ['WTA Tour', 19],
//   ]);

//   var options = {
//     title: 'Serena Wins'
//   };

//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//   chart.draw(data, options);
// }



$(document).ready(function(){
  $('.parallax').parallax();

  $('h1').css(
    {
      paddingTop: ($('header').height() * .80) + 'px',
    }
  );
});

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$('.modal').modal({
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  in_duration: 300, // Transition in duration
  out_duration: 200, // Transition out duration
  starting_top: '4%', // Starting top style attribute
  ending_top: '10%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    alert("Ready");
    console.log(modal, trigger);
  },
  complete: function() { alert('Closed'); } // Callback for Modal close
}
                 );





