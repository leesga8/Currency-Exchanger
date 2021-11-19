import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { CurrencyService } from './currency-service.js';
import { convert } from './currency-service.js';

$(document).ready(function() {
  $('#buttonConvert').click(function(){
    let currency = $("#chosenCurrency").val();
    let dollar = $("#inputDollar").val();

    CurrencyService.getCurrency()
      .then(function(response) {
        if(response.result==="success") {
          let newCurrency = convert(dollar, response.conversion_rates[currency]);
          $("p#results").text(`${newCurrency} ${currency}`);
        } else {
          $("#errors").text(`Error: ${response.error}`);
        }
      });
  });
});