$(document).ready(function(){
    $('#numero-telefone').mask('(00) 00000-0000',{
        placeholder: 'tel:(00) 00000-0000'
    })

    $('#numero-cpf').mask('000.000.000-00',{
        placeholder: 'Cpf:0000.000.000-00'
    })

    $('#numero-cep').mask('00000-000', {
        placeholder: 'Cep:00000-000'
    })

})
