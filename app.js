$(document).ready(function(){
    
    // icons for list items pulled from lineicons folder //
    $('#input').change(function(){

        let input = $(this).val();
        $('ul').append('<li>' + input + ' <i class="lni lni-checkmark-circle"></i><i class="lni lni-cross-circle"></i></li>');
        $(this).val();
    });

    // Delete //
    $('ul').on('click', '.lni-cross-circle', function(){

        $(this).parent('li').fadeOut(200);
    });

    // Mark as "Done" //
    $('ul').on('click', '.lni-checkmark-circle', function(){
        
        $(this).parent('li').toggleClass('checked');
    });

});