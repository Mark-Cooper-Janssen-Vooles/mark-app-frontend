import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header.jsx';
import App from '../components/App.jsx';
import AddPersonPage from '../components/AddPersonPage.jsx'
import NotFoundPage from '../components/NotFoundPage.jsx';

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
    <div>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/add-person" component={AddPersonPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
};

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/" component={DashboardPage} exact={true} />
//         <Route path="/portfolio" component={PortfolioPage} exact={true} />
//         <Route path="/portfolio/:id" component={SpecificPortfolioPage} />
//         <Route path="/contact" component={ContactPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </BrowserRouter>
//   );
// };

export default Router;