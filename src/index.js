module.exports = function multiply(first, second) {
    var firstRev = first.split('').reverse();
    var secondRev = second.split('').reverse();

    var mas = [];

    for (var i = 0; i < firstRev.length; i++) {
        for (var j = 0; j < secondRev.length; j++) {
            var m = firstRev[i] * secondRev[j];
            if (mas[i + j]) {
                mas[i + j] = mas[i + j] + m;
            } else {
                mas[i + j] = m;
            }
        }
    }

    for (var i = 0; i < mas.length; i++) {
        var num = mas[i] % 10;
        var move = Math.floor(mas[i] / 10);
        mas[i] = num;

        if (mas[i + 1]) {
            mas[i + 1] += move;
        } else {
            if (move != 0) {
                mas[i + 1] = move;
            }
        }
    }


    return mas.reverse().join('');
}