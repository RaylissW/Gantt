import Chart from "react-google-charts";
import React from "react";


export default function GoogleGantt() {
  return(
    <Chart
      width={'90%'}
      height={'400px'}
      chartType="GoogleGantt"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'string', label: 'Task ID' },
          { type: 'string', label: 'Task Name' },
          { type: 'string', label: 'Resource' },
          { type: 'date', label: 'Start Date' },
          { type: 'date', label: 'End Date' },
          { type: 'number', label: 'Duration' },
          { type: 'number', label: 'Percent Complete' },
          { type: 'string', label: 'Dependencies' },
        ],
        [
          'Research',
          'Find sources',
          null,
          new Date(2015, 0, 1),
          new Date(2015, 0, 5),
          null,
          100,
          null,
        ],
        [
          'Write',
          'Write paper',
          'write',
          null,
          new Date(2015, 0, 9),
          3 * 24 * 60 * 60 * 1000,
          25,
          'Research,Outline',
        ],
        [
          'Cite',
          'Create bibliography',
          'write',
          null,
          new Date(2015, 0, 7),
          1 * 24 * 60 * 60 * 1000,
          20,
          'Research',
        ],
        [
          'Complete',
          'Hand in paper',
          'complete',
          null,
          new Date(2015, 0, 10),
          1 * 24 * 60 * 60 * 1000,
          0,
          'Cite,Write',
        ],
        [
          'Outline',
          'Outline paper',
          'write',
          null,
          new Date(2015, 0, 6),
          1 * 24 * 60 * 60 * 1000,
          100,
          'Research',
        ],
      ]}
      rootProps={{ 'data-testid': '3' }}
    />
  )
}