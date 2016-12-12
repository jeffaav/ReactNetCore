'use strict'; 

class Button extends React.Component {
    constructor(props) {
        super(props);
        if (!props.type) props.type = 'button';

        if (!props.class) props.class = 'btn-default';
    }

    render() {
        return React.createElement(
            'button',
            { id: this.props.id, type: this.props.type, className: `btn ${ this.props.class }` },
            this.props.text
        );
    }
}


class ModalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'modal-header' },
            React.createElement(
                'button',
                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                React.createElement(
                    'span',
                    { 'aria-hidden': 'true' },
                    '\xD7'
                )
            ),
            React.createElement(
                'h4',
                { className: 'modal-title' },
                this.props.title
            )
        );
    }
}

class ModalFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'modal-footer' },
            React.createElement(
                'button',
                { type: 'button', className: 'btn btn-secondary', 'data-dismiss': 'modal' },
                'Cancelar'
            ),
            '\xA0',
            React.createElement(
                'button',
                { type: 'submit', className: 'btn btn-primary', 'accept-button': true },
                'Aceptar'
            )
        );
    }
}

class Modal extends React.Component {
    constructor(props) {
        super(props);

        if (!props.url) props.url = "#";

        props.formId = document.querySelectorAll('.modal form').length + 1;

        if (!props.cancelSubmit && props.cancelSubmit === true) $(`#${ props.formId }`).on('submit', e => false);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'modal-dialog', role: 'document' },
            React.createElement(
                'div',
                { className: 'modal-content' },
                React.createElement(ModalHeader, { title: this.props.title }),
                React.createElement(
                    'form',
                    { id: this.props.formId, action: this.props.url, method: 'post' },
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        this.props.children
                    ),
                    React.createElement(ModalFooter, null)
                )
            )
        );
    }
}