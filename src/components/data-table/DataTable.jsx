import { useEffect, useState } from 'react';
import './data-table.css';
import axios from 'axios';

const DataTable = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const FetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('./data.txt');
            if (response.status === 200 && response.data && response.data.flightOffer) {
                setData(response.data.flightOffer);
            }
            setLoading(false);
        }
        catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    useEffect(() => {
        FetchData();
    }, []);

    console.log(data)
    return (
        <div className='dataTable'>
            {
                loading ? <div>Fetching Data . . .</div> :

                    <>
                        <p>Data parsed successfully</p>

                        <table>
                            <tbody>
                                <tr>
                                    <th>flight</th>
                                    <th>aircraft</th>
                                    <th>class</th>
                                    <th>fare</th>
                                    <th>route</th>
                                    <th>depature</th>
                                    <th>arrival</th>
                                    <th>duration</th>
                                    <th>price</th>
                                </tr>

                                {
                                    data && data.map((ele, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {
                                                        ele.itineraries[0].segments.map((ele, index) => {
                                                            return <>
                                                                <p key={index}> {ele.marketingCarrier} {ele.aircraft}</p>
                                                            </>
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        ele.itineraries[0].segments.map((ele, index) => {
                                                            return <>
                                                                <p key={index}>{ele.flightNumber}</p>
                                                            </>
                                                        })
                                                    }

                                                </td>
                                                <td>
                                                    {
                                                        ele.class[0].map((ele, index) => {
                                                            return <p key={index}>{ele}</p>
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        ele.fareBasis[0].map((ele, index) => {
                                                            return <p key={index}>{ele}</p>
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        ele.itineraries[0].segments.map((ele, index) => {
                                                            return <>
                                                                <p key={index}>{ele.departure.iataCode} {ele.arrival.iataCode}</p>
                                                            </>
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        ele.itineraries[0].segments.map((ele, index) => {
                                                            return <p key={index}>{ele.departure.at}</p>
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        ele.itineraries[0].segments.map((ele, index) => {
                                                            return <p key={index}>{ele.arrival.at}</p>
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    {

                                                        <p key={index}>{ele.itineraries[0].duration}</p>
                                                    }
                                                </td>
                                                <td className='buttoncol'>
                                                    <p>TK 333</p>
                                                    <button>Select</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {
                            data && data.length === 0 && <div className='NoDataFound'>
                                <span>No Data Found</span>
                            </div>
                        }
                    </>
            }
        </div>
    )
}

export default DataTable