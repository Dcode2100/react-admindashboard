import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColunmSeries, ToolTip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryAxis, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({ width, height }) => {
  return (<ChartComponent
    width = {width}
    height={ height}
    id="stack chart"
    primaryXaxis={stackedPrimaryXAxis}
    >
    <Inject services = {[Legent, Category,
    StackingColunmSeries, ToolTip]} />
  </ChartComponent>
    
  )
}

export default Stacked;

