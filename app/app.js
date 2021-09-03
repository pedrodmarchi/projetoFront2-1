load = () => {
  
  let cards = [];
  //cria botão na div
  let div = document.createElement('div');
  document.body.appendChild(div);
  div.innerHTML = `<button type="submit" class="btn-form">Form</button>`
  
  let btn = document.querySelector('.btn-form');
  
  
  btn.addEventListener('click', event => {
    event.preventDefault();
    let form = document.createElement('form');
    document.body.appendChild(form);
    form.removeAttribute('novalidate');
    form.innerHTML = `<input type="text" class="title-input" placeholder="título" ></input> 
    <br> <input type="url" class="url-input" placeholder="fonte da imagem"  />
    <br> <input type="text" class="desc-input" placeholder="descrição"  />
    <br> <input type="submit" class="btn-submit" value="Submit"/>` 
    document.body.removeChild(div);

    /* let inputs = document.querySelector('input');
    inputs.setAttribute('required', required);
     */
    


    let cardDiv = document.createElement('div');
    document.body.appendChild(cardDiv);
  
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
                          <img class="img" src="${url}"><br>
                          <h1> ${title} </h1><br>
                          <p> ${desc} </p>
                          </div>`;
   
    
    
    title = '';
    url = '';
    desc = ''; 
    })

  
  })

  
}
window.addEventListener('load', load);



