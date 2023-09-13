const usersArray = [
    {
        fName: "jacob",
        lName: "morales",
        age: 36,
        isStudent: true
    },
    {
        fName: "miles",
        lName: "morales",
        age: 15,
        isStudent: true
    },
    {
        fName: "peter",
        lName: "parker",
        age: 40,
        isStudent: false
    },
];

main_div.innerHTML += "<table><thead><tr id='thead_tr_elem'></tr></thead><tbody></tbody></table>";

function createTableHead(obj) {
    const thead_tr_elem = document.getElementById("thead_tr_elem")
    for (const key in obj) {
        thead_tr_elem.innerHTML += `<th>${key}</th>`
    }
}
function createDataTable(objArray) {
    for (const item of objArray) {
        document.querySelector("tbody").innerHTML +=
            `<tr id="tr_id_${objArray.indexOf(item)}"></tr>
`
        for (const key in item) {
            document.getElementById(`tr_id_${objArray.indexOf(item)}`).innerHTML +=
                `<td>${item[key]}</td>`
        }
    }
}
createTableHead(usersArray[0])
createDataTable(usersArray)













// let colorsArray = ["red", "green", "blue", "orange"];

//.foreach(callback(item,index){})
// colorsArray.forEach(function (colorItem,index){
//     colorsArray[index] = colorItem.toUpperCase()
// })
////////
//.map(callback(item,index){})
// colorsArray.map((item) =>
//     item.toUpperCase()
// )
///////////
// for(const of){}
// const liElemCountries = document.getElementsByTagName("li");
// btn.addEventListener("click", () => {
//     for (const liCountry of liElemCountries) {
//         liCountry.innerText = liCountry.innerText.toUpperCase()
//     }
// })
//////////
// for(const ..key in ..object){}
// const user = {
//     fName:"jacob",
//     lName:"morales",
//     age:36,
//     isStudent:true
// };
// for(const userKey in user){
//     console.log(user[userKey]);
// }


// for (const usrItem of usersArray) {
//     main_div.innerHTML += `<div id="user_div${usersArray.indexOf(usrItem)}"></div>`;
//     const divElem = document.getElementById(`user_div${usersArray.indexOf(usrItem)}`);
//     for(const userKey in usrItem){
//         divElem.innerHTML +=`<h1>${usrItem[userKey]}</h1>`;
//     }
// }