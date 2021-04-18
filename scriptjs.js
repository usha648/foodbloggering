function changeFunc() {
    var selected = document.getElementById("burger");
    var selectedValue = selected.options[selected.selectedIndex].value;
	var textt="Cost of selected Burger : ";
	var taxtext="<p>Tax (18%) : ";
	var tax=selectedValue*18/100;
	var total=parseFloat(selectedValue)+parseFloat(tax);
	var totaltext="<p>Total : ";
	var totaltext=totaltext.concat(total);
    document.getElementById("cost").innerHTML = textt.concat(selectedValue,taxtext,tax,totaltext,"<p><button>Proceed for Payment</button></p>");
	
	
   }
