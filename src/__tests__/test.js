import { Team } from "../team.js";
import { Character } from "../character.js";

test('check to add only one character', () => {
    let team = new Team();
    let character1 = new Character('лучник', 3);  
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
});

test('checking foran error when adding existing character', () => {
    let team = new Team();
    let character1 = new Character('лучник', 3);
    team.add(character1);
    expect(() => team.add(character1)).toThrow("Такой персонаж уже есть в команде");
});

test('check to add several characters', () => {
    let team = new Team();
    let character1 = new Character('лучник', 3); 
    let character2 = new Character('мечник', 2); 
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
});