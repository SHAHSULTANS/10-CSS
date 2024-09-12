


let navH=document.querySelector(".nav");
navH=navH.offsetHeight;
let col=document.querySelector(".row");
col.style.marginTop=navH+"px";



/*


window.onscroll = function () {
let x = document.querySelector(".nav .logo");
//x.style.top = "-20px";
let computedStyle = getComputedStyle(x);
//console.log(computedStyle.marginBottom);

//console.log(col.style.marginTop);
let navH=document.querySelector(".nav");
//console.log(navH.offsetHeight);
navH=navH.offsetHeight;
let col=document.querySelector(".row");
col.style.marginTop=navH+"px";
if (document.body.scrollTop >1 || document.documentElement.scrollTop >1) {
    x.style.fontSize = "20px";
}
else {
    x.style.fontSize ="35px";
}
//col.style.marginTop=navH+"px";

}


*/

function navsearch(){
let inputvalue=document.querySelector("#navsearch").value.toUpperCase();
//console.log(inputvalue);

let projectlist=document.querySelectorAll(".col-25 a");
//console.log(projectlist.length);

for(let i=0;i< projectlist.length;i++){
    let projectname=projectlist[i].innerHTML.toUpperCase();

    if(projectname.indexOf(inputvalue)>-1){
        projectlist[i].style.display="";
    }
    else{
        projectlist[i].style.display="none";
    }

    //console.log(projectname);
}
}



function hamberger() {
//console.log(event.target.className);
let x = document.querySelector("#navsearch");
let navmenu = document.querySelector(".navmenu");
//console.log(x.className);


if (x.style.display == "block" || x.style.display == "") {
    x.style.display = "none";
    navmenu.style.display = "block";
}
else {
    x.style.display = "block";
    navmenu.style.display = "none";
}
}