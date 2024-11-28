// 1. RPG 게임에서 사용할 **캐릭터 클래스를 설계**하세요.
// 2. 캐릭터 클래스는 아래 조건을 만족해야 합니다:
//   1. 캐릭터의 **이름**, **레벨**, **체력**, **공격력** 속성을 가질 것.
//   2. attack 메서드를 구현하여, 호출 시 “<캐릭터 이름>가 공격을 시도합니다!“를 출력할 것.
//   3. heal 메서드를 구현하여, 호출 시 체력이 회복되고 “XXX의 체력이 Y만큼 회복되었습니다.“를 출력할 것.
//    - hp는 10-20사이 랜덤한 값
//   4. levelUp 메서드를 구현하여 레벨업을 하면 렌덤으로 체력, 공격력을 추가해줄 것.
// 3. 설계한 클래스를 사용하여 **3명의 캐릭터 객체**를 만드세요.
// 4. 각 캐릭터 객체에서 attack과 heal 메서드를 실행해 보세요.

class GameCharacter {
  constructor(name, level, hp, damage) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.damage = damage;
  }

  attack() {
    console.log(`${this.name}가 공격을 시도합니다.`);
  }

  heal() {
    // this.hp += amunt;
    //    - hp는 10-20사이 랜덤한 값
    // for(let i = 0; i < 100; i++)
    //   {
    //     let rand = Math.floor(Math.random()*11)+ 10;
    //     if(rand > 20 || rand < 10) {
    //       console.log('숫자 오류입니다.')
    //     }
    //   }
    const randomHeal = Math.floor(Math.random()*11)+ 10;

    console.log(`${this.name}가 체력이 ${randomHeal} 만큼 회복이 되었습니다.`)
  }
}
const myCharacter = new GameCharacter("고양이", 1, 100, 5);
console.log(myCharacter);
// console.log(myCharacter.attack());
// retrun값이 없어서 undifind가 뜬다.
myCharacter.attack()
myCharacter.heal();