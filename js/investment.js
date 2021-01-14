let amount1, amount2, variation, interestRate, addedValue;
let total = 0;

class Gettotal {
  constructor(package, investment, time, total) {
    this.package = package;
    this.investment = investment;
    this.time = time;
    this.total = total;
  }
}

$(document).ready(function () {
  $("button.calculate").click (function (event) {
    let packageName = $(".name option:selected").val();
    let packageInvestment = $("#size option:selected").val();
    let packageTime = $("#time option:selected").val();
    let packageMember = $(".status option:selected").val();

    if (packageName === "Light Package") {
      variation = - 0.5;      
    }
    else if (packageName === "Bright Package") {
      variation = 0.5;
    }
    else if (packageName === "Calm Package") {
      variation = 0;
    }
    else {
      console.log("Package not selected");
    }

    if (packageInvestment === "0") {
      amount1 = 0;
      amount2 =0;
    }
    else if (packageInvestment === "investment1") {
      amount1 = 1,000,000;
      amount2 = 800,000;
    }
    else if (packageInvestment === "investment2") {
      amount1 = 799,999;
      amount2 = 600,000;
    }
    else if (packageInvestment === "investment3") {
      amount1 = 599,999;
      amount2 = 400,000;
    }
    else if (packageInvestment === "investment4") {
      amount1 = 399,999;
      amount2 = 200,000;
    }
    else if (packageInvestment === "investment5") {
      amount1 = 199,999;
      amount2 = 100,000;
    }
    else {
      console.log("No investment");
    }

    if (packageTime === "0") {
      interestRate = 0;
    }
    else if  (packageTime === "year1") {
      interestRate = 0.2;
    }
    else if (packageTime === "year2") {
      interestRate = 0.18;
    }
    else if (packageTime === "year3") {
      interestRate = 0.16;
    }
    else if (packageTime === "year4") {
      interestRate = 0.14;
    }
    else if (packageTime === "year5") {
      interestRate = 0.1;
    }
    else if (packageTime === "year6") {
      interestRate = 0.04;
    }
    else {
      console.log("Select your Investment duration");
    }

    if (packageMember === "Member") {
      addedValue = 0.015;
    }
    else if (packageMember === "Non-Member") {
      addedValue = 0;
    }
  });
});






$(document).ready(function () {
  $('button.clear').trigger("reset")
});