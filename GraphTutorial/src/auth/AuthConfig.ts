const {AppId} = process.env

console.log('id', AppId)

export const AuthConfig = {
  appId: `${AppId}`,
  appScopes: [
    'openid',
    'offline_access',
    'profile',
    'User.Read',
    'MailboxSettings.Read',
    'Calendars.ReadWrite',
  ],
}
