import React from 'react'
import { Container,Grid } from 'semantic-ui-react'

import EventList from './EventList'
import EventForm from '../EventForm/EventForm'

function EventDashboard() {
    return (
            <Container className="eventDashboard">
                <Grid >
                        <Grid.Column width={10} textAlign="center">
                            <EventList/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <EventForm/>
                        </Grid.Column>
                </Grid>
            </Container>
    )
}

export default EventDashboard
