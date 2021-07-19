const Engineer = require ('../lib/Engineer');
jest.mock('../lib/Engineer.js');

test('creates an engineer object', () => {

    const engineer = new Engineer();

    expect(engineer.name).toBe('John');
    expect(engineer.employeeId).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})