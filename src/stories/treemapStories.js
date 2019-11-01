import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';

const data = [
  { State: 'Brazil', Count: 25 },
  { State: 'Colombia', Count: 12 },
  { State: 'Argentina', Count: 9 },
  { State: 'Ecuador', Count: 7 },
  { State: 'Chile', Count: 6 },
  { State: 'Peru', Count: 3 },
  { State: 'Venezuela', Count: 3 },
  { State: 'Bolivia', Count: 2 },
  { State: 'Paraguay', Count: 2 },
  { State: 'Uruguay', Count: 2 },
  { State: 'Falkland Islands', Count: 1 },
  { State: 'French Guiana', Count: 1 },
  { State: 'Guyana', Count: 1 },
  { State: 'Suriname', Count: 1 }
]
const stories = storiesOf('Payment Types Aggregated', module)
stories.addDecorator(withKnobs);

stories.add(
  'tree map component',
  () => {
    const kData = text('countries', 'Ukraine')
    const title = text('title', 'changed title')
    return (
      <div>
        <button
          disabled={boolean('Disabled', true)}
        >
          {text('Label', 'Hello Button')}
        </button>
        <TreeMapComponent
          id="treemap-container"
          titleSettings={{                       
            text: text('title', 'First title'),
            textStyle: { size: '15px' }
          }}
          dataSource={data}
          weightValuePath="Count"
          equalColorValuePath="Count"
          leafItemSettings={{
            showLabels: true,
            labelPath: 'State'
          }}
        />

      </div>
    )
  }
)