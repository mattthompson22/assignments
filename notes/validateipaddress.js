//compare string to regex expression
//use .test method to match against string

//check for not ending in a dot, number between 0-255, doesn't start with zero, exactly 4 sets of numbers separated by dot

const isValidIP = str => {
    let arr = str.split(".").map(Number);
    for(let i = 0; i < arr.length; i++){
        if (arr.length !== 4) {
            return false;
        } else if (arr[i] < 255 && arr[i] > -1){
            return true;
        } else {
            return false;
        }
    }
}