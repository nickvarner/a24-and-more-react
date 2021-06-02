import React from 'react';
import { Form, Segment, Header, Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';

const Register = () => {
	const [ username, setUsername ] = React.useState('');
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ loading, setLoading ] = React.useState(false);
	const [ message, setMessage ] = React.useState('');

	const handleUserChange = (e) => {
		const username = e.target.value;
		setUsername(username);
	};
	const handleEmailChange = (e) => {
		const email = e.target.value;
		setEmail(email);
	};
	const handlePasswordChange = (e) => {
		const password = e.target.value;
		setPassword(password);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage('');
	};
	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' textAlign='center'>
					register a new account
				</Header>
				<Form size='large'>
					<Segment stacked>
						<Form.Input
							fluid
							icon='user'
							iconPosition='left'
							placeholder='enter your display name'
							name='username'
							value={username}
							onChange={handleUserChange}
						/>
						<Form.Input
							fluid
							icon='user'
							iconPosition='left'
							placeholder='email address'
							name='email'
							value={email}
							onChange={handleEmailChange}
						/>
						<Form.Input
							fluid
							icon='lock'
							iconPosition='left'
							placeholder='Password'
							name='password'
							value={password}
							onChange={handlePasswordChange}
						/>
						<Form.Button content='submit' />
					</Segment>
				</Form>
				<Message>
					Already registered? <Link to={'/login'}>Sign In</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default Register;
