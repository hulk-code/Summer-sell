function getPrice(id){
   const Price=document.getElementById(id);
   const priceString=Price.innerText;
   const price=parseFloat(priceString);
   return price;
}
function setValue(id,value){
   const idValue=document.getElementById(id);
  idValue.innerText=value;
}
function setTitle(id , title){
   const addItem=document.getElementById(id);
   const li=document.createElement('li');
   li.innerText=title;
  addItem.appendChild(li);
}
function purchase(price){
   if(price > 0){
      const purchesBtn=document.getElementById('Purchase');
      purchesBtn.removeAttribute('disabled');
   }
}
function discount(price){
   if(price>=200){
      const discountbtn=document.getElementById('apply');
      discountbtn.removeAttribute('disabled');
       document.getElementById('apply').addEventListener('click',function(){
         const cuponCode=document.getElementById('code').value;
         if(cuponCode==="SELL200"){
            const discountTotal=price*20/100;
            const discountPrice=price-discountTotal;
            setValue('discount',discountTotal);
            setValue('total',discountPrice);
            
   
         }
         else{
            alert('Wrong Cupon ')
         }
        
       })
      
      
   }
}

function reload(){
   window.location.href='index.html'
}