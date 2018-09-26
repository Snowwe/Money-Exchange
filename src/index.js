module.exports = function makeExchange(currency) {
    if (currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    else {
        let h = 0, q = 0, d = 0, n = 0, p = 0;
        let result = {};
        h = Math.floor(currency / 50);
        if (h > 0) {
            currency = currency - h * 50;
            result.H = h;
        }
        q = Math.floor(currency / 25);
        if (q > 0) {
            currency = currency - q * 25;
            result.Q = q;
        }
        d = Math.floor(currency / 10);
        if (d > 0) {
            currency = currency - d * 10;
            result.D = d;
        }
        n = Math.floor(currency / 5);
        if (n > 0) {
            currency = currency - n * 5;
            result.N = n;
        }
        p = Math.floor(currency / 1);
        if (p > 0)
            result.P = p;
        return result;
    }
};
