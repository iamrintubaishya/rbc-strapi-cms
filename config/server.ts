export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL') || env('STRAPI_ADMIN_BACKEND_URL'),
  proxy: env.bool('IS_PROXIED', true),
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2', 'defaultKey3', 'defaultKey4']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
