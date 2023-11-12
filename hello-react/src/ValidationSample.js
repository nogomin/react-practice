import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        validation: '',
    }

    onkeyUp = (e) => {
        this.setState({
            validation: e.target.value === '0000' ? 'success' : 'failure'
        })
    }

    render() {
        return (
            <div>
                <input type='password' name='password' placeholder='비밀번호 입력' onKeyUp={this.onkeyUp} className={this.state.validation} />        
            </div>
        )
    }
}

export default ValidationSample;