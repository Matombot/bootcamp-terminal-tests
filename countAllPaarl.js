module.exports = function countAllPaarl(lists){
    var allCounter =0;
  var itemString = lists.split(",");
  for (var i=0;i<itemString.length;i++){
  const currentitem = itemString[i];
   if(currentitem.includes("CJ")){
    allCounter++;
    }
  }
    return allCounter;
  }