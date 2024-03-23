let numero = Math.floor(Math.random() * 100) + 1
let chances = 6
let erros = 0
let palpites = []

function attDica(mensagem) {
  document.getElementById('outDica').textContent = mensagem
}

function attErro() {
  document.getElementById('outErros').textContent = erros
}

function ChancesBurro() {
  document.getElementById('outChances').textContent = chances
}

function limparCampo() {
  document.getElementById('inNumero').value = ''
}

function PcdPalpite() {
  const palpite = parseInt(document.getElementById('inNumero').value)

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    alert('Por favor, insira um número válido entre 1 e 100.')
    return
  }

  palpites.push(palpite)

  if (palpite === numero) {
    alert(`Parabéns! Você acertou o número secreto (${numero}) em ${6 - chances + 1} tentativa(s).`)
    document.getElementById('btnJogar').classList.remove('oculta')
    document.getElementById('btnApostar').setAttribute('disabled', 'disabled')
  } else {
    erros++
    chances--

    if (chances === 0) {
      alert(`Suas chances acabaram! O número secreto era ${numero}.`)
      document.getElementById('btnJogar').classList.remove('oculta')
      document.getElementById('btnApostar').setAttribute('disabled', 'disabled')
    } else {
      let mensagem = palpite < numero ? 'Tente um número maior.' : 'Tente um número menor.'
      attDica(mensagem)
      attErro()
      ChancesBurro()
      limparCampo()
    }
  }
}

function reiniciarJogo() {
  numero = Math.floor(Math.random() * 100) + 1
  chances = 6
  erros = 0
  palpites = []
  attDica('É um número entre 1 e 100')
  attErro()
  ChancesBurro()
  limparCampo()
  document.getElementById('btnJogar').classList.add('oculta')
  document.getElementById('btnApostar').removeAttribute('disabled')
}

document.getElementById('btnApostar').addEventListener('click', PcdPalpite)
document.getElementById('btnJogar').addEventListener('click', reiniciarJogo)
