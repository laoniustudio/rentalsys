import { SjrouterModule } from './sjrouter.module';

describe('SjrouterModule', () => {
  let sjrouterModule: SjrouterModule;

  beforeEach(() => {
    sjrouterModule = new SjrouterModule();
  });

  it('should create an instance', () => {
    expect(sjrouterModule).toBeTruthy();
  });
});
