// Devin "Lauren" Elder
// SDI Term 1211
// Project 4 Code Library
// "Date"

// My Library

var myLibrary = function() {

// String Functions
// String Phone Number Function

	var phnNum = function(num) {
		var areaEnd = num.indexOf("-");
		var numStart = num.indexOf("-") + 1;
		var preNumEnd = num.lastIndexOf("-");
		var sufNumStart = num.lastIndexOf("-") + 1;
		var numEnd = num.length;
		var areaCode = num.substring(0, areaEnd);
		var prefixNum = num.substring(numStart, preNumEnd);
		var suffixNum = num.substring(sufNumStart, numEnd);
		console.log("The phone number is valid.");
		if (areaCode.length === 3 && prefixNum.length === 3 && suffixNum.length === 4) {
			return true
		} else { 
			return false
		};
	};

// String Email Function

	var emlAdrs = function(addrs){
		var symLoc = addrs.indexOf("@");
		var sym = addrs.charAt(symLoc)
		var suffixStart = addrs.lastIndexOf(".") + 1;
		var addrsEnd = addrs.length;
		var suffixNum = addrs.substring(suffixStart, addrsEnd);
		console.log("The email address is valid.");
		if (sym === "@" && suffixNum.length === 3) {
			return true
		} else {
			return false
		};
	};

// String Url Function

	var myUrl = function(url){
		var prefixOne = "http:"
		var prefixTwo = "https:"
		var sym = url.indexOf(":") + 1
		var prefix = url.substring(0, sym)
		console.log("The URL address is valid.");
		if (prefix === prefixOne || prefix === prefixTwo) {
			return true
		} else {
			return false
		};
	};

// String Titlecase Function

/*	var titleCaseString = function(phrase) {
		var words = phrase.split(" ");
		var titleCse = function(indvdWords, flag) {
			var titleCse = indvdWords
			for (i = 0; i < indvdWords.length; i++) {
				var lowerLttr = titleCse[i].charAt(0);
				var capLttr = 	lowerLttr.toUpperCase();
				var lowerCase = lowerLttr.toString()
				var upperCase = capLttr.toString()
				var flags = flag
				return	lowerCase,
						upperCase,
						flags
			};
			var newWord = titleCse.replace(lowerCase, upperCase, flags);
			return newWord
		};
		titleCse(words);
		console.log(words);
	};
*/
// String Separator Function

	var separatorMod = function(mod, old, newChar, flag) {
	console.log("The separator has been changed from " + old + " to " + newChar + ".");
		var originStr = mod
		var oldSep = old
		var newSep = newChar
		var flags = flag
		var newString = originStr.replace(oldSep, newSep, flags);
		return newString
	
	};

// Number Functions
// Number Decimal Config Function

	var dcmlFrmt = function(amount) {
		console.log("The number " + amount + " has been formatted to include two decimal" 
		+ " places.");
		var num = amount
		var revisedNum = num.toFixed(2);
		return revisedNum
	};

// Number Fuzzy Match Function

	var fzyMtchNum = function(numOne, numTwo, fuzzy) {
		console.log("The number " + numTwo + " is within " + fuzzy + " percent of the " +
		 "number " + numOne + ".")
		var fuzzyPercent = fuzzy / 100
		var fuzzyOne = numOne - (numOne * fuzzyPercent);
		var fuzzyTwo = numOne * (fuzzyPercent + 1);
		if (numTwo >= fuzzyOne && numTwo <= fuzzyTwo) {
			return true
		} else {
			return false
		};
	};

// Number Difference Function

	var differenceDate = function(dateOne, dateTwo) {
		console.log("The time between the date " + dateOne + " and date " + dateTwo + 
		" is ...");
		var dateObjOne = Date.parse(dateOne);
		var dateObjTwo = Date.parse(dateTwo);
		var parsedDiff = dateObjTwo - dateObjOne
		var rghWeeks=	 parsedDiff / 604800000
		var weeks	=	 rghWeeks.toFixed(1);
		var rghDays	= 	 parsedDiff / 86400000
		var days	=	 rghDays.toFixed(1);
		var rghHours= 	 parsedDiff / 3600000
		var hours	=	 rghHours.toFixed(1);
		var rghminutes = parsedDiff / 60000
		var minutes	=	 rghminutes.toFixed(1);
		var rghSeconds = parsedDiff / 1000
		var seconds	=	 rghSeconds.toFixed(1);
		console.log("In weeks: " + weeks + ", In Days: " + 
			days + ", In Hours: " + hours + 
			", In Minutes: " + minutes + ", In Seconds: " + 
			seconds);
		return	weeks,
				days,
				hours,
				minutes,
				seconds
	};

// Number Actual Num Return Function

	var numRtrn = function(){
	
	};

// Array Functions
// Array Smallest Value Function

	var smallestValue = function(){
	
	};

// Array Total Value Function

	var totalValue = function(){
	
	};

// Array Key Value Return Function

	var keyValueRtrn = function(){
	
	};
	
	return {
		"phnNum":			phnNum,
		"emlAdrs":			emlAdrs,
		"myUrl":			myUrl,
		//"titleCaseString":	titleCaseString,
		"separatorMod": 	separatorMod,
		"dcmlFrmt":			dcmlFrmt,
		"fzyMtchNum":		fzyMtchNum,
		"differenceDate":	differenceDate
	};

};

var newLibrary = new myLibrary()


