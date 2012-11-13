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

	var titleCaseString = function(){
	
	};

// String Separator Function

	var separatorMod = function(){
	
	};

// Number Functions
// Number Decimal Config Function

	var dcmlFrmt = function(){
		
	
	};

// Number Fuzzy Match Function

	var fzyMtchNum = function(){
	
	};

// Number Difference Function

	var differenceDate = function(){
	
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
		"phnNum":	phnNum,
		"emlAdrs":	emlAdrs,
		"myUrl":	myUrl
	};

};

var newLibrary = new myLibrary()


