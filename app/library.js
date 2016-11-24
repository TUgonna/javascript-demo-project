module.exports={
	computeAverage: function(num1, num2, num3) {
		return (num1+num2+num3)/3;
	},
	computeFactorial: function(num) {
		var fact=1;
		for (var i=num; i>0; i--)
		{
		fact*=i;
		}
		return fact;
	},
	convertTempCtoF: function(numb) {
		return (9/5*numb)+32;
	},
	convertTempFtoC: function(numb) {
		return 5/9*(numb-32);
	}

}
