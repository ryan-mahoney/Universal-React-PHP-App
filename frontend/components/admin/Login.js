import React from 'react';
import { Button, Checkbox, Form, Segment, Grid, Header, Message } from 'semantic-ui-react';

const Login = (props) => {
    return (
        <Segment vertical>
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header size="huge">Login</Header>
                    <Form onSubmit={
                            (e, serializedForm) => {
                                e.preventDefault();
                                props.submitAdminLogin(serializedForm);
                            }
                        }
                        error={Boolean(props.error)}
                        warning={Boolean(props.notice)}
                        loading={props.isFetching}
                    >
                        <Message
                            error
                            header="An Error Occurred"
                            content={props.error != null && props.error.message || null}
                        />
                        <Message
                            warning
                            header="Please Correct These Issues"
                            list={props.notice != null && props.notice.messages || []}
                        />
                    <Form.Field error={(props.notice != null && props.notice.fields && props.notice.fields.email != null)}>
                            <label>Email</label>
                            <input name="email" placeholder="email" onChange={(e) => { props.clearAdminFieldError('email'); }} />
                        </Form.Field>
                        <Form.Field error={(props.notice != null && props.notice.fields && props.notice.fields.password != null)}>
                            <label>Password</label>
                            <input name="password" type="password" placeholder="password" onChange={(e) => { props.clearAdminFieldError('password'); }} />
                        </Form.Field>
                        <Button type="submit" disabled={props.isFetching}>Login</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </Segment>
    )
};

export default Login;