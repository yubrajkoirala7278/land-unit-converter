function calculate() {
  // Fetching input values
  var ropani = parseFloat(document.getElementById("ropani").value) || 0;
  var aana = parseFloat(document.getElementById("aana").value) || 0;
  var paisa = parseFloat(document.getElementById("paisa").value) || 0;
  var daam = parseFloat(document.getElementById("daam").value) || 0;

  // Convert to square feet
  var totalSquareFeet =
    ropani * 5476 + aana * 342.25 + paisa * 85.56 + daam * 21.39;

  // Convert to Bigha, Kattha, Dhur
  var bigha = Math.floor(totalSquareFeet / 72900);
  var remainingSquareFeet = totalSquareFeet % 72900;
  var kattha = Math.floor(remainingSquareFeet / 3645);
  var remainingSquareFeet2 = remainingSquareFeet % 3645;
  var dhur = remainingSquareFeet2 / 182.25;

  // Update Bigha, Kattha, Dhur fields
  document.getElementById("bigha").value = bigha.toFixed(3);
  document.getElementById("kattha").value = kattha.toFixed(3);
  document.getElementById("dhur").value = dhur.toFixed(3);

  // Update square feet and square meter fields
  document.getElementById("sqfeet").value = totalSquareFeet.toFixed(3);
  document.getElementById("sqmeter").value = (totalSquareFeet / 10.764).toFixed(
    3
  );
}

function calculateReverse() {
  // Fetching input values
  var bigha = parseFloat(document.getElementById("bigha").value) || 0;
  var kattha = parseFloat(document.getElementById("kattha").value) || 0;
  var dhur = parseFloat(document.getElementById("dhur").value) || 0;

  // Convert to square feet
  var totalSquareFeet = bigha * 72900 + kattha * 3645 + dhur * 182.25;

  // Convert to Ropani, Aana, Paisa, Daam
  var ropani = Math.floor(totalSquareFeet / 5476);
  var remainingSquareFeet = totalSquareFeet % 5476;
  var aana = Math.floor(remainingSquareFeet / 342.25);
  var remainingSquareFeet2 = remainingSquareFeet % 342.25;
  var paisa = Math.floor(remainingSquareFeet2 / 85.56);
  var remainingSquareFeet3 = remainingSquareFeet2 % 85.56;
  var daam = remainingSquareFeet3 / 21.39;

  // Update Ropani, Aana, Paisa, Daam fields
  document.getElementById("ropani").value = ropani.toFixed(3);
  document.getElementById("aana").value = aana.toFixed(3);
  document.getElementById("paisa").value = paisa.toFixed(3);
  document.getElementById("daam").value = daam.toFixed(3);

  // Update square feet and square meter fields
  document.getElementById("sqfeet").value = totalSquareFeet.toFixed(3);
  document.getElementById("sqmeter").value = (totalSquareFeet / 10.764).toFixed(3);
}
function calculateArea() {
    // Fetch input values
    var sqfeet = parseFloat(document.getElementById("sqfeet").value);
    var sqmeter = parseFloat(document.getElementById("sqmeter").value);
  
    // Convert based on changed field
    if (!isNaN(sqmeter) && sqmeter !== 0) {
      sqfeet = sqmeter * 10.764;
      document.getElementById("sqfeet").value = sqfeet.toFixed(3);
    } else {
      sqmeter = sqfeet / 10.764;
      document.getElementById("sqmeter").value = sqmeter.toFixed(3);
    }
  
    // Convert square meter to traditional units
    var ropani = Math.floor(sqmeter / 50.29);
    var remainingSquareMeterRopani = sqmeter % 50.29;
    var aana = Math.floor(remainingSquareMeterRopani / 3.15);
    var remainingSquareMeterAana = remainingSquareMeterRopani % 3.15;
    var paisa = Math.floor(remainingSquareMeterAana / 0.79);
    var remainingSquareMeterPaisa = remainingSquareMeterAana % 0.79;
    var daam = remainingSquareMeterPaisa / 0.2;
  
    // Convert square meter to square feet
    var totalSquareFeet = sqmeter * 10.764;
  
    // Convert square feet to traditional units
    var bigha = Math.floor(totalSquareFeet / 72900);
    var remainingSquareFeet = totalSquareFeet % 72900;
    var kattha = Math.floor(remainingSquareFeet / 3645);
    var remainingSquareFeet2 = remainingSquareFeet % 3645;
    var dhur = remainingSquareFeet2 / 182.25;
  
    // Update input fields with calculated values
    document.getElementById("bigha").value = bigha.toFixed(3);
    document.getElementById("kattha").value = kattha.toFixed(3);
    document.getElementById("dhur").value = dhur.toFixed(3);
    document.getElementById("ropani").value = ropani.toFixed(3);
    document.getElementById("aana").value = aana.toFixed(3);
    document.getElementById("paisa").value = paisa.toFixed(3);
    document.getElementById("daam").value = daam.toFixed(3);
    document.getElementById("sqfeet").value = totalSquareFeet.toFixed(3);
  }
  
