/*
* Encode and Decode String
* Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.*
* Please implement encode and decode
* Example 1:
* Input: ["neet","code","love","you"]
* Output:["neet","code","love","you"]
* Example 2:
* Input: ["we","say",":","yes"]
* Output: ["we","say",":","yes"]
* */

class EncodeDecode {
    constructor(arr) {
        this.stringArray = arr;
        this.encoded = [];
        this.decoded = [];
    }
    encode() {
        this.encoded = this.stringArray.map((str) => {
            return Buffer.from(str, 'utf-8').toString('base64');    
        });
        return this.encoded;
    }
    decode() {
       this.decoded = this.encoded.map((str) => {
        return Buffer.from(str, 'base64').toString('utf-8');
       })
       return this.decoded;
    }
}

const encodeDecodeStr = new EncodeDecode(["racecar", "carrace"]);
console.log(encodeDecodeStr.encode());
console.log(encodeDecodeStr.decode());