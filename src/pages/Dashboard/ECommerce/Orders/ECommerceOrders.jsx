import { useState, useMemo } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import OrdersTable from '../../../../components/ui/Table/Table';
import { allOrders, orderStatuses } from '../../../../utils/data';
import { useSearch, useTableSort, usePagination } from '../../../../hooks';
import { formatCurrency, formatRelativeTime } from '../../../../utils/helpers';

const Orders = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Search functionality
  const {
    searchTerm,
    setSearchTerm,
    filteredData: searchedOrders,
    clearSearch,
    isSearching
  } = useSearch(allOrders, ['id', 'customer.name', 'customer.email', 'project', 'address']);

  // Filter by status
  const filteredOrders = useMemo(() => {
    if (statusFilter === 'all') return searchedOrders;
    return searchedOrders.filter(order => order.status === statusFilter);
  }, [searchedOrders, statusFilter]);

  // Sort functionality
  const {
    sortedData: orders,
    requestSort,
    sortConfig,
    getSortIcon
  } = useTableSort(filteredOrders, 'date', 'desc');

  // Pagination
  const {
    data: paginatedOrders,
    pagination,
    currentPage,
    pageSize,
    goToPage,
    goToNext,
    goToPrevious,
    changePageSize
  } = usePagination(orders, 10);

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  const handleExport = () => {
    // Mock export functionality
    console.log('Exporting orders...');
  };

  const getStatusBadge = (status) => {
    const config = orderStatuses[status] || orderStatuses.pending;
    return (
      <Box
        component="span"
        sx={{
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          fontSize: '0.75rem',
          fontWeight: 500,
          backgroundColor: config.bgColor,
          color: config.textColor,
          display: 'inline-block'
        }}
      >
        {config.label}
      </Box>
    );
  };

  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (row,) => {
    console.log('Row clicked:', row);
  };

  const handleSelectionChange = (selectedIndices) => {
    setSelectedRows(selectedIndices);
    console.log('Selected rows:', selectedIndices);
  };


  // Sample Orders Data
  const ordersData = [
    {
      id: '#CM9801',
      user: {
        name: 'Natali Craig',
        avatar: 'https://i.pravatar.cc/32?img=1'
      },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: new Date(Date.now() - 60000), // 1 minute ago
      status: 'In Progress',
      statusColor: '#3B82F6',
      priority: 'High',
      amount: 2500
    },
    {
      id: '#CM9802',
      user: {
        name: 'Kate Morrison',
        avatar: 'https://i.pravatar.cc/32?img=2'
      },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: new Date(Date.now() - 3600000), // 1 hour ago
      status: 'Complete',
      statusColor: '#10B981',
      priority: 'Medium',
      amount: 3200
    },
    {
      id: '#CM9803',
      user: {
        name: 'Drew Cano',
        avatar: 'https://i.pravatar.cc/32?img=3'
      },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: new Date(Date.now() - 7200000), // 2 hours ago
      status: 'Pending',
      statusColor: '#3B82F6',
      priority: 'Low',
      amount: 1800
    },
    {
      id: '#CM9804',
      user: {
        name: 'Orlando Diggs',
        avatar: 'https://i.pravatar.cc/32?img=4'
      },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: new Date(Date.now() - 86400000), // 1 day ago
      status: 'Approved',
      statusColor: '#F59E0B',
      priority: 'High',
      amount: 4100
    },
    {
      id: '#CM9805',
      user: {
        name: 'Andi Lane',
        avatar: 'https://i.pravatar.cc/32?img=5'
      },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: new Date('2023-02-02'),
      status: 'Rejected',
      statusColor: '#94A3B8',
      priority: 'Medium',
      amount: 1200
    },
    {
      id: '#CM9806',
      user: {
        name: 'John Smith',
        avatar: 'https://i.pravatar.cc/32?img=6'
      },
      project: 'E-commerce Website',
      address: 'Main Street Chicago',
      date: new Date(Date.now() - 172800000), // 2 days ago
      status: 'In Progress',
      statusColor: '#3B82F6',
      priority: 'High',
      amount: 5500
    },
    {
      id: '#CM9807',
      user: {
        name: 'Sarah Wilson',
        avatar: 'https://i.pravatar.cc/32?img=7'
      },
      project: 'Mobile App UI',
      address: 'Oak Avenue Miami',
      date: new Date(Date.now() - 259200000), // 3 days ago
      status: 'Complete',
      statusColor: '#10B981',
      priority: 'Medium',
      amount: 2800
    },
    {
      id: '#CM9808',
      user: {
        name: 'Mike Johnson',
        avatar: 'https://i.pravatar.cc/32?img=8'
      },
      project: 'Dashboard Analytics',
      address: 'Pine Road Seattle',
      date: new Date(Date.now() - 345600000), // 4 days ago
      status: 'Pending',
      statusColor: '#3B82F6',
      priority: 'Low',
      amount: 3400
    },
    {
      id: '#CM9809',
      user: {
        name: 'Emma Davis',
        avatar: 'https://i.pravatar.cc/32?img=9'
      },
      project: 'Brand Identity',
      address: 'Cedar Lane Boston',
      date: new Date(Date.now() - 432000000), // 5 days ago
      status: 'Approved',
      statusColor: '#F59E0B',
      priority: 'High',
      amount: 4200
    },
    {
      id: '#CM9810',
      user: {
        name: 'Tom Brown',
        avatar: 'https://i.pravatar.cc/32?img=10'
      },
      project: 'API Development',
      address: 'Elm Drive Denver',
      date: new Date(Date.now() - 518400000), // 6 days ago
      status: 'Rejected',
      statusColor: '#94A3B8',
      priority: 'Medium',
      amount: 1800
    },
    {
      id: '#CM9811',
      user: {
        name: 'Lisa Garcia',
        avatar: 'https://i.pravatar.cc/32?img=11'
      },
      project: 'Website Redesign',
      address: 'Maple Street Phoenix',
      date: new Date(Date.now() - 604800000), // 7 days ago
      status: 'In Progress',
      statusColor: '#3B82F6',
      priority: 'Medium',
      amount: 3900
    },
    {
      id: '#CM9812',
      user: {
        name: 'David Martinez',
        avatar: 'https://i.pravatar.cc/32?img=12'
      },
      project: 'Payment Gateway',
      address: 'Birch Lane Portland',
      date: new Date(Date.now() - 691200000), // 8 days ago
      status: 'Complete',
      statusColor: '#10B981',
      priority: 'High',
      amount: 6200
    },
    {
      id: '#CM9813',
      user: {
        name: 'Anna Rodriguez',
        avatar: 'https://i.pravatar.cc/32?img=13'
      },
      project: 'Content Management',
      address: 'Willow Drive Austin',
      date: new Date(Date.now() - 777600000), // 9 days ago
      status: 'Pending',
      statusColor: '#3B82F6',
      priority: 'Low',
      amount: 2100
    },
    {
      id: '#CM9814',
      user: {
        name: 'Chris Lee',
        avatar: 'https://i.pravatar.cc/32?img=14'
      },
      project: 'Social Media Platform',
      address: 'Cherry Street Nashville',
      date: new Date(Date.now() - 864000000), // 10 days ago
      status: 'Approved',
      statusColor: '#F59E0B',
      priority: 'High',
      amount: 7800
    },
    {
      id: '#CM9815',
      user: {
        name: 'Jessica Taylor',
        avatar: 'https://i.pravatar.cc/32?img=15'
      },
      project: 'Learning Platform',
      address: 'Walnut Avenue Detroit',
      date: new Date(Date.now() - 950400000), // 11 days ago
      status: 'In Progress',
      statusColor: '#3B82F6',
      priority: 'Medium',
      amount: 4500
    }
  ];

  // Helper function to format date
  const formatDate = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };

  // Status Badge Component
  const StatusBadge = ({ status, color }) => (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 0',
      fontSize: '14px',
      fontWeight: '500',
      color: color,
    }}>
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: color,
        marginRight: '8px'
      }} />
      {status}
    </span>
  );

  // Priority Badge Component
  const PriorityBadge = ({ priority }) => {
    const getStyle = (priority) => {
      switch (priority) {
        case 'High':
          return { backgroundColor: '#FEE2E2', color: '#DC2626' };
        case 'Medium':
          return { backgroundColor: '#FEF3C7', color: '#D97706' };
        case 'Low':
          return { backgroundColor: '#F0FDF4', color: '#16A34A' };
        default:
          return { backgroundColor: '#F3F4F6', color: '#6B7280' };
      }
    };

    const style = getStyle(priority);

    return (
      <span style={{
        padding: '4px 8px',
        fontSize: '12px',
        borderRadius: '12px',
        fontWeight: '500',
        ...style
      }}>
        {priority}
      </span>
    );
  };

  // Columns Configuration
  const ordersColumns = [
    {
      key: 'id',
      label: 'Order ID',
      sortable: true,
      width: '120px',
      render: (value) => (
        <span style={{ fontWeight: '500' }}>
          {value}
        </span>
      )
    },
    {
      key: 'user',
      label: 'User',
      sortable: true,
      sortKey: 'user.name', // For sorting by nested property
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
            fontWeight: '500'
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
        <span style={{ fontSize: '14px', }}>
          {value}
        </span>
      )
    },
    {
      key: 'address',
      label: 'Address',
      sortable: true,
      render: (value) => (
        <span style={{ fontSize: '14px', }}>
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
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" class="theme-contrast--icon"><path id="icon--border" d="M11 1H9.5V.5a.5.5 0 0 0-1 0V1h-5V.5a.5.5 0 0 0-1 0V1H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2.5 2v.5a.5.5 0 1 0 1 0V2h5v.5a.5.5 0 1 0 1 0V2H11v2H1V2zM11 12H1V5h10z"/></svg>
          <span style={{ fontSize: '14px' }}>
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
      render: (value, row) => <StatusBadge status={value} color={row.statusColor} />
    },
  ];

  // Alternative simpler columns configuration
  const simpleOrdersColumns = [
    {
      key: 'id',
      label: 'Order ID',
      sortable: true
    },
    {
      key: 'user',
      label: 'Customer',
      sortable: true,
      sortKey: 'user.name',
      render: (value) => value.name
    },
    {
      key: 'project',
      label: 'Project',
      sortable: true
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      filterable: true,
      filterOptions: ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected']
    },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      align: 'right',
      render: (value) => `$${value.toLocaleString()}`
    }
  ];

  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Typography variant="h4" fontWeight="bold">
            Orders
          </Typography>
        </Box>
        {/* Orders Table */}
        <Grid item xs={12} size={{ xs: 4, sm: 8, md: 12 }}>
          <OrdersTable
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