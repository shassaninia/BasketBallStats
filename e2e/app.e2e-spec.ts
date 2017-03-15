import { BasketBallStatsPage } from './app.po';

describe('basket-ball-stats App', function() {
  let page: BasketBallStatsPage;

  beforeEach(() => {
    page = new BasketBallStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
