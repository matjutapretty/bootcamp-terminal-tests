module.exports = function findItemsOver20(itemList){
  
    const list = [];
    for (var i = 0; i < itemList.length; i++){
      if (itemList[i].qty > 20)
      list.push(itemList[i])
    }
    return list;
  }