
let a = function click() {
    let b = 0;
    let limit = 3;
    return () => {
        let intv = setInterval(() => {
            // console.log(b);
            for (let i = 1; i <= 10; i++) {
                console.log(`${i} x ${b} = ${i * b}`);
                console.log('');
            }
            b++;
            console.log("-----------"); 
            if (b > limit) {
                limit = limit + 3;
                clearInterval(intv);
            }
        }, 500);
    }
}
let val = a();
