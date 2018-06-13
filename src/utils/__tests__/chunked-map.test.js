import chunkedMap from '../chunked-map';

describe('chunkedMap', () => {
  const mockMapper = jest.fn(array => array.length);
  chunkedMap([1, 2, 3, 4, 5, 6], 2, mockMapper);

  it('Splits an array up into chunks.', () => {
    expect(mockMapper).toHaveBeenCalledTimes(3);
  });

  it('Returns chunks of appropriate size.', () => {
    expect(mockMapper.mock.calls[0][0]).toHaveLength(2);
    expect(mockMapper.mock.calls[1][0]).toHaveLength(2);
    expect(mockMapper.mock.calls[2][0]).toHaveLength(2);
  });

  it('Returns correct chunks.', () => {
    expect(mockMapper.mock.calls[0][0]).toEqual([1, 2]);
    expect(mockMapper.mock.calls[1][0]).toEqual([3, 4]);
    expect(mockMapper.mock.calls[2][0]).toEqual([5, 6]);
  });
});
