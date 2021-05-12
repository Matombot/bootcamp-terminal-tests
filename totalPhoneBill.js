module.exports = function totalPhoneBill(bills){
    var total = 0;
    var phoneBill = bills.split(",");
  for (var i=0;i<phoneBill.length;i++){
          var Bills = phoneBill[i].trim()
          if (Bills.includes("c")){
              //console.log(2.75)
             total += 2.75
          }
            else if (Bills.includes("s")) {
                // console.log(0.65)
            total += 0.65
          }  
        }
        return "R" + total.toFixed(2)
  }