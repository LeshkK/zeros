module.exports = function zeros(expression) {

	var arrExp = expression.split('*');
	var iArrExp = 0;
	var zeros = 0;
	var counterEven = 0;
	var OddTens = 0;
	var allZeros2 = 0;

  function CountZerosOneFact(oneFactorial) {
	  let arr = oneFactorial.split('!');
	  var allZeros =0;
	  let aZeros = 0,
	  	  numFives = 5;
	  do {
	   	aZeros = arr[0] / numFives;
	   	allZeros += Math.floor(aZeros);
	   	numFives *= 5;
	  } while (arr[0] >= numFives)

	  return allZeros;
  }
  
  function CountZerosTwoFact(twoFactorial) {
	  let arrTwoFact = twoFactorial.split('!!');
	  let aZeros2 = 0,
	  	  bZeros2 = 0,
		  abSum = 0;
	  if (arrTwoFact[0] % 2 == 0) {
		aZeros2 = arrTwoFact[0] / 10;
		bZeros2 = aZeros2 / 5;
		abSum = aZeros2 + bZeros2;
    	allZeros2 += Math.floor(abSum);
		counterEven++;
		if (OddTens !== 0) {
			allZeros2 += OddTens;
			OddTens = 0;
		}
	  }

	  if (arrTwoFact[0] % 2 !== 0 && counterEven == 0) {
		let multiplier1 = 1;
		while (5*multiplier1 < arrTwoFact[0]) {
			OddTens++;
			multiplier1 += 2;
		}
	  }

	  if (arrTwoFact[0] % 2 !== 0 && counterEven !== 0) {
		let multiplier2 = 1;
		while (5*multiplier2 < arrTwoFact[0]) {
			allZeros2++;
			multiplier2 += 2;
			if (multiplier2 % 5 == 0) {
				allZeros2++;
			}
		}
		if (OddTens !== 0) {
			allZeros2 += OddTens;
			OddTens = 0;
		}

	  }

	  return allZeros2;
  }

 while (iArrExp < arrExp.length) {
 	var resultIndexOf = arrExp[iArrExp].indexOf('!!');
 	if (resultIndexOf == -1) {
     countZeros = CountZerosOneFact(arrExp[iArrExp]);
 	} else {
     countZeros = CountZerosTwoFact(arrExp[iArrExp]);
 	}
	 zeros += countZeros;
 	iArrExp++;
 }

 return zeros;

  // your solution
}
