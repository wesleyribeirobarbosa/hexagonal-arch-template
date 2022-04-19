import Message from './message';

describe('Test Message Entity', () => {
  test('Testing valid input parameters', () => {
    const response = Message.create('Message');
    expect(response.isSuccess()).toBeTruthy();
  });

  test('Testing invalid input parameters', () => {
    const response = Message.create(null);
    expect(response.isError()).toBeTruthy();
  });
});
