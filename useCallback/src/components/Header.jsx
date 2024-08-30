import React from 'react'

const Header = () => {
    console.log("header is Randering");
    
  return (
    <div>
        <h2>Header</h2>
    </div>
  )
}

// export default Header 
// if I use this export method then we face rendering problem. thats mean when any wrok will be done this Header also called. For this we can use useMemo hooks and solve this problem.
export default React.memo(Header)