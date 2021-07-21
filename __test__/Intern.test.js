const Intern = require('../lib/Intern');
jest.mock('../lib/Intern');

test('creates a Intern object', () =>{

    const intern = new Intern ();

     expect(intern.name).toBe('Jane');
     expect(intern.employeeId).toEqual(expect.any(String));
     expect(intern.email).toEqual(expect.any(String));
     expect(intern.school).toEqual(expect.any(String));
})