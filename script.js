// Variáveis para guardar a vida dos jogadores e defesa
let vida1 = 100; // Vida do Jogador 1
let vida2 = 100; // Vida do Jogador 2
let defesa1 = false; // Verifica se Jogador 1 está defendendo
let defesa2 = false; // Verifica se Jogador 2 está defendendo

// Função para fazer o ataque
function ataque(atacante, defensor, tipoAtaque) {
    let dano = 0; // Inicializa o dano

    // Define o dano baseado no tipo de ataque
    if (tipoAtaque === 'Pancada') {
        dano = 10; // Dano da Pancada
    } else if (tipoAtaque === 'Chute') {
        dano = 15; // Dano do Chute
    } else if (tipoAtaque === 'Ataque Especial') {
        dano = 20; // Dano do Ataque Especial
    }

    // Verifica quem está sendo atacado
    if (defensor === 'player1') {
        if (defesa2) {
            dano /= 2; // Dano reduzido pela defesa
            defesa2 = false; // Resetar defesa do jogador 2
        }
        vida1 -= dano; // Reduz a vida do Jogador 1
        document.getElementById('life1').innerText = `❤️ ${vida1}`; // Atualiza a vida na tela
    } else {
        if (defesa1) {
            dano /= 2; // Dano reduzido pela defesa
            defesa1 = false; // Resetar defesa do jogador 1
        }
        vida2 -= dano; // Reduz a vida do Jogador 2
        document.getElementById('life2').innerText = `❤️ ${vida2}`; // Atualiza a vida na tela
    }

    // Verifica se alguém venceu
    verificarVencedor();
}

// Função para defender
function defender(jogador) {
    if (jogador === 'player1') {
        defesa1 = true; // Jogador 1 se defende
        alert("Jogador 1 está se defendendo!"); // Mostra alerta
    } else {
        defesa2 = true; // Jogador 2 se defende
        alert("Jogador 2 está se defendendo!"); // Mostra alerta
    }
}

// Função para verificar o vencedor
function verificarVencedor() {
    if (vida1 <= 0) {
        document.getElementById('resultado').innerText = "🏆 Jogador 2 venceu! 🥳"; // Jogador 2 venceu
    } else if (vida2 <= 0) {
        document.getElementById('resultado').innerText = "🏆 Jogador 1 venceu! 🥳"; // Jogador 1 venceu
    }
}