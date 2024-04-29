import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider } from '@material-tailwind/react';
import userEvent from '@testing-library/user-event';
import NewsProvider from '../Provider/NewsProvider';
import { initialNews } from './mock/initialNews';
import App from '../App';
import { buscaNews } from './mock/buscaNews';
import { toDate } from './mock/toDate';
import { fromDate } from './mock/fromDate';
import BlogCard from '../components/BlogCard';

localStorage.clear();

vi.spyOn(global, 'fetch')
  .mockImplementation((url) => Promise.resolve({ status: 200,
    ok: true,
    json: async () => {
      if (url === 'https://servicodados.ibge.gov.br/api/v3/noticias/?de=&qtd=5&page=1&ate=&busca=') { return initialNews; }
      if (url === 'https://servicodados.ibge.gov.br/api/v3/noticias/?de=&qtd=5&page=1&ate=&busca=test') { return buscaNews; }
      if (url === 'https://servicodados.ibge.gov.br/api/v3/noticias/?de=01-20-2024&qtd=5&page=1&ate=&busca=') { return toDate; }
      if (url === 'https://servicodados.ibge.gov.br/api/v3/noticias/?de=01-20-2024&qtd=5&page=1&ate=02-20-2024&busca=') { return fromDate; }
    } } as Response));
const MOCKFETCH = global.fetch;

test('Test if the inital news render correct', async () => {
  render(
    <ThemeProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </ThemeProvider>,

  );
  expect(MOCKFETCH).toHaveBeenCalled();
  expect(await screen.findByText('News')).toBeInTheDocument();
  await userEvent.click(screen.getByText('News'));
  expect(await screen.findAllByRole('heading')).toHaveLength(5);
});

test('Test if the search by date render correct and date is disable when all dates are select', async () => {
  render(
    <ThemeProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </ThemeProvider>,

  );

  const selectDate = 'Select Date';

  await userEvent.click(screen.getByPlaceholderText(selectDate));
  await userEvent.click(screen.getByRole('button', { name: 'April 2024' }));
  await userEvent.click(screen.getByRole('button', { name: 'Jan' }));
  await userEvent.click(screen.getByRole('button', { name: '20' }));
  expect(screen.getByText('toDateNews')).toBeInTheDocument();
  await userEvent.click(screen.getByPlaceholderText(selectDate));
  await userEvent.click(screen.getByRole('button', { name: 'January 2024' }));
  await userEvent.click(screen.getByRole('button', { name: 'Feb' }));
  await userEvent.click(screen.getByRole('button', { name: '20' }));
  expect(screen.getByText('fromDateNews')).toBeInTheDocument();
  expect(screen.getByPlaceholderText(selectDate)).toBeDisabled();
});

test('Test if the search by text render correct', async () => {
  render(
    <ThemeProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </ThemeProvider>,

  );

  await userEvent.type(screen.getByPlaceholderText('search'), 'test');
  await userEvent.click(screen.getByText('Search'));
  expect(screen.getByText('BUSCA NEWS')).toBeInTheDocument();
});

test('Test if the search by text render correct', async () => {
  render(
    <ThemeProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </ThemeProvider>,

  );

  expect(MOCKFETCH).toHaveBeenCalled();
  expect(localStorage.getItem('favoriteNews')).toBeNull();
  expect(await screen.findAllByRole('heading')).toHaveLength(5);
  expect(screen.getByText('IPCA-15 é de 0,21% em abril')).toBeInTheDocument();

  await userEvent.click(screen.getByPlaceholderText('39855'));
});
