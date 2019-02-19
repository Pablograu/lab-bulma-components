import React, { Component } from "react";
import Navbar from './components/Navbar';
import Form from './components/Form';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
			<div>
				<div>
					<Navbar/>
				</div>
				<Form label="Name" type="text" placeholder="e.g Alex Smith" />
				<Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
				<Button isSmall isDanger className="is-rounded my-class">Button 1</Button>
				<Button isSmall isSuccess>Button 2</Button>
			</div>
    )
  }
}

export default App;
