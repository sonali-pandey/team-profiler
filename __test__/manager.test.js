const Manager = require ('../lib/Manager');
jest.mock('../lib/Manager.js');

test('creates a manager object', () =>{

    const manager = new Manager ();

     expect(manager.name).toBe("Jane");
     expect(manager.employeeId).toEqual(expect.any(Number));
     expect(manager.email).toEqual(expect.any(String));
     expect(manager.offcNum).toEqual(expect.any(Number));
})