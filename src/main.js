// import { Tamagotchi } from '../src/tamagotchi'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#nameInput").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    console.log(name)
    $(".main").hide();
    $(".game").show();
    $("#background").hide();

  });
  $("#back").click(function(){
    $(".main").show();
    $(".game").hide();
    $("#background").show();
  });

});
