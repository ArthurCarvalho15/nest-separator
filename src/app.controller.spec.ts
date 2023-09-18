import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { SeparatorService } from './services/separator.service';

describe('AppController', () => {
  let appController: AppController;
  let separatorService: SeparatorService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [SeparatorService],
    }).compile();

    appController = app.get<AppController>(AppController);
    separatorService = app.get<SeparatorService>(SeparatorService);
  });

  describe('separateString', () => {
    it('should call stringSeparator with the provided data and return the result', () => {
      const inputData = { data: 'a,b,c' };
      const expectedResult = { separated: ['a', 'b', 'c'] };

      // Mock the stringSeparator method of SeparatorService
      jest
        .spyOn(separatorService, 'stringSeparator')
        .mockReturnValue(expectedResult);

      const result = appController.separateString(inputData);

      expect(result).toEqual(expectedResult);
      expect(separatorService.stringSeparator).toHaveBeenCalledWith(
        inputData.data,
      );
    });
  });
});
