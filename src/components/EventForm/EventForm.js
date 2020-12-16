import React from 'react'
import {Segment,Button} from 'semantic-ui-react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'

import Input from '../../FormikElements/Input'

const initValues = {
    eventTitle: '',
    category: '',
    description: '',
    city: '',
    venue: '',
}

const validationSchema = Yup.object({
    eventTitle: Yup.string().required('Event Title Required'),
    category: Yup.string().required('Category Required'),
    description: Yup.string().required('Description Required'),
    city: Yup.string().required('City Required'),
    venue: Yup.string().required('Venue Required'),
})

const handleSubmit = values => {
    console.log(values)
}

function EventForm() {
    return (
        <Segment clearing>
            <Formik initialValues={initValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {
                    formik => {
                        return (
                            <Form className="ui form">
                                <Input name="eventTitle" label="Event Title"/>
                                <Input name="category" label="Category"/>
                                <Input name="description" label="Description"/>
                                <Input name="city" label="City"/>
                                <Input name="venue" label="Venue"/>
                                <Button color="teal" floated="right" type="submit" content="submit"/>
                                <Button floated="right" content="cancel"/>
                            </Form>
                        )
                    }
                }
                {/* <Form.Field control="input" name="eventTitle" label="Event Title" id="eventTitle"/> */}
                {/* <Form.Input name="eventTitle" label="Event Title" id="eventTitle"/> */}
                {/* <Form.Field>
                    <label htmlFor="eventTitle">Event Title</label>
                    <input type="text" id="eventTitle" name="eventTitle" placeholder="Event Title"/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" placeholder="Category"/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" placeholder="Description"/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="eventTitle">City</label>
                    <input type="text" id="city" name="city" placeholder="City"/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="eventTitle">Venue</label>
                    <input type="text" id="venue" name="venue" placeholder="Venue"/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="Date">Date</label>
                    <input type="date" id="date" name="date" placeholder="Date"/>
                </Form.Field> */}

            </Formik>
            
        </Segment>
    )
}

export default EventForm
