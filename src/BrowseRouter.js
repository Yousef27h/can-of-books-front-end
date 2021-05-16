// import React, { Component } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { withAUth0 } from '@auth0/auth0-react';
// import BestBooks from './BestBooks';
// import Login from './Login';
// import Profil from './profile';
// import IsLoadingAndError from './IsLoadingAndError';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";






// export class BrowseRouter extends Component {


  
  
//   render() {
   
//   console.log(this.props)
//     return (
//       <div>
//         <Router>
//           <IsLoadingAndError>
//               <Switch>
//               <Route exact path="/">
//                 {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
//                 {
                  
//                   this.props.auth0.isAuthenticated ? <Login/> : <BestBooks/>

//                 }
                
//               </Route>
              
//               <Route exact path="/profile">
//               {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
//               {
//                 // !LogButton.isAuthenticated ? <Login/> : 

//                 this.props.auth0.isAuthenticated && <Profil/>
//               }
             
//               </Route>
//             </Switch>
           
//           </IsLoadingAndError>
//         </Router>
//       </div>
//     )
//   }
// }

//  export default BrowseRouter;
