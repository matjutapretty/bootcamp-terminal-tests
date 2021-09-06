module.exports = function totalPhoneBill (strings){
    const stringsItem = strings.split(",");
    let totalCost = 0;
    for (var i = 0; i < stringsItem.length; i++){
      const item = stringsItem[i].trim();
      if (item == "call"){
        totalCost += 2.75;
      }
      else if 
        (item == "sms"){
          totalCost += 0.65;
        }
    }
    return "R" + totalCost.toFixed(2);
  }