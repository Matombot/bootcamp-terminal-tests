module.exports = function countAllFromTown(lists){
    var allCounter =0;
   //console.log(lists)
  var itemString = lists.split(",");
  for (var i=0;i<itemString.length;i++){
  const currentitem = itemString[i];
   if(currentitem.startsWith("CL")){
    allCounter++;
    // console.log(allCounter)
    }
  }
   return allCounter;
  }