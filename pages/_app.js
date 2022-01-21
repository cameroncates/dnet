
import Layout1 from '../components/layout/Layout1'
import Layout2 from '../components/layout/Layout2'

// import CSS
import  '../public/assets/style/bg.css'
import  '../public/assets/style/fontsize.css'
import  '../public/assets/style/letterspacing.css'
import  '../public/assets/style/lineheight.css'
import  '../public/assets/style/fontfamily.css'
import  '../public/assets/style/textcolor.css'
import  '../public/assets/style/button.css'
import  '../public/assets/style/shadow.css'
import  '../public/assets/style/banner.css'
import  '../public/assets/style/body.css'
import  '../public/assets/style/form.css'
import  '../public/assets/style/border.css'
import  '../public/assets/style/round-profile-pic.css'
import  '../public/assets/style/overflow.css'
import  '../public/assets/style/scrollbar.css'
import  '../public/assets/style/lib/swiper.css'
import  '../public/assets/style/pulse-button.css'
import  '../public/assets/style/padding.css'
import  '../public/assets/style/dropdown.css'
import  '../public/assets/style/hover.css'
import  '../public/assets/style/textprops.css'
import  '../public/assets/style/width.css'
import  '../public/assets/style/checkbox.css'
import  '../public/assets/style/cursor.css'
import  '../public/assets/style/transition.css'
import  '../public/assets/style/zindex.css'
import  '../public/assets/style/mediaqueries/lg-queries.css'
import  '../public/assets/style/toggle-switch.css'
import  '../public/assets/style/resize.css'



const layouts = {
  L1: Layout1,
  L2: Layout2,
}

function MyApp({ Component, pageProps }) {
    const Layout = layouts[Component.layout] || ((children) => <>{children}</>)
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>    
    )
}

export default MyApp
