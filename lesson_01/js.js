///////////////// задание 1
let t_cel;

while (isNaN(t_cel)) {
    t_cel = prompt("Введите температуру в градусах по Цельсию");
    if (isNaN(t_cel)) {
        alert("Нужно ввести число!");
    }
}

let t_far;
t_far = (9 / 5) * +t_cel + 32;
alert("Температура по Цельсию " + t_cel + "°C соответствует " + t_far + "°F по Фарингейту");


///////////////// задание 2

let admin;
let name;
name = "Василий";
admin = name;
alert("Привет, " + admin + "!");

///////////////// задание 3
alert("JS-выражение 1000 + \"108\"  будет равно \"1000108\"");
 