import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import RommTypeImage from '@/components/RoomTypeImage';
export default function page() {
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-7">
                 <RommTypeImage />
                <div className='row'>
                <div className="col-3">
                    <p>wifi:  <FaCheck style={{ color: 'green', fontSize: '15px' }} /></p>
                    <p>swimming pool:  <FaCheck style={{ color: 'green', fontSize: '15px' }} /></p>
                    <p>security camera:  <FaCheck style={{ color: 'green', fontSize: '15px' }} /></p>
                </div>
                <div className=''>
                    <h3>Location</h3>
                </div>
                </div>
            
            </div>
            <div className='col-5'>
                <div className='card'>
                <h5 className='card-header'>booking</h5>
                <div className='card-body'>
                <div className="mb-3">
                    <label  className="form-label"><b>Room Type</b>Double BedRoom</label>
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Charges</b>1500/Night</label>
                </div>
                <div className="mb-3">
                    <label  className="form-label"><b>Total Guests</b></label>
                    <input type="number" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label"><b>Check-In</b></label>
                    <input type="date" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label"><b>Check-Out</b></label>
                    <input type="date" className="form-control"  />
                </div>
                <div className="mb-3 text-center">
                  <Link href={'/checkout'}>  <button className='btn bg-color-dark fw-bold '>Confirm Booking</button></Link>
                </div>
                                       
                </div>
                </div>
            </div>
        </div>
        </div>
         )
}