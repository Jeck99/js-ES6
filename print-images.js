main_div.innerHTML += "<input placeholder='enter image url' id='url_from_user' />";

main_div.innerHTML += "<button id='get_url'>click</button>";
let submitElem = document.getElementById("get_url");

submitElem.onclick = function () {
    let inputElem = document.getElementById("url_from_user");
    let urlFromUser = inputElem.value;
    main_div.innerHTML += `<img alt='' src="${urlFromUser}"/>`;
}