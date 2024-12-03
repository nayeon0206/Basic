// 1. RPG 게임에서 사용할 **캐릭터 클래스를 설계**하세요.
// 2. 캐릭터 클래스는 아래 조건을 만족해야 합니다:
//   1. 캐릭터의 **이름**, **레벨**, **체력**, **공격력** 속성을 가질 것.
//   2. attack 메서드를 구현하여, 호출 시 “<캐릭터 이름>가 공격을 시도합니다!“를 출력할 것.
//   3. heal 메서드를 구현하여, 호출 시 체력이 회복되고 “XXX의 체력이 Y만큼 회복되었습니다.“를 출력할 것.
//    - hp는 10-20사이 랜덤한 값
//   4. levelUp 메서드를 구현하여 레벨업을 하면 렌덤으로 체력, 공격력을 추가해줄 것.
// 3. 설계한 클래스를 사용하여 **3명의 캐릭터 객체**를 만드세요.
// 4. 각 캐릭터 객체에서 attack과 heal 메서드를 실행해 보세요.

class Character {
  // 캐릭터의 **이름**, **레벨**, **체력**, **공격력** 속성을 가질 것.
  constructor(name, level, hp, attack) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.attack = attack;
  }

  // levelUp 메서드를 구현하여 레벨업을 하면 렌덤으로 체력, 공격력을 추가해줄 것.

  levelUp() {
    // 레벨업을 하면 체력을 추가 해 줄것
    this.level += 1;
    // 체력을 minHp : 10 , maxHp : 20
    const randomHp = Math.floor(Math.random(20 - 10 + 1) * 10);
    this.hp += randomHp
    // 공격력을 추가 minAttack : 5 , maxAttack : 10
    const randomAttack = Math.floor(Math.random(10 - 5 + 1) * 5);
    this.attack += randomAttack

    console.log(`${this.name}의 체력이 ${randomHp}만큼 올랐습니다.`);
    console.log(`${this.name}의 공격력이 ${randomAttack}만큼 올랐습니다.`);
  }
};

const dog = new Character('강아지', 1, 100, 50);

console.log(dog);
dog.levelUp();
console.log(dog);