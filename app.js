function solve(){

  let createBtn = document.querySelector('.btn');
  createBtn.addEventListener('click',(ev)=>{
    ev.preventDefault()
    doCreateBtn();
  })

function doCreateBtn() {
  let section = document.querySelector('main > section');
  // console.log(section)
  let inputs = document.querySelectorAll('input ,textarea');
  // console.log(inputs)

  let archiveSection = document.querySelector('.archive-section > ol');

  function createElement(type,name) {
    let result = document.createElement(type);
    if (name !== undefined){
      result.textContent = name;
    }
    return result;
  }

  function article(name, title, category , content) {
    this.name = name;
    this.title = title;
    this.category = category;
    this.content = content;



  }


  let user = new article(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value);
  console.log(user)

  let articles = createElement('article');

  let h1Title = createElement('h1',user.title);
  let pCategory = createElement('p','Category:');
  let strong = createElement('strong',user.category);
  let pCreator = createElement('p','Creator:');
  let strong2 = createElement('strong',user.name);
  let pContent = createElement('p',user.content);

  articles.appendChild(h1Title);

  pCategory.appendChild(strong);
  articles.appendChild(pCategory);

  pCreator.appendChild(strong2);
  articles.appendChild(pCreator);

  articles.appendChild(pContent);


  let divBtn = document.createElement('div')
  divBtn.className = 'buttons';
  let btnDelete = createElement('button','Delete');
  btnDelete.className = 'btn delete';
  btnDelete.addEventListener('click',(ev)=>{
    console.log(ev.target.parentNode.parentNode.parentNode.removeChild(ev.target.parentNode.parentNode))})
  let btnArchive = createElement('button','Archive');
  btnArchive.className = 'btn archive';
  btnArchive.addEventListener('click',(ev)=>{

      let getH1 =ev.target.parentNode.parentNode.querySelector('h1');
    archiveSection.appendChild(getH1);
    ev.target.parentNode.parentNode.parentNode.removeChild(ev.target.parentNode.parentNode);

  })

  divBtn.appendChild(btnDelete);
  divBtn.appendChild(btnArchive);

  articles.appendChild(divBtn);
  section.appendChild(articles)
}



  }
