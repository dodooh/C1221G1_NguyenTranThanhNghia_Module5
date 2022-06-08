import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr: number[] = [];
let start: number = 0;
let end: number = 1;
let fibonacci: number;
rl.question('Enter number: ', (num: any) => {
    fibo(num, 0);
    console.log("array: " , arr);
    const sum = arr.reduce((p,c) => p + c,0)
    console.log("sum :" , sum);
    rl.close();
})

function fibo(total: number, count: number): void {
    if (count < total) {
        if (count <= 1) {
            arr.push(count)
        } else {
            fibonacci = start + end;
            start = end;
            end = fibonacci;
            arr.push(fibonacci)
        }
        count++;
        fibo(total, count);
    } else {
        return;
    }
}
