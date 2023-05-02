import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Register from './components/Enterance/Register';
import Sigin from './components/Enterance/Sigin';
import Home from './components/Home/Home';
import useScript from './Hooks/useScript';
import BlogList from './components/Blogs/BlogList';
import CreateBlog from './components/Blogs/CreateBlog';
import UpdateBlog from './components/Blogs/UpdateBlog';
import BlogDetails from './components/Blogs/BlogDetails';

import { AboutHome } from './components/Home/AboutHome';
import Contact from './components/Contact/Contact';
import AddNewCategory from './components/Categories/AddNewCategory';
import CategoryList from './components/Categories/CategoryList';
import UpdateCategory from './components/Categories/UpdateCategory';
import PrivateProtectedRoute from './components/Navigation/ProtectedRoute/PrivateProtectedRoute';
import Teams from './components/Teams/Teams';
import MessageCeo from './components/MessageCeo/MessageCeo';
import Overview from './components/MessageCeo/Overview';
import Partners from './components/MessageCeo/Partners';
import Career from './components/Career/Career';
import Gallery from './components/Career/Gallery';

function App() {
  useScript('https://code.jquery.com/jquery-3.4.1.min.js');
  useScript(
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js'
  );
  useScript('lib/wow/wow.min.js');
  useScript('lib/easing/easing.min.js');
  useScript('lib/waypoints/waypoints.min.js');
  useScript('lib/counterup/counterup.min.js');
  useScript('lib/owlcarousel/owl.carousel.min.js');
  useScript('lib/lightbox/js/lightbox.min.js');
  useScript('js/main.js');

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Sigin />} />
        <Route exact path="/team" element={<Teams />} />
        <Route exact path="/message-ceo" element={<MessageCeo />} />
        <Route exact path="/overview" element={<Overview />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/about" element={<AboutHome />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blogs" element={<BlogList />} />
        <Route exact path="/blogs/:id" element={<BlogDetails />} />

        <Route exact path="/add-category" element={<PrivateProtectedRoute />}>
          <Route exact path="/add-category" element={<AddNewCategory />} />
        </Route>

        <Route
          exact
          path="/update-blog/:id"
          element={<PrivateProtectedRoute />}
        >
          <Route exact path="/update-blog/:id" element={<UpdateBlog />} />
        </Route>

        <Route
          exact
          path="/update-category/:id"
          element={<PrivateProtectedRoute />}
        >
          <Route
            exact
            path="/update-category/:id"
            element={<UpdateCategory />}
          />
        </Route>

        <Route exact path="/category-list" element={<PrivateProtectedRoute />}>
          <Route exact path="/category-list" element={<CategoryList />} />
        </Route>

        <Route exact path="/create-blog" element={<PrivateProtectedRoute />}>
          <Route exact path="/create-blog" element={<CreateBlog />} />
        </Route>

        <Route path="/update-blog/:id" element={<UpdateBlog />} />
        <Route exact path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
