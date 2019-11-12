import React, { Component } from "react";

import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <section class="profile">
        <header>
          <h1>{this.props.user.name}</h1>
        </header>
        <div class="profile-content">
          <img src={this.props.user.image} alt={this.props.user.name} />
          <p>
            <strong>Age:</strong> {this.props.user.age}
          </p>
          <p>
            <strong>Interests:</strong> {this.props.user.interests}
          </p>
        </div>
      </section>
    );
  }
}

export default Profile;
