import React from 'react';
import { render } from '@testing-library/react';
import TekledApp from './Tekledelse/TekledApp';

test.skip('renders welcome message ', () => {
  const { getByText } = render(<TekledApp />);
  const linkElement = getByText(/Hei, og velkommen/i);
  expect(linkElement).toBeInTheDocument();
});
