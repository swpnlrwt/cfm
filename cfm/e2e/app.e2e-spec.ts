import { CfmAppPage } from './app.po';

describe('cfm-app App', () => {
  let page: CfmAppPage;

  beforeEach(() => {
    page = new CfmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
