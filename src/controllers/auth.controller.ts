import { Controller, Get } from '@nestjs/common'

@Controller()
export class AuthController {
  constructor() {}

  @Get()
  getHello() {
    return { a: 1 }
  }
}
