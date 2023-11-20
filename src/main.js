$(document).ready(function () {
    $('#profesionales').click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        $('#profesionales-section').removeClass('hidden')
        $('#chats-section').addClass('hidden')
        $('#mi-perfil-section').addClass('hidden')
    });
    $('#chats').click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        $('#chats-section').removeClass('hidden')
        $('#profesionales-section').addClass('hidden')
        $('#mi-perfil-section').addClass('hidden')
    });
    $('#miperfil').click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        $('#mi-perfil-section').removeClass('hidden')
        $('#chats-section').addClass('hidden')
        $('#profesionales-section').addClass('hidden')
    });
    $('#editnombre').click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        let value = $(this).text();
        const nombreInput = $('#nombre')
        let placeholder = nombreInput.prop('placeholder')
        if(value === 'Editar') {
            nombreInput.addClass('text-black-500')
            nombreInput.prop('disabled', false);
            nombreInput.val(placeholder)
            $(this).text('Guardar')
            $(this).addClass('bg-blue-500')
            $(this).addClass('hover:bg-blue-500')
        }
        else {
            $(this).text('Editar')
            nombreInput.removeClass('text-black-500')
            nombreInput.prop('disabled', true);
            $(this).removeClass('bg-blue-500')
            $(this).removeClass('hover:bg-blue-500')
            nombreInput.prop('placeholder', nombreInput.val())
            nombreInput.val('')
        }
    });
    $('#editemail').click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        let value = $(this).text();
        const emailInput = $('#email')
        let placeholder = emailInput.prop('placeholder')
        if(value === 'Editar') {
            emailInput.addClass('text-black-500')
            emailInput.prop('disabled', false);
            emailInput.val(placeholder)
            $(this).text('Guardar')
            $(this).addClass('bg-blue-500')
            $(this).addClass('hover:bg-blue-500')
        }
        else {
            $(this).text('Editar')
            emailInput.removeClass('text-black-500')
            emailInput.prop('disabled', true);
            $(this).removeClass('bg-blue-500')
            $(this).removeClass('hover:bg-blue-500')
            emailInput.prop('placeholder', emailInput.val())
            emailInput.val('')
        }
    }); 
});