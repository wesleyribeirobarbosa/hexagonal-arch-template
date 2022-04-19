import { error, success } from './either';

describe('Testing Either Module', () => {
  test('Testing Success Object (Success)', () => {
    const testObject = success('teste');

    expect(testObject.isSuccess()).toBeTruthy();
    expect(testObject.isError()).toBeFalsy();
  });

  test('Testing Error Object (Error)', () => {
    const testObject = error('teste');

    expect(testObject.isError()).toBeTruthy();
    expect(testObject.isSuccess()).toBeFalsy();
  });
});
