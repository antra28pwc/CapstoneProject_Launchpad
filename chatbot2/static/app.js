class Chatbox {  
  constructor() {  
    this.args = {  
      openButton: document.querySelector('.chatbox__button'),  
      chatBox: document.querySelector('.chatbox__support'),  
      sendButton: document.querySelector('.send__button')  
    };  
    this.state = false;  
    this.messages = [];  
  }  
  
  display() {  
    const { openButton, chatBox, sendButton } = this.args;  
    openButton.addEventListener('click', () => this.toggleState(chatBox));  
    sendButton.addEventListener('click', () => this.onSendButton(chatBox));  
    const node = chatBox.querySelector('input');  
    node.addEventListener('keyup', ({ key }) => {  
      if (key === 'Enter') {  
        this.onSendButton(chatBox);  
      }  
    });  
  }  
  
  toggleState(chatBox) {  
    this.state = !this.state;  
    if (this.state) {  
      chatBox.classList.add('chatbox--active');  
    } else {  
      chatBox.classList.remove('chatbox--active');  
    }  
  }  
  
  onSendButton(chatBox) {  
    const textField = chatBox.querySelector('input');  
    let text = textField.value;  
    if (text === '') {  
      return;  
    }  
    let msg = { name: 'User', message: text };  
    this.messages.push(msg);  
    fetch($SCRIPT_ROOT + '/predict', {  
      method: 'POST',  
      body: JSON.stringify({ message: text }),  
      mode: 'cors',  
      headers: {  
        'Content-Type': 'application/json'  
      },  
    })  
      .then(r => r.json())  
      .then(r => {  
        let msg = { name: 'Sam', message: r.answer };  
        this.messages.push(msg);  
        this.updateChatText(chatBox);  
        textField.value = '';  
      })  
      .catch((error) => {  
        console.error('Error:', error);  
        this.updateChatText(chatBox);  
        textField.value = '';  
      });  
  }  
  
  updateChatText(chatBox) {  
    let html = '';  
    this.messages.slice().reverse().forEach(function (item, index) {  
      if (item.name === 'Sam') {  
        html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';  
      } else {  
        html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';  
      }  
    });  
    const chatMessage = chatBox.querySelector('.chatbox__messages');  
    chatMessage.innerHTML = html;  
  }  
}  
  
const chatbox = new Chatbox();  
chatbox.display();