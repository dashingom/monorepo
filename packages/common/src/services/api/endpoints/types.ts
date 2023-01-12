/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema } from '../schema';
import { HttpMethod } from '../http-request';

export type ApiEndpointSpecification = {
    url: string;
    method: HttpMethod;
    requestParamsSchemaName?: keyof typeof Schema;
    requestBodySchemaName: keyof typeof Schema;
    okResponseSchemaName: keyof typeof Schema;
    notOkResponseSchemaName: keyof typeof Schema;
    authenticated: boolean;
    version?: number;
};
