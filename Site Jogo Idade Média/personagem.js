class Formulario {
    constructor() {
     this.formulario = '';
     this.arrayFormulario = [];
    }
    adicionar() {
     let formulario = this.lerDados();
     if (this.validaCampos(formulario) == true) {
          this.add(formulario);
     }

     this.listaTabela();
    }
    listaTabela () {
        let tbody = document.getElementById ('tbody');
        for (let i = 0; i < this.arrayContact.length; i++) {
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_nação = tr.insertCell();
            let td_habilidades = tr.insertCell();

            td_nome.innerText = this.arrayFormulario[i].nomePersonagem;
            td_nacoes.innerText = this.arrayFormulario[i].nacao;
            td_habilidades.innerText = this.arrayFormulario[i].habilidade;
        }
    }
    add (formulario) {
     this.arrayFormulario.push();
     this.formulario++;
    }
    lerDados() {
    let formulario = {}

    formulario.nomePersonagem = document.getElementById('nomePersonagem').value;
    formulario.nacao = document.getElementById('nacao').value;
    formulario.habilidades = document.getElementById('habilidade').value;


    return formulario;

    }
 validaCampos (formulario) {
    let msg = '';
    if (formulario.nomePersonagem == '') {
        msg += 'Informe o nome do personagem \n';
    }
    if (formulario.nacao == '') {
        msg += 'Informe a nação do personagem \n';
    }
    if (formulario.habilidades == '') {
        msg += 'Informe as habilidades do personagem \n';
    }

    if (msg != '') {
        alert (msg);
        return false
    }

    return true;

 }
}
var formulario = new formulario();
