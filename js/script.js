let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let Create = document.getElementById("create");
let Deleat = document.getElementById("Deleat");
let Search = document.getElementById("Search");
let SearchByTitle = document.getElementById("SearchByTitle");
let SearchByCatigory = document.getElementById("SearchByCatigory");
// let delitem = document.getElementById("delitem");
// let ubdateItem = document.getElementById("update");
// let viewAllData = document.getElementById("viewAllData");

//             get total
function getTotal() {
    if (price.value != '') {
        total.innerHTML = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.style.backgroundColor = "green";
    }
    else {
        total.innerHTML = '';
        total.style.backgroundColor = "brown";

    }
}
//             create item
let elements;
// let i = 0;

// تحميل البيانات القديمة من localStorage (لو موجودة)
elements = [];
elements = JSON.parse(localStorage.getItem("items")) ?? [];
// Create Product
Create.onclick = function () {
    let item = {

        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }

    elements.push(item);
    localStorage.setItem("items", JSON.stringify(elements));

    // Reset inputs
    clearData();
    location.reload();
}

function clearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
    total.style.backgroundColor = "brown";

}

function showData(data = elements ||"") {
    let table = '';

    table = `  <table>
                    <th>NUMBER</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>COUNT</th>
                    <th>PRICE</th>
                    <th>TAXES</th>
                    <th>ADS</th>
                    <th>DISCOUNT</th>
                    <th>TOTAL</th>
                    <th>UPDATE</th>
                    <th>DELATE</th>
                    </tr>
                `;
    for (let i = 0; i < data.length; i++) {
        table +=
            `
            <tr>
                <td>${[i]}</td>
                <td >${data[i].title}</td>
                <td>${data[i].category}</td>
                <td>${data[i].count}</td>
                <td>${data[i].price}</td>
                <td>${data[i].taxes}</td>
                <td>${data[i].ads}</td>
                <td>${data[i].discount}</td>
                <td>${data[i].total}</td>
                <td><button id="update"  onclick="updatedata(${i})"> update</button></td>
                <td><button id="removebt"   onclick="delI(${i})" > delate</button></td>
            </tr>`
    }

    table += `</table>`;
    document.getElementById('table').innerHTML = table
    

}

showData();

//             delete ALL data 

Deleat.onclick = function () {
    localStorage.clear();
    showData();

}
//                delete item
function delI(i) {
    // document.getElementById("removebt")
    elements.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(elements));
    showData();

}
//   update
function updatedata(i) {


    elements = JSON.parse(localStorage.getItem("items")) || [];

    if (clearData()) {

        title.value = elements[i].title;
        price.value = elements[i].price;
        taxes.value = elements[i].taxes;
        ads.value = elements[i].ads;
        discount.value = elements[i].discount;
        total.innerHTML = elements[i].total;
        count.value = elements[i].count;
        category.value = elements[i].category;
        delI(i);

    }
    else {
        clearData()
        title.value = elements[i].title;
        price.value = elements[i].price;
        taxes.value = elements[i].taxes;
        ads.value = elements[i].ads;
        discount.value = elements[i].discount;
        total.innerHTML = elements[i].total;
        count.value = elements[i].count;
        category.value = elements[i].category;
        delI(i);
    }
    title.focus();
    // localStorage.setItem("items", JSON.stringify(elements));
}








































// Search

// Search.addEventListener("keyup",function(){
//     if(Search.value==elements[i].category){
//         showData();
//     }
// })

Search.addEventListener("keyup", function () {
    let searchValue = Search.value.toLowerCase();
    let filteredElements = elements.filter(item =>
        item.category.toLowerCase().includes(searchValue) || item.title.toLowerCase().includes(searchValue)
    );
    showData(filteredElements);

});












ChannelSplitterNode
















// function deleteItem(id) {

//     let newEle = [] ;
//     for(let i = 0 ; i < elements.length ; i++) {
//         if (elements[i].id != id) {
//             newEle.push(elements[i])
//         }
//     }
//     localStorage.setItem('items' , JSON.stringify(newEle))
//     location.reload();
// }

// let btns = document.querySelectorAll('#delete');
// for(let i = 0 ; i < btns.length; i++) {
//     btns[i].addEventListener('click' , function () {
//         let id = this.getAttribute('delete-id');
//         deleteItem(id)
//     })

// }