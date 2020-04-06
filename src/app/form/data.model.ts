

/**
 * Message represents one message being sent in a Thread
 */
 export class Data {
   name: string;
   password: string;

   constructor(obj?: any) {
     this.name = obj && obj.name || ''
     this.password = obj && obj.password || ''
   }
 }
