import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DonutChart = ({
  data,
  width = 300,
  height = 300,
  innerRadius = 60,
  outerRadius = 80,
  centerX = 150,
  centerY = 150,
  cornerRadius = 4,
  colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
  showLabels = true,
  borderWidth = 3,
  borderColor = '#fff',
  hoverEffect = true,
  centerContent,
  onSectionClick,
  showTooltip = true,
}) => {
  // State for tooltip
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: null
  });

  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // First, calculate cumulative angles
  let cumulativeAngle = 0;
  const sections = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const startAngle = cumulativeAngle;
    const endAngle = startAngle + (percentage * 360) / 100;

    // Update cumulative angle for next iteration
    cumulativeAngle = endAngle;

    return {
      ...item,
      percentage,
      startAngle,
      endAngle,
      color: item.color || colors[index % colors.length],
    };
  });

  // Create curved path for each section with rounded corners
  const createCurvedPath = (startAngle, endAngle, innerRadius, outerRadius, centerX, centerY, sectionIndex, curveRadius) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + innerRadius * Math.cos(startAngleRad);
    const y1 = centerY + innerRadius * Math.sin(startAngleRad);
    const x2 = centerX + outerRadius * Math.cos(startAngleRad);
    const y2 = centerY + outerRadius * Math.sin(startAngleRad);

    const x3 = centerX + outerRadius * Math.cos(endAngleRad);
    const y3 = centerY + outerRadius * Math.sin(endAngleRad);
    const x4 = centerX + innerRadius * Math.cos(endAngleRad);
    const y4 = centerY + innerRadius * Math.sin(endAngleRad);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    curveRadius = curveRadius != null ? curveRadius : cornerRadius;

    // Manually set curve directions for each section
    let startCurveFlag, endCurveFlag;

    if (sectionIndex === 0) { // First section
      startCurveFlag = "1"; // outward
      endCurveFlag = "1";   // outward
    } else if (sectionIndex === 1) { // Second section
      startCurveFlag = "1"; // outward
      endCurveFlag = "1";   // outward
    } else if (sectionIndex === 2) { // Third section
      startCurveFlag = "1"; // outward
      endCurveFlag = "1";   // outward
    } else { // Fourth section and beyond
      startCurveFlag = "1"; // outward
      endCurveFlag = "0";   // inward
    }

    const path = `
      M ${x1} ${y1}
      A ${curveRadius} ${curveRadius} 0 0 ${startCurveFlag} ${x2} ${y2}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
      A ${curveRadius} ${curveRadius} 0 0 ${endCurveFlag} ${x4} ${y4}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
    `;

    return path;
  };

  // Handle mouse events for tooltip
  const handleMouseEnter = (e, section) => {
    if (showTooltip) {
      const svgRect = e.currentTarget.closest('svg').getBoundingClientRect();
      
      setTooltip({
        visible: true,
        x: e.clientX - svgRect.left,
        y: e.clientY - svgRect.top,
        content: {
          label: section.label,
          value: section.value,
          percentage: section.percentage,
          color: section.color
        }
      });
    }
    
    if (hoverEffect) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'scale(1)';
    }
  };

  const handleMouseLeave = (e) => {
    if (showTooltip) {
      setTooltip({ visible: false, x: 0, y: 0, content: null });
    }
    
    if (hoverEffect) {
      e.target.style.transform = 'scale(1)';
    }
  };

  const handleMouseMove = (e) => {
    if (tooltip.visible && showTooltip) {
      const svgRect = e.currentTarget.closest('svg').getBoundingClientRect();
      setTooltip(prev => ({
        ...prev,
        x: e.clientX - svgRect.left,
        y: e.clientY - svgRect.top
      }));
    }
  };

  return (
    <div style={{ position: 'relative', width, height }}>
      <svg width={width} height={height}>
        {/* Chart sections */}
        {sections.map((section, index) => (
          <g key={section.id || index}>
            <path
              d={createCurvedPath(
                section.startAngle - borderWidth,
                section.endAngle + borderWidth,
                innerRadius,
                outerRadius,
                centerX,
                centerY,
                index,
                cornerRadius
              )}
              fill={borderColor}
            />
            <path
              d={createCurvedPath(
                section.startAngle,
                section.endAngle,
                innerRadius,
                outerRadius,
                centerX,
                centerY,
                index,
                cornerRadius
              )}
              fill={section.color}
              style={{
                transition: 'all 0.3s ease',
                cursor: onSectionClick ? 'pointer' : 'default',
              }}
              onClick={() => onSectionClick?.(section)}
              onMouseEnter={(e) => handleMouseEnter(e, section)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            />
          </g>
        ))}

        {/* Center circle for content */}
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius - 5}
          fill="transparent"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        />
      </svg>

      {/* Tooltip */}
      {tooltip.visible && tooltip.content && showTooltip && (
        <div
          style={{
            position: 'absolute',
            left: `${tooltip.x + 10}px`,
            top: `${tooltip.y - 10}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            pointerEvents: 'none',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            transform: 'translate(0, -100%)',
            whiteSpace: 'nowrap'
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '4px',
            gap: '6px'
          }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: tooltip.content.color,
                borderRadius: '50%'
              }}
            />
            <span style={{ fontWeight: '600' }}>{tooltip.content.label}</span>
          </div>
          <div style={{ fontSize: '11px', opacity: 0.9 }}>
            Value: {tooltip.content.value}
          </div>
          <div style={{ fontSize: '11px', opacity: 0.9 }}>
            Percentage: {tooltip.content.percentage.toFixed(1)}%
          </div>
        </div>
      )}

      {/* Center content */}
      {centerContent && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          {centerContent}
        </div>
      )}

      {/* Labels */}
      {showLabels && (
        <div style={{ marginTop: '16px' }}>
          {sections.map((section, index) => (
            <div
              key={section.id || index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: section.color,
                  borderRadius: '50%',
                }}
              />
              <span style={{ fontSize: '14px', color: '#333' }}>
                {section.label}: {section.percentage.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DonutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  centerX: PropTypes.number,
  centerY: PropTypes.number,
  cornerRadius: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  showLabels: PropTypes.bool,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  hoverEffect: PropTypes.bool,
  centerContent: PropTypes.node,
  onSectionClick: PropTypes.func,
  showTooltip: PropTypes.bool,
};

export default DonutChart;