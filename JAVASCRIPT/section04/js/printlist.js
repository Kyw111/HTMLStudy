function println(title, value){
    document.write(title, value, '<br>');
}

function printlist() {
    for(var cnt=0; cnt < arguments.length; cnt ++){
        document.write(arguments[cnt]);
    }
    document.write('<br>');
}