function register(){
    var username=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;
    var repwd=document.getElementById("repassword").value;
    var roles = document.getElementsByName("roles");
    for(var i=0;i<2;i++){
        if(roles[i].checked){
            role = roles[i].value;
            break;
        }
    }


    if(username==""){
        document.getElementById("UsernameError").innerText="用户名不能为0";
        return false;
    }else{
        document.getElementById("UsernameError").innerText="";
    }
    if(pwd.length<5 || pwd.length>16){
        document.getElementById("PwdError").innerText="密码长度应为5-16位";
        return false;
    }
    else{
        document.getElementById("PwdError").innerText="";
    }
    if(repwd==pwd){
        document.getElementById("RePwdError").innerText="";
    }else{
        document.getElementById("RePwdError").innerText="两次输入密码不相同";
        return false;
    }
    localStorage.setItem("uname",username);
    localStorage.setItem("pwd",pwd);
    localStorage.setItem("role",role);
    alert("注册成功！");
    window.location.href="../html/Login.html";

}