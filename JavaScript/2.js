var max = 0;
for(var i=0; i<lan; i++){
    if(max < array[i]){
        max = array[i];
    }
}

console.log("최댓값은 ===>" +max)