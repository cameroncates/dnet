
import CreatePost from '../modals/CreatePost'
import Footer from './partials/footer'
import Navbar from './partials/navbar'
import Sidebar from './partials/sidebar'

export default function Layout1({ children }) {
  return (
    <>
        <Navbar />
        <CreatePost />
            <div className="container px-0">
                <div className="row mx-0">
                    <div className="col-lg-4 px-0">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8 pl-4">
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}