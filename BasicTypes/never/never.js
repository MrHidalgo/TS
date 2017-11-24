/*
    Never
    ====================*/
// Функция, возвращающая never, должна иметь недостижимую точку окончания функции.
function error(message) {
    throw new Error(message);
}
// Выведенный тип результата never
function fail() {
    return error("Something failed");
}
// Функция, возвращающая never, должна иметь недостижимую точку окончания функции.
function infiniteLoop() {
    while (true) {
    }
}
