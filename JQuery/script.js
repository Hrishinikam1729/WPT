$(document).ready(function() {

    // $('p').click(function() {
    //         console.log('Youc clicked on p!!', this)
    //         $(this).hide()
    //     })
    // $('*').click()
    // $('p.odd').click()
    // $("p:first").click()

    $('p').dblclick(function() {
        console.log('You double clicked on this', this)
    })

    // $('p').mouseenter(function() {
    //     console.log('you entered', this)
    // })

    $('p').on({ 'click': () => console.log('you clicked', this) }, { 'mouseleave': () => console.log('mouse leaved') })
        // $('#div1').hide(1000, () => console.log('hidden'))
        // $('#div1').show()

    $('#but').click(() => $('#div1').fadeOut(10000))
    $('#div1').slideUp(5000)
    $('#div1').slideDown(5000)

    $('#div1').animate({ opacity: 0.3, height: '150px', width: '350px' }, 1000)
    $('#text1').val('Hrishi niakm')
    $('#div1').addClass('divclass')
        //fadeIn()
        //fadeOut
        //fadeToggle()
        //fadeTo()

    $('#div1').removeClass('divclass')




})




// $(#id)  && $(.class)
// Three Main types of selectors in JQuery
// 1.Id Selector
// 2.Element Selector
// 3.Class Selector