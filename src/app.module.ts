import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SeparatorService } from './services/separator.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SeparatorService],
})
export class AppModule {}
