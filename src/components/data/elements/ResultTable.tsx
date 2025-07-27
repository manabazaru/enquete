import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Typography, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export interface ResultRow{
    esqId   : string;
    name    : string;
    ansText : string;
}

export interface ResultTableProps{
    rows     : ResultRow[];
    page?    : number;
    pageSize?: number;
    height?  : number;
}

const ResultTable = (
    {rows, height=400, page=0, pageSize=5}: ResultTableProps
) => {

    // 回答コピーアイコン用の処理
    const renderCell = (params) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                size="small"
                onClick={() => {
                    navigator.clipboard.writeText(params.value as string)
                }}
                >
                <ContentCopyIcon fontSize="small" />
                </IconButton>
                <Typography variant="body2" noWrap>
                {params.value}
                </Typography>
            </Box>
    );

    const columns: GridColDef[] = [
        {field: 'esqId',         headerName: 'ESQ-ID',   width: 100},
        {field: 'name',          headerName: '名前',     width: 100},
        {field: 'ansText',       headerName: '回答',     width: 300, sortable: false, renderCell}
    ];

    const paginationModel = { page: page, pageSize: pageSize }
    return (
        <Paper sx={{ height, width: '100%' }}>
        <DataGrid
            getRowId={(row: ResultRow) => row.esqId}
            rows={rows}
            columns={columns}
            // initialize pagination
            initialState={{ pagination: {paginationModel} }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
        />
        </Paper>
  );
};

export default ResultTable;