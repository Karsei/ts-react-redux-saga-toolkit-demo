import { useCallback } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import { fetchJson } from '../store/reducers/fakeService'

const FakePage = () => {
    const dispatch = useDispatch()
    const fakeStore = useSelector((state: RootState) => state.fakeService)

    const onFetch = useCallback(() => {
        dispatch(fetchJson({idx: 1}))
    }, [])
  
    return (
        <>
            <h1>Redux Test</h1>
            <button onClick={onFetch}>Action!</button>
            <h2>Result</h2>
            <pre>
                {JSON.stringify(fakeStore)}
            </pre>
        </>
    )
}

export default FakePage