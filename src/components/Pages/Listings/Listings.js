import React from 'react'
import Header from '../../../Header/Header'
import Aux from '../../../../containers/hoc/Auxiliary/Aux';
import Footer from '../../Footer/Footer'
import './Listings.css'

const Listings = (props) => {
return(
   <Aux>
    
    <div className="About"><div className="AboutHead"><Header/></div></div>
     
    <h1>Listings</h1>
    <div className="About"><div className="AboutFooter"><Footer/></div></div>
    
    
    </Aux>
    );
}
export default Listings;