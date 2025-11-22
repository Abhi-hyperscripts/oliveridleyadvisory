var requestUrl = "https://restcountries.eu/rest/v1/alpha/in";
var cu=''
$.ajax({
  url: requestUrl,
  type: 'GET',
  success: function(json)
  {
    cu=json.currencies;
  },
  error: function(err)
  {
    console.log("Request failed, error= " + err);
  }
});



function get(id){
    document.getElementById('lo').style.display='block';

    fetch('/checkout/package', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'cur':cu,
          'id':id,  
         })
      })
        .then((result) => { return result.json() })
        .then((data) => {
          var stripe = Stripe(data.stripe_public_key);
          stripe.redirectToCheckout({
            sessionId: data.session_id
          }).then(function (result) {
            document.getElementById('lo').style.display='none';
          })
        }).catch(err=>{
            alert('err')
            console.log(err);
            document.getElementById('lo').style.display='none';

        });
}