// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection =[
    {title: "Rush!", artist: "Måneskin", year: "2023"},
    {title: "Teatro d’ira: Vol. I", artist: "Måneskin", year: "2021"},
    {title: "Il ballo della vita", artist: "Måneskin", year: "2018"}
];

musicCollection[Symbol.iterator] = function() {
    return {
        current:0,
        to: this.length,
        next() {
            return this.current < this.to
            ? {done: false, value:musicCollection[this.current++]}
            : {done: true};
        }
    }
}

for (let album of musicCollection) {
    console.log(`Album: ${album.title}- artist: ${album.artist} (year: ${album.year})`);
}

