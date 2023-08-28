let totalPrice=0;
document.getElementById('item1').addEventListener('click',function(){

   const itemTitle=document.getElementById('title-item-1').innerText;
   setTitle('add-item',itemTitle);
   const itemPrice=getPrice('item-1');
   const setPrice=getPrice('price');
   console.log(itemPrice,setPrice);
   totalPrice=totalPrice+itemPrice;
   setValue('price',totalPrice);
   purchase(totalPrice);
   discount(totalPrice);
});
document.getElementById('item2').addEventListener('click',function(){

   const itemTitle=document.getElementById('title-item-2').innerText;
    setTitle('add-item',itemTitle);
   const itemPrice=getPrice('item-2');
   const setPrice=getPrice('price');
   console.log(itemPrice,setPrice);
   totalPrice=totalPrice+itemPrice;
   setValue('price',totalPrice);
   purchase(totalPrice);
   discount(totalPrice);
});

   
document.getElementById('item3').addEventListener('click',function(){

   const itemTitle=document.getElementById('title-item-3').innerText;
    setTitle('add-item',itemTitle);
   const itemPrice=getPrice('item-3');
   const setPrice=getPrice('price');
   console.log(itemPrice,setPrice);
   totalPrice=totalPrice+itemPrice;
   setValue('price',totalPrice);
   purchase(totalPrice);
   discount(totalPrice);
});
document.getElementById('item4').addEventListener('click',function(){

   const itemTitle=document.getElementById('title-item-4').innerText;
    setTitle('add-item',itemTitle);
   const itemPrice=getPrice('item-4');
   const setPrice=getPrice('price');
   console.log(itemPrice,setPrice);
   totalPrice=totalPrice+itemPrice;
   setValue('price',totalPrice);
   purchase(totalPrice);
   discount(totalPrice);
});
document.getElementById('item5').addEventListener('click',function(){

   const itemTitle=document.getElementById('title-item-5').innerText;
    setTitle('add-item',itemTitle);
   const itemPrice=getPrice('item-5');
   const setPrice=getPrice('price');
   console.log(itemPrice,setPrice);
   totalPrice=totalPrice+itemPrice;
   setValue('price',totalPrice);
   purchase(totalPrice);
   discount(totalPrice);
});
document.getElementById('item6').addEventListener('click',function(){

   const itemTitle=document.getElementById('title-item-6').innerText;
    setTitle('add-item',itemTitle);
   const itemPrice=getPrice('item-6');
   const setPrice=getPrice('price');
   console.log(itemPrice,setPrice);
   totalPrice=totalPrice+itemPrice;
   setValue('price',totalPrice);
   purchase(totalPrice);
   discount(totalPrice);
});
  
   
 

