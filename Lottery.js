class Lottery extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            lotteryBalls: Array.from({ length: this.props.numBalls })
        }
    }
    generateLottery() {
        this.setState(currState => ({
            lotteryBalls: currState.lotteryBalls.map(ball => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
    }
    handleClick() {
        this.generateLottery()
    }
    render() {
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                {this.state.lotteryBalls.map(ballNum => <Ball num={ballNum} />)}
                <br />
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}