import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import IndexView from '../pages/Common/Index';
import HomeView from '../pages/Home';
import ShowView from '../pages/Show';
import MyView from '../pages/My';

const BaseRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<IndexView />}>
            <Route path="" element={<HomeView />}></Route>
            <Route path="show" element={<ShowView />}></Route>
            <Route path="my" element={<MyView />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRoute;
