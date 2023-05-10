import { Routes, Route, Outlet } from 'react-router-dom';
import Header from "./components/ui/Header"
import Footer from "./components/ui/Footer"
import Products from './components/pages/Products';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Nav from './components/ui/Nav';
import Product from './components/pages/Product';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
      <div>
        <Header bg="lavender" text="deeppink" padding="50px">
          <h1>Site logo</h1>
          <Nav />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='products' element={<Products />} />
              <Route path='contact' element={<Contact />} />
              <Route path="product/:id" element={<Product />} />
            </Route>
          </Routes>
        </Header>
        <Footer bg="LightCyan" text="DarkOrchid" padding="50px">
          Copyright {(new Date()).getFullYear()}
        </Footer>
      </div>
  )
}
