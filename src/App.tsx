import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));
const Category = lazy(() => import('./pages/Category'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Loading = lazy(() => import('./pages/Loading'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id/detail" exact>
            <Layout>
              <Detail />
            </Layout>
          </Route>
          <Route path="/movies/:category" exact>
            <Layout>
              <Category />
            </Layout>
          </Route>
          <Route path="*">
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
