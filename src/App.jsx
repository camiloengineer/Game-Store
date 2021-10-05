import { Counter } from './components/common/counter/Counter';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <>
    <AppRouter />
    <div className='container mx-auto'>
      <Counter />
    </div>
    </>
  );
}

export default App;
