$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CPF:  {
            required: true,
            },
            endereco: {
                required:true,
            },
            CEP: {
                required:true,
            },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, insira um número de telefone',
            CPF: 'Por favor, insira um CPF válido',
            endereco: 'Por favor, insira o seu endereço',
            CEP: 'Por favor, insira um CEP válido'
        },
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
})