// Задача 1

let password = '1234-';
if(password.length > 4 && password.includes('-') || password.includes('_'))
{console.log('Допустимый пароль')}
else {console.log('Недопустимый пароль')}

// Задача 2
let userName = "Aleksey";
let userSurname = "KitaykiN";
let newUsername = userName.substring(0,1).toUpperCase() + userName.substring(1).toLowerCase();
let newuserSurname = userSurname.substring(0,1).toUpperCase() + userSurname.substring(1).toLowerCase();
console.log("Имя:",newUsername)
console.log("Фамилия:",newuserSurname)
console.log(userName === newUsername ? "Имя осталось без изменений" : "Имя было изменено");
console.log(userSurname === newuserSurname ? "Фамилия осталась без измений" : "Фамилия была изменена");