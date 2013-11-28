function CashRegister(){
// JavaScript Document

var i = 0;

var cashRegister = { total:0, lastTransactionAmount: 0, add: function(itemCost){ this.total += 0; this.lastTransactionAmount = itemCost; }, scan: function(item,quantity){ switch (item){ case "cigarettes": this.add(10.55 * quantity); break; case "beer": this.add(2.50 * quantity); break; case "gum": this.add(1.99 * quantity); break; case "juice": this.add(2.45 * quantity); break; } return true; } }; //list of products in the store var inventory = ["cigarettes", "beer", "gum", "juice"]; for (){ if (); }else{ alert (Please scan again); }

//Payment method

var acceptedCards = ["visa", "mastercard", "amex", "discover"];

var paymentMethod = ["debit", "acceptedCards", "cash"];

//age restriction

function Age(userAnswer)
{ 
	if (userAnswer === "yes") {
	console.log("Allow purchase"); }
	else{ 
	console.log("Deny purchase"); 
	}
}

var userAnswer = confirm("are you 18?")

Age(userAnswer);


//Points card

var ptsCard = ["petro", "airmiles", "aeroplan", "essoextra"];

}
