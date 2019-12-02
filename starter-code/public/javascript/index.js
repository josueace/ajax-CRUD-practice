const charactersAPI = new APIHandler('http://localhost:8000/characters');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let charId =document.getElementById("getOne").value;
    charactersAPI.getOneRegister(charId);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let charId =document.getElementById('delOne').value;
    charactersAPI.deleteOneRegister(charId);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let Id=document.getElementById("charId").value;
    let charName=document.getElementById("charName");
    let charOccupation=document.getElementById("charOccupation");
    let charWeapon=document.getElementById("charWeapon");
    let charCartoon=document.getElementById("charCartoon");
    const newChar={
      name: charName.value,
      occupation:charOccupation.value,
      weapon:charWeapon.value,
      cartoon:charCartoon.value
    };

    charactersAPI.updateOneRegister(newChar,Id);


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let charName=document.getElementById("createName");
    let charOccupation=document.getElementById("createOccupation");
    let charWeapon=document.getElementById("createWeapon");
    let charCartoon=document.getElementById("createCartoon");
    const newChar={
      name: charName.value,
      occupation:charOccupation.value,
      weapon:charWeapon.value,
      cartoon:charCartoon.value
    }
    charactersAPI.createOneRegister(newChar);
  });
  
});
