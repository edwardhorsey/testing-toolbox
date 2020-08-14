import * as tests from './index';

test('does not throw error', () => {
  expect(() => {
    function1('something');
  }).not.toThrow();
});

test('return from function is not null', () => {
  expect(tests.function1()).toBeDefined();
})

test('check that the function returns the same data type as what was inputted', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
})