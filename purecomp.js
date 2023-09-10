import React, { memo } from 'react';
  
function Purely({ score = 0, total = Math.max(1, score) }) {
  return (
    <div>
      <h2>This is a Pure Component</h2>
      <p>  React.memo() is a higher-order component that takes a React component as its first argument and returns a pure React component.

      React component type returned using React.memo() allows the renderer to render the component while memoizing the output.

      </p>
      <span>{ Math.round(score / total * 100) }%</span>
    </div>
    
  )
}
  
export default memo(Purely);