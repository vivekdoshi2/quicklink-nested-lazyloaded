import { FirstChildModule } from './first-child.module';

describe('FirstChildModule', () => {
  let firstChildModule: FirstChildModule;

  beforeEach(() => {
    firstChildModule = new FirstChildModule();
  });

  it('should create an instance', () => {
    expect(firstChildModule).toBeTruthy();
  });
});
