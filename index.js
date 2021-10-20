$(function(){
    var index = 0

    $('.point').click(function() {
        index = $(this).index()
        console.log($(this).index())
        
        $('.slider').animate({
            left: `${index*-100}%`
        },1000)
    })

    $('.right-arrow').click(function() {
        if(index < 4){
            index ++
            $('.slider').animate({
                left: `-${index*100}%`
            }, 1000)
        } else{
            index = -1
            $('.slider').animate({
                left: `-${index*100}%`
            }, 1000)
        } 

    }) 
    

    $('.left-arrow').click(function() {
        if(index > 0){
            index --
            $('.slider').animate({
                left  : `-${index*100}%`
            }, 1000)
        }else{
            index = 4
            $('.slider').animate({
                left  : `-${index*100}%`
            }, 1000)
        }
    })



})