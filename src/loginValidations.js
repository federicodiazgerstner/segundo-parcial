$(document).ready(function () {
    const usuariosRegistrados = ['paciente@gmail.com', 'admin@gmail.com', 'doctor@gmail.com']

    // Email Input blur event
    $('#email').on('blur', function () {
        const email = $(this).val();
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
        if (!emailRegex.test(email)) {
            $('#emailError').text('El email es invalido.');
            $(this).addClass('border-red-600');
        }
        else {
            $('#emailError').text('');
            $(this).removeClass('border-red-600');
        }
    });
  
    // $('#password').on('blur', function () {
    //     const password = $(this).val();
    //     const confirmPassword = $('#confirmPassword');
    //     const confirmPasswordVal = confirmPassword.val();
    //     if (!isPasswordValid(password)) {
    //       $('#password-error-message').text('La contraseña debe tener al menos 5 caracteres y contener una mayúscula y una minúscula.');
    //       showError($(this), 'La contraseña debe tener al menos 5 caracteres y contener una mayúscula y una minúscula.');
    //   } else {
    //       $('#password-error-message').text('');
    //       clearError($(this)); // Limpia el error si la contraseña es válida
    //   }
  
    //     if (password !== confirmPasswordVal && confirmPasswordVal !== '') {
    //         // $(this).addClass('is-invalid');
    //         // $(this).addClass('border-danger');
    //         // confirmPassword.addClass('is-invalid');
    //         // confirmPassword.addClass('border-danger');
    //     } else {
    //         // $(this).removeClass('is-invalid');
    //         // $(this).removeClass('border-danger');
    //         // confirmPassword.removeClass('is-invalid');
    //         // confirmPassword.removeClass('border-danger');
    //     }
    // });
  
    // $('#confirmPassword').on('blur', function () {
    //     const password = $('#password');
    //     const passwordVal = password.val();
    //     const confirmPassword = $(this).val();
    //     if (passwordVal !== confirmPassword) {
    //         // $(this).addClass('is-invalid');
    //         // $(this).addClass('border-danger');
    //         // password.addClass('is-invalid');
    //         // password.addClass('border-danger');
    //     } else {
    //         // $(this).removeClass('is-invalid');
    //         // $(this).removeClass('border-danger');
    //         // password.removeClass('is-invalid');
    //         // password.removeClass('border-danger');
    //     }
    // });
  
    // Validación de contraseña
    
    // function isPasswordValid(password) {
    //     // Debe tener al menos 5 caracteres
    //     if (password.length < 5) {
    //         return false;
    //     }
    //     // Debe contener al menos una mayúscula
    //     if (!/[A-Z]/.test(password)) {
    //         return false;
    //     }
    //     // Debe contener al menos una minúscula
    //     if (!/[a-z]/.test(password)) {
    //         return false;
    //     }
    //     return true;
    // }
    
    //Validar usuario registrado
    
    function estaRegistrado(usuario) {
        return usuariosRegistrados.includes(usuario)
    }
    // Inicio de sesión: Validación de contraseña en el formulario de inicio de sesión
    $('#loginForm').submit(function (event) {
        event.preventDefault();
  
        const email = $('#email').val();
        const password = $('#password').val();
        
        if (!email || !password) {
            $('#error-message').text('Por favor, completa todos los campos.');
            return;
        }

        if(!estaRegistrado(email) || password !== '123') {
            $('#emailError').text('El usuario o contraseña no son correctos.');
            return;
        }

        // Si los campos están completos y la contraseña es válida, redirige al usuario al main
        if(email === 'admin@gmail.com')
        {
            window.location.href = 'admin.html'
        }
        else if (email === 'paciente@gmail.com') {
            window.location.href = 'mainPaciente.html'
        }
        else {
            window.location.href = 'mainDoctor.html';
        }
        
    });
  });
  