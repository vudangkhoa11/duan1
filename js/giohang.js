import {
    Input,
    Timepicker,
    initTE,
  } from "tw-elements";
  
  initTE({ Input, Timepicker });
  
  const timepickerValue = document.querySelector("#timepicker-value");
  const tminputValue = new Timepicker(timepickerValue);
  
  timepickerValue.addEventListener("input.te.timepicker", (input) => {
    const valueDiv = document.querySelector("#span-input-value");
  
    valueDiv.innerText = input.target.value;
  });