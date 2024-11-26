export class Team {
    constructor() {
        this.members = new Set();
    }
   
    // Метод для добавления одного персонажа
    add(character) {
        if(this.members.has(character)){
            throw new Error("Такой персонаж уже есть в команде");
        } else{
            this.members.add(character);
        }
    }

    // Метод для добавления нескольких персонажей
    addAll(...characters) {
        for(let character of characters)
            this.add(character);
        }
    
    // Метод для преобразования Set в массив
    toArray() {
        return Array.from(this.members)
    }
}