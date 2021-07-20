const Intern = require('../lib/Intern');
jest.mock('../lib/Intern');

test('creates a Intern object', () =>{

    const manager = new Intern ();

     expect(manager.name).toBe('Jane');
     expect(manager.employeeId).toEqual(expect.any(Number));
     expect(manager.email).toEqual(expect.any(String));
     expect(manager.offcNum).toEqual(expect.any(Number));
})