import localFont from 'next/font/local';

export const CODE = localFont({
  src: [
    {
      path: './fonts/CODE-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-code',
  display: 'swap',
})

export const Palmore = localFont({
  src: [
    {
      path: './fonts/Palmore-Light.otf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--font-palmore',
  display: 'swap',
})

export const MurechoLight = localFont({
  src: [
    {
      path: './fonts/Murecho-Light.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-murecho-light',
  display: 'swap',
})

export const Murecho = localFont({
  src: [
    {
      path: './fonts/Murecho-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-murecho',
  display: 'swap',
})