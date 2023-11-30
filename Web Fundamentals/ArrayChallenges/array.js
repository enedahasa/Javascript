// 1. Always hungry!

function alwaysHungry(arr) {
    // your code here 
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function alwaysHungry(arr) {
    var foundFood = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            foundFood = true;
        }
    }

    if (!foundFood) {
        console.log("I'm hungry");
    }
}

// Example usage:
alwaysHungry([3.14, "food", "pie", true, "food"]);
// This should console log "yummy", "yummy"

alwaysHungry([4, 1, 5, 7, 2]);
// This should console log "I'm hungry"
In the first example, since the array contains two occurrences of "food," it prints "yummy" twice. In the second example, as there is no "food" in the array, it prints "I'm hungry."





