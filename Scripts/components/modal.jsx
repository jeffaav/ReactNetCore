'use strict';

import React from 'React'

class ModalHeader extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">{this.props.title}</h4>
            </div>
        );
    }
}

class ModalFooter extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Cancelar
                </button>
                &nbsp;
                <button type="submit" className="btn btn-primary" accept-button>
                    Aceptar
                </button>
            </div>
        );
    }
}

class Modal extends React.Component {
    constructor (props) {
        super(props);

        if (!props.url)
            props.url = "#";

        props.formId = document.querySelectorAll('.modal form').length + 1;

        if (!props.cancelSubmit && props.cancelSubmit === true)
            $(`#${props.formId}`).on('submit', (e) => false);
    }

    render() {
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <ModalHeader title={this.props.title} />
                    <form id={this.props.formId} action={this.props.url} method="post">
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <ModalFooter/>
                    </form>                
                </div>
            </div>
        );
    }
}