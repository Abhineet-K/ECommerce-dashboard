import React, { use } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  LinearProgress,
  Divider
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown
} from '@mui/icons-material';
import {
  BarChart,
} from '@mui/x-charts';
import { AnimatedLine, LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import {
  useChartId,
  useDrawingArea,
  useXScale,
} from '@mui/x-charts/hooks';
import { world_map } from './world_map.ts';
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
import { registerLicense } from '@syncfusion/ej2-base';
import DonutChart from '../../../components/charts/DonutChart.jsx';
import { formatCurrency, formatNumber, COLORSLIST } from '../../../utils/helpers';
import {
  revenueComparisonData,
  summaryCardsData,
  projectionVsActualData,
  locationRevenueData,
  topSellingProductsData,
  salesData
} from '../../../utils/data.js';
import { useAppContext } from '../../../contexts/AppContext.jsx'


const DefaultDashboard = () => {
  registerLicense('Ngo9BigBOggjGyl/Vkd+XU9FcVRDXXxLfkx0RWFcb19wflVAallZVAciSV9jS3tTf0djWH9fc3RTQ2NaUU91Xg==');
  const theme = useTheme();
  const { rightSidebarOpen, leftSidebarOpen } = useAppContext();

  const totalRevenue = locationRevenueData.reduce((sum, location) => sum + location.revenue, 0);
  locationRevenueData.forEach(location => {
    location.percentage = (location.revenue / totalRevenue) * 100;
  });

  const xLabels = projectionVsActualData.map(item => item.month);
  const projections = projectionVsActualData.map(item => item.projections);
  const actuals = projectionVsActualData.map(item => item.actuals);


  function CustomAnimatedLine(props) {
    const { limit, ...other } = props;
    const { top, bottom, height, left, width } = useDrawingArea();
    const scale = useXScale();
    const chartId = useChartId();

    if (limit === undefined) {
      return <AnimatedLine {...other} />;
    }

    const limitPosition = scale(limit);
    if (limitPosition === undefined) {
      return <AnimatedLine {...other} />;
    }

    const clipIdLeft = `${chartId}-${props.ownerState.id}-line-limit-${limit}-1`;
    const clipIdRight = `${chartId}-${props.ownerState.id}-line-limit-${limit}-2`;

    return (
      <React.Fragment>
        {/* Clip to show the line before the limit */}
        <clipPath id={clipIdLeft}>
          <rect
            x={left}
            y={0}
            width={limitPosition - left}
            height={top + height + bottom}
          />
        </clipPath>
        {/* Clip to show the line after the limit */}
        <clipPath id={clipIdRight}>
          <rect
            x={limitPosition}
            y={0}
            width={left + width - limitPosition}
            height={top + height + bottom}
          />
        </clipPath>
        <g clipPath={`url(#${clipIdLeft})`} className="line-before">
          <AnimatedLine {...other} />
        </g>
        <g clipPath={`url(#${clipIdRight})`} className="line-after">
          <AnimatedLine {...other} />
        </g>
      </React.Fragment>
    );
  }

  // Extract data for chart series
  const months = revenueComparisonData.map((_, index) => index);
  const currentYearData = revenueComparisonData.map(item => item.current);
  const previousYearData = revenueComparisonData.map(item => item.previous);

  const SummaryCard = ({ data }) => {
    const CardContent = (<Card
      sx={{
        height: '100%',
        p: { xs: 1.5, sm: 2 },
        backgroundColor: theme.palette.primary[data.bgColor],
        boxShadow: 'none',
        border: 'none',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: `0 1px 12px ${theme.palette.background.paper}`,
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around', gap: 1 , height: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ color: data.textColor ? data.textColor : theme.palette.text.primary, fontWeight: 'bold' }}>
          {data.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1px', width: '100%' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: data.textColor }}>
            {data.format === 'currency' ? formatCurrency(data.value) : data.format === 'percentage' ? `${data.value}%` : formatNumber(data.value, 4)}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: '1px' }}>
            <Typography
              sx={{
                color: data.trend === 'up' ? 'success.main' : 'error.main',
                mr: 0.5,
                fontWeight: 'bold'
              }}
            >
              {data.change > 0 ? '+' : ''}{data.change}%
            </Typography>
            {data.trend === 'up' ? (
              <TrendingUp sx={{ color: 'success.main', fontSize: '1rem' }} />
            ) : (
              <TrendingDown sx={{ color: 'error.main', fontSize: '1rem' }} />
            )}
          </Box>
        </Box>
      </Box>
    </Card>);


    return data?.pageUrl ? (
      <Link
        to={data.pageUrl}
        style={{ textDecoration: 'none' }}
      >
        {CardContent}
      </Link>
    ) : (
      CardContent
    );
  };

  return (
    <Box sx={{ p: 0 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        eCommerce
      </Typography>

      {/* First Row: Summary Cards + Projection vs Actual Chart */}
      <Grid container spacing={3} sx={{ mb: 4 }} columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}>
        {/* Summary Cards Grid */}
        <Grid item xs={1} lg={6} size={{ xs: 2, sm: 4, lg: 5 }}>
          <Grid container spacing={2} height={'100%'}>
            {summaryCardsData.map((card, index) => (
              <Grid item xs={12} sm={6} key={index} size={6}>
                <SummaryCard data={card} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Projection vs Actual Chart */}
        <Grid item xs={12} lg={8} size={{ xs: 2, sm: 4, lg: 7 }} sx={{ height: '100%' }}>
          <Card sx={{
            height: '100%', p: 0, boxShadow: 'none', border: 'none', backgroundColor: theme.palette.primary.light, transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: `0 1px 12px ${theme.palette.background.paper}`,
            },
          }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 0, p: { xs: 2, md: 3 } }}>
              Projections vs Actuals
            </Typography>
            <Box sx={{ pr: 3 }}>
              <BarChart
                grid={{ horizontal: true }}
                borderRadius={4}
                series={[
                  { data: actuals, label: 'Actuals', id: 'actualsId', color: '#A8C5DA', stack: 'total' },
                  { data: projections, label: 'Projections', id: 'projectionsId', color: '#a8c5da80', stack: 'total' },
                ]}
                xAxis={[
                  {
                    data: xLabels,
                    categoryGapRatio: 0.6,
                    tickSize: 0,
                  },
                ]}
                yAxis={[
                  {
                    width: 60,
                    valueFormatter: (value) => `${value}M`,
                    axisLine: false,
                    tickSize: 0,
                  },
                ]}
                sx={{ height: '250px', p: 0, m: 0 }}
              />

            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Second Row: Revenue Line Chart + World Map */}
      <Grid container spacing={3} sx={{ mb: 4 }} columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}>
        {/* Revenue Line Chart */}
        <Grid item xs={12} lg={8} size={{ xs: 2, sm: 4, md: 5, lg: 8 }}>
          <Card sx={{
            boxShadow: 'none', border: 'none', backgroundColor: theme.palette.primary.light, transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: `0 1px 12px ${theme.palette.background.paper}`,
            },
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: { xs: 2, md: 3 }, flexWrap: 'wrap', gap: { xs: 1, md: 3 } }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Revenue
              </Typography>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ m: 0, borderWidth: '1px', display: { xs: 'none', md: 'block' } }} />
              <Box sx={{ display: 'flex', gap: { xs: 1, md: 6 }, flexWrap: 'wrap' }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      p: 0.5,
                      marginBlock: 'auto',
                      borderRadius: '50%',
                      backgroundColor: '#1C1C1C'
                    }}
                  />
                  <Typography variant="body2" color="text.secondary" >

                    Current week: <strong>$58,211</strong>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      p: 0.5,
                      marginBlock: 'auto',
                      borderRadius: '50%',
                      backgroundColor: '#A8C5DA'
                    }}
                  />
                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    Previous week: <strong>$68,768</strong>
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ height: { xs: 250, md: 350, lg: 400 }, pr: 3 }}>
              <ChartContainer
                series={[
                  {
                    type: 'line',
                    id: 'current',
                    label: 'Current Year',
                    data: currentYearData,
                    color: theme.palette.mode === 'dark' ? '#C6C7F8' : '#1c1c1c',
                    valueFormatter: (v, i) => `${v}M${i.dataIndex > 5 ? ' (forecasted)' : ''}`,
                  },
                  {
                    type: 'line',
                    id: 'previous',
                    label: 'Previous Year',
                    data: previousYearData,
                    color: '#A8C5DA',
                    valueFormatter: (v) => `${v}M`,
                  },
                ]}
                xAxis={[
                  {
                    data: months,
                    scaleType: 'point',
                    valueFormatter: (value) => revenueComparisonData[value]?.month || '',
                  },
                ]}
                yAxis={[
                  {
                    min: 0,
                    max: 40,
                    valueFormatter: (value) => `${value}M`,
                  },
                ]}

                sx={{
                  '& .line-after path': {
                    strokeDasharray: '8 4',
                    strokeWidth: 2,
                  },
                  '& .line-before path': {
                    strokeWidth: 2,
                  },
                  '& .MuiChartsAxis-left .MuiChartsAxis-label': {
                    transform: 'translateX(-10px)',
                  },
                  '& .MuiChartsLegend-root': {
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                  },
                }}
              >
                <ChartsGrid horizontal />
                <ChartsXAxis />
                <ChartsYAxis axisLine={false} />

                <LinePlot
                  slots={{
                    line: (props) => {
                      // Only apply CustomAnimatedLine to current year series
                      if (props.ownerState?.id === 'current') {
                        return <CustomAnimatedLine {...props} limit={6} />;
                      }
                      // Use regular AnimatedLine for previous year
                      return <AnimatedLine {...props} />;
                    }
                  }}
                />

                <ChartsTooltip
                  trigger="axis"
                  itemContent={({ series, dataIndex }) => (
                    <div style={{
                      padding: '8px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}>
                      <div style={{ fontWeight: 600, marginBottom: '4px' }}>
                        {revenueComparisonData[dataIndex]?.month}
                      </div>
                      <div style={{ color: series.color, fontSize: '14px' }}>
                        {series.label}: {series.id === 'current'
                          ? `${series.data[dataIndex]}M${dataIndex > 5 ? ' (forecasted)' : ''}`
                          : `${series.data[dataIndex]}M`
                        }
                      </div>
                      {dataIndex > 5 && series.id === 'current' && (
                        <div style={{
                          fontSize: '12px',
                          color: '#999',
                          fontStyle: 'italic',
                          marginTop: '2px'
                        }}>
                          Forecasted Value
                        </div>
                      )}
                    </div>
                  )}
                />

                <ChartsLegend />
              </ChartContainer>
            </Box>
          </Card>
        </Grid>

        {/* World Map + Location Revenue */}
        <Grid item xs={12} lg={4} size={{ xs: 2, sm: 4, md: 3, lg: 4 }}>
          <Card sx={{
            height: '100%', boxShadow: 'none', border: 'none', backgroundColor: theme.palette.primary.light, transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: `0 1px 12px ${theme.palette.background.paper}`,
            },
          }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 0 }}>
                Revenue by Location
              </Typography>

              {/* World Map Placeholder */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <MapsComponent
                  height="180px"
                  background="transparent"
                  centerPosition={{ latitude: 0, longitude: 0 }}
                  zoomSettings={{
                    enable: true,
                    minZoom: 1,
                    maxZoom: 10,
                  }}
                  titleSettings={{
                    text: '',
                    textStyle: { size: '16px' }
                  }}
                >
                  <Inject services={[Marker]} />
                  <LayersDirective>
                    <LayerDirective
                      shapeData={world_map}
                      shapeSettings={{
                        fill: '#A8C5DA',
                        border: { color: '#e0e0e0', width: 0.5 }
                      }}
                      background="transparent"
                    >
                      <MarkersDirective>
                        {locationRevenueData.map((location) => (
                          <MarkerDirective
                            key={location.name}
                            visible={true}
                            shape="Circle"
                            height={8}
                            width={8}
                            fill={theme.palette.mapMarker.main}
                            border={{ color: '#ffffff', width: 2 }}
                            animationDuration={1000}
                            dataSource={[{
                              latitude: location.latitude,
                              longitude: location.longitude,
                              name: location.name,
                              revenue: location.revenue,
                              percentage: location.percentage.toFixed(1)
                            }]}
                            tooltipSettings={{
                              visible: true,
                              valuePath: 'name',
                              format: '${name}<br/>Revenue: $${revenue}K<br/>Share: ${percentage}%'
                            }}
                          />
                        ))}
                      </MarkersDirective>
                    </LayerDirective>
                  </LayersDirective>
                </MapsComponent>

              </Box>

              {/* Location Revenue List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2 }}>
                {locationRevenueData.map((location) => (
                  <Box key={location.name} sx={{ mb: 0 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {location.name}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {location.revenue}K
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={location.percentage}
                      sx={{
                        height: '4px',
                        borderRadius: 3,
                        backgroundColor: 'rgba(168, 197, 218, 0.4)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'rgba(168, 197, 218, 1)',
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Third Row: Top Selling Products + Sales Type Pie Chart */}
      <Grid container spacing={3} columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}>
        {/* Top Selling Products Table */}
        <Grid item xs={12} lg={8} size={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
          <Card sx={{
            height: '100%', boxShadow: 'none', border: 'none', backgroundColor: theme.palette.primary.light, transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: `0 1px 12px ${theme.palette.background.paper}`,
            },
          }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Box sx={{ pb: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Top Selling Products
                </Typography>
              </Box>
              <TableContainer sx={{}}>
                <Table
                  sx={{
                    borderCollapse: 'collapse',
                    '& td, & th': { border: 'none' },
                    overflow: 'auto'
                  }}
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        color: '#1C1C1C66'
                      }}
                    >
                      <TableCell align="left" sx={{
                        color: theme.palette.mode == 'dark' ? '#FFFFFF66' : '#1C1C1C66', px: 1, width: 'max-content', overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}>Name</TableCell>
                      <TableCell align="left" sx={{
                        color: theme.palette.mode == 'dark' ? '#FFFFFF66' : '#1C1C1C66', px: 1, width: 'max-content', overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}>Price</TableCell>
                      <TableCell align="left" sx={{
                        color: theme.palette.mode == 'dark' ? '#FFFFFF66' : '#1C1C1C66', px: 1, width: 'max-content', overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}>Quantity</TableCell>
                      <TableCell align="left" sx={{
                        color: theme.palette.mode == 'dark' ? '#FFFFFF66' : '#1C1C1C66', px: 1, width: 'max-content', overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}>Amount</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {topSellingProductsData.map((product) => (
                      <TableRow
                        key={product.id}
                        sx={{ p: 0, '&:hover': { backgroundColor: 'action.hover' } }}
                      >
                        <TableCell align="left" sx={{
                          px: 1, width: 'max-content', overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis'
                        }}>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {product.name}
                          </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{
                          px: 1, width: 'max-content', overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis'
                        }}>
                          <Typography variant="body2">${product.price}</Typography>
                        </TableCell>
                        <TableCell align="left" sx={{
                          px: 1, width: 'max-content', overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis'
                        }}>
                          <Typography variant="body2">{product.quantity}</Typography>
                        </TableCell>
                        <TableCell align="left" sx={{
                          px: 1, width: 'max-content', overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis'
                        }}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            ${product.amount.toLocaleString()}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </CardContent>
          </Card >
        </Grid >

        {/* Sales Type Pie Chart */}
        < Grid item xs={12} lg={4} size={{ xs: 2, sm: 4, md: 2, lg: 4 }} sx={{ minWidth: '200px' }}>
          <Card sx={{
            height: '100%', boxShadow: 'none', border: 'none', backgroundColor: theme.palette.primary.light, transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: `0 1px 12px ${theme.palette.background.paper}`,
            },
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Total Sales
              </Typography>

              {/* Pie Chart */}
              <Box sx={{ height: 150, width: '100%', mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DonutChart
                  data={salesData}
                  width={300}
                  height={150}
                  centerX={150}
                  centerY={75}
                  innerRadius={50}
                  outerRadius={70}
                  colors={COLORSLIST.slice(0, salesData.length)}
                  showLabels={false}
                  hoverEffect={true}
                  cornerRadius={10}
                  borderWidth={5}
                  borderColor={theme.palette.mode === 'dark' ? '#121212' : '#ffffff'}
                  onSectionClick={(section) => console.log('Clicked:', section)}
                />
              </Box>

              {/* Sales Type Legend with Values */}
              <Box>
                {salesData.map((item, index) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1.5,
                      p: 1,
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: 'action.hover'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          backgroundColor: COLORSLIST[index % COLORSLIST.length],
                          borderRadius: '50%',
                          mr: 1.5
                        }}
                      />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item.label}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      ${item.value.toLocaleString()}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid >
      </Grid >
    </Box >
  );
};

export default DefaultDashboard;