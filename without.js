const without = function(source,itemsToRemove){
    for (let i = 0; i < itemsToRemove.length;i++){
        for (let j in source){
            if ( source[j] === itemsToRemove[i]) { 
                source.splice(j, 1); 
                i--; 
            }
        }
    }
    console.log(source);
    return source;
}

