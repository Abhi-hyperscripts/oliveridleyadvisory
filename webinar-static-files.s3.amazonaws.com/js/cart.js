console.log('hii from cart');

var updateBtns=document.getElementsByClassName('update');

for(i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId=this.dataset.product;
        var action=this.dataset.action;
        var type=this.dataset.type;
        console.log('productId: ',productId,'Action:',action,'Type:',type);
        console.log('csrf=>',csrftoken);
        updateUserOrder(productId,action,type);

    })
}

function updateUserOrder(productId,action,type){


    var url='/cart/update';
 
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body: JSON.stringify({'productId':productId,'action':action,'type':type})
    }).then((response)=>{
        return response.json();
    }).then ((data)=>{
        console.log('data',data);
        location.reload();
    })
}