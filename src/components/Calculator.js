import React, { Component } from 'react'

export default class Calculator extends Component {
    state = {
        answer: '',
        question: '',
    }

    handleClick = (value) => {
        switch (value) {
            case '=': {
                if (this.state.question !== '') {
                    let ans = '';
                    try {
                        ans = eval(this.state.question);
                    }
                    catch (err) {
                        this.setState({ answer: "Math Error" });
                    }
                    if (ans === undefined)
                        this.setState({ answer: "Math Error" });
                    else
                        this.setState({ answer: ans, question: this.state.question });
                    break;
                }
                break;
            }
            case 'C': {
                this.setState({ question: '', answer: '' });
                break;
            }
            case 'last': {
                let str = this.state.question;
                str = str.substring(0, str.length - 1);
                this.setState({ question: str });
                break;
            }
            default: {
                let question = this.state.question
                this.setState({ question: question += value })
                break;
            }
        }
    }
    render() {
        return (
            <div className='py-5' style={{ maxWidth: '700px', margin: 'auto' }}>
                <div className='border p-5'>
                    <h2 className='mb-4'>Calculator</h2>
                    <input type="text" readOnly value={this.state.question} className="form-control" style={{ textAlign: 'right' }} />
                    <div className='d-flex justify-content-end mt-3'>
                        Result:
                    </div>
                    <input type="text" readOnly value={this.state.answer} className="form-control" style={{ textAlign: 'right' }} />
                    <div className='row py-2'>
                        <div className='col-6'></div>
                        <div className='col-3'><button type="button" className='btn btn-danger w-100' onClick={() => { this.handleClick('C') }}>C</button></div>
                        <div className='col-3'>
                            <button type="button" className='btn btn-warning w-100' onClick={() => { this.handleClick('last') }}>
                                <i class="fa-solid fa-delete-left"></i>
                            </button>
                        </div>

                    </div>
                    <div className='row py-2'>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(7) }}>7</button></div>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(8) }}>8</button></div>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(9) }}>9</button></div>
                        <div className='col-3'><button type="button" className='btn btn-secondary w-100' onClick={() => { this.handleClick('/') }}>/</button></div>
                    </div>
                    <div className='row py-2'>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(4) }}>4</button></div>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(5) }}>5</button></div>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(6) }}>6</button></div>
                        <div className='col-3'><button type="button" className='btn btn-secondary w-100' onClick={() => { this.handleClick('*') }}>*</button></div>
                    </div>
                    <div className='row py-2'>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(1) }}>1</button></div>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(2) }}>2</button></div>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(3) }}>3</button></div>
                        <div className='col-3'><button type="button" className='btn btn-secondary w-100' onClick={() => { this.handleClick('-') }}>-</button></div>
                    </div>
                    <div className='row py-2'>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick(0) }}>0</button></div>
                        <div className='col-3'><button type="button" className='btn btn-outline-primary w-100' onClick={() => { this.handleClick('.') }}>.</button></div>
                        <div className='col-3'><button type="button" className='btn btn-secondary w-100' onClick={() => { this.handleClick('=') }}>=</button></div>
                        <div className='col-3'><button type="button" className='btn btn-secondary w-100' onClick={() => { this.handleClick('+') }}>+</button></div>
                    </div>
                </div>

            </div>
        )
    }
}
