const compsArray = [
    { compName: "hi", city: "lod", image: "https://www.secrettelaviv.com/wp-content/uploads/2023/06/Powtoon-Square-300x300.jpg" },
    { compName: "tech", city: "tlv", image: "https://photos.wellfound.com/startups/i/8982442-bbf3704699545b2c0f8c5cc10520fe89-medium_jpg.jpg?buster=1657405668" },
    { compName: "compeny", city: "ramat-gan", image: "https://photos.wellfound.com/startups/i/1053732-27eb177b2845c19e282fa6a0031fc914-medium_jpg.jpg?buster=1567567031" },
];

for (let i = 0; i < compsArray.length; i++) {
    main_div.innerHTML += `<div>
<h1>${compsArray[i].compName}</h1> 
<p>${compsArray[i].city}</p>
<img alt="comp-name" src=${compsArray[i].image}>
</div>`
}
