var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function diff(el, arr){
    let datas = {
        isFound : false,
        data : []
    }
   for(const data of arr){


    if(data.includes(el[1]))
        datas = {...datas, isFound : true, data : data}
   }
   return datas
}

function updateInventory(arr1, arr2) {
    const output = [];

   for(let el of arr1){
    const  dat = diff(el, arr2)
    console.log(dat)
   if(!dat.isFound){
    output.push(el)
   }else{
    const customData = dat.data[0]
    el[0] = el[0] + customData

    output.push(el)
    console.log(el[0])

   }

   

    }
    for(let el of arr2){
        if(!diff(el, arr1).isFound){
         output.push(el)
        }
         }

    // console.log(diff("Bowling Ball", arr2))
    output.sort((a, b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });

console.log(output)

return output;
}

// Example inventory lists

// diff("Bowling Ball" , newInv)


updateInventory(curInv, newInv);