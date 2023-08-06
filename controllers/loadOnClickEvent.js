const sendMessage = () => {
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const name = nameInput.value;
    const message = messageInput.value;
    const nameErrorMessage = document.querySelector(".input-message-error");
    const messageErrorMessage = document.querySelector(".textarea-menssage-error");
  
    nameErrorMessage.style.display = name === "" ? "block" : "none";
    messageErrorMessage.style.display = message === "" ? "block" : "none";
  
    console.log(name, message);
  
    if (name !== "" && message !== "") {
      alert(`¡Gracias ${name} por escribirnos!`);
      nameInput.value = "";
      messageInput.value = "";
    }
  };
  