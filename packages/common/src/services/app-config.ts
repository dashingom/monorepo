export const config: Config = {
    apiUrl: process.env.REACT_APP_API_URL || 'https://brightlayer-ind-qa.eaton.com',
    apiVersion: process.env.REACT_APP_API_VERSION || '2.0',
};

export type Config = {
    apiUrl: string;
    apiVersion: string;
};
