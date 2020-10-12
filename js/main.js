let theInput = document.querySelector(".json-container .add-box input"),
inputButton = document.querySelector(".get-content"),
contentPage = document.querySelector(".content-page");
window.onload = function(){
    theInput.focus();
}
inputButton.onclick = function(){
    if(theInput.value == "" ){
        contentPage.innerHTML = `<span>Sorry! You Enter Wrong Value.</span>`;
    }else if (theInput.value ==="posts"){
        fetch(`https://jsonplaceholder.typicode.com/${theInput.value}`)
         
        .then((response) => response.json())
        .then((contWeb) =>  {
        contentPage.innerHTML ="";
       contWeb.forEach(element => {
        let mainDiv = document.createElement("div");
        let title = document.createElement("div");
        let titleText = document.createTextNode(`${element.title}`);
        title.appendChild(titleText);
        title.className = "title-div";
        mainDiv.appendChild(title);

        let bodyArticle = document.createElement("div");
        let bodyText = document.createTextNode(element.body);
        bodyArticle.appendChild(bodyText);
        mainDiv.appendChild(bodyArticle);
        
         
        let idArticl = document.createElement("span");
        let idText = document.createTextNode(element.id);
        idArticl.appendChild(idText);
        idArticl.className = "idno";
        mainDiv.appendChild(idArticl);




        mainDiv.className = "main-Div";
        
        contentPage.appendChild(mainDiv);
           
       });
        });
       
}else if (theInput.value === "comments"){
    fetch(`https://jsonplaceholder.typicode.com/${theInput.value}`)
         
    .then((response) => response.json())
    .then((contWeb) =>  {
    contentPage.innerHTML ="";
   contWeb.forEach(element => {
    let mainDiv = document.createElement("div");
    let nameUse = document.createElement("div");
    let nameText = document.createTextNode(`user name: ${element.name}`);
    nameUse.appendChild(nameText);
    nameUse.className = "title-div";
    mainDiv.appendChild(nameUse);

    let bodyArticle = document.createElement("div");
    let bodyText = document.createTextNode(element.body);
    bodyArticle.appendChild(bodyText);
    mainDiv.appendChild(bodyArticle);
    
     
    let idArticl = document.createElement("span");
    let idText = document.createTextNode(element.id);
    idArticl.appendChild(idText);
    idArticl.className = "idno";
    mainDiv.appendChild(idArticl);

    

    let emailUser = document.createElement("span");
    let emailText = document.createTextNode(`E-mail: ${element.email}`);
    emailUser.appendChild(emailText);
    emailUser.className = "email-use";
    mainDiv.appendChild(emailUser);





    mainDiv.className = "main-Div";
    
    contentPage.appendChild(mainDiv);
       
   });
    });
}else{
    fetch(`https://jsonplaceholder.typicode.com/${theInput.value}`)
         
    .then((response) => response.json())
    .then((contWeb) =>  {
    contentPage.innerHTML ="";
   contWeb.forEach(element => {
    let mainDiv = document.createElement("div");
    let titlePhoto = document.createElement("div");
    let titlePhotoText = document.createTextNode(element.title);
    titlePhoto.appendChild(titlePhotoText);
    titlePhoto.className = "title-div";
    mainDiv.appendChild(titlePhoto);

    let linkPhoto = document.createElement('a');
    let bodyPhotoText = document.createTextNode("press here to go to photo");
    linkPhoto.appendChild(bodyPhotoText);
    linkPhoto.href = element.url;
    linkPhoto.setAttribute("target","_blank");
    linkPhoto.className = "link-photo";
    mainDiv.appendChild(linkPhoto);
    
    let linkPhoto1 = document.createElement('a');
    let bodyPhotoText1 = document.createTextNode("press here to go to photo");
    linkPhoto1.appendChild(bodyPhotoText1);
    linkPhoto1.href = element.url;
    linkPhoto1.setAttribute("target","_blank");
    linkPhoto1.className = "link-photo1";
    mainDiv.appendChild(linkPhoto1);





    let idPhoto = document.createElement("span");
    let idText = document.createTextNode(element.id);
    idPhoto.appendChild(idText);
    idPhoto.className = "idno";
    mainDiv.appendChild(idPhoto);




    mainDiv.className = "main-Div";
    
    contentPage.appendChild(mainDiv);
       
   });
    });
}



}

