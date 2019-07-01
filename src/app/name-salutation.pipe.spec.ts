import { NameSalutationPipe } from './name-salutation.pipe';

describe('NameSalutationPipe', () => {
  it('create an instance', () => {
    const pipe = new NameSalutationPipe();
    expect(pipe).toBeTruthy();
  });
});
