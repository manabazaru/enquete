import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export interface ResponseStateRow{
    esqId         : string;
    name          : string;
    responseState : string;
}

export interface ResponseStateTableProps{
    rows     : ResponseStateRow[];
    page?    : number;
    pageSize?: number;
    height?  : number;
}

const ResponseStateTable = (
    {rows, height=370, page=0, pageSize=5}: ResponseStateTableProps
) => {

    const columns: GridColDef[] = [
        {field: 'esqId',         headerName: 'ESQ-ID',   width: 100},
        {field: 'name',          headerName: '名前',     width: 100},
        {field: 'responseState', headerName: '回答状況', width: 100}
    ];

    const paginationModel = { page: page, pageSize: pageSize };

    return (
        <Paper sx={{ height, width: '100%' }}>
        <DataGrid
            getRowId={(row: ResponseStateRow) => row.esqId}
            rows={rows}
            columns={columns}
            // ページネーション初期化
            initialState={{ pagination: {paginationModel} }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
        />
        </Paper>
  );
};

export default ResponseStateTable;