mkdir src/components/$1

touch src/components/$1/index.css
touch src/components/$1/index.jsx
touch src/components/$1/index.stories.jsx

echo "import React from 'react'

const $1 = () => {
  return(
    <div></div>
  )
}

export default $1" >> src/components/$1/index.jsx