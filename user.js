

  //User class
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

   //refactoring User Class as Factory function
   function UserFactory(name2, email2){
      let points = 0
      const name = name2;
      const email = email2;
      const addPoints = (amount)=> {points+=amount};
      const getPoints = ()=> points;
      return{name,email,addPoints,getPoints}

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


      //refactoring Tenant class as Factory function
      function TenantFactory(name3,email3,monthly_rent2){
         const {addPoints,getPoints,name2,email2} = UserFactory(name3,email3)
         return{name2,email2,addPoints,getPoints,monthly_rent2}
      }



      class Landlord extends User{
         constructor(name,email){
            super(name,email)
         }
      }
      

module.exports = { User, Tenant, Landlord , UserFactory, TenantFactory};



