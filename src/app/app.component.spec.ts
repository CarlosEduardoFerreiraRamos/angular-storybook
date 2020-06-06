import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render the component', async () => {
    const { getByText } = await render(AppComponent);
    const text = getByText('Welcome')
    expect(text);
  });
});