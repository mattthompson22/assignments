
// try{
//     console.log(thishasnoreference);
// } catch (err) {
//     //do something with the error
//     console.log(err);
// }

// console.log("im code after the try block");

//write function that randomly determines whether the request was successful 

function sendResponse(){
    var success = Math.random();
    if(success < .5){
        return {
            data: {
                username: "betdev29",
                email: "btdev429@dev.com"
            }
        }
    } else {
        throw "Server is down";
    }
}

//write function that handles the response from the request
function login () {
    try{
        var data = sendResponse();
        console.log(data);
    } catch(err){
        console.log(err);
    } finally {
        //run this code no matter what, regardless of error
        
    }
}
login();