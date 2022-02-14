import { WebPlugin } from '@capacitor/core';
import { ContactsPlugin } from './definitions';


export class ContactsWeb extends WebPlugin implements ContactsPlugin {
  echo(_options: { value: string; }): Promise<{ value: string; }> {
    throw new Error('Method not implemented.');
  }
  getContacts(_filter: string): Promise<{ results: any[]; }> {
    throw new Error('Method not implemented.');
  }
}
