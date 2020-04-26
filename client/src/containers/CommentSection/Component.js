import React from 'react'
import { Field } from 'redux-form'
import Form from '../../components/Form'
import renderField from '../../components/Form/renderField'
import Button from '../../components/Button'
import categories from '../../categories'

class CommentSection extends React.Component {
    componentDidMount () {
        if (!this.props.token) {
            this.props.history.push('/login')
        }
    }
    componentDidUpdate() {
        // const { newPost } = this.props 
        // if (newPost) {
        //     this.props.history.push(`/c/${newPost.category}/${newPost.id}`)
        // }
    }
    onSubmit = ({ title, category, text, link }) => {
        this.props.attemptCreatePost({ title, category, text, link})
    }

    render () {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                <Field
                    name="text"
                    placeholder="Text" 
                    type="textarea"
                    component={renderField}
                />
                <Button type="submit">Comment</Button>
            </Form>
        )
    }
}

export default CommentSection