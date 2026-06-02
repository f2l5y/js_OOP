

  //User class
  class User{
      #name;
      #email;
      constructor(name,email){
         this._validationRequired({ name, email }); 
         this.#name = name;
         this.#email = email;
         this.points = 0

      }

      _validationRequired(fields){
         for(const [key,value] of Object.entries(fields)){
            if(typeof value !== 'string'){
               throw new Error(`${key} must be text`)
            }
            if(!value || value.trim() === ''){
               throw new Error(`${key} cannot be empty`)
            }
         
         }
      }


      set name(value){
       this._validationRequired({name: value})
       this.#name = value
      }

      get name(){
         return this.#name
      }
      
      set email(value){
         this._validationRequired({email:value})
         this.#email = value
      }

      get email(){
         return this.#email
      }

      addPoints(amount){
         if(typeof amount !== 'number' || amount < 0){
            throw new Error('Amount must be a positive number')
         }
         this.points +=amount;
         return this.points
      }
   }


   class Tenant extends User{
      #onTimeStreak = 0;
      #monthly_rent;

      constructor(name,email,monthly_rent){
         super(name,email) 
         this.monthly_rent = monthly_rent;
      }

      set monthly_rent(value){
         if(typeof value != 'number' || value <0)
            {
               throw new Error('Incorrect value for monthly rent')
            }

         this._monthly_rent = value;

      }

      get monthly_rent(){
         return this._monthly_rent
      }
               

      recordPayment(wasOnTime){
         if(wasOnTime){
            this.#onTimeStreak +=1;
            this.addPoints(10);
            if(this.#onTimeStreak === 6){
               this.addPoints(500);
            }
         }else{
               this.#onTimeStreak = 0;
            }
      }
   }





   //refactoring User Class as Factory function
   function UserFactory(user_name, user_email){
      let points = 0
      const addPoints = (amount)=> {points+=amount};
      const getPoints = ()=> points;
      return{user_name,user_email,addPoints,getPoints}

   }

      //refactoring Tenant class as Factory function
      function TenantFactory(tenant_name,tenant_email,monthly_rent2){
         const {addPoints,getPoints} = UserFactory(tenant_name,tenant_email)
         return{tenant_name, tenant_email, addPoints,getPoints, monthly_rent2}
      }



      class Landlord extends User{
         #bank_account_id;

         constructor(name,email,bank_id){
            super(name,email)
            this.#bank_account_id = bank_id;
         }

         get bank_account_id(){
            return this.#bank_account_id;
         }
      }

      

module.exports = { User, Tenant, Landlord , UserFactory, TenantFactory};



