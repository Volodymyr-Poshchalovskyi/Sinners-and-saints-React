import Header from './Header';

import Footer from './Footer';



export default function Layout({ children }) {

return (

<div className="min-h-screen dark:bg-gray-900 text-black dark:text-white">

<Header />

<main>{children}</main>

<Footer />

</div>

);

}