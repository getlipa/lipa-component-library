import {useState} from 'react'

type CustomComponentProps = {
    initialCount?: number
    maxCount?: number
}

export const CustomComponent = ({initialCount = 0, maxCount = 100}: CustomComponentProps) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prev) => Math.min(prev + 1, maxCount));
    };

    const decrement = () => {
        setCount((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="ui">
            <div className="ui-bg-blue-500 ui-p-5 ui-rounded-2xl">
                <div>
                    {count}
                </div>
                <div>
                    <button
                        onClick={decrement}
                        disabled={count <= 0}
                        className="ui-bg-red-700"
                    >
                        Decrease
                    </button>
                    {/*<button*/}
                    {/*    onClick={increment}*/}
                    {/*    disabled={count >= maxCount}*/}
                    {/*    className="hover:ui-bg-green-500"*/}
                    {/*    id="test-hover"*/}
                    {/*>*/}
                    {/*    Increase*/}
                    {/*</button>*/}
                </div>

                <div>
                    <input
                        type="number"
                        min={1}
                        max={maxCount - count}
                        defaultValue={1}
                    />
                    <button
                        onClick={() => {
                            const input = document.querySelector('input');
                            if (input && count + Number(input.value) <= maxCount) {
                                setCount(prev => prev + Number(input.value));
                            }
                        }}
                    >
                        Add Custom Amount
                    </button>
                </div>
            </div>
        </div>
    );
};