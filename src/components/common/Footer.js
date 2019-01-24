import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
    <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> Reaudible</a>
        </div>
    </footer>
        );
    }
}

export default Footer;