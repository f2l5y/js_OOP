

   class User{
      constructor(name,email){
         this.name = name,
         this.email = email,
         this.points = 0

      }
      addPoints(amount){
         if(typeof amount !== 'number' || amount < 0){
            throw new Error('AMount must be a positive number')
         }
         this.points +=amount;
         return this.points
      }
   }

    

      class Tenant extends User{
         constructor(name,email,monthly_rent){
            super(name,email)
            this.monthly_rent = monthly_rent;

         }
      }



      class Landlord extends User{
         constructor(name,email){
            super(name,email)
         }
      }
      

module.exports = { User, Tenant, Landlord };