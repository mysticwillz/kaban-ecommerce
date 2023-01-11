export const Split = (string) => {
  if (string.length > 23) {
    const newString = string.slice(0, 23);
    return `${newString}...`;
  }
  return string;
};
