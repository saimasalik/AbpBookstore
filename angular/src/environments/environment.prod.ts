import { Environment } from '@abp/ng.core';

const baseUrl = 'https://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44387',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'https://localhost:44387',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
