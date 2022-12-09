function createGame(player1, hour, player2) {
  let player1alt = player1.slice(-1) === "a" ? "da" : "do"
  let player2alt = player2.slice(-1) === "a" ? "da" : "do"
  return `
    <li>
      <div class="jogo">
        <img src="./assets/${player1}.svg" alt="Bandeira ${player1alt} ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/${player2}.svg" alt="Bandeira ${player2alt} ${player2}" />
      </div>
    </li>
    <div class="nome-times">
      <h1>${player1}</h1>
      <h1>${player2}</h1>
    </div>
  `
}

let delay = -0.15
function createCard(date, day, games, finished) {
  delay = delay + 0.15
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <div class="finalizado">
        <h3>${finished}</h3>
      </div>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "09/12",
    "sexta",
    createGame("croácia", "1 <strong style='font-size: 20px'>(4 x 2)</strong> 1", "brasil") +
      createGame("holanda", "2 <strong style='font-size: 20px'>(3 x 4)</strong> 2", "argentina"),
    "encerrados"
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("marrocos", "12:00", "portugal") +
      createGame("inglaterra", "16:00", "frança"),
    "próximos jogos"
  )
