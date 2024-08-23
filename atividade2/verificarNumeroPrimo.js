function verificaNumeroPrimo(n){
    let state = false;
    if(n <= 1){
        state = true;
    }
    for(let i = 2; i < n; i++) {
        if (n % i == 0) {
            state = true;
            break;
        }
    }
    return !state;
}