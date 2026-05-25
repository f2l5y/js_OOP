const { User, Tenant, Landlord} = require('./user')

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
        expect(()=> new User()).toThrow('name and email fields cannot be empty');
        expect(()=> new User('Tom')).toThrow('email cannot be empty');
        expect(()=> new User(null, 'tom@gmail.com')).toThrow('name cannot be empty');
    })
    
})



describe('Tenant',()=>{
    test('Tenant is created with correct properties', ()=>{
        tenant1.addPoints(10);
        expect(tenant1.name).toBe('Tom');
        expect(tenant1.email).toBe('tom@gmail.com');
        expect(tenant1.points).toBe(10);
        expect(tenant1.monthly_rent).toBe(850);
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
})






describe('Landlord',()=>{
    test('Landlord is created with correct properties', ()=>{
        landlord1.addPoints(10);
        expect(landlord1.name).toBe('Tom');
        expect(landlord1.email).toBe('tom@gmail.com');
        expect(landlord1.points).toBe(10);
    })
    
})

