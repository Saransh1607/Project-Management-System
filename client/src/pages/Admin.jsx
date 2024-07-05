import React, { useState } from 'react';
import SideBar from '../components/SideBar.jsx';
import AdminTable from '../components/AdminTable.jsx';
import Input from '../components/Input.jsx';



export default function Admin() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='flex'>
            <SideBar />
            <div className='w-full h-screen'>
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-bold m-8'>Admin</h1>
                    <button onClick={() => setShowModal(true)} className='text-white bg-green-600 mb-4 px-2 py-1 mr-5 rounded-md hover:bg-green-700'>
                        + Add
                    </button>
                </div>
                {showModal && <Input setShowModal={setShowModal} />}
                <AdminTable />
            </div>
        </div>
    );

}