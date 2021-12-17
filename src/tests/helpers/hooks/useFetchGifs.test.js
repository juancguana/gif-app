import { useFetchGifs } from '../../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
describe('Test in hook useFetchGif', () => {
  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One punch')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return an array of imgs anthe the loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One punch')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(12);
    expect(loading).toBe(false);
  });
});
