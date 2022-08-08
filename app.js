// Bài 1: Khởi tạo một biến có tên sản phẩm, chứa một mảng sản phẩm, mỗi sản phẩm có
// tên, giá, thương hiệu, danh mục và màu sắc
/* 
let products = [
    {
        name: "Sony Xperia XZ Premium",
        brand: "Sony",
        price: "4428",
        color: "White",
        category: "Phone",
    },
    {
        name: "OPPO F3 Plus",
        brand: "OPPO",
        price: "5487",
        color: "Black",
        category: "Phone",
    },
    {
        name: "Iphone 13 Pro max",
        brand: "Apple",
        price: "21490",
        color: "Gray",
        category: "Phone",
    },
    {
        name: "Samsung Galaxy S8",
        brand: "Samsung",
        price: "8490",
        color: "Blue",
        category: "Charger",
    },
] */
// 1.1 In name và price của tất cả các sản phẩm
/* 
for (let i = 0; i < products.length; i++){
    console.log(`#${i} Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
    console.log("-------------------------------------------");
}
 */
// 1.2 Viết script in / đăng xuất sản phẩm với số của chúng, sau đó in / đăng xuất 
// thông tin chi tiết của sản phẩm với vị trí của sản phẩm do người dùng nhập
/* 
for (let i = 0; i < products.length; i++){
    console.log(`#${i} Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
    console.log("-------------------------------------------");
}
let a = 0
let userInput = Number(prompt("Enter product position from 0 to 3"))
if (userInput >= 0 && userInput <= 3){
for (let i = 0; i < products.length; i++){
    if (userInput === i){
    alert(`Name: ${products[i].name}
    Price: ${products[i].price}
    Brand: ${products[i].brand}
    Color: ${products[i].color}
    Category: ${products[i].category}`);
    console.log("-------------------------------------------");
    }    
}
}else {
    alert("PLease reenter again")
} 
*/

// 1.3 Viết tập lệnh in các sản phẩm dựa trên danh mục do người dùng nhập
/* 
let userInput = prompt("Nhap danh muc muon tim kiem (Phone/charger)")
let c = 0
for (let i = 0; i < products.length; i++){
    if(cars[i].Category === userInput){
        console.log(`Name: ${products[i].name}`);
        console.log(`Brand: ${products[i].brand}`);
        console.log(`Price: ${products[i].price}`);
        console.log(`Color: ${products[i].color}`);
        console.log(`Category: ${products[i].category}`);
        console.log("-------------------------------------------")
        c = 1
    }
}if (c = 0){
    console.log("Không có hàng nãy, Vui lòng nhập lại");
}
*/

// 1.4 Thêm nhà cung cấp vào từng sản phẩm
// products[0].Providers = "phukienso"
// products[1].Providers = "Tgdd"
// products[2].Providers = "Tgdd"
// products[3].Providers = "Tgdd"
// for (let i = 0; i < products.length; i++){
// console.log(`Name: ${products[i].name}`);
// console.log(`Price: ${products[i].price}`);
// console.log(`Providers: ${products[i].Providers}`);
// console.log("----------------------------------------");
// }

// 1.5
/* 
let userInput = prompt("Nhập vào số xe muốn lấy thông tin:");
let c = 0
for (let i = 0; i < products.length; i++){
    if(products[i].Providers === userInput){
        console.log(`Name: ${products[i].name}`);
        console.log(`Brand: ${products[i].brand}`);
        console.log(`Price: ${products[i].price}`);
        console.log(`Color: ${products[i].color}`);
        console.log(`Category: ${products[i].category}`);
        console.log(`Providers: ${products[i].Providers}`);
        console.log("-------------------------------------------")
        c = 1
    }
}if (c = 0){
    console.log("Không có hãng này.Vui lòng nhập lại");
}
*/

// Bài 2:
let task =[
    ["html",{Complete: "false"}],
    ["css",{Complete: "false"}],
    ["javascript",{Complete: "false"}],
    ['node packge manager',{Complete: "false"}],
    ["git",{Complete: "false"}]
]
console.log(t);
// // In ra:
console.clear()
console.log("Hi there, this is your learning tasks to front-end developer career:");
for (let i = 0; i < task.length; i++) {
    console.log(`${i + 1}: ${task[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(task[i][1])[0]]} `);
}

let state = true;
while(state) {
    let userInput = prompt("Enter your command(C/R/U/D/E)").toUpperCase();
    if(userInput == 'C') {
        let c = prompt('Enter new task');
        a.push([c,{Complete: "false"}]);
        for(let i = 0; i < a.length; i++) {
            console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
        }
    }else if (userInput == 'U') {
        let d = Number(prompt('Enter position'));
        let e = prompt('Enter new title');
        a[d-1][0]= e;
        for(let i = 0; i < a.length; i++) {
            console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
        }
    }else if (userInput == "C") {
        let f = Number(prompt('Enter position'));
        a[f-1][1].Complete = 'true';
        for(let i = 0; i < a.length; i++) {
            console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
        }
    }else if (userInput == 'D') {
        let g = Number(prompt('Enter deleter'));
        a.splice(g-1)
        for(let i = 0; i < a.length; i++) {
            console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
        }
    }else if(userInput == 'Ext') {
        console.log('bye bye');
        state = false;
    }
}
