function login()
{
	var uname = document.getElementById("email").value;
	var pwd = document.getElementById("pwd1").value;
	var filter=/admin/;
    var pwd_expression=/12345/;
	if(uname =='')
	{
		alert("please enter user name.");
	}
	else if(pwd=='')
	{
		alert("enter the password");
	}
	else if(!filter.test(uname))
	{
		alert("Enter valid email id.");
	}
	else if(!pwd_expression.test(pwd))
	{
		alert("Enter valid password");
	}
	else
	{

   window.location = "todo.html";
		}
}
//Reset Inputfield code.
function clearFunc()
{
	document.getElementById("email").value="";
	document.getElementById("pwd1").value="";
}	