//function accepts string
//split string in half
//reverse string
//compare the two halves
//works regardless of spaces, capitalization, and symbols
//if palindrome, return true
//if not palindrome, return false
var chai = require("chai");
var assert = chai.assert;
var isPalindrome = require("./palidromemainmain.js");

describe("a palindrome finder", function() {
    it("should identify a palindrome", function() {
        assert.isTrue(isPalindrome("abba"));
        assert.isTrue(isPalindrome("aba"));
        assert.isTrue(isPalindrome("a"));
        assert.isFalse(isPalindrome("abc"));
        assert.isTrue(isPalindrome("star!rats.."));
        assert.isTrue(isPalindrome("star rats"));
        assert.isTrue(isPalindrome("StarRats"));
        assert.isTrue(isPalindrome("Star, RatS!"));
    });

    it("should identify a palidrome even with spaces"), function(){
        assert.isTrue(isPalindrome("star rats"));
        assert.isTrue(isPalindrome("starr ats"));
        assert.isFalse(isPalindrome("I have a space"));

    }
    it("should identify a palidrome even with capitals"), function(){
        assert.isTrue(isPalindrome(""));
    }
    it("should identify a palidrome even with symbols"), function(){
        
    }
    it("should identify a palidrome even with symbols, capitals and spaces"), function(){
        
    }
});
// var string = "";

// var isPalindrome = function(string) {
//     string.split()
// }

// console.log(isPalindrome("balls"));