import { toCapitalizeFirstLetter } from '../src/toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Первая буква - заглавная', () => {
    const sentenses = toCapitalizeFirstLetter('земля в иллюминаторе');
    expect(sentenses[0]).toBe('З');
  });
  test('Все буквы кроме первой - маленькие', () => {
    const sentenses = toCapitalizeFirstLetter('земля в иллюМиНаторе').substring(1);
    expect(sentenses).toBe('емля в иллюминаторе');
  });
});

console.log(toCapitalizeFirstLetter('земля в иллюминаторе'));
