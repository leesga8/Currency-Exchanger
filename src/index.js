import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

// function exRate(response, currency){
//   console.log(response.conversion_rates[`${currency}`])
//   return response.conversion_rates[`${currency}`]
// }

// function calc(amount, exRate){
//   let total = amount*exRate
// }


function getElements(response) {
  let something = response.conversion_rates;
  console.log(something);
}

$(document).ready(function () {
  $('#convert').click(function () {
    let amount = $('#dollar').val();
    let currency = $('#currency').val();
    CurrencyService.getCurrency(amount, currency)
      .then(function (response) {
        getElements(response);
      });
  });
});