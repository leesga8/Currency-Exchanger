import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

function clearFields() {
  $('#dollar').val("");
}

function getElements(response) {
  if (response) {
 $('.showExchange').text(`Your conversion is: ${response.conversion_rates}.`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#convert').click(function() {
    let amount = $('#dollar').val();
    let currency = $('#currency').val();
    console.log(amount)
    console.log(currency)
    clearFields();
    CurrencyService.getCurrency()
      .then(function(response) {
        getElements(response);
      });
  });
});