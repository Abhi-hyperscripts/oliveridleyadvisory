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


      


$("#buy-btn").click(function (e) {
  

  if(true){
    document.getElementById('lo').style.display='block';
    fetch('checkout/cart', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'cur':cu,})
    })
      .then((result) => { return result.json() })
      .then((data) => {
        var stripe = Stripe(data.stripe_public_key);
        document.getElementById('lo').style.display='none';
        stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId: data.session_id
        }).then(function (result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
      })
  }
  else{
    if(email==''){
      $('#email').addClass("active");
    }
    if(name==''){
      $('#name').addClass("active");
    }
    if(phone==''){
      $('#phone_number').addClass("active");
    }
    if(city==''){
      $('#city').addClass("active");
    }
    if(address==''){
      $('#address').addClass("active");
    }
    if(zip==''){
      $('#zip-code').addClass('active');
    }
  }
 
  console.log('submit');
 
});