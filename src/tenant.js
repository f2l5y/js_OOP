import User from "./user.js";

class Tenant extends User{
      #onTimeStreak = 0;

      constructor(name,email,monthly_rent){
         super(name,email) 
         this.monthly_rent = monthly_rent;
      }

      getDetails(){
        
         return `${super.getDetails()}, Rent: ${this.monthly_rent}`
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

   export default Tenant