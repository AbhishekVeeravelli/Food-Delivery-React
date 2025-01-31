import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("This is component did mount")
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Abhishek's Website</h2>
        <UserClass name={'Abhishek(Class)'} location={'Texas'} />
      </div>
    );
  }
}

export default About;
