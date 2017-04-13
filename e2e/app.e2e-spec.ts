import { LahmaAppPage } from './app.po';

describe('lahma-app App', () => {
  let page: LahmaAppPage;

  beforeEach(() => {
    page = new LahmaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
