import React from 'react';
import { Form, Segment, Header, Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';

const Login = (props) => {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ loading, setLoading ] = React.useState(false);
	const [ message, setMessage ] = React.useState('');

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
		if (email && password) {
			AuthService.login(email, password).then(
				() => {
					props.history.push('/profile');
					window.location.reload();
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

					setLoading(false);
					setMessage(resMessage);
				}
			);
		} else {
			setLoading(false);
		}
	};
	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' textAlign='center'>
					login to an existing account
				</Header>
				<Form size='large' onSubmit={handleSubmit}>
					<Segment stacked>
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
					New to us? <Link to={'/register'}>Sign Up</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default Login;
