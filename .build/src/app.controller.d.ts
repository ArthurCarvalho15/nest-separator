import { AppService } from './app.service';
import { SeparatorService } from './services/separator.service';
export declare class AppController {
    private readonly appService;
    private readonly separatorService;
    constructor(appService: AppService, separatorService: SeparatorService);
    separateString(body: {
        data: string;
    }): object;
    getHello(body: {
        name: string;
    }): string;
}
