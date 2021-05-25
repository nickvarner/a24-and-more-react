import { Input, Menu, Container } from 'semantic-ui-react';
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Movie from './Movie';
import AddMovie from './AddMovie';

class Navbar extends React.Component {
	state = { activeItem: 'home' };
	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	render () {
		const { activeItem } = this.state;
		return (
			<Container>
				<Menu secondary>
					<Link to={'/movies'}>
						<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
					</Link>
					<Link to={'/add'}>
						<Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick} />
					</Link>
					<Menu.Menu position='right'>
						<Menu.Item>
							<Input icon='search' placeholder='Search Movies...' />
						</Menu.Item>
						<Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
					</Menu.Menu>
				</Menu>
				<div className='container mt-3'>
					<Switch>
						<Route exact path={[ '/', '/movies' ]} component={MovieList} />
						<Route exact path='/add' component={AddMovie} />
						<Route path='/movies/:id' component={Movie} />
					</Switch>
				</div>
			</Container>
		);
	}
}

export default Navbar;
