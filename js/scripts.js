$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    var basicNumber = $("#input1").val();
    var arrayedNumber = basicNumber.split("");
    arrayedNumber.reverse();
    // call outside functions
    var romanOne = onesPlace(parseInt(arrayedNumber[0]));
    var romanTen = tensPlace(parseInt(arrayedNumber[1]));
    var romanHundred = hundredsPlace(parseInt(arrayedNumber[2]));
    var romanThousand = thousandsPlace(parseInt(arrayedNumber[3]));
    var result = [romanThousand, romanHundred, romanTen, romanOne];
    console.log(result)
    var joined = result.join("");
    console.log(joined)
    // console.log(result)
  });
});

function onesPlace(i) {
  if (i === 1) {
  return "I"
} else if (i === 2) {
  return "II"
} else if (i === 3) {
  return "III"
} else if (i === 4) {
  return "IV"
} else if (i === 5) {
  return "V"
} else if (i === 6) {
  return "VI"
} else if (i === 7) {
  return "VII"
} else if (i === 8) {
  return "VIII"
} else if (i === 9) {
  return "IX"
} else {
  }
};

function tensPlace(i) {
  if (i === 1) {
  return "X"
} else if (i === 2) {
  return "XX"
} else if (i === 3) {
  return "XXX"
} else if (i === 4) {
  return "XL"
} else if (i === 5) {
  return "L"
} else if (i === 6) {
  return "LX"
} else if (i === 7) {
  return "LXX"
} else if (i === 8) {
  return "LXXX"
} else if (i === 9) {
  return "XC"
} else {
  }
};

function hundredsPlace(i) {
  if (i === 1) {
  return "C"
} else if (i === 2) {
  return "CC"
} else if (i === 3) {
  return "CCC"
} else if (i === 4) {
  return "CD"
} else if (i === 5) {
  return "D"
} else if (i === 6) {
  return "DC"
} else if (i === 7) {
  return "DCC"
} else if (i === 8) {
  return "DCCC"
} else if (i === 9) {
  return "CM"
} else {
  }
};

function thousandsPlace(i) {
  if (i === 1) {
  return "M"
} else if (i === 2) {
  return "MM"
} else if (i === 3) {
  return "MMM"
} else {
  }
};
