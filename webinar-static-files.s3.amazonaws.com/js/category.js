function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function arrUnique(arr) {
    var cleaned = [];
    arr.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    console.log(cleaned);
    return cleaned;
}

function showCategory(data){
    var industry={};
    let country=[]
    var uni=data;
    console.log(uni);
    uni.map((element) => {
       if(industry[element.industry]==undefined){
           industry[element.industry]=[element.subcategory]
       } 
       else{
         if(!industry[element.industry].includes(element.subcategory)){
          industry[element.industry].push(element.subcategory);
         }
       }
       if(!country.includes(element.country)){
           country.push(element.country);
       }
    });

    console.log('industry',industry);
    for (var data in industry) {
    let  li1=$('<li>',{class:'link'});
    let  div1=$('<div>').text(data);
         div1.append('<i class="icofont-rounded-down"></i>');
         li1.append(div1);
    let  ul2=$('<ul>',{class:'submenu'})
        industry[data].map(element=>{
           ul2.append("<li><input id='"+element+"'  name='category' value='"+element+"' type='checkbox'><label for='"+element+"'>"+element+"</label>  </li>");
        });
      li1.append(ul2);
      $('.cat').append(li1);
    }
     // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("accordion");
    var btns = btnContainer.getElementsByClassName("link");
    console.log('btn=>',btns);
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });}

    let country_wrapper=$('.country');
    for(i=0;i<country.length;i++){
        country_wrapper.append("<li><input id='"+country[i]+"' name='country' value='"+country[i]+"' type='checkbox'>"+"<label for='"+country[i]+"'>"+country[i] +"</label></li>");
    }
}

function getCategory(industry){
    if(localStorage.getItem('category')!=undefined){
           if (localStorage.getItem('date')!=new Date().getDate()){
               localStorage.removeItem('date');
               localStorage.removeItem('category');
               getCategory();
           }
           else{
            showCategory(JSON.parse(localStorage.getItem('category')));
           }
          return;
    }

	const csrftoken = getCookie('csrftoken');
    fetch('/api/reports-category', {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json',
             'Accept': 'application/json'
    },
        body: JSON.stringify({}) //JavaScript object of data to POST
    })
    .then(response => {
          return response.json() //Convert response to JSON
    })
    .then(data => {
     console.log(data);
     showCategory(arrUnique(data));
     localStorage.setItem('category',JSON.stringify(arrUnique(data)));
     localStorage.setItem('date',new Date().getDate())
    })

}

function showall(className,element){
 $('.'+className).css('max-height', 'max-content');
 $(element).remove();

}

$(document).ready(function(){
    getCategory();
    });