import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const RootLayouts = ({children}) => {
    return (
      <div className="root-main">
        <Header></Header>
              <main>
            {children}
             </main>
        <Footer></Footer>
      </div>
    );
  }
  export default RootLayouts;