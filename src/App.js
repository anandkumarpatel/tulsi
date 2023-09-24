import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Card, Stack } from '@mui/material'

import './App.css'

export default function SimpleContainer() {
  return (
    <div style={{ background: '#ce1e72', height: '100vh', width: '100vw', overflow: 'scroll' }}>
      <Stack direction='column' spacing={3} style={{ padding: '2rem' }} alignItems='center'>
        <div style={{ fontSize: '2rem', justifyContent: 'center', alignContent: 'center', fontFamily: 'f1', textAlign: 'center' }} className='waviy'>
          <span style={{ animationDelay: 'calc(.1s * 1' }}>H</span>
          <span style={{ animationDelay: 'calc(.1s * 2)' }}>a</span>
          <span style={{ animationDelay: 'calc(.1s * 3)' }}>p</span>
          <span style={{ animationDelay: 'calc(.1s * 4)' }}>p</span>
          <span style={{ animationDelay: 'calc(.1s * 5)' }}>y</span>
          <span style={{ animationDelay: 'calc(.1s * 6)' }}>&nbsp;&nbsp;</span>
          <span style={{ animationDelay: 'calc(.1s * 7)' }}>R</span>
          <span style={{ animationDelay: 'calc(.1s * 8)' }}>a</span>
          <span style={{ animationDelay: 'calc(.1s * 9)' }}>k</span>
          <span style={{ animationDelay: 'calc(.1s * 1)0' }}>s</span>
          <span style={{ animationDelay: 'calc(.1s * 11)' }}>h</span>
          <span style={{ animationDelay: 'calc(.1s * 12)' }}>a</span>
          <span style={{ animationDelay: 'calc(.1s * 12)' }}>&nbsp;&nbsp;</span>
          <span style={{ animationDelay: 'calc(.1s * 13)' }}>B</span>
          <span style={{ animationDelay: 'calc(.1s * 14)' }}>a</span>
          <span style={{ animationDelay: 'calc(.1s * 15)' }}>n</span>
          <span style={{ animationDelay: 'calc(.1s * 16)' }}>d</span>
          <span style={{ animationDelay: 'calc(.1s * 17)' }}>h</span>
          <span style={{ animationDelay: 'calc(.1s * 18)' }}>a</span>
          <span style={{ animationDelay: 'calc(.1s * 19)' }}>n</span>
        </div>

        <Card style={{ padding: '1rem', background: '#a1bbb0' }}>
          <div style={{ fontSize: '4rem', justifyContent: 'center', alignContent: 'center', fontFamily: 'f2', textAlign: 'center', color: '#fcb634' }} className='text_shadows'>
            Tulsi
          </div>
        </Card>
        <img src='/t.jpg' width='100%' style={{ maxWidth: '600px' }} />
        <div style={{ fontSize: '2rem', textAlign: 'center' }} className='units'>
          Thank you for always thinking of me and making me feel special! I am so lucky to have a{' '}
          <span className='Blazing' style={{ fontWeight: 'bold' }}>
            cool
          </span>{' '}
          & <span className='animate-charcter'>fun</span> sister like you.
        </div>
        <div style={{ fontSize: '2rem', textAlign: 'center' }}>Sending all to love and blessings! Cant wait to see you next year!!</div>
        <img src='/card.png' width='100%' style={{ maxWidth: '600px' }} />
      </Stack>
    </div>
  )
}
