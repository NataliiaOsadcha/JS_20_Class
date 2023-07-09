class SuperMath {
    constructor(){

    }

input() {
    const x = +(prompt("Enter the value for x: "));
    const y = +(prompt("Enter the value for y: "));
    const znak = prompt("Enter the mathematical operation (+, -, /, *, %): ");
    return { x, y, znak };
    }

check(obj) {
    const confirmed = confirm (`Do you confirm the operation ${obj.znak} with x=${obj.x} and y=${obj.y}?`);

    if(confirmed) {
        let result;

        switch (obj.znak) {
            case '+':
              result = obj.x + obj.y;
              break;
            case '-':
              result = obj.x - obj.y;
              break;
            case '/':
              result = obj.x / obj.y;
              break;
            case '*':
              result = obj.x * obj.y;
              break;
            case '%':
              result = obj.x % obj.y;
              break;
            default:
            console.log("Invalid");
          return;
    }
    prompt ("Result:", result);
    } else {
        const newObj = this.input();
        this.check(newObj);
    }
}  

}

const p = new SuperMath();
const obj = { x: 12, y: 3, znak: '/' };
p.check(obj);




