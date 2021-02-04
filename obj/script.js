// let i = 0;

// while (true) { // shows 0, then 1, then 2


//     i++;
//     console.log(i);

//     if (i >= 100) {
//         break
//     }

// }
// let i;

// for (i = 0; i < 3; i += 2) {
//     alert(i); // 0, 1, 2
// }

// // alert(i); // error, no such variable

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}