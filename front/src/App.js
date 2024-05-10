import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Index from './components/index';
import UserLogin from './components/user.login';
import UserRegistration from './components/user.registration';

import About from './components/user.About';
import Admin from './components/Admin/admin';
import AdminLogin from './components/Admin/admin.login';
import AdminReg from './components/Admin/admin.reg';
import Appointment from './components/userAdmin/appointment';
import AppointmentEdit from './components/userAdmin/appoimentEdit';
import ArticleDashboard from './components/Admin/articleDashboard';
import Product from './components/userAdmin/product';
import ProductDashboard from './components/Admin/productDashboard';
import Article from './components/userAdmin/article';
import AppointmentsDashboard from './components/Admin/appoimentDashboard';
import Feedback from './components/userAdmin/feedback';
import Booking from './components/userAdmin/booking';
import UserAdminDashboard from './components/userAdmin/userAdminDashboard';
import ChatBox from './components/userAdmin/chatUser';
import ChatAdmin from './components/Admin/chatAdmin';



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" >
          <Index />
        </Route>
        <Route path="/Appointment" exact component={Appointment} />
        <Route path="/ProductDashboard" exact component={ProductDashboard} />
        <Route path="/AppointmentEdit" exact component={AppointmentEdit} />
        <Route path="/ArticleDashboard" exact component={ArticleDashboard} />
        <Route path="/UserAdminDashboard" exact component={UserAdminDashboard} />
        <Route path="/UserLogin" exact component={UserLogin} />
        <Route path="/UserRegistration" exact component={UserRegistration} />
        <Route path="/About" exact component={About} />
        <Route path="/Admin" exact component={Admin} />
        <Route path="/AdminLogin" exact component={AdminLogin} />
        <Route path="/AdminReg" exact component={AdminReg} />      
        <Route path="/Product" exact component={Product} />
        <Route path="/Article" exact component={Article} />
        <Route path="/AppointmentsDashboard" exact component={AppointmentsDashboard} />
        <Route path="/FeedbackPage" exact component={Feedback} />
        <Route path="/Booking" exact component={Booking} />
        <Route path="/ChatBox" exact component={ChatBox} />
        <Route path="/ChatAdmin" exact component={ChatAdmin} />

      </div>
    </Router>
  );
}

export default App;
