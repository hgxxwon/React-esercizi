export function ClickTracker(){

    function handleClick(event) {
      console.log(event.currentTarget.id) 
    }

    return (
        <div>
            <button id="one" onClick={handleClick}>One!</button>
            <button id="two" onClick={handleClick}>Two!</button>
            <button id="three" onClick={handleClick}>Three!</button>
        </div>
    )
}