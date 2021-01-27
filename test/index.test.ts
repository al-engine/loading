import { Loading } from '../src';

test('', () => {
  const loading = new Loading(
    { x: 0, y: 0 },
    {
      isLoading(): boolean {
        return false;
      },
      data: null,
      load: () => null,
    },
    () => {}
  );
  expect(loading).toBeTruthy();
});
