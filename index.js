const arr = [40, 50, 69, 132, 445, 841, 11, 202, 545, 552]


 const sort = (numero) => {

    for (let i = 1; i < numero.length; i++) {
        let num = numero[i];
        let a = i - 1;
        while (a >= 0 && numero[a] > num) {
            numero[a + 1] = numero[a];
            a--;

        }
        numero[a + 1] = num;
    }
return numero
};

console.log(sort(arr));
