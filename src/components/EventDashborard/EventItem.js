import React from 'react'
import {Segment,Item,List, Image, Button} from 'semantic-ui-react'
import EventAttendee from './EventAttendee'

function EventItem() {
    return (
        <Segment.Group raised>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" src="/assets/femaleUser.png"/>
                        <Item.Content>
                            <Item.Header as="a" content="Event Title"/>
                            <Item.Meta content="Hosted By Victor"/>
                            <Item.Description>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, suscipit.
                            </Item.Description>
                            <Item.Extra content="Event Extra"/>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment secondary textAlign="left">
                <List horizontal>
                    <List.Item>
                        <Image size="mini" src="/assets/calendar.png"/>
                        <List.Content>
                            <List.Header>Date</List.Header>
                            2020-12-15
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image size="mini" src="/assets/venue.png"/>
                        <List.Content>
                            <List.Header>Venue</List.Header>
                            Markham,ON
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
            <Segment textAlign="left">
                <List horizontal>
                    <EventAttendee/>
                    <EventAttendee/>
                    <EventAttendee/>
                </List>
            </Segment>
            <Segment clearing>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, molestiae id non architecto atque numquam?</div>
                <Button color="facebook" floated="right" size="tiny" content="View Details"/>
            </Segment>
            
        </Segment.Group>
    )
}

export default EventItem
