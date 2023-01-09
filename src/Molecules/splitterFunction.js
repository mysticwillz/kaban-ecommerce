export const Split = (string) => {
  if (string.length > 50) {
    const newString = string.slice(0, 20);
    return `${newString}...`;
  }
  return string;
};
