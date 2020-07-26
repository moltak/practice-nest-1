import { AppService } from './app.service';

describe('AppService', () => {
  const problemRepo: jest.Mocked<any> = {
    findByIds: jest.fn(),
  };

  const resultRepo: jest.Mocked<any> = {
    save: jest.fn(),
  };

  const service = new AppService(problemRepo, resultRepo);

  beforeEach(() => {
    problemRepo.findByIds.mockClear();
    resultRepo.save.mockClear();
  });

  it('채점 - 정답', async () => {
    // given
    problemRepo.findByIds.mockImplementation(() => {
      return [
        {
          id: 1,
          type: 1,
          answer: 'DUMMY_VALID_ANSWER',
        },
      ];
    });

    // when
    await service.results([{ id: 1, answer: 'DUMMY_VALID_ANSWER' }]);

    // then
    expect(resultRepo.save).toHaveBeenCalledWith([
      { problemId: 1, answer: 'DUMMY_VALID_ANSWER', result: true },
    ]);
  });

  it('채점 - 오답', async () => {
    problemRepo.findByIds.mockImplementation(() => {
      return [
        {
          id: 1,
          type: 1,
          answer: 'DUMMY_VALID_ANSWER',
        },
      ];
    });

    // when
    await service.results([{ id: 1, answer: 'DUMMY_WRONG_ANSWER' }]);

    // then
    expect(resultRepo.save).toHaveBeenCalledWith([
      { problemId: 1, answer: 'DUMMY_WRONG_ANSWER', result: false },
    ]);
  });

  it('채점 - 그림 문제 - 무조건 맞음', async () => {
    problemRepo.findByIds.mockImplementation(() => {
      return [
        {
          id: 1,
          type: 3,
          answer: 'DUMMY_VALID_ANSWER',
        },
      ];
    });

    // when
    await service.results([{ id: 1, answer: 'DUMMY_WHATEVER_ANSWER' }]);

    // then
    expect(resultRepo.save).toHaveBeenCalledWith([
      { problemId: 1, answer: 'DUMMY_WHATEVER_ANSWER', result: true },
    ]);
  });
});
