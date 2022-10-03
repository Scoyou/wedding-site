# Create component files
mkdir src/components/$1

touch src/components/$1/index.css
touch src/components/$1/index.tsx
touch src/components/$1/index.stories.tsx

if [ -z "$2" ]
then
  # Fill index.jsx
  echo "import React from 'react'
import './index.css'

const $1 = () => {
  return(
    <div></div>
  )
}

export default $1" >> src/components/$1/index.tsx

  # Fill index.stories.jsx
  echo "import React from 'react';
import { storiesOf } from '@storybook/react';
import $1 from './index';

storiesOf('$1', module).add('$1', () => {
  return <$1 />;
});" >> src/components/$1/index.stories.tsx
else
  echo "import React from 'react'
import './index.css'

type Props ={
  $2
}

const $1 = (props: Props) => {
  return(
    <div></div>
  )
}

export default $1" >> src/components/$1/index.tsx

  echo "import React from 'react';
  import { storiesOf } from '@storybook/react';
  import $1 from './index';

  storiesOf('$1', module).add('$1', () => {
    return <$1 $2/>;
  });" >> src/components/$1/index.stories.tsx
fi

  