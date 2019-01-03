var config = {
        apiKey: "AIzaSyBxrHE4Aq_m_vFhuACWqfYD0M4nmZpWzlE",
        authDomain: "train-scheduler-61e92.firebaseapp.com",
        databaseURL: "https://train-scheduler-61e92.firebaseio.com",
        projectId: "train-scheduler-61e92",
        storageBucket: "train-scheduler-61e92.appspot.com",
        messagingSenderId: "313639717005",
  };

firebase.initializeApp(config);

var database = firebase.database();


$("#btn-add").on("click", function(event) {
event.preventDefault();

// Grabs user input
var trainName = $("#train-name").val().trim();
var trainRole = $("#train-destination").val().trim();
var trainStart = moment($("#train-time").val().trim(), "00:00").format("X");
var trainRate = moment($("#time-freq").val().trim(),"00");



//var nextArrival = "";
//var minutesAway = "";

var newTrain = {
    name: trainName,
    role: trainRole,
    start: trainStart,
    rate: trainRate
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.role);
  console.log(newTrain.start);
  console.log(newTrain.rate);

  alert("Train successfully added!");


  $("#train-name").val("");
  $("#train-destination").val("");
  $("#train-time").val("");
  $("#time-freq").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainRole = childSnapshot.val().role;
    var trainStart = childSnapshot.val().start;
    var trainRate = childSnapshot.val().rate;

    // compute the difference in time from 'now' and the first train using UNIX timestamp, store in var and convert to minutes
    console.log(trainName);
    console.log(trainRole);
    console.log(trainStart);
    console.log(trainRate);
  
    // Prettify the employee start
    var trainStart = moment.unix(trainStart).format("00:00");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    //var empMonths = moment().diff(moment(empStart, "X"), "months");
    console.log(empMonths);
  
    // Calculate the total billed rate
    //var empBilled = empMonths * empRate;
    console.log(empBilled);
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainRole),
      $("<td>").text(trainStart),
      //$("<td>").text(empMonths),
      $("<td>").text(trainRate),
      //$("<td>").text(empBilled)
    );
  
    // Append the new row to the table
    $("#employee-table > tbody").append(newRow);
  });