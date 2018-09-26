module.exports = function makeExchange(currency) {
    if (currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    else {
        let h = 0, q = 0, d = 0, n = 0, p = 0;
        let result = {};
        let temp = currency;
        h = Math.floor(temp / 50);
        if (h > 0) {
            temp = temp - h * 50;
            result.H = h;
        }
        q = Math.floor(temp / 25);
        if (q > 0) {
            temp = temp - q * 25;
            result.Q = q;
        }
        d = Math.floor(temp / 10);
        if (d > 0) {
            temp = temp - d * 10;
            result.D = d;
        }
        n = Math.floor(temp / 5);
        if (n > 0) {
            temp = temp - n * 5;
            result.N = n;
        }
        p = Math.floor(temp / 1);
        if (p > 0)
            result.P = p;
        return result;
    }
};
