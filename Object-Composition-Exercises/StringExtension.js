(function () {
    String.prototype.ensureEnd = ensureEnd;
    String.prototype.ensureStart = ensureStart;
    String.prototype.isEmpty = isEmpty;
    String.prototype.truncate = truncate;
    String.format = format;

    function ensureStart(str) {
        if (!this.startsWith(str)){
            return str + this;
        }

        return this + "";
    }

    function ensureEnd(str){
        if (!this.endsWith(str)){
            return this + str;
        }

        return this + "";
    }

    function isEmpty(){
        return this == "" ? true : false;
    }

    function truncate(n){
        if (n < 4){
            return "." .repeat(n);
        }

        if (this.length <= n){
            return this + "";
        }

        if (this.length === n){
            return this + "...";
        }

        for (let i = n - 2; i >= 0; i--){
            if (this[i] === " "){
                return this.substring(0, i) + "...";
            }
        }

        return this.substring(0, n - 3) + "...";
    }
    
    function format(str, ...params) {
        for (let i = 0; i < params.length; i++){
            str = str.replace(("{"+ i +"}"), params[i]);
        }

        return str + "";
    }
})();

// let protoString = "hello my string";
// console.log(protoString.truncate(12));
// console.log(String.format('The {0} {1} fox', 'quick', 'brown'));
// console.log(String.format('jumps {0} {1}', 'dog'));

let answer = "the quick brown fox jumps over the lazy dog";
console.log(answer);
answer = answer.ensureStart('the ');
console.log(answer[0]);
console.log(answer.isEmpty());
console.log("".isEmpty());
console.log("" === "");
console.log(answer.truncate(10));