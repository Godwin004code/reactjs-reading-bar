import React, {useState,useEffect} from 'react'


const Rpb = ({height, bg}) => {
  const [scroll, setScroll] = useState(0)

  const showProgressBar = () => {
    const scrollTop = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const value = (scrollTop / height) * 100
    setScroll(value)
    console.log(value);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', showProgressBar)
    return () => window.removeEventListener('scroll', showProgressBar)
  }, [])
  return (
      <div className='progress-container' style={{position: 'fixed', width: '100%', height: `${height}px`}}>
        <div className='progress-line' style={{width: `${scroll}%`, backgroundColor: `${bg}`, height: '100%'}}>
        </div>
      </div>
    
  )
}

export default Rpb