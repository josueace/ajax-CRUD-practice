class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    document.getElementsByClassName("characters-container")[0].innerHTML="";
    let container= document.getElementsByClassName("characters-container")[0];
    axios.get(this.BASE_URL)
    .then(response =>{ 
      console.log('Response is: ',response);
      
      for(let i=0;i<response.data.length;i++){
        let leftDiv=document.createElement("div");
        let rightDiv= document.createElement("div");
        let charInfo =document.createElement("div");
        charInfo.setAttribute("class","character-info");
        charInfo.style.display='flex';
        charInfo.style.width="auto";

        let nameDiv = document.createElement('div');
        nameDiv.setAttribute("class","name");
        let nameText =document.createTextNode(`Name:`);
        let nameDiv2 = document.createElement('div');
        let nameText2=document.createTextNode(`${response.data[i].name}`);
        nameDiv2.style.color="orange";


        nameDiv.appendChild(nameText);
        nameDiv2.appendChild(nameText2)

        let occupationDiv=document.createElement("div");
        occupationDiv.setAttribute("class","occupation");
        let occupationText = document.createTextNode(`Occupation: `)
        let occupationDiv2 = document.createElement('div');
        let occupationText2=document.createTextNode(`${response.data[i].occupation}`);
        occupationDiv2.style.color="orange";

        occupationDiv.appendChild(occupationText);
        occupationDiv2.appendChild(occupationText2);

        let cartoonDiv = document.createElement('div');
        cartoonDiv.setAttribute("class","cartoon");
        let cartoonText =document.createTextNode(`Is a Cartoon?`)
        let cartoonDiv2 = document.createElement('div');
        let cartoonText2=document.createTextNode(`${response.data[i].cartoon}`);
        cartoonDiv2.style.color="orange";

        cartoonDiv.appendChild(cartoonText);
        cartoonDiv2.appendChild(cartoonText2);



        let weaponDiv= document.createElement('div');
        weaponDiv.setAttribute("class","weapon");
        let weaponText=document.createTextNode(`Weapon:`)
        let weaponDiv2 = document.createElement('div');
        let weaponText2=document.createTextNode(`${response.data[i].weapon}`);
        weaponDiv2.style.color="orange";

        weaponDiv.appendChild(weaponText);
        weaponDiv2.appendChild(weaponText2);

        leftDiv.appendChild(nameDiv)
        leftDiv.appendChild(occupationDiv)
        leftDiv.appendChild(cartoonDiv)
        leftDiv.appendChild(weaponDiv)

        rightDiv.appendChild(nameDiv2)
        rightDiv.appendChild(occupationDiv2)
        rightDiv.appendChild(cartoonDiv2)
        rightDiv.appendChild(weaponDiv2)

        charInfo.appendChild(leftDiv);
        charInfo.appendChild(rightDiv);
        container.appendChild(charInfo);
      }
      
    })
    .catch(error => {
      console.log("error is:",error);
    })
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL+`/${id}`)
    .then(response => {
      document.getElementsByClassName("characters-container")[0].innerHTML="";
    let container= document.getElementsByClassName("characters-container")[0];

      let leftDiv=document.createElement("div");
        let rightDiv= document.createElement("div");
        let charInfo =document.createElement("div");
        charInfo.setAttribute("class","character-info");
        charInfo.style.display='flex';
        charInfo.style.width="auto";

        let nameDiv = document.createElement('div');
        nameDiv.setAttribute("class","name");
        let nameText =document.createTextNode(`Name:`);
        let nameDiv2 = document.createElement('div');
        let nameText2=document.createTextNode(`${response.data.name}`);
        nameDiv2.style.color="orange";


        nameDiv.appendChild(nameText);
        nameDiv2.appendChild(nameText2)

        let occupationDiv=document.createElement("div");
        occupationDiv.setAttribute("class","occupation");
        let occupationText = document.createTextNode(`Occupation: `)
        let occupationDiv2 = document.createElement('div');
        let occupationText2=document.createTextNode(`${response.data.occupation}`);
        occupationDiv2.style.color="orange";

        occupationDiv.appendChild(occupationText);
        occupationDiv2.appendChild(occupationText2);

        let cartoonDiv = document.createElement('div');
        cartoonDiv.setAttribute("class","cartoon");
        let cartoonText =document.createTextNode(`Is a Cartoon?`)
        let cartoonDiv2 = document.createElement('div');
        let cartoonText2=document.createTextNode(`${response.data.cartoon}`);
        cartoonDiv2.style.color="orange";

        cartoonDiv.appendChild(cartoonText);
        cartoonDiv2.appendChild(cartoonText2);



        let weaponDiv= document.createElement('div');
        weaponDiv.setAttribute("class","weapon");
        let weaponText=document.createTextNode(`Weapon:`)
        let weaponDiv2 = document.createElement('div');
        let weaponText2=document.createTextNode(`${response.data.weapon}`);
        weaponDiv2.style.color="orange";

        weaponDiv.appendChild(weaponText);
        weaponDiv2.appendChild(weaponText2);

        leftDiv.appendChild(nameDiv)
        leftDiv.appendChild(occupationDiv)
        leftDiv.appendChild(cartoonDiv)
        leftDiv.appendChild(weaponDiv)

        rightDiv.appendChild(nameDiv2)
        rightDiv.appendChild(occupationDiv2)
        rightDiv.appendChild(cartoonDiv2)
        rightDiv.appendChild(weaponDiv2)

        charInfo.appendChild(leftDiv);
        charInfo.appendChild(rightDiv);
        container.appendChild(charInfo);
      console.log("response is:",response)})
    .catch(error => console.log("error is",error))
  }

  createOneRegister (data) {
    axios.post(this.BASE_URL,data)
    .then(response =>{console.log("response is:",response)})
    .catch(error =>{console.log("error is",error)})

  }

  updateOneRegister (data,id) {
    let updateButton= document.getElementsByClassName('send-data')[1];
    axios.put(this.BASE_URL+`/${id}`,data)
    .then(response => {
      updateButton.style.backgroundColor="green"
      console.log("response is:",response)})
    .catch(error => {
      updateButton.style.backgroundColor="red";
      console.log("error is",error)})

  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL+`/${id}`)
    .then(
      response =>{
        document.getElementById('delete-one').style.backgroundColor="green";
      console.log("response is:",response)})
    .catch(error => {
      document.getElementById('delete-one').style.backgroundColor="red";
      console.log("error is:"+error)})
  }
}
