import {useState} from 'react';


const useInput = () => {
    const [value,setValue] = useState('')

    const onChange = e => {
        setValue(e.current.value)
    }

    return [value,onChange]
}

export default useInput