// Função para validar o formulário antes de enviar
function validateForm() {
    // Obtendo os valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Validação de nome (não pode ser vazio)
    if (name.trim() === '') {
      alert('Por favor, insira seu nome.');
      return false; // Impede o envio do formulário
    }
  
    // Validação de e-mail (não pode ser vazio e precisa ter formato correto)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '' || !emailPattern.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return false; // Impede o envio do formulário
    }
  
    // Validação de mensagem (não pode ser vazia)
    if (message.trim() === '') {
      alert('Por favor, insira sua mensagem.');
      return false; // Impede o envio do formulário
    }
  
    // Se a validação passar, exibe a mensagem de confirmação
    document.getElementById('contact-form').reset(); // Limpa o formulário
    document.getElementById('confirmation-message').style.display = 'block'; // Exibe a mensagem de confirmação
    return false; // Impede o envio do formulário para o servidor (simulação de envio)
  }