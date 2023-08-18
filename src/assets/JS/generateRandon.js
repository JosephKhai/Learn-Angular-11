genRandomNumbers = function () {
    let rNumber = [];
    for (let i = 0; i < 10; i++) {
        let rnd = Math.floor((Math.random() * 9999) + 1);
        rNumber.push(rnd);
    }
    return rNumber;
}