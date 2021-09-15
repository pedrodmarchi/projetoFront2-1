window.addEventListener('load', () => {

  const header = document.querySelector('header');
  const logoContainer = document.createElement('div');
  const menuContainer = document.createElement('nav');
  header.appendChild(logoContainer);
  logoContainer.setAttribute('class', 'logo-container');
  logoContainer.innerHTML = `<img src="./assets/logo1.png" class="img-container">`
  header.appendChild(menuContainer);
  
  
  menuContainer.innerHTML = `<div class="menu-container">
                            <button class='btn_card_form'> Home </button>
                             <button class='btn_team_page'> Equipe </button>
                             <button class='btn_contact_page'> Contato </button>
                             </div>`;

  const formBtn = document.querySelector('.btn_card_form');

  let main = document.querySelector('main');
  
  const contactBtn = document.querySelector('.btn_contact_page');
  const teamsBtn = document.querySelector('.btn_team_page');

  teams = () => {

    formBtn.addEventListener('click', cardInput);

    main.innerHTML = `<article class='team_article'> </article>`
    let article = document.querySelector('.team_article');
    article.insertAdjacentHTML('afterbegin', `<div class='member_div'> 
                                              <header class='member_header'>
                                              <img class='member_img' src="https://image.flaticon.com/icons/png/512/270/270811.png">
                                              </header><br>
                                              <h1 class='member_name'> Pedro D'Umbra de Marchi </h1>
                                              <a href="#"> <img src="./assets/github.png" alt=""></a> 
                                              <a href="#"> <img src="./assets/linkedin.png" alt=""></a>'    
                                              </div>`);
    article.insertAdjacentHTML('afterbegin', `<div class='member_div'> 
                                              <header class='member_header'>
                                              <img class='member_img' src="https://image.flaticon.com/icons/png/512/3600/3600937.png">
                                              </header><br>
                                              <h1 class='member_name'> Octavio </h1>
                                              <a href="#"> <img src="./assets/github.png" alt=""></a> 
                                              <a href="#"> <img src="./assets/linkedin.png" alt=""></a>'    
                                              </div>`);
    article.insertAdjacentHTML('afterbegin', `<div class='member_div'> 
                                              <header class='member_header'>
                                              <img class='member_img' src="https://image.flaticon.com/icons/png/512/3600/3600914.png">
                                              </header><br>
                                              <h1 class='member_name'> Douglas Araújo </h1>
                                              <a href="#"> <img src="./assets/github.png" alt=""></a> 
                                              <a href="#"> <img src="./assets/linkedin.png" alt=""></a>'    
                                              </div>`);
    article.insertAdjacentHTML('afterbegin', `<div class='member_div'> 
                                              <header class='member_header'>
                                              <img class='member_img' src="https://image.flaticon.com/icons/png/512/3600/3600919.png">
                                              </header><br>
                                              <h1 class='member_name'> Giovani Silva </h1>
                                              <a href="#"> <img src="./assets/github.png" alt=""></a> 
                                              <a href="#"> <img src="./assets/linkedin.png" alt=""></a>'    
                                              </div>`);


      document.querySelectorAll('.member_div').forEach( e => {
        
          e.addEventListener('mouseover', () => {
            e.style.transform = 'translate(-20px, -20px)';
            e.style.boxShadow = '20px 10px 10px black';
          })
          e.addEventListener('mouseout', () => {
            e.style.transform = 'translate(0px, 0px)';
            e.style.boxShadow = '0px 0px 0px black';
          }) 
        })
  }
  
  teamsBtn.addEventListener('click', teams);


  contact = () => {

    formBtn.addEventListener('click', cardInput);

    main.innerHTML = `<div class='contact_container'>  <img class='contact_img' src="./assets/contact.gif" alt=""> </div>`
    
  }

  contactBtn.addEventListener('click', contact);


  

  cardInput = () => {
  
    formBtn.removeEventListener('click', cardInput);

    let cards = [];
    //cria botão na div
    main.innerHTML = `<div class="btn_form_div"></div>`;
    let div = document.querySelector('.btn_form_div');
    /* main.appendChild(div);
    div.setAttribute('class', 'btn_form_div'); */
    div.innerHTML = `<button type="submit" class="btn-form">Form</button>`
    
    
    let btn = document.querySelector('.btn-form');
  
    btn.addEventListener('click', event => {
      event.preventDefault();
      let form = document.createElement('form');
      main.appendChild(form);
      form.innerHTML = `
      <h1> Formulário </h1>
      <br>  <input type="text" class="title-input" placeholder="título" />
      <br> <input type="url" class="url-input" placeholder="url"  />
      <br> <input type="text" class="desc-input" placeholder="descrição" />
      <br> <input type="submit" class="btn-submit" value="Submit"/>
      ` 
      main.removeChild(div);
  
      let cardDiv = document.createElement('div');
      main.appendChild(cardDiv);
      cardDiv.setAttribute('class', 'div-card-container');
    
      let submit = document.querySelector('.btn-submit');
      submit.addEventListener('click', event => {
        event.preventDefault();
  
        let title = document.querySelector('.title-input').value;
        let url = document.querySelector('.url-input').value;
        let desc = document.querySelector('.desc-input').value;
  
        function Card(title, url, desc) {
          this.title = title;
          this.url = url;
          this.desc = desc;
        }
        
        /* const carta = new Card(title, url, desc); */
        cards.push(new Card(title, url, desc));
        console.log(cards);
        
        cardDiv.innerHTML += `<div class="card-final">
        <h1> ${title.toUpperCase()} </h1><br>
        <img class="img" src="${url}"><br>
        <p> ${desc} </p>
        </div>`;
        
        
        form.reset();

        document.querySelectorAll('.card-final').forEach( e => {
        
          e.addEventListener('mouseover', () => {
            e.style.transform = 'translate(-20px, -20px)';
            e.style.boxShadow = '20px 10px 10px black';
          })
          e.addEventListener('mouseout', () => {
            e.style.transform = 'translate(0px, 0px)';
            e.style.boxShadow = '0px 0px 0px black';
          }) 
        })


        close = () => {
            form.style.display = 'none';
            formBtn.addEventListener('click', () => {
              form.style.display = 'block';
          })
        }

        formBtn.addEventListener('click', close);   
      
      })
    })
  }
  
  formBtn.addEventListener('click', cardInput);
  

  
  
})