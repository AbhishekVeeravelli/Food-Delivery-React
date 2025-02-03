import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'DummyName',
        location: 'Default',
        email: 'abc@gmail.com',
        avtarurl: 'http//dummy-photo.com',
      },
    };
  }
  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/AbhishekVeeravelli');
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, blog, avtarurl } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avtarurl} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>contact: {blog}</h2>
      </div>
    );
  }
}
export default UserClass;
