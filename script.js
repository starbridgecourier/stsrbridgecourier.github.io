// Simple menu toggle and contact form handler
document.addEventListener('DOMContentLoaded', function(){
  var menuToggle = document.getElementById('menuToggle');
  var menu = document.getElementById('menu');
  if(menuToggle && menu){
    menuToggle.addEventListener('click', function(){ menu.classList.toggle('open'); });
  }

  // Simple client-side handling for the contact quote form
  var form = document.getElementById('quoteForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var pickup = document.getElementById('pickup').value.trim();
      var delivery = document.getElementById('delivery').value.trim();
      var weight = document.getElementById('weight').value.trim();
      var message = document.getElementById('message').value.trim();
      var msgEl = document.getElementById('formMsg');
      if(!name || !email){ msgEl.textContent = 'Please enter your name and email.'; msgEl.style.color='red'; return; }
      // Create mailto link as fallback
      var subject = encodeURIComponent('Quote request from ' + name);
      var body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nPickup: '+pickup+'\nDelivery: '+delivery+'\nWeight/Size: '+weight+'\nMessage: '+message);
      var mailto = 'mailto:starbridgeglobalcourierdeliver@gmail.com?subject='+subject+'&body='+body;
      window.location.href = mailto;
      msgEl.textContent = 'Opening your email client to send request...';
      msgEl.style.color='green';
    });
  }
});