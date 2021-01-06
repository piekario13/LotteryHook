const App = () => {
    const [ value, setValue] = React.useState('');
    const [ lottery, setLottery ] = React.useState(['jeden', 'dwa', 'trzy', 'cztery']);
    const [ addLottery, setAddLottery ] = React.useState('');

    const handleLottery = () => {
        const index = Math.floor(Math.random() * lottery.length)
        setValue(lottery[index])
    }

    const handleDeleteButton = () => {
        setValue('')
    }

    const handleInput = (e) => {
        setAddLottery(e.target.value)
    }

    const handleAddButton = () => {
        const newLottery = [...lottery]
        newLottery.push(addLottery)
        setLottery(newLottery)
        setAddLottery('')

    }



    return(
        <div>
            <button onClick={handleLottery}>Losuj</button>
            <button onClick={handleDeleteButton}>Wyczyść</button>
            <br/>
            <input type="text" placeholder="Wpisz tutaj coś..." value={addLottery} onChange={handleInput}/>
            <button onClick={handleAddButton}>Dodaj do losowania</button>
            {value ? <h1>{value}</h1> : null}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))