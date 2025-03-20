const init = () => {

    const counter = document.getElementById('counter')
    const heart = document.getElementById('heart')
    const minus = document.getElementById('minus')
    const pause = document.getElementById('pause')
    const plus = document.getElementById('plus')
    const ul = document.querySelector('ul')
    
    
    let isPaused = false
    
    let count = 0;
    
    let intervalId = setInterval(() => {
      count+=1
      counter.textContent = count
    },1000)
    
    let likeList = []
    let likeListElement = []
    let likeCounts = {}
    
    plus.addEventListener('click', function () {
       counter.textContent = count+=1
    })
    
    minus.addEventListener('click', function () {
       counter.textContent = count-=1
    })
    
    heart.addEventListener('click', function () {
       likeList = [...likeList, count]; 
       if (likeCounts[count]) {
         likeCounts[count] += 1;
       } else {
         likeCounts[count] = 1;
       }
       addLike()
     });
    
     function addLike() {
       const newLike = {
         number: count,
         likes: likeCounts[count]
       };
     
       const string = `${newLike.number} has been liked ${newLike.likes} times!`;
       likeListElement = [...likeListElement, string]
       appendToLikeList(string)
     }
    
     function appendToLikeList(string) {
       const li = document.createElement('li'); 
       li.textContent = string;
       ul.appendChild(li)
     }
    
    pause.addEventListener('click', function () {
       if(!isPaused) {
          clearInterval(intervalId)
          pause.textContent = 'resume'
          minus.disabled = true;
          plus.disabled = true;
          heart.disabled = true;
          isPaused = true
       } else {
              pause.textContent = 'pause'
              minus.disabled = false;
              plus.disabled = false;
              heart.disabled = false;
          intervalId = setInterval(() => {
             count++
             counter.textContent = count
           },1000)
           isPaused = false
       }
    })
    
    const form = document.getElementById('comment-form')
    const list = document.getElementById('list')
    const submit = document.getElementById('submit')
    const textInput = document.getElementById('comment-input')
    let comment; 
    
    textInput.addEventListener('input', function () {
       comment = textInput.value
    })
    
    form.addEventListener('submit', function (e) {
       e.preventDefault()
       if(comment) {
          const li = document.createElement('li');
          li.textContent = comment;
          list.appendChild(li)
       }
       textInput.value = ''
    })
    
    
    
    } 
    document.addEventListener('DOMContentLoaded', init)
    