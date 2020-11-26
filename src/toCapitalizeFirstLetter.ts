export const toCapitalizeFirstLetter = (str: string) => {
  const arrayString = str.split('');
  const firstLetter = str[0].toUpperCase();
  arrayString.splice(0, 1);
  return firstLetter + arrayString.join('').toLowerCase();
};
