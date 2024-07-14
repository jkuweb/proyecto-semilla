import { createRoot } from 'react-dom/client';
import * as classes from './main.scss';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <>
    <h1 className={classes.title}>Hello React</h1>
  </>
);
