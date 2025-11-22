console.log('hello from job');

function location_filter(location){
if (location==''){
        if (document.getElementById('two').value=='' && document.getElementById('three').value==''){
         var all=document.getElementsByClassName('job');
         for(let i=0;i<all.length ;i++){
            all[i].style.display='flex';
         }
       return
        }};
 var all=document.getElementsByClassName('job');
 for(let i=0;i<all.length ;i++){
    all[i].style.display='none';
 }

 var elementsArray = document.getElementsByClassName(document.getElementById('one').value + " "+document.getElementById('two').value.split(' ').join('-') +' '+document.getElementById('three').value);
 for(let i=0;i<elementsArray.length ;i++){
    elementsArray[i].style.display='flex';
 }
 
}

function position_filter(position){
  
        if (position==''){
           if (document.getElementById('one').value=='' && document.getElementById('three').value==''){
            var all=document.getElementsByClassName('job');
            for(let i=0;i<all.length ;i++){
               all[i].style.display='flex';
            }
          return
           }
         };

    var all=document.getElementsByClassName('job');
    for(let i=0;i<all.length ;i++){
       all[i].style.display='none';
    }
    var elementsArray = document.getElementsByClassName(document.getElementById('one').value + " "+document.getElementById('two').value.split(' ').join('-') +' '+document.getElementById('three').value );
    for(let i=0;i<elementsArray.length ;i++){
       elementsArray[i].style.display='flex';
    }
}

function type_filter(type){
    if (type==''){

        if (document.getElementById('one').value=='' && document.getElementById('two').value==''){
            var all=document.getElementsByClassName('job');
            for(let i=0;i<all.length ;i++){
               all[i].style.display='flex';
            }
          return
           }
    
     };

    var all=document.getElementsByClassName('job');
    for(let i=0;i<all.length ;i++){
       all[i].style.display='none';
    }
    var elementsArray = document.getElementsByClassName(document.getElementById('one').value + " "+document.getElementById('two').value.split(' ').join('-') +' '+document.getElementById('three').value);
    for(let i=0;i<elementsArray.length ;i++){
       elementsArray[i].style.display='flex';
    }
}