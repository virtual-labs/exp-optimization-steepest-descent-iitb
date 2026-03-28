function calculate_fx_x(x, a) {
    itr1_fdx = (12 * Math.pow(x, 2)) + (12 * x) - a;
    //console.log("itr1 f'x= ", itr1_fdx);
    calculate_x(alpha, itr1_fdx);
    return itr1_fdx;
}
function calculate_x(alpha, itr1_fdx) {
    itr1_x = x - (alpha * itr1_fdx);
    //console.log("itr1 x= ",itr1_x);
    return itr1_x;
}
function newton(x11, a, alpha) {
    let table = [];
    for (let i = 0; i < 21; i++) {
        table[i] = [];
        let fdxx = (12 * Math.pow(x11, 2)) + (12 * x11) - a;
        let x22 = x11 - (alpha * fdxx);
        table[i][0] = i + 1;
        table[i][1] = x11;
        table[i][2] = fdxx;
        table[i][3] = x22;
        x11 = x22;
    }
    return table;
}
function graph_table(x111, a, b) {
    let table = [];
    for (let i = 0; i < 37; i++) {
        table[i] = [];
        let fx = (4 * Math.pow(x111, 3)) + (6 * Math.pow(x111, 2)) - (a * x111) + b;
        table[i][0] = i + 1;
        table[i][1] = x111;
        table[i][2] = fx;
        x111 = x111 + 0.01;
    }
    return table;
}
//# sourceMappingURL=newton.js.map