import { AppPage } from './app.po';

describe('Pruebas e2e', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1 Menu', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Menú');
  });

  it('Prueba 2 Salir', () => {
    page.navigateTo();
    expect(page.getLabelText()).toContain('Salir');
  });

  it('Prueba 3 Contenido Menu', () => {
    page.navigateTo();
    expect(page.getIconText()).toContain('{{ c.name }}');
  });
});
