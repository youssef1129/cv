$(document).ready(()=>{
    $('#fr').hide()
    const myYear = 2001
    const myMonth = 2
    var age =new Date().getFullYear()-myYear
    if(myMonth-(new Date().getMonth()+1)===1){
        age--
    }
    $('.yo').text(age)

    $('#lang').click(()=>{
        if($('#lang').text()==='fr'){
            $('#lang').text('en')
            $('#en').slideToggle(1000)
            $('#fr').slideToggle(1000)
        }
        else if($('#lang').text()==='en'){
            $('#lang').text('fr')
            $('#fr').slideToggle(1000)
            $('#en').slideToggle(1000)
        }
    })

    $('#mail').click(()=>{
        $('#ml').fadeToggle("slow");
        $('#ml').fadeToggle("slow");
        $('#ml').fadeToggle("slow");
        $('#ml').fadeToggle("slow")
    })
})