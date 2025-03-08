// Задача 1

let password = '1234-';
if(password.length > 4 && password.includes('-') || password.includes('_'))
{console.log('Допустимый пароль')}
else {console.log('Недопустимый пароль')}

// Задача 2
let userName = "Aleksey";
let userSurname = "Kitaykin";
let newUsername = userName.substring(1,0).toUpperCase() + userName.substring(1).toLowerCase();
let newuserSurname = userSurname.substring(1,0).toUpperCase() + userSurname.substring(1).toLowerCase();
console.log("Имя:",newUsername)
console.log("Фамилия:",newuserSurname)
console.log(userName === newUsername ? "Имя осталось без изменений" : "Имя было изменено");
console.log(userSurname === newuserSurname ? "Фамилия осталась без измений" : "Фамилия была изменена");