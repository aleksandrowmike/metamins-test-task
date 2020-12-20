import SideBar from '../components/sidebar/SideBar';
import './MainLayout.scss';

const MainLayout =({children}) =>{
    return(
       <div className="container-fluid p-0 global-container">
           <div className="row row-height">
               <div className="col-lg-2 col-md-2">
                 <SideBar />
               </div>
               <div className="col-lg-10 col-md-10">
                {children}
               </div>
           </div>
       </div>
    )
}

export default MainLayout;