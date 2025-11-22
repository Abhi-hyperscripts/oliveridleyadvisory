function getCasestudy(industry,element){
    $('.industry').css("background-color","#fff")
    $(element).css("background-color","grey");
    fetch('/api/case-study', {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
    },
        body: JSON.stringify({'industry':industry.toString(),'service':''}) //JavaScript object of data to POST
    })
    .then(response => {
          return response.json() 
    })
    .then(data => {
       var all=$('.case');
       for(let i=0;i<all.length ;i++){
          all[i].remove();
          console.log('remove');
       }
       data.forEach(element => {
        var $div = $("<div>", { "class": "col-md-3 case explore-cart",'style':'margin-top:20px;display:none' });
        var $div1 = $("<div>", { "class": "explore-img" });
        var $div2=$("<div>", { "class": "explore-text" });
        $div1.append("<img style='width:100%;height:200px' src='"+element.thumbnail+"'/>");
        if(element.start_at){
            $div2.append(" <span class='date'>Date : "+element.start_at+"</span>");
        }
        $div2.append("<a href='"+element.pdf+"'target='_blank' > <h4>"+element.name.slice(0,100)+"</h4></a>")
        $div2.append("<p>Lorem ipsum, or lipsum as it is sometimes Lorem ipsum, or lipsum as it is sometimesLorem ipsum, or lipsum as it is sometimes</p>");
        $div.append($div1);
        $div.append($div2);
        $(".case-parent").append($div);
       });
       var elements = document.getElementsByClassName("case");
       for (var i = 0; i < 4; i++) {
        console.log('ok', elements);
        elements[i].style.display = 'block';
    }
     
    document.getElementById('load').style.display = 'block';
    })

}


function getCasestudy2(industry,element){
    $('.industry').css("background-color","#fff")
    $(element).css("background-color","grey");
    fetch('/api/case-study', {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
    },
        body: JSON.stringify({'industry':industry.toString(),'service':''}) //JavaScript object of data to POST
    })
    .then(response => {
          return response.json() 
    })
    .then(data => {
       var all=$('.case');
       for(let i=0;i<all.length ;i++){
          all[i].remove();
          console.log('remove');
       }
       data.forEach(element => {
        var $div = $("<div>", { "class": "col-md-3 case explore-cart",'style':'margin-top:20px;display:none' });
        var $div1 = $("<div>", { "class": "explore-img" });
        var $div2=$("<div>", { "class": "explore-text" });
        $div1.append("<img style='width:100%;height:200px' src='"+element.thumbnail+"'/>");
        if(element.start_at){
            $div2.append(" <span class='date'>Date : "+element.start_at+"</span>");
        }
        $div2.append("<a href='"+element.pdf+"'target='_blank' > <h4>"+element.name.slice(0,100)+"</h4></a>")
        $div2.append("<p>Lorem ipsum, or lipsum as it is sometimes Lorem ipsum, or lipsum as it is sometimesLorem ipsum, or lipsum as it is sometimes</p>");
        $div.append($div1);
        $div.append($div2);
        $(".case-parent").append($div);
       });
       var elements = document.getElementsByClassName("case");
       for (var i = 0; i < 4; i++) {
        console.log('ok', elements);
        elements[i].style.display = 'block';
    }
     
    document.getElementById('load').style.display = 'block';
    })

}