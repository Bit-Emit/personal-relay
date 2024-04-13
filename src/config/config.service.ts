import { Injectable } from '@nestjs/common';

import {readFile} from 'node:fs/promises';




@Injectable()
export class ConfigService {

  config = {}
  constructor() {
    this.readConfig()
  }

  public getConfig() {
    return this.config

  }

  async readConfig() {
    try {
      const file = await readFile('./config.json', 'utf8')
      this.config = JSON.parse(file)
    } catch (error) {
      console.log(error)
    }
  }
}
