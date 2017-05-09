import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        return (
            <div>
                <p>
                    푸터로 보낸다
                    : <input type="text" name="test" />
                </p>
            </div>
        );
    }
}
Header.PropTypes = {
    title : PropTypes.string.isRequired
};
export default Header;









