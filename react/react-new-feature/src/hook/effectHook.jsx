import React, { useEffect, useState } from 'react';
function EffectHook()  {
  const [ count, setCount ] = useState(0);
  const [ size, setSize ] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight 
    })
  }
  useEffect(() => {
    console.log(333)
    document.title = count
  }, [count])
  useEffect(() => {
    console.log(1213);
    window.addEventListener('resize', onResize)
    // unMount 执行
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []) // [] 控制useEffect执行，只有数组每一项都不变的情况useEffect才不会执行
  return (
    <button
    onClick={() => {
      setCount(count + 1)
    }}
    >
      click: {count},
      size: {size.width} X {size.height}
    </button>
  )
}
export default EffectHook;


