import { FrontendWebappSgmPage } from './app.po';

describe('frontend-webapp-sgm App', () => {
  let page: FrontendWebappSgmPage;

  beforeEach(() => {
    page = new FrontendWebappSgmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
