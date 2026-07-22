var count = 2;

function validate ()
{
   var user = document.login.username.value;
   var output = document.getElementById('incorrect')
   var password = document.login.password.value;
   var valid = false;
   var usernameArray = ["Kyouni"]
   var passwordArray = ["77 Live"]
   for (var i = 0; i < usernameArray.length; i++)

if (user == usernameArray[i])
if (password == passwordArray [i])
{
   valid = true;
   break;
}

if(valid)
{
   window.location = "index.html"
   return false ;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   output.textContent = "Incorrect! End your life!"
   count--;
}
}