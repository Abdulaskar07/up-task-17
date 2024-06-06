
const Item =[
    {
    "image":"laundry-02.png",
    "Name":"Dry Cleaning",
    "price":200
    },
    {
        "image":"png4.jpg",
        "Name":"soft Cleaning",
        "price":100
    },
    {
        "image":"png3.jpg",
        "Name":"Ironing",
        "price":150
    },
    {
        "image":"png1.jpg",
        "Name":"Special Wash",
        "price":400
    },
    {
        "image":"png2.jpg",
        "Name":"Normal Wash",
        "price":50
    }
]
var i =0;
const temp = Item[i];
var total = 0;
var s =1;


function Get(temp){
    document.getElementById("img").src= temp.image;
    document.getElementById("service-name").textContent=temp.Name;
    document.getElementById("price-tag").textContent =temp.price;
}
Get(temp);
function Skip(){
    if(i<4){
        i++;
        Get(Item[i]);
    }else{
        i=0;
        Get(Item[i]);
    }
}

function Add(){
    const tempp = Item[i];
    const newrow=document.createElement("tr");
    const sno= document.createElement("td");
    sno.textContent=s;
    const c1 = document.createElement("td");
    c1.textContent=tempp.Name;
    const c2 = document.createElement("td");
    c2.textContent=tempp.price;
    newrow.appendChild(sno);
    s++;
    total+=tempp.price
    newrow.appendChild(c1);
    newrow.appendChild(c2);
    console.log(newrow);
    newrow.setAttribute("Class","items");
    const tabel = document.getElementById("Service");
    tabel.appendChild(newrow);
    const final = document.getElementById("Fa");
    final.textContent= "$"+total;
}
function Book(){
const items = document.querySelectorAll(".items");
items.forEach(element => {
    element.remove();
});
const st =document.getElementById("status");
st.textContent="!!!!!Thanks for Booking and Come again for Our Services";
st.style.color = "Green";
total =0;
const final = document.getElementById("Fa");
    final.textContent= "$"+total;
}
    