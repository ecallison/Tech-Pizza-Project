	// FUNCTION getReceipt  
	function getReceipt() {
		var totalCost = 0;

		// SIZE TOTAL
		var sizeCost = 0;
		var customerSize = $('input[type=radio][name=size]:checked').val();
			if(customerSize == "Personal Pizza") {
				totalCost = totalCost + 6;
				sizeCost = 6;
			} else if(customerSize == "Medium Pizza") {
				totalCost = totalCost + 10;
				sizeCost = 10;
			} else if(customerSize == "Large Pizza") {
				totalCost = totalCost + 14;
				sizeCost = 14;
			} else if(customerSize == "Extra Large Pizza") {
				totalCost = totalCost + 16;
				sizeCost = 16;
			}
			
		// CHEESE TOTAL 
		var cheeseCost = 0;
		var customerCheese = $('input[type=radio][name=cheese]:checked').val();
			if(customerCheese == "Regular") {
				totalCost = totalCost + 0;
				cheeseCost = 0;
			} else if(customerCheese == "Extra") {
				totalCost = totalCost + 3;
				cheeseCost = 3;
			} else if(customerCheese == "None") {
				totalCost = totalCost + 0;
				cheeseCost = 0;
			}

		// SAUCE TOTAL 
		var sauceCost = 0;
		var customerSauce = $('input[type=radio][name=sauce]:checked').val();
			if(customerSauce == "Marinara") {
				totalCost = totalCost + 0;
				sauceCost = 0;
			} else if(customerSauce == "White") {
				totalCost = totalCost + 0;
				sauceCost = 0;
			} else if(customerSauce == "BBQ") {
				totalCost = totalCost + 0;
				sauceCost = 0;
			} else if(customerSauce == "No Sauce") {
				totalCost = totalCost + 0;
				sauceCost = 0;
			}
			
		// CRUST TOTAL
		var crustCost = 0;
		var customerCrust = $('input[type=radio][name=crust]:checked').val();
			if(customerCrust == "Plain") {
				totalCost = totalCost + 0;
				crustCost = 0;
			} else if(customerCrust == "Garlic Butter") {
				totalCost = totalCost + 0;
				crustCost = 0;
			} else if(customerCrust == "Cheese Stuffed") {
				totalCost = totalCost + 3;
				crustCost = 3;
			} else if(customerCrust == "Spicy") {
				totalCost = totalCost + 0;
				crustCost = 0;
			} else if(customerCrust == "House Special") {
				totalCost = totalCost + 0;
				crustCost = 0;
			}
			
		// VEGGIE TOTAL
		var veggieCost = 0;
		var customerVeggie = [];
		var veggieArray = document.getElementsByClassName("veggie");
		for (var i = 0; i < veggieArray.length; i++) {
			if (veggieArray[i].checked) {
				customerVeggie.push(veggieArray[i].value);
				// 1 dollar per veggie. first is free
				if(i > 1) {
					totalCost = totalCost + 1;
					veggieCost = veggieCost + 1;
				} else if(i = 1) {
					totalCost = totalCost + 0;
					veggieCost = veggieCost + 0;
				}
			}
		}	
			
		// MEAT TOTAL
		var meatCost = 0;
		var customerMeat = [];
		var meatArray = document.getElementsByClassName("meat");
		for (var j = 0; j < meatArray.length; j++) {
			if (meatArray[j].checked) {
				customerMeat.push(meatArray[j].value);
				// 1 dollar per meat. first is free
				if(j > 1) {
					totalCost = totalCost + 1;
					meatCost = meatCost + 1;
				} else if(j = 1) {
					totalCost = totalCost + 0;
					meatCost = meatCost + 0;
				}
			}	
		}	
			
		// APPEND SIZE TO ITEMIZED RECEIPT
		$('#receipt .card').append('<p><strong>Size</strong>: '+customerSize+' = $'+sizeCost+'</p>');

		// APPEND CHEESE TO ITEMIZED RECEIPT
		$('#receipt .card').append('<p><strong>Cheese</strong>: '+customerCheese+' = $'+cheeseCost+'</p>');
		
		// APPEND SAUCE TO ITEMIZED RECEIPT
		$('#receipt .card').append('<p><strong>Sauce</strong>: '+customerSauce+' = $'+sauceCost+'</p>');

		// APPEND CRUST TO ITEMIZED RECEIPT
		$('#receipt .card').append('<p><strong>Crust</strong>: '+customerCrust+' = $'+crustCost+'</p>');
		
		// APPEND VEGGIE TO ITEMIZED RECEIPT
		$('#receipt .card').append('<p><strong>Veggie</strong>: '+customerVeggie+' = $'+veggieCost+'</p>');

		// APPEND MEAT TO ITEMIZED RECEIPT
		$('#receipt .card').append('<p><strong>Meat</strong>: '+customerMeat+' = $'+meatCost+'</p>');

		// APPEND TOTAL COST TO ITEMIZED RECEIPT
		//var totalCost = (sizeCost + cheeseCost + sauceCost + crustCost + veggieCost + meatCost);
		$('#receipt .card').append ('<p><strong>Total</strong>: $'+totalCost+'</p>');
	};



jQuery(document).ready(function($) {
	
	// TOGGLE RECEIPT UPON BUTTON CLICK
	$('#btnPlaceOrder').click(function() {
		$('#receipt').toggleClass('hide');
	});
	
	$('#btnPlaceOrder').on('click', function() {
		$(this).prop('disabled', true);
		});

});
