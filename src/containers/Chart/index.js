import React from 'react';
import * as shape from 'd3-shape';
import { LineChart, XAxis } from 'react-native-svg-charts';
import { G, Line } from 'react-native-svg';

import { BodySemiBold, Page } from 'components/core/';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const labels = ["MAY 1", "", "", "", "", "", "", "", "", "", "", "", "", "", "15", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "30", "June 1", "", "", "", "", "", "", "", "", "", "", "", "", "", "15", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "30", "July 1", "", "", "", "", "", "", "", "", "", "", "", "", "", "15", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "30"];
const series1 = [10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10, 10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10, 10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10];
const series2 = [10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10, 10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10, 10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10].reverse();

export default function ChartScreen({ navigation }) {
  return (
    <ScrollView>
      <Page>
        <BodySemiBold>Svg Chart</BodySemiBold>
        <MultiSeriesDottedLineChart />
      </Page>
    </ScrollView>
  );
}

// react-native-svg-charts
class MultiSeriesDottedLineChart extends React.PureComponent {
  render() {
    const data1 = series1;
    const data2 = series2;

    //Array of datasets, following this syntax:
    const data = [{
      data: data1,
      svg: { stroke: 'rgba(47, 128, 237, 1)', strokeWidth: 3 },
    }, {
      data: data2,
      svg: { stroke: 'rgba(3,53,53, 0.55)', strokeDasharray: [8, 8], strokeWidth: 2 },
    },
    ];

    const axesSvg = { fontSize: 12, fill: '#878786' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    const CustomGrid = ({ x, y, data, ticks }) => (
      <G>
        {
          // Horizontal grid
          ticks.map((tick, index) => {
            if (index % 3 !== 0) return null;
            return (
              <Line
                key={tick}
                x1={'0%'}
                x2={'100%'}
                y1={y(tick)}
                y2={y(tick)}
                stroke={'#ECECEC'}
              />
            )
          })
        }
      </G>
    )

    return (
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ height: 400, flexShrink: 1, flexGrow: 1, flexBasis: 'auto', width: Dimensions.get("window").width - 30 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} decelerationRate={0}
            snapToInterval={Dimensions.get("window").width - 30} //your element width
            snapToAlignment={"center"}>
            <View style={{ height: 290, flexDirection: 'row', backgroundColor: '#ffffff' }}>
              <View style={{ flex: 1 }}>
                <LineChart
                  style={{ height: 260, width: Dimensions.get("window").width * 3, backgroundColor: '#ffffff' }}
                  data={data}
                  curve={shape.curveMonotoneX}
                  contentInset={verticalContentInset}
                  gridMax={60}
                  gridMin={0}
                >
                  <CustomGrid belowChart={true} />
                </LineChart>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={data1}
                  formatLabel={(value, index) => labels[index]}
                  contentInset={{ left: 30, right: 10 }}
                  svg={axesSvg}
                />
              </View>
            </View >
          </ScrollView>
        </View>
        <View style={{ height: 260, backgroundColor: '#ffffff', width: 30, paddingTop: 0 }}>
          <DummyRightSide height={59} value={60} />
          <DummyRightSide height={59} value={45} />
          <DummyRightSide height={59} value={30} />
          <DummyRightSide height={59} value={15} />
          <DummyRightSide height={59} value={0} />
        </View>
      </View>
    )
  }
}

function DummyRightSide({ height, value }) {
  return <Text style={{ height: height, textAlign: "center", color: '#878786' }}>{value}</Text>;
}
