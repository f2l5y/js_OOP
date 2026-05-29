

  //User class
  class User{
      constructor(name,email){
         this.name = name,
         this.email = email,
         this.points = 0

      }

      set name(value){
         if(!value){
            throw new Error('name cannot be empty')
         }else if(typeof value !== 'string'){
            throw new Error ('name must be text')
         }
         return this._name = value
      }

      get name(){
         return this._name
      }
      
      set email(value){
         if(!value){
            throw new Error('email cannot be empty')
         }else if(typeof value !== 'string'){
            throw new Error ('email must be text')
         }
         return this._email = value
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

   class Tenant extends User{
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
         constructor(name,email){
            super(name,email)
         }
      }
      

module.exports = { User, Tenant, Landlord , UserFactory, TenantFactory};



