// Clientes
document.getElementById('client-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let telefone = document.getElementById('telefone').value;

    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push({ id: clientes.length + 1, nome, cpf, telefone });
    localStorage.setItem('clientes', JSON.stringify(clientes));

    alert('Cliente cadastrado com sucesso!');
    document.getElementById('client-form').reset();
    listarClientes();
});

function listarClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    let clientTable = document.getElementById('client-table').getElementsByTagName('tbody')[0];
    clientTable.innerHTML = '';
    clientes.forEach(cliente => {
        let row = clientTable.insertRow();
        row.insertCell(0).innerText = cliente.id;
        row.insertCell(1).innerText = cliente.nome;
        row.insertCell(2).innerText = cliente.cpf;
        row.insertCell(3).innerText = cliente.telefone;
    });
}

// Produtos
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let categoria = document.getElementById('categoria').value;
    let preco = document.getElementById('preco').value;
    let quantidade = document.getElementById('quantidade').value;
    let localizacao = document.getElementById('localizacao').value;

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push({ id: produtos.length + 1, nome, categoria, preco, quantidade, localizacao });
    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Produto cadastrado com sucesso!');
    document.getElementById('product-form').reset();
    listarProdutos();
});

function listarProdutos() {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    let productTable = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    productTable.innerHTML = '';
    produtos.forEach(produto => {
        let row = productTable.insertRow();
        row.insertCell(0).innerText = produto.id;
        row.insertCell(1).innerText = produto.nome;
        row.insertCell(2).innerText = produto.categoria;
        row.insertCell(3).innerText = produto.preco;
        row.insertCell(4).innerText = produto.quantidade;
        row.insertCell(5).innerText = produto.localizacao;
    });
}

// Estoque
document.getElementById('stock-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let produtoId = document.getElementById('produto-id').value;
    let entrada = document.getElementById('entrada').value || 0;
    let saida = document.getElementById('saida').value || 0;
    let fornecedor = document.getElementById('fornecedor').value;
    let pontoReposicao = document.getElementById('ponto-reposicao').value;

    let estoque = JSON.parse(localStorage.getItem('estoque')) || [];
    estoque.push({ id: estoque.length + 1, produtoId, entrada, saida, fornecedor, pontoReposicao });
    localStorage.setItem('estoque', JSON.stringify(estoque));

    alert('Movimentação de estoque registrada com sucesso!');
    document.getElementById('stock-form').reset();
    listarEstoque();
});

function listarEstoque() {
    let estoque = JSON.parse(localStorage.getItem('estoque')) || [];
    let stockTable = document.getElementById('stock-table').getElementsByTagName('tbody')[0];
    stockTable.innerHTML = '';
    estoque.forEach(item => {
        let row = stockTable.insertRow();
        row.insertCell(0).innerText = item.id;
        row.insertCell(1).innerText = item.produtoId;
        row.insertCell(2).innerText = item.entrada;
        row.insertCell(3).innerText = item.saida;
        row.insertCell(4).innerText = item.fornecedor;
        row.insertCell(5).innerText = item.pontoReposicao;
    });
}

listarClientes();
listarProdutos();
listarEstoque();
