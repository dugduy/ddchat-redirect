document.querySelector('button').onclick=function(){
    location='https://ddchat.tk/'
}
crdm=location.host.split('.')[0]
if (crdm=='www'){
    location='https://ddchat.tk/'
}
if (crdm=='cpanel'){
    document.write('Web này không dùng cpanel bạn ơi!')
}
if (crdm=='admin'){
    document.write('Á đù Vjp<br>Định hack à bạn ơi?')
}
else{
    document.write('Tôi không biết tại sao bạn lại đến được đây nx')
}