import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import IndexView from '../views/Common/IndexView';
import ShowView from '../views/ShowView';
import MyView from '../views/MyView';

const BaseRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<IndexView />}></Route>
          <Route path="show" element={<ShowView />}></Route>
          <Route path="my" element={<MyView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRoute;
