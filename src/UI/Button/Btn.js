import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
function Btn({lable, work}) {
  return (
    <>
    {console.log("work",work)}
    <Button colorScheme='blue' onclick={work}>{lable}</Button>
    </>
  )
}

export default Btn