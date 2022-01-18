function toggle(id) {
    
    var x = document.getElementById('password'.concat(id.slice(-1)));
    if (x.type === "password") {
        x.type = "text";
        } else {
        x.type = "password";
    }
}
function checkpwd(){
    var pwd=document.getElementById("password1").value;
    var pwd2=document.getElementById("password2").value;
    if(pwd==pwd2){
        console.log('sme');
        return true;}
    else{
        console.log('diff');
        document.getElementById("error-mess").innerHTML="passwords dont match";                
        return false;
    }
}