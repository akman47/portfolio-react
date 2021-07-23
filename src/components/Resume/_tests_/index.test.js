import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup);

describe('Resume componenet', () => {
    it('renders', () => {
        render(<Resume />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Resume />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('h1 tag', () => {
    it('h1 displays resume', () => {
        const { getByTestId } = render(<Resume />);
        expect(getByTestId('resume')).toHaveTextContent('Resume');
    });
});