module.exports = function countAllPaarl(regNo){
    var list = regNo.split(",");
    let counter = 0;
    var town = [];
    for (var i = 0; i < list.length; i++){
      var newList = list[i].trim();
      if (newList.startsWith("CJ")){
        counter++;
      }
    }
    return counter;
  }