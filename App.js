class App extends React.Component {
    render() {
        return (
            <div>
                <Lottery title="Lottery" numBalls={6} maxNum={40} />
                <Lottery title="Mini-Lottery" numBalls={4} maxNum={10} />
                <Lottery title="BiggerLottery" numBalls={10} maxNum={100} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))