const { User, Tenant, Landlord} = require('./user')

let user1
let tenant1;
let landlord1;

beforeEach(()=>{
    user1 = new User('John','john@gmail.com')
    tenant1 = new Tenant('Tom','tom@gmail.com',850)
    landlord1 = new Landlord('Tom','tom@gmail.com');
})

test('User is created with correct properties',()=>{
    expect(user1.name).toBe('John');
    expect(user1.email).toBe('john@gmail.com');
    expect(user1.points).toBe(0);
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


test('Tenant is created with correct properties', ()=>{
    tenant1.addPoints(10);
    expect(tenant1.name).toBe('Tom');
    expect(tenant1.email).toBe('tom@gmail.com');
    expect(tenant1.points).toBe(10);
    expect(tenant1.monthly_rent).toBe(850);
})

test('Landlord is created with correct properties', ()=>{
    landlord1.addPoints(10);
    expect(landlord1.name).toBe('Tom');
    expect(landlord1.email).toBe('tom@gmail.com');
    expect(landlord1.points).toBe(10);
})