const wordWrap = function (text, width) {
    const words = text.split;
    const count = words.length;
    const slack = new Array(count).fill(new Array(count).fill(0));

    let i = 0;
    while (i < count) {
        i += 1;
        slack[i][i] = width - words[i].length;

        let j = i;
        while (j < count) {
            j += 1;
            slack[i][j] = slack[i][j - 1] - words[j].length - 1;
        }
    }

    const minima = [0] + [10 ** 20] * count;
    const breaks = [0] * count;

    let n = 0;
    while (n < count) {
        n += 1;
        let m = n;
        while (m >= 0) {
            let cost;
            if (slack[m][n] < 0) {
                cost = 10 ** 10;
            } else {
                cost = minima[m] + slack[m][n] ** 2;
            }

            if (minima[n + 1] > cost) {
                minima[n + 1] = cost;
                breaks[m] = n;
            }

            i -= 1;
        }
    }

    let lines = [];
    let q = count;

    }
};