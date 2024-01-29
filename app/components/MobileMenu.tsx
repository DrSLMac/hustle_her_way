"use client"
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import * as Popover from '@radix-ui/react-popover';


const MobileMenu = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
        console.log("open? ", open)
    }

  return (
    <div>
          <Popover.Root>
    <Popover.Trigger asChild>
        <button 
            onClick={handleClick}
        >
        <Menu size={36} className='stroke-primary'/>

        </button>
    </Popover.Trigger>
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content>
        <Popover.Close />
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>

    </div>
  )
}

export default MobileMenu