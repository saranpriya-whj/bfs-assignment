
  var queue = [];
  var visited = [""];
  var x;
  var r = 9;
  var c = 3;
  var pathArray = {
    "row":[
  [0,0,1,0,1,0,1,0],

  [0,0,0,1,0,0,0,1],

  [1,0,1,0,0,0,1,0],

  [0,1,0,1,0,1,0,1],

  [1,0,1,0,1,0,0,0],

  [0,1,0,1,0,1,0,0],

  [1,0,1,0,1,0,0,0],

  [0,1,0,1,0,0,0,1],

  [1,0,1,0,1,0,1,0],

  [0,1,0,1,0,1,0,1],
    ]
    
}

pathFinder();


function pathFinder(){
  //root node


//to extract the cell
  for( i in pathArray.row){
    for (j in pathArray.row[i])
    {
       i = r;
        j = c;
     
       x =pathArray.row[r][c];
      console.log(x)
   
   

     
     
      //console.log(x)
      //console.log(queue)
     // console.log(pathArray.row[9][j])
      //console.log(r);
      //console.log(c);
    }
  }
  //filter if path exists
  if(x===1){
    var qnode =  queue.push(x)
     console.log(qnode)
     var vnode = visited.push(x);
   // console.log(vnode)
     
     }

 
  return (visited.length);
  
    }
  
