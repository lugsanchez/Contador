//print
function print(var1) {
    let i = var1.toUpperCase().charAt(0);
    return i
}

function print1() {
    const button1 = document.getElementById('button1');
    const parrafo = document.getElementById('parrafo');
    const circle = document.getElementById("info");
    const comment = document.getElementById("comment");
    const value = circle.value;
    const valuee = comment.value;

    const n = print(value);
    const letraCirculo = document.getElementById("circle");
    letraCirculo.innerText = n;

    if (circle  == "") {
        alert("completa el campo de nombre")
        document.getElementById("info").focus();
    }
    if  (comment == "") {
        alert("completa el campo de comentario")
        document.getElementById("comment").focus();
    }else{
        console.log(circle, comment);
        document.getElementById("info").value="";
        document.getElementById("comment").value="";
        document.getElementById("info").focus();
    }
}

//counter
function countChars(obj){
    var maxLength = 200;
    var strLength = obj.value.length;
    
    if(strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("charNum").innerHTML = strLength+' de '+maxLength+' caracteres';
    }
}




