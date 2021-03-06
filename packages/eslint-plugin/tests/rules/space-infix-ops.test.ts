/* eslint-disable eslint-comments/no-use */
// this rule tests spacing, which prettier will want to fix and break the tests
/* eslint "@typescript-eslint/internal/plugin-test-formatting": ["error", { formatWithPrettier: false }] */
/* eslint-enable eslint-comments/no-use */

import rule from '../../src/rules/space-infix-ops';
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
});

ruleTester.run('space-infix-ops', rule, {
  valid: [
    {
      code: `
        enum Test {
          KEY1 = 2,
        }
      `,
    },
    {
      code: `
        enum Test {
          KEY1 = "value",
        }
      `,
    },
    {
      code: `
        enum Test {
          KEY1,
        }
      `,
    },
    {
      code: `
        class Test {
          public readonly value?: number;
        }
      `,
    },
    {
      code: `
        class Test {
          public readonly value = 1;
        }
      `,
    },
    {
      code: `
        class Test {
          private value:number = 1;
        }
      `,
    },
    {
      code: `
        type Test = string | boolean;
      `,
    },
  ],
  invalid: [
    {
      code: `
        enum Test {
          A= 2,
          B = 1,
        }
      `,
      output: `
        enum Test {
          A = 2,
          B = 1,
        }
      `,
      errors: [
        {
          messageId: 'missingSpace',
          column: 12,
          line: 3,
        },
      ],
    },
    {
      code: `
        enum Test {
          KEY1= "value1",
          KEY2 = "value2",
        }
      `,
      output: `
        enum Test {
          KEY1 = "value1",
          KEY2 = "value2",
        }
      `,
      errors: [
        {
          messageId: 'missingSpace',
          column: 15,
          line: 3,
        },
      ],
    },
    {
      code: `
        enum Test {
          A =2,
          B = 1,
        }
      `,
      output: `
        enum Test {
          A = 2,
          B = 1,
        }
      `,
      errors: [
        {
          messageId: 'missingSpace',
          column: 13,
          line: 3,
        },
      ],
    },
    {
      code: `
        class Test {
          public readonly value= 2;
        }
      `,
      output: `
        class Test {
          public readonly value = 2;
        }
      `,
      errors: [
        {
          messageId: 'missingSpace',
          column: 32,
          line: 3,
        },
      ],
    },
    {
      code: `
        class Test {
          public readonly value =2;
        }
      `,
      output: `
        class Test {
          public readonly value = 2;
        }
      `,
      errors: [
        {
          messageId: 'missingSpace',
          column: 33,
          line: 3,
        },
      ],
    },
    {
      code: `
        type Test= string | number;
      `,
      output: `
        type Test = string | number;
      `,
      errors: [
        {
          messageId: 'missingSpace',
          column: 18,
          line: 2,
        },
      ],
    },
    {
      code: `
        type Test =string | number;
      `,
      output: `
        type Test = string | number;
      `,
      errors: [
        {
          messageId: 'missingSpace',
          column: 19,
          line: 2,
        },
      ],
    },
  ],
});
