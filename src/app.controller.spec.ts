import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;

  const service: jest.Mocked<any> = {
    problems: jest.fn(),
    results: jest.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: service,
        },
      ],
    }).compile();

    controller = app.get<AppController>(AppController);
  });

  describe('problems', () => {
    it('should return problems', async () => {
      // given
      service.problems = jest.fn().mockImplementation(() => {
        return {
          problems: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        };
      });

      // when
      // then
      expect((await controller.fetchProblem()).problems).toHaveLength(2);
    });
  });

  describe('results', () => {
    // given
    it('should return results', async () => {
      service.results = jest.fn().mockImplementation(() => {
        return {
          results: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        };
      });

      // when
      // then
      expect((await controller.submit({ input: '{}' })).results).toHaveLength(
        2,
      );
    });

    it('should match result with input', async () => {
      // given
      const inputs = { input: [{ id: 1, answer: '1' }] };

      // when
      await controller.submit({ input: JSON.stringify(inputs) });

      // then
      expect(service.results).toBeCalledWith(inputs);
    });
  });
});
