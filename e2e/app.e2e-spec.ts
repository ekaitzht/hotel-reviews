import { HOTELPROJECTPage } from './app.po';

describe('hotel-project App', function() {
  let page: HOTELPROJECTPage;

  beforeEach(() => {
    page = new HOTELPROJECTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
