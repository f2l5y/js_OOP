

  //User class
  class User{

      constructor(name,email){
         this._validationRequired({ name, email }); 
         this.name = name;
         this.email = email;
         this.points = 0

      }

      getDetails(){
         return `Name: ${this.name}, Email: ${this.email}`
      }

      _validationRequired(fields){
         for(const [key,value] of Object.entries(fields)){
            if(!value || (typeof value === 'string' && value.trim() === '')){
               throw new Error(`${key} cannot be empty`)
            }
            if(typeof value !== 'string'){
               throw new Error(`${key} must be text`)
            }
         
         }
      }

      static formatCurrency(amount){
         return `€${amount.toFixed(2)}`
      }


      set name(value){
       this._validationRequired({name: value})
       this._name = value
      }

      get name(){
         return this._name
      }
      
      set email(value){
         this._validationRequired({email:value})
         this._email = value
      }

      get email(){
         return this._email
      }

      addPoints(amount){
         if(typeof amount !== 'number' || amount < 0){
            throw new Error('Amount must be a positive number')
         }
         this.points +=amount;
         return this.points
      }
   }


   

export default User;


      




