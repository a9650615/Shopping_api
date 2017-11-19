import { db } from './db'
//import * as exs from 'express';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import * as _request from 'request';
import * as async from 'async';
import * as Sequelize from 'sequelize';
import * as moment from "moment";
import { sendMail } from './mail';
// import * as urlencode from 'urlencode';
const _SYSTEM_FLAG = true;
const _DEBUG_FLAG = true;
const debugLog = (...args: any[]) => {//...把所有input放進args
  if (_DEBUG_FLAG) console.log(...args);//把所有東西從args拿出來
}
const systemLog = (...args: any[]) => {//...把所有input放進args
  if (_SYSTEM_FLAG) console.log(...args);//把所有東西從args拿出來
}
const safeJsonParse = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    debugLog('json parse error:', str);
  }
  return str;
}

const request = async (url: string, option?: _request.CoreOptions): Promise<any> => {
  return await new Promise<any>((resolve, reject) => {
    _request(url, option, (err, res, body: string) => {
      if (err) {
        console.log("request err", err);
        reject(err)
      } else {
        resolve(body);
      }
    })
  })
}
const sleep = (ms: number): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

export {
  moment,
  sleep,
  safeJsonParse,
  debugLog,
  db,
  exs,
  bodyParser,
  fs,
  cheerio,
  request,
  async,
  Sequelize,
  systemLog,
  sendMail,
};



