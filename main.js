$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        console.log(enderecoDaNovaImagem);
        const novoItem =$('<li></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="blank" title="Ver imgaem em tamanho real">
                    Ver imagem e tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})
