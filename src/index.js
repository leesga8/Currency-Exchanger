import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

function clearFields() {
  $('#dollar').val("");
}

function getElements(response) {
  if (response.body) {
    $('.showExchange').text(`The temperature in Kelvins is ${response.conversion_rates} degrees.`);
  } else {
    $('.showErrors').text(`There was an error: ${response.result}`);
  }
}

$(document).ready(function() {
  $('#convert').click(function() {
    let city = $('#dollar').val();
    clearFields();
    CurrencyService.getCurrency(city)
      .then(function(response) {
        getElements(response);
      });
  });
});