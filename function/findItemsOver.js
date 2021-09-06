module.exports = function findItemsOver(itemList, listItem){
    const list1 = [];
      for (var i in itemList){
        if (itemList[i].qty > listItem)
          list1.push(itemList[i])
      }
      return list1;
    }