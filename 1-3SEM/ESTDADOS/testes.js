t1 = 0
t2 = 1
t3 = 1
for(let i = 0; i < 8; i++){ //8 primeros números da sequência de fibonacci
    console.log(t3)
    t3 = t1 + t2
    t1 = t2
    t2 = t3
}