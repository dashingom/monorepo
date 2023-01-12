import Ajv, { ErrorObject } from 'ajv';
import { Schema } from '../api/schema';

// We will be using our own validate function (based on Ajv.ValidateFunction)
// to allow data to be generically typed. This allows the caller to have
// access to the proper input.
export type ValidateFunction<T> = {
    (
        data: T,
        dataPath?: string,
        parentData?: object | unknown[],
        parentDataProperty?: string | number,
        rootData?: object | unknown[]
    ): boolean | PromiseLike<T>;
    schema?: object | boolean;
    errors?: null | ErrorObject[];
    refs?: object;
    refVal?: unknown[];
    root?: ValidateFunction<T> | object;
    $async?: true;
    source?: object;
};

const ajv = new Ajv({ allErrors: true });

ajv.addFormat('date-time', {
    validate: (dateTimeString: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const potentialDate: any = new Date(dateTimeString);
        return potentialDate !== 'Invalid Date' && !isNaN(potentialDate);
    },
});

type RequestSchema = {
    properties?: object;
};

export function getSchema<T extends RequestSchema>(schemaName: keyof typeof Schema): T {
    return Schema[schemaName];
}

export function makeValidator<T>(schemaName: keyof typeof Schema): ValidateFunction<T> {
    const schema = Schema[schemaName];

    return ajv.compile(schema);
}

export function makeAlwaysValidValidator<T>(): ValidateFunction<T> {
    return (): boolean | PromiseLike<T> => true;
}

type ValidationResult<T> =
    | {
          valid: true;
          value: T;
      }
    | {
          valid: false;
          reasons: string[];
      };

export const isValid = <T>(validator: ValidateFunction<T>, obj?: unknown): ValidationResult<T> => {
    if (!obj) {
        return {
            valid: false,
            reasons: ['obj is undefined'],
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const valid = validator(obj as any) === true;
    if (valid) {
        return {
            valid: true,
            value: obj as T,
        };
    }

    return {
        valid: false,
        reasons: (validator.errors || []).map((error) => `${error.dataPath || '(root)'} ${error.message}`),
    };
};
