import React, { Component } from 'react'
import CustomerBioComment from './CustomerBioComment';

export class CustomerBioPanel extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {this.props.comment.map((comment) => (
                    <CustomerBioComment
                        key={comment.id}
                        comment={comment}
                        deleteComment={this.props.deleteComment}
                        token={this.props.token}
                    />

                ))}
            </div>
        )
    }
}

export default CustomerBioPanel
