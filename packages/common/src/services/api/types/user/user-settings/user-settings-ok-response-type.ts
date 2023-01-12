/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UserSettingsOkResponse {
    message: string;
    data: {
        user: {
            fName: string;
            lName: string;
            email: string;
            phone: string;
        };
        notification: {
            emailenabled: boolean;
            smsenabled: boolean;
        };
        session: {
            sessionEnabled: boolean;
        };
        language: {
            id: number;
        };
    };
}