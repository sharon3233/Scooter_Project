const Scooter = require('./Scooter')

describe('Scooter', () =>{
   const testScooter = new Scooter(true, true, 32);

    test('Is Scooter Function', () =>{
        testScooter.Part.wheel = false;
        const works = testScooter.isFunctional()
        expect(works).toBeFalsy();
    });

   test('is scooter fully charged ', () =>{
       expect(testScooter.charged).toBeTruthy()
   })

   test('test range', () =>{
    expect(testScooter.range).toBe(32)
   })


   test("charge", async () => {
    const scooter = new Scooter();
    await scooter.charge(); // we need to wait for the charge!
    console.log("Completely Charged!");
  });

   
})
