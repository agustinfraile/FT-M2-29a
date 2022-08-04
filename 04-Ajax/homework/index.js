// boton del html que muestra los amigos
const buttonFriendsDOM = document.querySelector('#boton');

// lista del html que mostrara los amigos
const listFriendsDOM = document.querySelector('#lista');

// boton de busqueda de amigo
const buttonSearchFriendDOM = document.querySelector('#search');

// input de busqueda de amigo
const inputSearchFriendDOM = document.querySelector('#input');

// span de muestra de amigo encontrado
const spanSearchFriend = document.querySelector('#amigo');

// boton de eliminar amigo
const buttonDeleteFriendDOM = document.querySelector('#delete');

// input para eliminar el amigo
const inputDeleteFriendDOM = document.querySelector('#inputDelete');

// span para advertir que el amigo ya esta borrado
const spanDeleteFriendDOM = document.querySelector('#sucess');

const getAmigos = () => {
    // METODO GET PARA TRAER INFO
    $.get('http://localhost:5000/amigos', res => {

        // limpio el dom
        listFriendsDOM.innerHTML = '';

        // itero la lista de objetos y voy mostrando en el DOM los nombres
        for(friend in res) {
            listFriendsDOM.append(`<li>${res[friend].name}</li>`);
            // console.log(res[friend].name)
        };
    });
}

// evento para que al hacer click aparezcan todos los amigos
buttonFriendsDOM.addEventListener('click', getAmigos);

// evento para que al hacer click busque los amigos que le paso en el input
buttonSearchFriendDOM.addEventListener('click', () => {
    // METODO GET PARA TRAER LA INFO
    $.get(`http://localhost:5000/amigos/${inputSearchFriendDOM.value}`, res => {
        spanSearchFriend.innerHTML = res.name;
    });
});

// evento para que al hacer click elimine los amigos que le paso en el input
buttonDeleteFriendDOM.addEventListener('click', () => {
    // METODO DELETE PARA BORRAR LA INFO
    $.ajax({
        url: `http://localhost:5000/amigos/${inputDeleteFriendDOM.value}`,
        type: 'DELETE',
        success: () => {
            spanDeleteFriendDOM.innerHTML = `La persona amiga con id numero ${inputDeleteFriendDOM.value} ha sido borrada con exito`;
            getAmigos(); //invoco para borrar el amigo en la lista principal
        }
    });
});