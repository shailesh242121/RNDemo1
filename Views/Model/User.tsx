  class User {
      username: string;
      dob: string ;
      email: string;
      password: string;
      id:string;
  
      
      constructor(name:string, age:string, email:string, password:string) {
        this.username = name;
        this.dob = age;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString();
      }

      getGreeting() {
        return `Hello, my name is ${this.username}!`;
      }
    }

    export default User;