module.exports = function countAllFromTown(regNo, town){
    var list = regNo.split(",");
    let counter = 0;
    var fromTown = [];
    for (var i = 0; i < list.length; i++){
      var newList = list[i].trim();
      if (newList.includes(town)){
        counter++;
      }
    }
    console.log(newList);
    return counter
  }