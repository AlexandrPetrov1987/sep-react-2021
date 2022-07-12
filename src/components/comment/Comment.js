import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {name, email} = this.props.comment;

        return (
            <div>
                <div>
                    {name} -- {email}
                </div>
            </div>
        );
    }
}

export {Comment};