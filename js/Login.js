function log(){
    var username=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;
    var roles = document.getElementsByName("roles");
    for(var i=0;i<2;i++){
        if(roles[i].checked){
            role = roles[i].value;
            break;
        }
    }

    if(localStorage.getItem("uname")==null || localStorage.getItem("pwd")==null || localStorage.getItem("role")==null){
        alert("您还没有注册")
        window.location.href="../html/Register.html";
    }else{
        var uname = localStorage.getItem("uname").toString();
        var pass = localStorage.getItem("pwd").toString();
        var rolee = localStorage.getItem("role").toString();

        if(username==uname){
            document.getElementById("UsernameError").innerText="";
        }else{
            document.getElementById("UsernameError").innerText="用户名不正确";
            return false;
        }
        if(pwd==pass){
            document.getElementById("PwdError").innerText="";
        }
        else{
            document.getElementById("PwdError").innerText="密码不正确";
            return false;
        }
        if(role==rolee){
            document.getElementById("RoleError").innerText="";
        }else{
            document.getElementById("RoleError").innerText="角色不正确";
            return false;
        }
        sessionStorage.setItem("username",uname);
        alert("登录成功！");
        window.location.href="../html/index.html";
    }


}
