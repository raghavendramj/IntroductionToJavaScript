
var out_age = 48
function topFunction(){
    var age  = 24;
    innerFunction();

    function innerFunction() {
        var i_age = 12;
        lastInnerFunction();
        
        function lastInnerFunction() {
             var z_age = 6;
                console.log(z_age, i_age, age, out_age);
        }
    
    }
    
}

topFunction();