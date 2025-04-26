import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Effect1 from './Pages/effect/Effect1.jsx';
import Effect11 from './Pages/effect/Effect2.jsx';
import Effect3 from './Pages/effect/Effect3.jsx';
import Effect4 from './Pages/effect/Effect4.jsx';
import Effect5 from './Pages/effect/Effect5.jsx';
import Effect6 from './Pages/effect/Effect6.jsx';
import Effect7 from './Pages/effect/Effect7.jsx';
import State1 from './Pages/state/State1.jsx';
import State10 from './Pages/state/State10.jsx';
import State2 from './Pages/state/State2.jsx';
import State3 from './Pages/state/State3.jsx';
import State4 from './Pages/state/State4.jsx';
import State5 from './Pages/state/State5.jsx';
import State6 from './Pages/state/State6.jsx';
import State7 from './Pages/state/State7.jsx';
import State8 from './Pages/state/State8.jsx';
import State9 from './Pages/state/State9.jsx';
import FormDetails from './Pages/Forms/FormDetails.jsx';
import Effect8 from './Pages/effect/Effect8.jsx';
import Effect9 from './Pages/effect/Effect9.jsx';
import Effect10 from './Pages/effect/Effect10.jsx';
import Props1 from './Pages/Props/Props1.tsx';
import Props2Parent from './Pages/Props/Props2Parent.jsx';
import Props3Parent from './Pages/Props/Props3Parent.jsx';
import Props4Parent from './Pages/Props/Props4Parent.jsx';
import Props5Parent from './Pages/Props/Props5Parent.jsx';
import Props6Parent from './Pages/Props/Props6Parent.jsx';
import Props7Parent from './Pages/Props/Props7Parent.tsx';
import Props8Parent from './Pages/Props/Props8Parent.jsx';

import MultiCall from './Pages/TanStack/MultiCall.jsx';
import Sample from './Pages/TanStack/Sample.jsx';


function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      {/* <State1 /> */}
      {/* <State2 /> */}
      {/* <State3/> */}
      {/* <State4/> */}
      {/* <State5/> */}
      {/* <State6/> */}
      {/* <State7/> */}
      {/* <State8/> */}
      {/* <State9/> */}
      {/* <State10/> */}
      {/* <Effect1/> */}
      {/* <Effect11/> */}
      {/* <Effect3/> */}
      {/* <Effect4/> */}
      {/* <Effect5/> */}
      {/* <Effect6 /> */}
      {/* <Effect7/> */}
      {/* <FormDetails/> */}
      {/* <Effect8/> */}
      {/* <Effect9/> */}
      {/* <Effect10/> */}
      {/* <Props1 name={"Umar"}/> */}
      {/* <Props2Parent/> */}
      {/* <Props3Parent/> */}
      {/* <Props4Parent/> */}
      {/* <Props5Parent/> */}
      {/* <Props6Parent/> */}
      {/* <Props7Parent/> */}
      {/* <Props8Parent/> */}
      <QueryClientProvider client={queryClient}>
        {/* <Sample /> */}
        <MultiCall />
      </QueryClientProvider>
    </div>
  );
}

export default App;
