
<!DOCTYPE html>
<html>
<head>
  <title>PavanMeet - Conectando Estudantes</title>
  <style>
    /* Estilos CSS omitidos para maior clareza */
  </style>
</head>
<body>
  <header>
    <h1>PavanMeet</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#">Início</a></li>
      <li><a href="#">Perfil</a></li>
      <li><a href="#">Amigos</a></li>
      <li><a href="#">Mensagens</a></li>
      <li><a href="#">Configurações</a></li>
    </ul>
  </nav>
  
  <section>
    <h2>Bem-vindo ao PavanMeet</h2>
    <p>Conecte-se com estudantes de todo o mundo!</p>
    
    <h3>Recursos:</h3>
    <ul>
      <li>Perfil personalizado</li>
      <li>Adicionar amigos</li>
      <li>Trocar mensagens</li>
    </ul>
    
    <input type="text" id="friendNameInput" placeholder="Digite o nome do seu amigo">
    <button id="addFriendButton">Adicionar Amigo</button>
    <div id="friendList"></div>
  </section>
  
  <footer>
    <p>&copy; 2023 PavanMeet. Todos os direitos reservados.</p>
  </footer>

  <script>
    // JavaScript para adicionar amigos
    
    // Array para armazenar a lista de amigos
    var friends = [];
    
    // Função para adicionar um amigo à lista
    function addFriend() {
      var friendNameInput = document.getElementById("friendNameInput");
      var friendName = friendNameInput.value;
      
      if (friendName !== "") {
        friends.push(friendName);
        friendNameInput.value = "";
        displayFriends();
      }
    }
    
    // Função para exibir a lista de amigos
    function displayFriends() {
      var friendListElement = document.getElementById("friendList");
      friendListElement.innerHTML = "";
      
      for (var i = 0; i < friends.length; i++) {
        var friendElement = document.createElement("p");
        friendElement.textContent = friends[i];
        friendListElement.appendChild(friendElement);
      }
    }
    
    // Event listener para o botão de adicionar amigo
    var addFriendButton = document.getElementById("addFriendButton");
    addFriendButton.addEventListener("click", addFriend);
  </script>
</body>
</html>
