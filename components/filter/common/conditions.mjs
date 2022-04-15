const constants = {
  IN: "IN",
  NOT_IN: "NOT_IN",
  TEXT_EQUALS: "TEXT_EQUALS",
  TEXT_NOT_EQUALS: "TEXT_NOT_EQUALS",
  STARTS_WITH: "STARTS_WITH",
  NOT_STARTS_WITH: "NOT_STARTS_WITH",
  ENDS_WITH: "ENDS_WITH",
  NOT_ENDS_WITH: "NOT_ENDS_WITH",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_EQUALS: "GREATER_THAN_EQUALS",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_EQUALS: "LESS_THAN_EQUALS",
  EQUALS: "EQUALS",
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  DATE_EQUALS: "DATE_EQUALS",
  TRUE: "TRUE",
  FALSE: "FALSE",
  EXISTS: "EXISTS",
  NOT_EXISTS: "NOT_EXISTS",
};

const options = [
  {
    label: "Contains (text) - [operand1] contains [operand2]",
    value: constants.IN,
  },
  {
    label: "Does not contain (text) - [operand1] does not contain [operand2]",
    value: constants.NOT_IN,
  },
  {
    label: "Matches exactly (text) - [operand1] matches exactly [operand2]",
    value: constants.TEXT_EQUALS,
  },
  {
    label: "Does not exactly match (text) - [operand1] does not exactly match [operand2]",
    value: constants.TEXT_NOT_EQUALS,
  },
  {
    label: "Starts with (text) - [operand1] starts with [operand2]",
    value: constants.STARTS_WITH,
  },
  {
    label: "Does not start with (text) - [operand1] does not start with [operand2]",
    value: constants.NOT_STARTS_WITH,
  },
  {
    label: "Ends with (text) - [operand1] ends with [operand2]",
    value: constants.ENDS_WITH,
  },
  {
    label: "Does not end with (text) - [operand1] does not end with [operand2]",
    value: constants.NOT_ENDS_WITH,
  },
  {
    label: "Greater than (number) - [operand1] is greater than [operand2]",
    value: constants.GREATER_THAN,
  },
  {
    label: "Greater than or equals (number) - [operand1] is greater than or equal to [operand2]",
    value: constants.GREATER_THAN_EQUALS,
  },
  {
    label: "Less than (number) - [operand1] is less than [operand2]",
    value: constants.LESS_THAN,
  },
  {
    label: "Less than or equals (number) - [operand1] is less than or equal to [operand2]",
    value: constants.LESS_THAN_EQUALS,
  },
  {
    label: "Is equal to (number) - [operand1] is equal to [operand2]",
    value: constants.EQUALS,
  },
  {
    label: "After (date/time) - [operand1] is after [operand2]",
    value: constants.AFTER,
  },
  {
    label: "Before (date/time) - [operand1] is before [operand2]",
    value: constants.BEFORE,
  },
  {
    label: "Equals (date/time) - [operand1] is equal to [operand2]",
    value: constants.DATE_EQUALS,
  },
  {
    label: "Is True (boolean) - [operand1] is true",
    value: constants.TRUE,
  },
  {
    label: "Is False (boolean) - [operand1] is false",
    value: constants.FALSE,
  },
  {
    label: "Exists (object) - [operand2] key exists in [operand1]",
    value: constants.EXISTS,
  },
  {
    label: "Does not exist (object) - [operand2] key does not exist in [operand1]",
    value: constants.NOT_EXISTS,
  },
];

export default {
  constants,
  options,
};
