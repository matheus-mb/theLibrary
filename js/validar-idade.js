export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value)
  if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity('O usuário não é maior de idade!')
  } 
}

function validaIdade(data) {
  const dataAtual = new Date ()
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

  return dataAtual >= dataMais18
}


// new Date com parenteses vazio pega a data atual
//essa expressão pega a data em que o usuario nasceu e soma 18
//se o resultado for um ano anterior ao que estamos, quer dizer que o usuario ja é maior de idade 
