function ToggleDropDownMenu () {
  if(document.querySelector(".nav1").style.display === "none"){
    document.querySelector(".nav1").style.display = "flex";
  document.querySelector(".fa-bars").style.display = "none";
  document.querySelector(".fa-xmark").style.display = "flex";
  } else {
    document.querySelector(".nav1").style.display = "none";
    document.querySelector(".fa-bars").style.display = "flex";
    document.querySelector(".fa-xmark").style.display = "none";
  } 
}







// select the form
const formEl = document.querySelector('form');

// add eventlistener to the form
formEl.addEventListener('submit', function(event){
    event.preventDefault();


    // collect user data
    const userComment = document.querySelector('#userMessage').value;
    const userName = document.querySelector('#userName').value;

    // new div upon submit
    const newCommentDiv = document.createElement('div');
    newCommentDiv.classList.add('comments-paragraph2');

    // style of userPic, date and comment
    const userPics = document.createElement('div');
    userPics.classList.add('female-image-container');
    userPics.innerHTML = `<img class="male-image" src="./captured-final-assets/comment-1.jpg" alt="user:${userName}">`;
    
    // comment div
    const userCommentContainer = document.createElement('div');
    userCommentContainer.classList.add('jeremy-comment');
    const userInfo = `<p class="p8">Tuesday October 9th, 2018 by ${userName}</p>
    <p class="p9">${userComment}</p>`; 
    userCommentContainer.innerHTML = userInfo;

    newCommentDiv.appendChild(userPics);
    newCommentDiv.appendChild(userCommentContainer);

const commentSection = document.querySelector('.new-comments');
commentSection.appendChild(newCommentDiv);
});












