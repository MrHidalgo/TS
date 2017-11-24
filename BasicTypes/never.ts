/*
	Never
	====================*/
// Функция, возвращающая never, должна иметь недостижимую точку окончания функции.
function error(message: string): never {
	throw new Error(message);
}
// Выведенный тип результата never
function fail() {
	return error("Something failed");
}
// Функция, возвращающая never, должна иметь недостижимую точку окончания функции.
function infiniteLoop(): never {
	while (true) {
	}
}