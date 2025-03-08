// Задача 1

let password = '1234-';
if(password.length > 4 && password.includes('-') || password.includes('_'))
{console.log('Допустимый пароль')}
else {console.log('Недопустимый пароль')}