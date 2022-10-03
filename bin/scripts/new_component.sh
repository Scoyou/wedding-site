# Create component files
mkdir src/components/$1

touch src/components/$1/index.css
touch src/components/$1/index.jsx
touch src/components/$1/index.stories.jsx

# Fill index.jsx
echo "import React from 'react'

const $1 = () => {
  return(
    <div></div>
  )
}

export default $1" >> src/components/$1/index.jsx

# Fill index.stories.jsx
echo "import React from 'react';
import { storiesOf } from '@storybook/react';
import $1 from './index';

storiesOf('$1', module).add('$1', () => {
  return <$1 />;
});" >> src/components/$1/index.stories.jsx