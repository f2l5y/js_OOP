import User from './src/user.js'
import Tenant from './src/tenant.js'
import Landlord from './src/landlord.js'

let user1
let tenant1;
let landlord1;

beforeEach(()=>{
    user1 = new User('John','john@gmail.com')
    tenant1 = new Tenant('Tom','tom@gmail.com',850)
    landlord1 = new Landlord('Tom','tom@gmail.com');
})



describe('User',()=>{
    test('User is created with correct properties',()=>{
        expect(user1.name).toBe('John');
        expect(user1.email).toBe('john@gmail.com');
        expect(user1.points).toBe(0);
    })
    
    
    test('User is created with empty email and name',()=>{
        expect(()=> new User('Tom')).toThrow('email cannot be empty');
        expect(()=> new User(null, 'tom@gmail.com')).toThrow('name cannot be empty');
        expect(()=>user1.name = 1000).toThrow('name must be text')
        expect(()=>user1.email = undefined).toThrow('email cannot be empty')
    })
    


})




describe('Tenant',()=>{
    test('Tenant is created with correct properties', ()=>{
        tenant1.addPoints(10);
        expect(tenant1.name).toBe('Tom');
        expect(tenant1.email).toBe('tom@gmail.com');
        expect(tenant1.points).toBe(10);
        expect(tenant1.monthly_rent).toBe(850);
        expect(()=> tenant1.monthly_rent = 'pizza').toThrow()
        expect(()=> tenant1.monthly_rent = -1000).toThrow()
    })
    
    test('Tenant is created with empty email and name',()=>{
        expect(()=> new Tenant()).toThrow();
        expect(()=> new Tenant('Tom',null,null)).toThrow();
        expect(()=> new Tenant(null, 'tom@gmail.com',null)).toThrow();
    })
    
    test('Negative number or non integer value for monthly rent',()=>{
        expect(()=> new Tenant('Tom','tom@gmail.com','hello')).toThrow('Incorrect value for monthly rent');
        expect(()=> new Tenant('Tom','tom@gmail.com',-100)).toThrow('Incorrect value for monthly rent');
    })
    
    test('addPoints throws error if amount is negative',()=>{
        expect(()=> user1.addPoints(-50)).toThrow();
    })
    
    test('addPoints throws error if amount is not integer',()=>{
        expect(()=> user1.addPoints('hello')).toThrow();
    })
    
    test('addPoints add points to user', ()=>{
        user1.addPoints(10);
        user1.addPoints(20)
        expect(user1.points).toBe(30);
    })



    test('Regualar on-time payment triggers private #addPoints', ()=>{
        const tenant = new Tenant('Alex','alex@email.com',1000);
        tenant.recordPayment(true);
        expect(tenant.points).toBe(10)
    })

    test('6-month streak triggers huge bonus points',()=>{
        const tenant = new Tenant('Alex','alex@email.com',1000);
        for (let i=0;i<6;i++){
            tenant.recordPayment(true);
        }
        expect(tenant.points).toBe(560)

    })
})


describe('Landlord',()=>{
    test('Landlord is created with correct properties', ()=>{
        landlord1.addPoints(10);
        expect(landlord1.name).toBe('Tom');
        expect(landlord1.email).toBe('tom@gmail.com');
        expect(landlord1.points).toBe(10);
    })


})


describe('Rentex static properties and methods',()=>{
        test('Management fee implementation',()=>{
            const landlord = new Landlord('Tom','tom@email.com',3421)
            const fee = landlord.calculateMonthlyFee(850)
            expect(fee).toBe('€85.00')
        })
        test('Static utility format currency',()=>{
            const formattedresult = User.formatCurrency(850);
            expect(formattedresult).toBe('€850.00')
        })

        test('Tenant currency format',()=>{
            const tenant = new Tenant('name','email',1250)
            const rent = User.formatCurrency(tenant.monthly_rent)
            expect(rent).toBe('€1250.00')
        })
})



describe('extend override method',()=>{
    test('User method details',()=>{
        const user = new User('tom','email')
        expect(user.getDetails()).toBe('Name: tom, Email: email')
    })
    test('Tenant method details',()=>{
        const user = new Tenant('tom','email',1000)
        expect(user.getDetails()).toBe('Name: tom, Email: email, Rent: 1000')
    })
    test('Landlord method details',()=>{
        const user = new Landlord('tom','email',1548248)
        expect(user.getDetails()).toBe('Name: tom, Email: email, bank id: 1548248')
    })
})