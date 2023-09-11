function myFunction(){
    var x=document.getElementById("balance");
    if(x.innerHTML==="₦ 7,500,000"){
        x.innerHTML="********";
    }
    else{
        x.innerHTML="₦ 7,500,000";
    }
}
function show(){
    var x=document.getElementById("balance2");
    if(x.innerHTML==="₦ 6,900,000"){
        x.innerHTML="********";
    }
    else{
        x.innerHTML="₦ 6,900,000";
    }
}

// Function to remove the row when the "Remove" button is clicked
function removeRow(button) {
    var row = button.parentNode.parentNode; // Get the parent row
    row.parentNode.removeChild(row); // Remove the row
}