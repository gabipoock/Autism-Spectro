function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === '' ? 'flex' : 'none';
    if (chatContainer.style.display === 'flex') {
        sendOptions();
    }
}

function sendOptions() {
    document.getElementById("conversation").innerHTML += "<p><strong>Spectro:</strong> Escolha uma pergunta:</p>";
    document.getElementById("conversation").innerHTML += `
        <div class="chat-options">
            <button class="option1" onclick="sendMessage('O que é autismo?')">O que é autismo?</button>
            <button class="option2" onclick="sendMessage('Quais são os sintomas mais comuns do autismo?')">Quais são os sintomas mais comuns do autismo?</button>
            <button class="option3" onclick="sendMessage('Como o autismo é diagnosticado?')">Como o autismo é diagnosticado?</button>
            <button class="option4" onclick="sendMessage('Existem diferentes níveis de autismo?')">Existem diferentes níveis de autismo?</button>
            <button class="option5" onclick="sendMessage('Como apoiar uma pessoa com autismo?')">Como apoiar uma pessoa com autismo?</button>
        </div>
    `;
    var chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage(question) {
    var response = "";

    switch(question) {
        case "O que é autismo?":
            response = "O autismo, ou Transtorno do Espectro Autista (TEA), é uma condição do neurodesenvolvimento que afeta a comunicação e o comportamento.";
            break;
        case "Quais são os sintomas mais comuns do autismo?":
            response = "Os sintomas comuns incluem dificuldade na comunicação social, comportamentos repetitivos e interesses restritos.";
            break;
        case "Como o autismo é diagnosticado?":
            response = "O diagnóstico é feito por profissionais de saúde, como pediatras e psicólogos, por meio de avaliações comportamentais e observação clínica.";
            break;
        case "Existem diferentes níveis de autismo?":
            response = "Sim, o autismo é um espectro e varia de leve a grave, dependendo da intensidade dos sintomas e da necessidade de suporte.";
            break;
        case "Como apoiar uma pessoa com autismo?":
            response = "Para apoiar, seja paciente, ofereça um ambiente estruturado e incentive a comunicação e a compreensão.";
            break;
        default:
            response = "Desculpe, não entendi sua pergunta.";
            break;
    }

    document.getElementById("conversation").innerHTML += "<p><strong>Você:</strong> " + question + "</p>";

    // Cria um novo parágrafo para a resposta do Spectro sem usar ID repetido
    var responseElement = document.createElement("p");
    responseElement.innerHTML = "<strong>Spectro:</strong> ";
    document.getElementById("conversation").appendChild(responseElement);

    writeResponse(response, responseElement);
}

function writeResponse(text, element) {
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); 
        } else {
            sendOptions();
        }
    }
    typeWriter();
}


const chatOptions = document.querySelectorAll('.chat-options button');
const chatbox = document.getElementById('chatbox');

chatOptions.forEach(option => {
    option.addEventListener('click', function() {
        const userMessage = this.textContent;

        // Cria um novo parágrafo para a mensagem do usuário
        const userMessageElement = document.createElement('p');
        userMessageElement.textContent = 'Você: ' + userMessage;
        chatbox.appendChild(userMessageElement);

        // Simula a resposta do chat (você pode substituir isso pela resposta real)
        setTimeout(() => {
            // Cria um novo parágrafo para a resposta do chat
            const chatResponseElement = document.createElement('p');
            chatResponseElement.textContent = 'Chat: Esta é a resposta à pergunta "' + userMessage + '"';
            chatbox.appendChild(chatResponseElement);

            // Rola a caixa de chat para mostrar a nova mensagem
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 1000);
    });
});