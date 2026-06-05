import Tenant from "./tenant.js";
import Landlord from "./landlord.js";

const tenant = new Tenant('Alex Morgan', 'alex@rentex.com', 1200);
const landlord = new Landlord('Domenico','domenico@rentex.com','IT-992384');

console.log('-----Rentex Frontend Loaded-----');
console.log(tenant.getDetails());
console.log(`Landlord Fee: ${landlord.calculateMonthlyFee(tenant.monthly_rent)}`)

const appDiv = document.getElementById('app')
if(appDiv){
    appDiv.innerHTML = `<h1>Welcome back, ${tenant.name}!</h1>`
}