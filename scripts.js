function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();

    if (userMessage == "") return;

    // Add user's message to chat box
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user');
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);

    // Clear input field
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message', 'bot');
        botMessageElement.textContent = 'This is a simulated response.';
        chatBox.appendChild(botMessageElement);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
