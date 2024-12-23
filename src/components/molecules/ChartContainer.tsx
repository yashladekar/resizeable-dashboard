"use client"
import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { RadialChartGridComponent } from "@/components/atoms/charts/RadialChartGridComponent";
import { TooltipAdvancedComponent } from "@/components/atoms/charts/TooltipAdvancedComponent";
import { RadarChartLegendComponent } from "@/components/atoms/charts/RadarChartLegendComponent";
import { PieChartStackedComponent } from "@/components/atoms/charts/PieChartStackedComponent";
import { BarChartMixedComponent } from "@/components/atoms/charts/BarChartMixedComponent";
import { AreaChartLegendComponent } from "@/components/atoms/charts/AreaChartLegendComponent";
import { LineChartCustomLabelComponent } from "@/components/atoms/charts/LineChartCustomLabelComponent";
const ChartContainer = () => {
    const layout = [
        { i: 'a', x: 0, y: 0, w: 3, h: 10 },
        { i: 'b', x: 4, y: 0, w: 3, h: 9 },
        { i: 'c', x: 8, y: 0, w: 3, h: 10 },
        { i: 'd', x: 0, y: 0, w: 3, h: 10 },
        { i: 'e', x: 4, y: 0, w: 3, h: 10 },
        { i: 'f', x: 8, y: 0, w: 3, h: 10 },
        { i: 'g', x: 0, y: 0, w: 3, h: 10 },
    ];
    return (
        <GridLayout
            className="h-full w-auto flex justify-space-between "
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1300}
            isResizable={true}
            isDraggable={true}
        >
            <div key="a" className='h-auto' ><RadialChartGridComponent /></div>
            <div key="b" className='h-auto'><TooltipAdvancedComponent /></div>
            <div key="c" className='h-auto'><RadarChartLegendComponent /></div>
            <div key="d" className='h-auto'><PieChartStackedComponent /></div>
            <div key="e" className='h-auto'><BarChartMixedComponent /></div>
            <div key="f" className='h-auto'><AreaChartLegendComponent /></div>
            <div key="g" className='h-auto'><LineChartCustomLabelComponent /></div>
        </GridLayout >
    );
};

export default ChartContainer
