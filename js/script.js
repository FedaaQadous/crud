
function saveData() {
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
  
    localStorage.setItem('username', name);
    localStorage.setItem('email', email);
  
    showData();
  }
  
 
  function showData() {
    const name = localStorage.getItem('username');
    const email = localStorage.getItem('email');
  
    
  }
  
 
  window.onload = showData;
  


 