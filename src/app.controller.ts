import { Body, Controller, Post } from '@nestjs/common';
import { SeparatorService } from './services/separator.service';

@Controller('/')
export class AppController {
  constructor(private readonly separatorService: SeparatorService) {}

  @Post('/separate')
  separateString(@Body() body: { data: string }): object {
    const { data } = body;
    return this.separatorService.stringSeparator(data);
  }
}
