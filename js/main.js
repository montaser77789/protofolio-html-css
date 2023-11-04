let btnMenu =document.getElementById("btnMenu")
let links = document.querySelector(".links");

let myname ="Montaser Gohar";

let index=1;
function add(btn){
    links.classList.toggle("active")
}
function write(){
    document.getElementById("myname").textContent = myname.slice(0,index);
    index++;
    if(index >myname.length){
        index=1;
    }
    

}
setInterval (function(){
    write()
},150)
const firstname =document.getElementById("First-Name")
const lasttname =document.getElementById("last-name")
const email =document.getElementById("email")
const number =document.getElementById("phonenimber")
const message =document.getElementById("Message") 
const btn =document.getElementById("btn-submit")
btn.addEventListener("click", clear)

     function clear(){
        if(firstname.value!=""&&email.value!=""){
        firstname.value="";
        lasttname.value="";
        email.value="";
        number.value="";
        message.value="";
        btn.value="";
        alert("sent succesfully")
        }else{
            alert("please enter data")
        }
   
 }



