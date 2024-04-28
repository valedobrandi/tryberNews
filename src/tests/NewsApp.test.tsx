import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider } from '@material-tailwind/react';
import App from '../App';
import NewsProvider from '../Provider/NewsProvider';
import { initialNews } from './mock/initialNews';

/* vi.spyOn(global, 'fetch').mockImplementation(
  (URL) => Promise.resolve(
    {
      status: 200,
      ok: true,
      json: () => {
        if (URL === 'https://servicodados.ibge.gov.br/api/v3/noticias/?de=&qtd=5&page=1&ate=&busca=') return Promise.resolve(initialNews);
      } } as Response,
  ),
); */

test('Test if the inital news render correct', async () => {
  render(
    <ThemeProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </ThemeProvider>,
  );

  expect(await screen.findByText(/UFRJ/i));
});
