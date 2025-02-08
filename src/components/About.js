import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from '../utils/userContext';

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Abhishek's Website</h2>
        <UserClass name={'Abhishek(Class)'} location={'Texas'} />
      </div>
    );
  }
}

export default About;
