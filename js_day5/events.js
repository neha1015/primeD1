const a =[
    {
        "id":1,
        "name":"Khushi",
        "email":"khushi@gmail.com",
    },
    {
        "id":2,
        "name":"Dev",
        "email":"dev@gmail.com",
    },
    {
        "id":3,
        "name":"Riya",
        "email":"riya@gmail.com",
    },
    {
        "id":4,
        "name":"ram",
        "email":"ram@gmail.com",
    }
];
const root = document.getElementById("parent");
a.forEach((elem)=>{
    const newCard = document.createElement("div");
    newCard.className="card";
    newCard.innerHTML=`
    <h4>${elem.id}</h4>
    <h4>${elem.name}</h4>
    <p>${elem.email}</p>`
    root.appendChild(newCard);
});
function handlechange(){
    console.log("clicked");
    const bodyElem = document.querySelector("body");
    bodyElem.style.backgroundColor=getRandomColor();
}
function getRandomColor(){
    const randomRed = Math.floor(Math.random()*255);
    const randomGreen = Math.floor(Math.random()*255);
    const randomBlue = Math.floor(Math.random()*255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
    
}