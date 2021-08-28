/**
 * Bài 1. In các só nguyên dương lẻ/chẵn nhỏ hơn 100
 */

// FOR
var even1 = "";
var odd1 = "";
for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        even1 = even1 + " " + i;
    } else {
        odd1 = odd1 + " " + i;
    }
}
console.log("Số chẵn lệnh for  là: " + even1);
console.log("Số lẻ lệnh for là: " + odd1);

// WHILE
var j = 0;
var even2 = "";
var odd2 = "";
while (j < 100) {
    if (j % 2 == 0) {
        even2 = even2 + " " + j;
    } else {
        odd2 = odd2 + " " + j;
    }
    j++;
}
console.log("Số chẵn lệnh while là: " + even2);
console.log("Số lẻ lệnh while là: " + odd2);


/**
 * Bài 2. Tìm số chia hết cho 3 từ 0-1000
 */

// FOR
var count1 = "";
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
        count1++;
    }
}
console.log("Số chia hết cho 3 lệnh for là: " + count1);

// WHILE
var z = 0;
count2 = "";
while (z < 1000) {
    if (z % 3 == 0) {
        count2++;
    }
    z++;
}
console.log("Số chia hết cho 3 lệnh while là: " + count2);


/**
 * Bài 3. Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 10000
 */

for (var i = 1; i < 10000; i++) {
    if (i * (i + 1) / 2 > 10000) {
        console.log("So do la: " + i);
        break;
    }
}


/**
 * Bài 4. Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 +
... + x^n
 */

function total() {
    var x = parseFloat(document.getElementById("inputNumX4").value);
    var n = parseFloat(document.getElementById("inputNumN4").value);
    var sum4 = 0;
    for (i = 1; i <= n; i++) {
        sum4 = sum4 + Math.pow(x, i);
        console.log("Tổng bài 4 là: " + sum4);
    }
    document.getElementById("txtResult4").innerHTML = sum4;
}
document.getElementById("btnLoop4").onclick = total;


/**
 * Bài 5. Nhập vào n. Tính giai thừa 1*2*...n
 */
function factorial() {
    var n = parseFloat(document.getElementById("inputNumN5").value);
    var fac = 1;
    for (i = 1; i <= n; i++) {
        fac = fac * i;
    }
    console.log("Giai thừa 5 là: " + fac);
    document.getElementById("txtResult5").innerHTML = fac;
}
document.getElementById("btnLoop5").onclick = factorial;

/**
 * Bài 6. Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào
vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.
 */

document.getElementById("btnLoop6").onclick = addElement;

function addElement() {
    content = "";
    var menu = document.querySelector("#bai6");

    for (var i = 1; i <= 10; i++) {
        // create a new div element
        var newDiv = document.createElement("div");
        //newDiv.id = ("div" +i);

        if (i%2==0) {
            newDiv.style.backgroundColor = "red";
            newDiv.style.color = "white";
        }else{
            newDiv.style.backgroundColor = "blue";
            newDiv.style.color = "white";
        }

        // and give it some content
        // textContent = innerHTML
        newDiv.innerHTML = "Hi div" +i;

        menu.appendChild(newDiv);
    }
}



/**
 * Bài 7. Viết chương trình có một ô input, một button. Khi click vào button thì in ra
các số nguyên tố từ 1 tới giá trị của ô input
*/
function check(x) {
    // check7 = 1 la so nguyen so
    var check7 = 1;
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            check7 = 0;
            break;
        }
    }

    return check7;
}

function prime() {
    var n = parseFloat(document.getElementById("inputNumN7").value);
    console.log("So n la: " + n);
    var content = "";
    for (var i = 2; i <= n; i++) {
        if (check(i)) {
            content += i + " ";
        }
    }
    console.log("Danh sách số nguyên tố là: " + content);
    document.getElementById("txtResult7").innerHTML = content;
}

document.getElementById("btnLoop7").onclick = prime;
