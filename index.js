
    const button = document.querySelector ('.submit');
    button.addEventListener('click', () => {
       // console.log('test');
        let fullUserName = document.querySelector("#nametext").value; // вызов имени из документа по id
        let arr = fullUserName.split(" ");// split разбивает строку на отдельные элементы - фамилию, имя, отчество
        let lastUserName = arr[0]; // Фамилия
        let firstUserName = arr[1]; // Имя
        let secondUserName = arr[2]; //Отчество
        let link = document.querySelector("#link").value; // вызов из документа по id
        let userText = document.querySelector("#commentsdown").value; //вызов из документа по id
        
        //let newUserName = (arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase() +' ')+(arr[1][0].toUpperCase() + arr[1].slice(1).toLowerCase() +' ') + (arr[2][0].toUpperCase() + arr[2].slice(1).toLowerCase());// замена первой буквы на заглавную
        
        let newUserName = capitalise(lastUserName) + ' ' +  capitalise(firstUserName) + ' ' + capitalise(secondUserName);
        
        
        let divNameOutput = document.getElementsByClassName('nickname'); // переменная для вывода имени пользователя в чате и определение места на странице
        divNameOutput[0].textContent = newUserName; // вывод имени пользователя в чате
        let divImageOutput = document.getElementsByClassName('userphoto'); // переменная для вывода линка пользователя в чате и определение места на странице
        divImageOutput[0].style.width="30%"; // задана ширина для фото
        divImageOutput[0].style.height=""; // задана высота для фото
        divImageOutput[0].setAttribute('src', link); // вывод линка пользователя в чате с установлением значения атрибута
        let divTextOutput = document.getElementsByClassName('message'); // переменная для вывода текста пользователя в чате и определение места на странице
        divTextOutput[0].textContent = checkSpam(userText); // вывод текста пользователя в чате
    });

     function capitalise (value) {
         let lower = value.toLowerCase();
         return lower[0].toUpperCase() + lower.slice(1);
    }
    
    function checkSpam(str){
        let changedText = str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
        return changedText;
    };
    













