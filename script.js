/* Задание 1 (оператор spread)
Дан объект person, который содержит информацию о человеке. 
Вам необходимо создать новый объект updatedPerson, 
который будет включать все свойства объекта person, 
а также обновленный возраст и новое свойство hobby */
const person = {
    name: "Alice",
    age: 25,
    profession: "Software Developer"
}

const updatedPerson = {
    ...person,
    age: 26,
    hobby: "dancing"
}
console.log(updatedPerson)

/* Задание 2
Перепишите следующий код через switch:
let lang = 'ru'
if (lang == 'ru') {
   console.log('рус') 
} else if (lang == 'en') {

   console.log('анг')
} else if (lang == 'de') {

   console.log('нем')
} else {

   console.log('язык не поддерживается')
} */
let lang = "de"
switch(lang) {
    case "ru":
        console.log("рус")
        break
    case "en":
        console.log("анг")
        break
    case "de":
        console.log("нем")
        break
    default:
        console.log("язык не поддерживается")
}

/* Задание 3 (деструктуризация и spread)
Дан массив чисел: [10, 20, 30, 40, 50]. Используя деструктуризацию, 
присвойте первые три элемента массива переменным first, second, и third, 
а остальные элементы собрать в новый массив используя spread. */
const arr = [10, 20, 30, 40, 50]
const [first, second, third, ...arr2] = arr
console.log(arr2)

/* Задание 4 (деструктуризация)
Используя деструктуризацию, извлеките свойства name, age и вложенный 
объект address. Дополнительно извлеките city и country из address */
const user = {
    name: "Max",
    age: 30,
    email: "max30@example.com",
    address: {
        city: "Bishkek",
        country: "Kyrgyzstan"
    }
} 
const { name, age, address: { city, country } } = user 
console.log(city)