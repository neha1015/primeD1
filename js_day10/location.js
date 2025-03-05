// const root=document.getElementById("locations");

const getData = (text)=>{
    const pr= fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/findplacefromtext/json?input=${text}&inputtype=textquery&fields=all&language=en`,{
        method:"GET",
        headers:{
            "x-rapidapi-host": "google-map-places.p.rapidapi.com",
            "x-rapidapi-key": "2381b6de75msh38cdbb75ca93b9ap17efa6jsn9067defcde22",
             
        },
    });
    pr.then((res)=>{
        const pr2=res.json();
        pr2.then((data)=>{
            showlocations(data);
        });
    });
};
const root=document.getElementById("locations");

const showlocations = (data) =>{
    root.innerHTML = "";
    const {candidates} = data;
    candidates.forEach((elem)=>{
        const p = document.createElement("p");
        p.innerText = elem.description;
        root.appendChild(p);
    });
}


const handleSearch=(e)=>{
    getData(e.target.value);
};
