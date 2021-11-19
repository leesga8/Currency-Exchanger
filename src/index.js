import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';
import convert from './currency-service';

$(document).ready(function () {
  $('#convert').click(function () {
    let dollAmount = $('#dollarAmount').val();
    let chosCurrency = $('#chosenCurrency').val();

    CurrencyService.getCurrency()
      .then(function (response) {
        if(response.conversion_rates[chosCurrency]) {
          let newAmount = convert(dollAmount, response.conversion_rates[chosCurrency]);
          $("#showOutput").text(`${newAmount} ${chosCurrency}`);
        } 
      });
  });
});