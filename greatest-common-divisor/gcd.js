const gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

const a = 2154
const b = 458

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));