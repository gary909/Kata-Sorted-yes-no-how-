function isSortedAndHow(array) {
    let myArrAsc = array.slice(); // create copy of Arr that doesn't mutate orig
    myArrAsc.sort((a,b)=>a-b); // sort into ascending order
    let myArrDesc = array.slice(); // create copy of Arr that doesn't mutate orig
    myArrDesc.sort((a,b)=>b-a); // sort into descending order
    // change to string then compare for match
    if (JSON.stringify(array) == JSON.stringify(myArrAsc)){
        return 'yes, ascending';
    } else if (JSON.stringify(array) == JSON.stringify(myArrDesc)){
        return 'yes, descending';
    } else {
        return 'no';
    }

}


console.log(isSortedAndHow([1, 2])); // 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])); // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); // 'no'