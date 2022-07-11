const elementoResposta = document.querySelector('#resposta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Você poderia ser bom hoje. Mas, em vez disso, você escolhe o amanha - Marco Aurélio',
  'Sofre mais do que o necessário quem sofre antes do necessário - Sêneca',
  'Adote você mesmo novos hábitos: consolide seus princípios colocando-os em prática - Epicteto',
  'Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida. – Sêneca.',
  'A riqueza não consiste em ter grandes posses, mas em ter poucas necessidades. – Epicteto',
  'Você tem poder sobre sua mente – não sobre eventos externos. Perceba isso e você encontrará a sua força. – Marco Aurélio.',
  'Sorte é o que acontece quando a preparação encontra a oportunidade. – Sêneca',
  'Todos nós podemos errar, mas a perseverança no erro é a verdadeira loucura. – Zenão.',
  'A morte, portanto, o mais terrível dos males, não é nada para nós, visto que, quando existimos, a morte não chegou e, quando a morte chegou, nós não existimos. – Epicuro.',
  'Se você está angustiado por qualquer coisa externa, a dor não se deve à coisa em si, mas à sua estimativa dela; e isso você tem o poder de revogar a qualquer momento. – Marco Aurélio.',
  'É loucura um homem orar aos deuses por aquilo que ele tem o poder de obter por si mesmo. – Epicuro.',
  'Primeiro diga a si mesmo o que você seria; então faça o que você tem que fazer. – Epicteto.',
  'Estamos mais freqüentemente assustados do que feridos; e sofremos mais na imaginação do que na realidade. – Sêneca.',  
  'Escolha não ser ofendido, e você não se sentirá ofendido. Não se sinta ofendido, E você não terá sido - Marco Aurélio.',
  'O que fazemos agora ecoa pela eternidade. – Marco Aurélio.',
  'Não é a morte que um homem deve temer, mas ele deve temer nunca começar a viver. -  Marco Aurélio.',
  'Muitas vezes me perguntei como é que todo homem se ama mais do que todos os outros homens, mas dá menos valor à sua própria opinião do que à dos outros. – Marco Aurélio.',
  'Muitas vezes erra não apenas quem faz, mas também quem deixa de fazer alguma coisa. - Marco Aurélio',
  'Não perca tempo discutindo sobre o que um bom homem deve ser. Seja. - Marco Aurélio',
  'Você tem medo de morrer, mas o que é sua vida hoje senão morte? - Sêneca',
  'Não nos atrevemos a muitas coisas porque são difíceis, mas são difíceis porque não nos atrevemos a fazê-las - Sêneca',
  'Se o problema possui solução não devemos nos preocupar com ele. E se não possui solução, de nada adianta nos preocuparmos. - Epicteto',
  'Tudo o que acontece é suportável ou não. Se for suportável, então aguente. Pare de reclamar. Se for insuportável... então pare de reclamar. Sua destruição também significará o fim. - Marco Aurélio.'

]
// clicar em fazer pergunta
function fazerPergunta() {
  
  buttonPerguntar.setAttribute('disabled', true)

  // gerar numero aletorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // sumir a resposta depois de 8 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 8000)
}