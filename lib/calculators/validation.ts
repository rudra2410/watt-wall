export class CalculatorValidationError extends RangeError {
  constructor(
    public readonly field: string,
    message: string,
  ) {
    super(message);
    this.name = "CalculatorValidationError";
  }
}

export function requireFinite(field: string, value: number) {
  if (!Number.isFinite(value)) {
    throw new CalculatorValidationError(field, "Enter a number.");
  }
}

export function requirePositive(field: string, value: number, maximum?: number) {
  requireFinite(field, value);

  if (value <= 0) {
    throw new CalculatorValidationError(field, "Enter a value greater than zero.");
  }

  if (maximum !== undefined && value > maximum) {
    throw new CalculatorValidationError(field, `Enter a value no greater than ${maximum}.`);
  }
}

export function requireNonNegative(field: string, value: number, maximum?: number) {
  requireFinite(field, value);

  if (value < 0) {
    throw new CalculatorValidationError(field, "Enter zero or a positive value.");
  }

  if (maximum !== undefined && value > maximum) {
    throw new CalculatorValidationError(field, `Enter a value no greater than ${maximum}.`);
  }
}

export function requireWholeNumber(field: string, value: number) {
  requireNonNegative(field, value);

  if (!Number.isInteger(value)) {
    throw new CalculatorValidationError(field, "Enter a whole number.");
  }
}

export function requirePositiveWholeNumber(field: string, value: number, maximum?: number) {
  requirePositive(field, value, maximum);

  if (!Number.isInteger(value)) {
    throw new CalculatorValidationError(field, "Enter a whole number.");
  }
}
