import React, { useMemo, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { authHeader } from '../_helpers';
import { reportService } from '../_service';


function MyRenderer(params : any) {
    return (
        <span className="my-renderer">
        <img src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif" className="my-spinner"/>
            {params.value}
        </span>
    );
}


export default function DataGrid() {

    const columnDefs = useMemo( ()=> [
        { field: 'Name' },
        { field: 'Owner', cellRendererFramework: MyRenderer },
        { field: 'LastViewed' },
        { field: 'Report Location' },
        { field: 'Action' },
       
    ], []);

    const defaultColDef = useMemo( ()=> ({
        resizable: true,
        sortable: true
    }), []);

    const [rowData, setRowData] = useState();

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    useEffect( ()=> {
        reportService.getToken()
    }, []);

    useEffect( ()=> {
        fetch('https://localhost:44338/v1/reports', requestOptions)
            .then( resp => resp.json())
            .then( data => setRowData(data));
    }, []);


    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 1200}}>
        <AgGridReact            
              // all other properties as normal...
              className="ag-theme-alpine"
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowData={rowData}
              rowSelection="multiple"
        />
        </div>
    );

}



