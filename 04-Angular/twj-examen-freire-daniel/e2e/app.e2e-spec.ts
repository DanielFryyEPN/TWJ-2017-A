import { TwjExamenFreireDanielPage } from './app.po';

describe('twj-examen-freire-daniel App', () => {
  let page: TwjExamenFreireDanielPage;

  beforeEach(() => {
    page = new TwjExamenFreireDanielPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
