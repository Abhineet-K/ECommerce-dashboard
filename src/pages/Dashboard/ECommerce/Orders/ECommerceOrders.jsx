import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Table from '../../../../components/custom/table/Table.jsx';
import { ordersData } from '../../../../utils/data';
import { formatDate } from '../../../../utils/helpers';

const Orders = () => {

  const handleRowClick = (row,) => {
    console.log('Row clicked:', row);
  };

  const handleSelectionChange = (selectedIndices) => {
    console.log('Selected rows:', selectedIndices);
  };

  // Columns Configuration
  const ordersColumns = [
    {
      key: 'id',
      label: 'Order ID',
      sortable: true,
      width: '120px',
      render: (value) => (
        <span style={{
          fontWeight: '500', whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {value}
        </span>
      )
    },
    {
      key: 'user',
      label: 'User',
      sortable: true,
      sortKey: 'user.name',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={value.avatar}
            alt={value.name}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span style={{
            fontSize: '14px',
            fontWeight: '500',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {value.name}
          </span>
        </div>
      )
    },
    {
      key: 'project',
      label: 'Project',
      sortable: true,
      render: (value) => (
        <span style={{
          fontSize: '14px', whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {value}
        </span>
      )
    },
    {
      key: 'address',
      label: 'Address',
      sortable: true,
      render: (value) => (
        <span style={{
          fontSize: '14px', whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {value}
        </span>
      )
    },
    {
      key: 'date',
      label: 'Date',
      sortable: true,
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" class="theme-contrast--icon"><path id="icon--border" d="M11 1H9.5V.5a.5.5 0 0 0-1 0V1h-5V.5a.5.5 0 0 0-1 0V1H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2.5 2v.5a.5.5 0 1 0 1 0V2h5v.5a.5.5 0 1 0 1 0V2H11v2H1V2zM11 12H1V5h10z" /></svg>
          <span style={{
            fontSize: '14px', whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {formatDate(value)}
          </span>
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      filterable: false,
      filterOptions: ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'],
      render: (value, row) => <><span style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 0',
        fontSize: '14px',
        fontWeight: '500',
        color: row.statusColor,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: row.statusColor,
          marginRight: '8px',

          
        }} />
        {value}
      </span></>
    },
  ];

  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" fontWeight="bold">
            Orders
          </Typography>
        </Box>
        {/* Orders Table */}
        <Grid item xs={12} size={{ xs: 4, sm: 8, md: 12 }}>
          <Table
            data={ordersData}
            columns={ordersColumns}
            enableSorting={true}
            enableFiltering={true}
            enableSearch={true}
            enablePagination={true}
            enableRowSelection={true}
            defaultPageSize={10}
            pageSizeOptions={[5, 10, 15, 20]}
            onRowClick={handleRowClick}
            onSelectionChange={handleSelectionChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Orders;