import { useEffect, memo, useContext } from 'react'
import { EchartsEventContext } from '../context'
import { IEventType } from '../types'



function Event(
  props: IEventType
) {
  const { onEvent, offEvent } = useContext(EchartsEventContext)
  useEffect(() => {
    offEvent(props)
    onEvent(props)
    return () => {
      offEvent(props)
    }
  }, [props])
  return null
}

export default memo(Event)
