export const splitValues = (values: string, char = "\n") => values.split(char);

// Fastest way to transform a string to a number
export const valueToInt = (value: string) => ~~value;

// Fastest way to transform a number to a string
export const formatResult = (value: number) => "" + value;
