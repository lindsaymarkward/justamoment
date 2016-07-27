import { JustamomentPage } from './app.po';

describe('justamoment App', function() {
  let page: JustamomentPage;

  beforeEach(() => {
    page = new JustamomentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
