  class User {
      name: string;
      age: number ;
      email: string;
      
      constructor(name:string, age:number, email:string) {
        this.name = name;
        this.age = age;
        this.email = email;
      }

      getGreeting() {
        return `Hello, my name is ${this.name}!`;
      }
    }

    export default User;