
//Функция, запускающаяся при отправке формы
function submitForm(){
    
    const button = document.querySelector('.submit');
    let fullUserName = document.getElementById("nametext").value; // вызов имени из документа по id
    let arr = fullUserName.split(" ");// split разбивает строку на отдельные элементы - фамилию, имя, отчество
    let lastUserName = arr[0]; // Фамилия
    let firstUserName = arr[1]; // Имя
    let secondUserName = arr[2]; //Отчество
    let link = document.getElementById("link").value; // вызов из документа по id
    let userText = document.getElementById("commentsdown").value; //вызов из документа по id
    
    let newUserName = // проверка и приведение к одному регистру имени пользователя 
    (arr[0] ? arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase() + ' ' : '') +
    (arr[1] ? arr[1][0].toUpperCase() + arr[1].slice(1).toLowerCase() +' ' : '') + 
    (arr[2] ? arr[2][0].toUpperCase() + arr[2].slice(1).toLowerCase() : '');// замена первой буквы на заглавную
    
        let addNewComment = document.getElementById('comment-list'); // вызов по id
        let displayChat = document.createElement('div'); // создание нового контейнера лоя комментариев
        displayChat.classList.add('comment'); //присваивание ему класса
        addNewComment.append(displayChat);// добавление его к блоку 
        let divImageOutput = document.createElement('img'); // переменная для вывода линка пользователя в чате и определение места на странице
        divImageOutput.classList.add('userphoto');//присваивание ему класса
        displayChat.appendChild(divImageOutput); // добавление авы пользователя
        divImageOutput.style.width="70%"; // задана ширина для фото
        divImageOutput.style.height="150px"; // задана высота для фото
        if(link === ''){
            let randomImage = new Array(); // массив c аватарками  
            randomImage[0]= "/assets/img/boy.jpg";
            randomImage[1]= "/assets/img/cat.jpg";
            randomImage[2]= "/assets/img/girl.jpg";
            randomImage[3]= "/assets/img/masanja.jpg";
            randomImage[4]= "/assets/img/panda.jpg";
            let number = Math.floor(Math.random()*randomImage.length);
            divImageOutput.src=randomImage[number];
        
            } else {
                divImageOutput.src = link; // вывод линка пользователя в чате с установлением значения атрибута
            }
    
            //let divNameOutput = document.querySelector('.shownUserName'); // переменная для вывода имени пользователя в чате и определение места на странице
            let divNameOutput = document.createElement('p');
            divNameOutput.classList.add('shownUserName');
            displayChat.appendChild(divNameOutput);
            if(newUserName === ''){
                divNameOutput.textContent = 'Username';
            }else{
                divNameOutput.textContent = newUserName; // вывод имени пользователя в чате
            }
            
        let pDateOutput = document.createElement('p');
            pDateOutput.classList.add('now');
            displayChat.appendChild(pDateOutput);
        let now = new Date(); // создание нового объекта с текущей датой и временем
        now = now.toLocaleString();
        //let newDate = now.slice(0,25);
        //document.getElementById('now').innerHTML= newDate;  
        pDateOutput.innerHTML=now;
        
        let divTextOutput = document.createElement('p');
        divTextOutput.classList.add('user-text');
        displayChat.appendChild(divTextOutput);
        // let divTextOutput = document.querySelector('.user-text'); // переменная для вывода текста пользователя в чате и определение места на странице
        displayChat.style.borderBottom = "2px dashed rgba(3, 148, 48, 0.822)";
        divTextOutput.textContent = checkSpam(userText); // вывод текста пользователя в чате
       
        document.getElementById("commentsform").reset();
    function checkSpam(str){
        let changedText = str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
        return changedText;
    };
    };
    
    function checkboxUsername(){
        const name = document.querySelector(".username");
        console.log(name);
        const checkBoxYes = document.querySelector(".checkbox-yes");
        const checkBoxNo = document.querySelector(".checkbox-no");
    
        if (checkBoxYes.checked) {
            name.style.display = "block";
            
        } else {
            name.style.display = "none";      
        }
    };
    
    
    
    
    
    
    
    
   