

const contents = getNode('.contents');
const textField = getNode('#comment37');
const commentContainer = getNode('.comment_container');




function createComment(user,value){
  const template = /* html */ `
    <div class="id" data-comment-id="${Date.now()}">
        <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">${user}</a></div>
                <div class="text_field"> ${value} </div>
            </div>
        </div>
    </div>
  `
  return template;
}



function clearContents(target){
  
  if(target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA'){
    //인풋이나 텍스트에리아가 있으면 값을 비움
    target.value = ''
    return;
  }

  target.textContent = ''

}

function endScroll(target){
  target.scrollTop = target.scrollHeight;
  //셋팅을 하는 것
  return target.scrollHeight; 
  // 값 재활용하려고 return 
}


const handleArticle =(e) =>{

// 대상 찾기
//여기서 this 쓰면 위도우 찾음
// target 버튼 처음 누른 대상 currentTarget 이벤트가 걸려이있는 대상
// console.log('target');

let target = e.target
let name = target.dataset.name
// console.log(name); 나오는게 있고 안나오는 게 있어 그래서 if(!name)return이런거 씀
//이번엔 어떻게든 찾게 만들것임

//버튼의 데이터네임을 가져오면 밑에 안돌아 while (!name) 쓰는 이유가 name 을 찾지 못할때 순환돌면서 찾기 위해서


while(!name){
  
  target = target.parentNode;
//tatget.parentElement 가능  
//parentNode와 parentElementNode차이?
  //target이 바뀌었으니까 target.dataset.name다시 수집
  name = target.dataset.name;


  if(target.nodeName === 'BODY'){
    //nodeName찾으면 대문자로 반환하기 때문에 대문자로 써주는것
    target = null;
    //명시적으로 비워주는 것
    return;
  }
}

//2. 버튼 active 함수 만들기
  
// if(name ==='like'){
//   target.classList.add("active");
// //addClass(target,'active)

//   // target.classList.toggle("active");
//   // teggleClass(target,'active')
//   //만들어 놓은 유틸함수 활용
// }

if(name == 'like')  {
  teggleClass(target,'active');
}
if(name == 'more') {
  toggleClass(target,'active');
}

//3.
// 위에 
// const textField = getNode('#comment37');
//커멘트 눌렀을 때 텍스트 포커스 되도록 짰음 

if(name === 'comment'){
  textField.focus();
}


//데이터 네임에 센드를 넣어놈 

if(name === 'send'){
  e.preventDefault();

  let value = textField.value;

  if(value === "") return;

  insertLast(commentContainer,createComment('심선범',value));

  
  //endScroll(target)

  endScroll(commentContainer)
  // commentContainer.scrollTop = commentContainer.scrollHeight

  clearContents(textField);

  //뜻 send 버튼을 눌렀을때 ".comment_container 에 creatComment함수를 넣어주겟다/

  textField.value ='';
  // value='' 문자에 문자 말이 안됨(참고만)


//   const template = /*html*/`
//   <div class="id">
//                         <div class="profile_img border_over"><img src="./assets/part03/gu.png" alt=""></div>
//                         <div class="comment_field">
//                             <div class="text_container">
//                                 <div class="name"><a href="#">김규민</a></div>
//                                 <div class="text_field"> ${value}</div>
//                             </div>
//                         </div>
//                     </div>
//                     `

// insertLast('.comment_container',template)
// //insertLast(".comment_container", template);
//  // 뜻 send 버튼을 눌렀을때 ".comment_container 에 template 을 넣어주겟다//
// //샌드버튼 눌렀을 때 탬플릿 생성
//함수에 담아서 위로 옮김
}

}

contents.addEventListener('click',handleArticle)





//----------------------------------------------------------------------------------------//

// 데이더값가져올 때 node의? 아니면 우리가 만들어놓은 attr함수? closest?
//코드만 보기

// onst contents = getNode('.contents');
// const textField = getNode('#comment37');
// const commentContainer = getNode('.comment_container');


// // 누른 대상을 찾기
// // 누른 대상의 data-name 값 찾기


// function createComment(user,value){

//   const template = /* html */ `
//     <div class="id" data-comment-id="${Date.now()}">
//         <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
//         <div class="comment_field">
//             <div class="text_container">
//                 <div class="name"><a href="#">${user}</a></div>
//                 <div class="text_field"> ${value} </div>
//             </div>
//         </div>
//     </div>
//   `
//   return template;
// }

// function endScroll(target){
//   target.scrollTop = target.scrollHeight;
//   return target.scrollHeight; 
// }

// function clearContents(target){

//   if(target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA'){


//     target.value = ''
//     return;
//   }
//   target.textContent = ''
// }

// const handleArticle = (e) =>{


//   let target = e.target;
//   let name = target.dataset.name


//   while(!name){
//     target = target.parentElement;
//     name = target.dataset.name
//     if(target.nodeName === 'BODY'){
//       target = null;
//       return;
//     }
//   }


//   if(name === 'like'){
//     toggleClass(target,'active');
//   };
//   if(name === 'more') toggleClass(target,'active');
//   if(name === 'comment'){
//     textField.focus();
//   }

//   if(name === 'send'){

//     e.preventDefault();

//     let value = textField.value;

//     if(value === '') return;



//     insertLast('.comment_container',createComment('심선범',value));


//     textField.value = '';
//     insertLast(commentContainer,createComment('심선범',value));
//     endScroll(commentContainer);
//     clearContents(textField);

//   }


//   // active




// }




// contents.addEventListener('click',handleArticle)


