import React, { Component } from 'react'
import CustomerBioCommentView from './CustomerBioCommentView';

type CBPNProps  = {
    comment: any, 
    token: string, 
    deleteComment: Function,
}

type CBPNState = {

}

class CustomerBioPanelNew extends React.Component <CBPNProps, CBPNState> {

    constructor(props:CBPNProps) {
        super(props);
    }


    render() {
        return (
            <div>
                {this.props.comment.map((comment: any) => (
                    // <CustomerBioComment
                    //     key={comment.id}
                    //     comment={comment}
                    //     deleteComment={this.props.deleteComment}
                    //     token={this.props.token}
                    // />

                    <CustomerBioCommentView
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

export default CustomerBioPanelNew
