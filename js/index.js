
window.onscroll = function() {myFunction()};
//174.5 231 total 698 693
function myFunction() {
    // if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    //     document.getElementById("myImg").className = "slideUp";
    // }

    var monkeyani = document.getElementById("monkey");

    if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600){

        monkeyani.style.backgroundPosition = '0px 0px';
        monkeyani.style.top = '-231';
    }

    if (document.body.scrollTop > 50 && document.body.scrollTop < 1200 || 
        document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1200){

        monkeyani.style.backgroundPosition = '-173px 0px';
        monkeyani.style.top =  '0';
    }

    if (document.body.scrollTop > 1200 && document.body.scrollTop < 1800 || 
        document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 1800){
    
        monkeyani.style.backgroundPosition = '-346px 0px';
        monkeyani.style.top =  '231';
    }

    if (document.body.scrollTop > 1800 && document.body.scrollTop < 2900 || 
        document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 2900){
        monkeyani.style.backgroundPosition = '-519px 0px';
        monkeyani.style.top =  '462';
    }
    if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900 ){
        monkeyani.style.backgroundPosition = '-692px 0px';
        monkeyani.style.top =  '683';
    }
    

    // if (document.body.scrollTop > 2400 && document.body.scrollTop < 3000 || 
    //     document.documentElement.scrollTop > 2400 && document.documentElement.scrollTop < 3000){

    //     monkeyani.style.backgroundPosition = '-698px 0px';
    //     monkeyani.style.top =  '693';
    // }


    // if (document.body.scrollTop > 3000 && document.body.scrollTop < 3600 || 
    //     document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop < 3600){

    //     monkeyani.style.backgroundPosition = '0 -231px';
    //     monkeyani.style.top =  '924';
    // }
        
    // if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600){

    //     monkeyani.style.backgroundPosition = '-174.5px -231px';
    //     monkeyani.style.top =  '1155';
    // }
}


//1386