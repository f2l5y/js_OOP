     import User from "./user.js";

     class Landlord extends User{
         #bank_account_id;

         static MANAGEMENT_FEE_RATE = 0.10;

         constructor(name,email,bank_id){
            super(name,email)
            this.#bank_account_id = bank_id;
         }

         get bank_account_id(){
            return this.#bank_account_id;
         }

         getDetails(){
            return `${super.getDetails()}, bank id: ${this.#bank_account_id}`
         }

         calculateMonthlyFee(rentAmount){
            return User.formatCurrency(rentAmount*Landlord.MANAGEMENT_FEE_RATE)
         }
      }


      export default Landlord