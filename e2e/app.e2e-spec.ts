import { AtomicAngularPage } from './app.po';

describe('atomic-angular App', () => {
  let page: AtomicAngularPage;

  beforeEach(() => {
    page = new AtomicAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
