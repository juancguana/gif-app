import { getGifs } from '../../helpers/getGifs';

describe('Test with getGifs fetch', () => {
  test('should bring 10 elements', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(12);
  });

  test('should be an empty array', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
