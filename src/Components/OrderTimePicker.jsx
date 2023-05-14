import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from "dayjs";
import {Box, TextField} from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import "../css/order.css";
import {Button} from "antd";

function OrderTimePicker(props){

    const [value, setValue] = React.useState([dayjs(), dayjs()]);

    return(
        <div style={{ display: 'flex', alignItems: 'center'}}>
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Start Date', end: 'End Date' }}
            style={{fontFamily: "Montserrat"}}
        >
            <DateRangePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    // console.log(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
            <Button
                type="text"
                style={{fontFamily: "Montserrat", fontSize: "1rem", marginLeft: "1rem", border: "1px grey solid", height: "2.5rem", width: "6rem"}}
                onClick={() => {
                    props.filterOrder(value);
                }}
            >
                Search
            </Button>
            <Button
                type="text"
                style={{fontFamily: "Montserrat", fontSize: "1rem", marginLeft: "1rem", border: "1px grey solid", height: "2.5rem", width: "6rem"}}
                onClick={() => {
                    props.filterOrder([null, null]);
                    setValue([dayjs(), dayjs()]);
                }}
            >
                Reset
            </Button>
        </div>
    )
}

export default OrderTimePicker;