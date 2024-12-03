// 1. RPG 게임에서 사용할 **캐릭터 클래스를 설계**하세요.
// 2. 캐릭터 클래스는 아래 조건을 만족해야 합니다:
//   1. 캐릭터의 **이름**, **레벨**, **체력**, **공격력** 속성을 가질 것.
//   2. attack 메서드를 구현하여, 호출 시 “<캐릭터 이름>가 공격을 시도합니다!“를 출력할 것.
//   3. heal 메서드를 구현하여, 호출 시 체력이 회복되고 “XXX의 체력이 Y만큼 회복되었습니다.“를 출력할 것.
//    - hp는 10-20사이 랜덤한 값
//   4. levelUp 메서드를 구현하여 레벨업을 하면 렌덤으로 체력, 공격력을 추가해줄 것.
// 3. 설계한 클래스를 사용하여 **3명의 캐릭터 객체**를 만드세요.
// 4. 각 캐릭터 객체에서 attack과 heal 메서드를 실행해 보세요.


// 캐릭터의 **이름**, **레벨**, **체력**, **공격력** 속성을 가질 것.
class GameCharacter {
  constructor(name, level, hp, damage) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.damage = damage;
  }

// attack 메서드를 구현하여, 호출 시 “<캐릭터 이름>가 공격을 시도합니다!“를 출력할 것.
  attack() {
    console.log(`${this.name}가 공격을 시도합니다.`);
  }

// heal 메서드를 구현하여, 호출 시 체력이 회복되고 “XXX의 체력이 Y만큼 회복되었습니다.“를 출력할 것.
//  - hp는 10-20사이 랜덤한 값으로 구현하였습니다.
  heal() {
    // Math.random()에*(maxattack - minattack +1) + minattack
    // +1을 해주는 이유 = // 랜덤 어택 변수를 설정하여 범위 내의 모든 정수 값을 포함하도록 하기 위해서.
    // +1을 포함하면 min부터 max까지 포함된 범위를 정확히 생성할 수 있습니다.
    const randomHeal = Math.floor(Math.random()*(20 - 10 + 1))+ 10;

    console.log(`${this.name}(이)가 체력이 ${randomHeal} 만큼 회복이 되었습니다.`)
    console.log(); // 한줄 띄우기
  }

  // levelUp 메서드를 구현하여 레벨업을 하면 랜덤으로 체력, 공격력을 추가해줄 것.
  levelUp() {
    this.level += 1 //레벨 업
    // heal 메서드에서 랜덤 체력을 가져옴
    const randomHeal = Math.floor(Math.random()*(20 - 10 + 1))+ 10;
    // randomattack이라는 변수 이름 설정하여 랜덤 공격력
    const randomAttack = Math.floor(Math.random()*(5 - 2 + 1)) + 2;

    this.hp += randomHeal;
    this.attack += randomAttack;


    console.log(`${this.name} 레벨 업! 현재 레벨 : ${this.level}`);
    console.log(`체력이 ${randomHeal} 만큼 회복되었습니다.`);
    console.log(`공격력이 ${randomAttack} 만큼 올랐습니다.`);
    console.log(); // 한줄 띄우기
  }
}
// 설계한 클래스를 사용하여 **3명의 캐릭터 객체**를 만드세요.
const myCharacter = new GameCharacter("고양이", 1, 100, 5);
const userCharacter = new GameCharacter("강아지꼬순내", 2, 110, 10);
const userCharacter2 = new GameCharacter("공룡꼬리", 2, 110, 10);
//유저 보여주기
console.log(myCharacter);
console.log(userCharacter);
console.log(userCharacter2);
console.log(); // 한줄 띄우기

myCharacter.attack()
myCharacter.heal();
myCharacter.levelUp();
console.log(); // 한줄 띄우기

userCharacter.attack();
userCharacter.heal();
userCharacter.levelUp();
console.log(); // 한줄 띄우기

userCharacter2.attack();
userCharacter2.heal();
userCharacter2.levelUp();