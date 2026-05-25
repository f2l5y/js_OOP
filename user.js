

   class User{
      constructor(name,email){
         if( !name && !email){
            throw new Error(`name and email fields cannot be empty`)
         }
         else if( !name ){
            throw new Error(`name cannot be empty`)
         }
         else if( !email){
            throw new Error(`email cannot be empty`)}
        
         this.name = name,
         this.email = email,
         this.points = 0

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
         constructor(name,email,monthly_rent){
            super(name,email)
            if(typeof monthly_rent != 'number' || monthly_rent < 0){
               throw new Error('Incorrect value for monthly rent')
            }
            this.monthly_rent = monthly_rent;

         }
      }



      class Landlord extends User{
         constructor(name,email){
            super(name,email)
         }
      }
      

module.exports = { User, Tenant, Landlord };