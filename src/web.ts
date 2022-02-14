import { WebPlugin } from '@capacitor/core';

import type { Contact, ContactsPlugin, NewContact, PermissionStatus } from './definitions';

export class ContactsWeb extends WebPlugin implements ContactsPlugin {
  getPermissions(): Promise<PermissionStatus> {
    throw new Error('Method not implemented.');
  }
  getContacts(): Promise<{ contacts: Contact[]; }> {
    throw new Error('Method not implemented.');
  }
  saveContact(_contact: NewContact): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
