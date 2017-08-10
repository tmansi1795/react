import React from 'react';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.callBackComponent = this.callBackComponent.bind(this);

    }
    callBackComponent(event) {
        event.preventDefault();
        console.log("entered inputfield component", this.refs.createInput.value);
        this.props.getData(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }
    render() {
        return (
            <div>
                <form>
                    <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}
                        ref="createInput" />
                    <input type="submit" name="submit" value="addToCart" onClick={this.callBackComponent} />

                </form>
            </div>
        );


    }
}
export default InputBox;