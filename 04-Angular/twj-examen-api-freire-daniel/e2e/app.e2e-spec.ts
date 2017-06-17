import { TwjExamenApiFreireDanielPage } from './app.po';

describe('twj-examen-api-freire-daniel App', () => {
  let page: TwjExamenApiFreireDanielPage;

  beforeEach(() => {
    page = new TwjExamenApiFreireDanielPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
