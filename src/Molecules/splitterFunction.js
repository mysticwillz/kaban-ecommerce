export const Split = (string) => {
  if (string.length > 40) {
    const newString = string.slice(0, 40);
    return `${newString}...`;
  }
  return string;
};
