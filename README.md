# yagnik-contacts

this plugin will fetch your contacts from your device.

## Install

```bash
npm install yagnik-contacts
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`getPermissions()`](#getpermissions)
* [`getContacts()`](#getcontacts)
* [`saveContact(...)`](#savecontact)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### getPermissions()

```typescript
getPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

--------------------


### getContacts()

```typescript
getContacts() => Promise<{ contacts: Contact[]; }>
```

**Returns:** <code>Promise&lt;{ contacts: Contact[]; }&gt;</code>

--------------------


### saveContact(...)

```typescript
saveContact(contact: NewContact) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`contact`** | <code><a href="#newcontact">NewContact</a></code> |

--------------------


### Interfaces


#### PermissionStatus

| Prop          | Type                 |
| ------------- | -------------------- |
| **`granted`** | <code>boolean</code> |


#### Contact

| Prop                   | Type                        |
| ---------------------- | --------------------------- |
| **`contactId`**        | <code>string</code>         |
| **`displayName`**      | <code>string</code>         |
| **`phoneNumbers`**     | <code>PhoneNumber[]</code>  |
| **`emails`**           | <code>EmailAddress[]</code> |
| **`photoThumbnail`**   | <code>string</code>         |
| **`organizationName`** | <code>string</code>         |
| **`organizationRole`** | <code>string</code>         |
| **`birthday`**         | <code>string</code>         |


#### PhoneNumber

| Prop         | Type                |
| ------------ | ------------------- |
| **`label`**  | <code>string</code> |
| **`number`** | <code>string</code> |


#### EmailAddress

| Prop          | Type                |
| ------------- | ------------------- |
| **`label`**   | <code>string</code> |
| **`address`** | <code>string</code> |


#### NewContact

New contact schema.

| Prop                   | Type                                                | Description  |
| ---------------------- | --------------------------------------------------- | ------------ |
| **`contactType`**      | <code><a href="#contacttype">ContactType</a></code> |              |
| **`namePrefix`**       | <code>string</code>                                 |              |
| **`givenName`**        | <code>string</code>                                 |              |
| **`middleName`**       | <code>string</code>                                 |              |
| **`familyName`**       | <code>string</code>                                 |              |
| **`nameSuffix`**       | <code>string</code>                                 |              |
| **`nickname`**         | <code>string</code>                                 |              |
| **`jobTitle`**         | <code>string</code>                                 |              |
| **`departmentName`**   | <code>string</code>                                 |              |
| **`organizationName`** | <code>string</code>                                 |              |
| **`postalAddresses`**  | <code>PostalAddress[]</code>                        |              |
| **`emailAddresses`**   | <code>EmailAddress[]</code>                         |              |
| **`urlAddresses`**     | <code>UrlAddress[]</code>                           |              |
| **`phoneNumbers`**     | <code>PhoneNumber[]</code>                          |              |
| **`birthday`**         | <code>string</code>                                 |              |
| **`note`**             | <code>string</code>                                 |              |
| **`socialProfiles`**   | <code>SocialProfile[]</code>                        |              |
| **`image`**            | <code>string</code>                                 | Base64 image |


#### PostalAddress

| Prop          | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`label`**   | <code>string</code>                                                                                     |
| **`address`** | <code>{ street?: string; city?: string; state?: string; postalCode?: string; country?: string; }</code> |


#### UrlAddress

| Prop        | Type                |
| ----------- | ------------------- |
| **`label`** | <code>string</code> |
| **`url`**   | <code>string</code> |


#### SocialProfile

| Prop          | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`label`**   | <code>string</code>                                                       |
| **`profile`** | <code>{ username?: string; service?: string; urlString?: string; }</code> |


### Enums


#### ContactType

| Members            |
| ------------------ |
| **`Person`**       |
| **`Organization`** |

</docgen-api>
