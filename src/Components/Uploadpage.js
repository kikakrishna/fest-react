import { useRef, useState } from 'react';
import './Uploadpage.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { apiClient } from './Api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Papa from 'papaparse';
// import axios from 'axios';
import { MuiFileInput } from 'mui-file-input'

// Toastr

function Uploadpage() {

    const [formData, setFormData] = useState({
        filename: '',
        file: '',
        Date: ''
    });
    const [filename, setfilename] = useState('');
    const [file, setfile] = useState('');
    const [Date, setDate] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [data, setData] = useState([]);




    // const handleSearch = async () => {
    //     console.log("searchentered");

    //     if (selectedDate) {
    //         try {
    //             const formattedDate = selectedDate.toISOString().split('T')[0];

    //             console.log("apihitted");

    //             apiClient()
    //                 .get(`/getbydate?date=${formattedDate}`, {

    //                     headers: { "Content-Type": "application/json" },

    //                 }).then((r) => {
    //                     console.log("analysticsresponse" + JSON.stringify(r.data.data));


    //                 });



    //         } catch (error) {
    //             console.error('Error fetching data:', error);




    //         }
    //     } else {

    //         apiClient()
    //             .get("/getrows", {

    //                 headers: { "Content-Type": "application/json" },

    //             }).then((r) => {
    //                 console.log("analysticsresponse" + JSON.stringify(r.data.data));
    //                 setData(r.data.data);

    //             });
    //     }


    // };




    // const handleChangeFileupload = (e) => {
    //     console.log("-----------------------", e.target.files[0]);

    //     setDate(e.target.files[0])

    //     console.log("date--------------------", Date);

    //     let filestore = {
    //         "file": e.target.files[0]
    //     }

    //     console.log("filestore--------------------", filestore);


    //     const formData = new FormData();
    //     formData.append('file', filestore);

    //     console.log("formdata--------------------", formData);

    //     apiClient()
    //         .post("/upload", filestore, {

    //             headers: { "Content-Type": "application/json" },

    //         }).then((r) => {
    //             console.log("analysticsresponse" + JSON.stringify(r.data.data));


    //         });

    // };


    const importbtnstyles = {
        "&.MuiButton-root": {
            border: "none",
            backgroundColor: '#273F57',
            borderRadius: '25px',
            padding: '4px 36px',
            color: "#green",

        },
        "&.MuiButton-text": {
            color: "white"
        },
        "&.MuiButton-contained": {
            color: "yellow"
        },
        "&.MuiButton-outlined": {
            color: "brown"
        },
        '&:hover': {
            backgroundColor: '#586d82',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#3c52b2',
        },
    };

    const resetbtnstyles = {
        "&.MuiButton-root": {
            border: "none",
            backgroundColor: '#ffb225',
            borderRadius: '25px',
            padding: '4px 36px',
            color: "#green",

        },
        "&.MuiButton-text": {
            color: "white"
        },
        "&.MuiButton-contained": {
            color: "yellow"
        },
        "&.MuiButton-outlined": {
            color: "brown"
        },
        '&:hover': {
            backgroundColor: '#d3921b',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#3c52b2',
        },
    };


    const inputbox = {
        "&.MuiInputBase-input": {
            border: "none",
            backgroundColor: '#fff',
            borderRadius: '25px',
            padding: '4px 36px',
            color: "#green",
        },

        "&.MuiTextField-root": {
            backgroundColor: "white",
            border: "none",
            borderRadius: "10px",
            marginRight: '20px'
        },
        "&.MuiInputBase-text": {
            color: "white"
        },
        "&.MuiInputBase-contained": {
            color: "yellow"
        },
        "&.MuiInputBase-outlined": {
            color: "brown"
        }
    };

    const [jsonData, setJsonData] = useState(null);
    const [error, setError] = useState(null);
    const inputFile = useRef(null);
    const handleFileUpload = (event) => {
        // const file = event.target.files[0];

        // if (file) {
        //     Papa.parse(file, {
        //         header: true, // Use first row as header
        //         dynamicTyping: true, // Automatically convert types
        //         complete: (result) => {
        //             // Convert CSV to JSON
        //             setJsonData(result.data);

        //             setError(null);
        //             console.log("data------------>", result.data);

        //             // let payload =
        //             // {
        //             //     "data": result.data
        //             // }
        //             // apiClient()
        //             //     .post("/poupload", payload, {

        //             //         headers: { "Content-Type": "application/json" },

        //             //     }).then((r) => {
        //             //         console.log("analysticsresponse" + JSON.stringify(r.data.data));
        //             //         setData(r.data.data);

        //             //     });
        //         },
        //         error: (parseError) => {
        //             setError(`Error parsing file: ${parseError.message}`);
        //             setJsonData(null);
        //         },
        //     });
        // }
        var filejson = event.target.files[0];


        console.log(filejson);

        setJsonData(filejson)


    };


    const handlereset = async (event) => {
        inputFile.current.value = "";
        setJsonData(null)

    }

    const expectedColumns = [
        "Inbound No",
        "STO No",
        "ASN No",
        "Inbound Location",
        "PO No",
        "GRN No",
        "Created Date",
        "GRN Date",
        "Material Received Date",
        "Invoice Amount",
        "Inbound Type",
        "Invoice No",
        "Vendor Code",
        "Inbound Line No",
        "SKU Code",
        "SKU Name",
        "Lot Code",
        "Transporter Name",
        "Tracking No",
        "Lot MRP",
        "Lot Expiry",
        "Bin Location",
        "Unit Price",
        "MRP",
        "Recieved Qty",
        "Expected Qty",
        "Lottable 03",
        "Lottable 04",
        "Lottable 05",
        "Lottable 06",
        "Lottable 07",
        "Vendor SKU Code",
        "Brand",
        "Damage Qty",
        "Putaway Done",
        "GRN Value Without Tax",
        "GRN Value With Tax",
        "IgpCode",
        "INBD_COST",
        "Open Qty",
        "Status",
        "TaxGrpCode",
        "LineTaxamount",
        "External PO Code",
        "Userid",
        "Cust Ret No",
        "OTBReferenceNo",
        "DN No.",
        "DN Creation Date",
        "DN Value"
    ];


    const handleimport = async (event) => {
        // const file = event.target.files[0];
        // console.log("jsonData--------------", jsonData);

        if (jsonData) {
            Papa.parse(jsonData, {
                header: true, // Use first row as header
                dynamicTyping: true, // Automatically convert types
                complete: (result) => {
                    // Convert CSV to JSON
                    setJsonData(result.data);
                    const data = result.data;


                    if (data.length > 0) {
                        const columnNames = Object.keys(data[0]);
                        const allColumnsMatch = expectedColumns.every(col => columnNames.includes(col));

                        if (allColumnsMatch) {
                            // Proceed with API call or further processing
                            console.log("CSV data is valid. Proceeding with API call.");
                            console.log(data);
                            alert("CSV data is valid")
                        } else {
                            console.error("Column names do not match the expected format.");
                            alert("CSV data is invalid")

                        }
                    }






                    // setError(null);
                    // console.log("data------------>", result.data);
                    // let arrayvalue = result.data.length;
                    // console.log("arrayvalue------------>", arrayvalue);

                    // let payload =
                    // {
                    //     "data": result.data
                    // }
                    // inputFile.current.value = "";

                    // apiClient()
                    //     .post("/poupload", result.data, {

                    //         headers: { "Content-Type": "application/json" },

                    //     }).then((r) => {
                    //         console.log("analysticsresponse" + JSON.stringify(r.data.data));
                    //         setData(r.data.data);
                    //         inputFile.current.value = "";
                    //         setJsonData(null)
                    //         alert(arrayvalue + " " + "records uploaded")

                    //     });
                },
                error: (parseError) => {
                    setError(`Error parsing file: ${parseError.message}`);
                    setJsonData(null);
                },
            });
        } else {
            alert("Choose file")
        }
    }

    return (

        <div className="container">

            {/* GRN upload section */}

            <div className='GRN-content' style={{ marginBottom: '50px' }}>
                <h6 style={{ marginBottom: '10px' }}>VINCULUM GRN FILE UPLOAD PORTAL</h6>
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    ref={inputFile}
                />

                <Button sx={importbtnstyles} onClick={handleimport} style={{ marginLeft: "25px" }}>Import</Button>
                <Button sx={resetbtnstyles} onClick={handlereset} style={{ marginLeft: "25px" }}>Reset</Button>

            </div>


            {/* PO upload section */}


            {/* <div className='GRN-content'>
                <h6 style={{ marginBottom: '10px' }}>PO FILE UPLOAD PORTAL</h6>
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    ref={inputFile}
                />

                <Button sx={importbtnstyles} onClick={handleimport} style={{ marginLeft: "25px" }}>Import</Button>
                <Button sx={resetbtnstyles} onClick={handlereset} style={{ marginLeft: "25px" }}>Reset</Button>

            </div> */}









            {/* <h1 style={{marginBottom :"25px", marginTop :"25px"}}>Fetch Data by Date</h1>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
            />
            <button onClick={handleSearch} style={{marginLeft :"25px"}}>Search</button>

            <div className='showtable' style={{marginTop :"25px"}}>
                {data.length > 0 ? (
                    <table border="1">
                        <thead>
                            <tr className='table-header'>
                                <th>ID</th>
                                <th>Inbound No</th>
                                <th>PO No</th>
                          
                                <th>Invoice No</th>
                                <th>SKU Code</th>
                                <th>SKU Name</th>
                                <th>Received Qty</th>
                                <th>expected_qty</th>

                                <th>vendor_code</th>
                                <th>inbound_line_no</th>
                                <th>lot_code</th>
                                <th>grn_value_without_tax</th>
                                <th>lot_mrp</th>

                              
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr className='table-header' key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.inbound_no}</td>
                                    <td>{row.po_no}</td>
                                  
                                    <td>{row.invoice_no}</td>
                                    <td>{row.sku_code}</td>
                                    <td>{row.sku_name}</td>
                                    <td>{row.received_qty}</td>
                                    <td>{row.expected_qty}</td>

                                    <td>{row.vendor_code}</td>
                                    <td>{row.inbound_line_no}</td>
                                    <td>{row.lot_code}</td>
                                    <td>{row.grn_value_without_tax}</td>
                                    <td>{row.lot_mrp}</td>


                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No data found for the selected date</p>
                )}
            </div> */}

        </div>
    );
}

export default Uploadpage;
