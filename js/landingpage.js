/*function scrollWin(){
    window.scrollTo(177,350);
    
   
}
function scrollWin2(){
    
    window.scrollTo(1092,2200);
   
}*/
if (!window.getComputedStyle) {
    // Fallback for obsolete IE
    window.getComputedStyle = function(e) {
        return e.currentStyle;
    };
}
let home = document.querySelector('.home_btn');

home.addEventListener('click',function(e){
    console.log('hi');
    let y = document.querySelector('.container');
    y.scrollIntoView();
});

let about = document.querySelector('.about_btn');

about.addEventListener('click',function(e){
    console.log('hi');
    let display = document.querySelector('.Abus');
    display.scrollIntoView();
});



let contact = document.querySelector('.contact_btn');

contact.addEventListener('click',function(e){
    console.log('hi');
    let element = document.querySelector('.email_img');
    element.scrollIntoView();
});

let menu = document.querySelector('.menu_btn');

menu.addEventListener('click',function(e){
    let z = document.querySelector('nav ul');
    /*console.log('hi');
    nav_menu.classList.toggle('showmenu');*/
    
    if(getComputedStyle(z).display == 'none'){
        
        z.style.display = 'block';

    }
    else{
        z.style.display='none';
    }
    
});


let sub_menu = document.querySelector('.gallery_btn');

sub_menu.addEventListener('click',function(e){
    let x = document.querySelector('.box');
    if(getComputedStyle(x).display == 'none'){
        
        x.style.display = 'block';

    }
    else{
        x.style.display='none';
    }
   
});

//slider
let images = document.querySelectorAll(".slider"); 

let i = 0;

/*function reset(){
    for(let i =0;i<images.length;i++){
        images[i].style.display = 'none'
    }
}*/
images[i].style.display = 'block';

 
setInterval(function(){
    images.forEach((img,i)=>{
        img.style.display = 'none';
    })
    if(i== images.length){
        i = 0;
    }
    images[i].style.display = 'block';
    i++
    console.log('working')
},2000);

let form = document.querySelector('.contact_us');

form.addEventListener('click',function(e){
    let y = document.querySelector('.contact_form');
    
 
   if(getComputedStyle(y).display == 'none'){
        
        y.style.display = 'block';

    }
    else{
        y.style.display='none';
    }

});


//form validation

function validation(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("id").value;
    let subject = document.getElementById("subject").value;
    let error = document.getElementById("error");
  //  let success = document.getElementById("success");
    let text;
   error.style.padding = '10px';
  

   if(name.length<5){
       text = "Please Enter a valid name";
       error.innerHTML = text;
       return false;
   }
   if(phone.length!=10){
       text = "Please Enter a valid phone number";
       error.innerHTML = text;
       return false;
       

   }
   if(email.length<5){
       text = "Please Entera valid email id";
       error.innerHTML = text;
       return false;
   }
   if(subject.length<5){
       text = "Please Enter the correct subject";
       error.innerHTML = text;
       return false;
   }
   if(message.length<=100){
       text = "Please Enter more than 100 characters";
       error.innerHTML = text;
       return false;
   }
   alert('Thank you');
   
   return true;
 }