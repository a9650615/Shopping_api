import { SMTPConfig } from '../config';
import * as nodemailer from 'nodemailer';
import * as lib from '../library';
let transporter = nodemailer.createTransport({//發送信件位址及帳號
  service: 'Gmail',
  auth: {
    user: SMTPConfig.user,
    pass: SMTPConfig.pass
  }
});

export async function sendMail(mail: string, subject: any, text: any) {
  transporter.sendMail({
    from: SMTPConfig.user,
    to: mail,
    subject: subject,
    text: text
  }, function (error) {
    lib.debugLog('error at sendMail', error);
  });
}