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
function checktype(){
    var filepath=document.getElementById("myfile1").value;
    var filetype=filepath.split('.')[filepath.split('.').length-1]
    console.log('filetype2 is',filetype)
    if(filetype!='json'){
        console.log('not json');
        document.getElementById("error-mess").innerHTML="Please upload a json file";                
        return false;}
    else{
        console.log('json');
        return true;}
    }