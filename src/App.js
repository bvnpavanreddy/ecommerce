import React from 'react';
import './App.css';
import { Switch, Route,Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/users.selectors'
import Checkout from './pages/checkout/checkout.component';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    // const {setCurrentUser}= this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //           if(userAuth){
    //             const userRef = await createUserProfileDocument(userAuth)

    //             userRef.onSnapshot(snapshot =>{
    //               setCurrentUser({
    //                 currentUser:{
    //                   id:snapshot.id,
    //                   ...snapshot.data()
    //                 }
    //               }, () =>  console.log(setCurrentUser)
    //               )
                 
    //             })
    //             // console.log(this.state)
    //           }
    //           setCurrentUser({currentUser:userAuth})
    //                                                         // createUserProfileDocument(userAuth)
    //                                                         // this.setState({currentUser:userAuth})
    //                                                         //  console.log(user)
    // })

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div>
        <Header />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              {/* <Route path='/sign-in-and-signup' component={SignInAndSignUpPage}/> */}
              <Route exact path='/sign-in-and-signup' render={()=>this.props.currentUser?
                                                                        ( <Redirect to='/' />)
                                                                        : (<SignInAndSignUpPage />)} />
              <Route exact path='/checkout' component={Checkout}/>
          </Switch>
      </div>
    );
  }
}

// const mapStateToProps =({user})=>(
//      {
//        currentUser:user.currentUser
      
//      }
// )

const mapStateToProps = createStructuredSelector(
                                            {
                                              currentUser:selectCurrentUser
                                            }
                                              )

const mapDispatchToProps=(dispatch)=>(
  {setCurrentUser:user=>dispatch(setCurrentUser(user))}
)

export default connect(mapStateToProps,mapDispatchToProps) (App);


