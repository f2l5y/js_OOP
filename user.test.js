const { User, Tenant, Landlord, UserFactory, TenantFactory} = require('./user')

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
    

    test('User factory function',()=>{
        const user2 = UserFactory('john doe','johndoe@gmail.com')
        expect(user2.user_name).toBe('john doe')
        expect(user2.user_email).toBe('johndoe@gmail.com')
        expect(user2.getPoints()).toBe(0)
        user2.addPoints(50)
        expect(user2.getPoints()).toBe(50)
        expect(user2.points).toBeUndefined()
 

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

    test('Testing the factory function',()=>{
        const user3 = TenantFactory('tom','tom@email.com',500)
        user3.addPoints(1000)
        expect(user3.getPoints()).toBe(1000)
        user3.addPoints(1000)
        expect(user3.getPoints()).toBe(2000)
        expect(user3.tenant_name).toBe('tom')
        expect(user3.tenant_email).toBe('tom@email.com')
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

