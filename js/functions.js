// let's play a game!!

var item = 0;
var audioMacaco = new Audio('audio/macaco.mp3');
var audioNo = new Audio('audio/no.mp3');
audioNo.loop = true;
var audioWin = new Audio('audio/win.mp3');
audioWin.loop = true;

function MarinaStuff(_ele){
    // fala macaco
    saySomething(audioMacaco, 1000);
    
    // adiciona no contador
    item++;
    
    // checa se foram todos se foi muda win pra true
    if (item == 6)
         setTimeout(function(){
            callWin();
        }, 1100);
        
    
    // dá uma piscada na marina na tela falando "yeah!"
    $(".macaco").toggle();
    setTimeout(function(){
        $(".macaco").toggle();
    }, 900);
    
    // item some
    $(".yeah").eq(_ele).toggle(1000);

}


function saySomething(audio, time){
    audio.play();
    console.log("play: "+audio);
    setTimeout(function(){
        audio.pause();
         console.log("pause: "+audio);
    }, time);

}


function NotMarinaStuff(owner){
    //cria box sobre a pessoa
    $("#nop").attr("src", "images/"+owner+"no.png");
    console.log(owner);
    $(".oh-no").toggle();
    setTimeout(function(){
        $(".oh-no").toggle();
    }, 700);
    
    //fala no
    saySomething(audioNo, 500);

}

function callWin(){
    location.href="win.html";
}


$(function(){
    $(".you-won").click(function(){
        saySomething(audioWin, 700);
    });
});