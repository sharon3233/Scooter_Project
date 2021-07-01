const User = require('./User')

describe('User', () =>{
   const testUser = new User('Shay','King',1988,'sking@gmail.com')
   test('user has a first name ', () =>{
       expect(testUser.firstName).toBe('Shay')
   })

   test('user has a last name ', () =>{
    expect(testUser.lastName).toBe('King')
   })

   test('user has a email ', () =>{
    expect(testUser.email).toBe('sking@gmail.com')
   })

   test('user has a dob ', () =>{
    expect(testUser.dob).toStrictEqual(1988)
   })
   
})





   