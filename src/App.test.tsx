import React from 'react';
import { render } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
	test('shows hello world', () => {
		const { getByText } = render(<App />);

		expect(getByText('Hello world')).toBeInTheDocument();
	});
});
