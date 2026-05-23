

   class User{
      constructor(name,email){
         this.name = name,
         this.email = email,
         this.points = 0

      }
      addPoints(amount){
         this.points +=amount;
         return this.points
      }
   }

    

      class Tennat extends User{
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
      

