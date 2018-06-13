import titlecase from '../titlecase';

describe('titlecase', () => {
  it('Title cases a sentence.', () => {
    expect(titlecase('hello_world')).toEqual('Hello World');
    expect(titlecase('foo')).toEqual('Foo');
    expect(titlecase('Onion_sauce!_Onion_sauce!')).toEqual('Onion Sauce! Onion Sauce!');
  });
});
